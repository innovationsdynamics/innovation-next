'use client';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { saveShippingAddress } from '../redux/actions/cartActions';
import axios from 'axios';
import { Loader2, Truck, CreditCard, ChevronRight, Lock, AlertCircle, Check, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { CART_CLEAR_ITEMS } from '../redux/constants/cartConstants';

const Checkout = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const cart = useSelector((state) => state.cart);
    const { cartItems, shippingAddress } = cart;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const [address, setAddress] = useState(shippingAddress.address || '');
    const [city, setCity] = useState(shippingAddress.city || '');
    const [province, setProvince] = useState(shippingAddress.state || '');
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || '');
    const [country, setCountry] = useState(shippingAddress.country || '');
    const [phone, setPhone] = useState(shippingAddress.phone || '');

    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [clover, setClover] = useState(null);
    const [cloverReady, setCloverReady] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [rates, setRates] = useState([]);
    const [selectedRate, setSelectedRate] = useState(null);
    const [fetchingRates, setFetchingRates] = useState(false);
    const [ratesError, setRatesError] = useState(null);
    const [cardholderName, setCardholderName] = useState(userInfo?.name || '');

    // Style configuration
    const inputStyle = "w-full px-4 py-3.5 bg-white border border-gray-200 rounded-sm focus:border-[#024ad8] outline-none transition-all text-black placeholder:text-gray-300 font-medium text-sm";
    const labelStyle = "block text-xs font-semibold text-gray-500 mb-1.5";

    // ── Pre-load Clover SDK ──────────────────────────────────────────────────
    useEffect(() => {
        if (window.Clover) {
            setCloverReady(true);
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://checkout.clover.com/sdk.js';
        script.id = 'clover-sdk';
        script.async = true;
        script.onload = () => {
            console.log("Clover SDK loaded dynamically.");
            setCloverReady(true);
        };
        document.body.appendChild(script);

        return () => {
            const existingScript = document.getElementById('clover-sdk');
            if (existingScript) existingScript.remove();
        };
    }, []);

    useEffect(() => {
        if (!loading && cartItems.length === 0) {
            router.push('/cart');
        } else if (!userInfo) {
            router.push('/login?redirect=checkout');
        } else if (cloverReady && window.Clover) {
            // Initialize once when SDK is ready, regardless of step
            setTimeout(() => {
                const containers = {
                    number: document.getElementById('card-number-container'),
                    date: document.getElementById('card-date-container'),
                    cvv: document.getElementById('card-cvv-container'),
                    zip: document.getElementById('card-zip-container')
                };

                if (containers.number && !containers.number.hasChildNodes()) {
                    try {
                        const cloverInstance = new window.Clover(process.env.NEXT_PUBLIC_CLOVER_PUBLIC_KEY);
                        const elements = cloverInstance.elements();

                        const styles = {
                            body: {
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: '16px',
                                color: '#000000',
                                fontWeight: '600',
                            }
                        };

                        const cardNumber = elements.create('CARD_NUMBER', { styles });
                        const cardDate = elements.create('CARD_DATE', { styles });
                        const cardCvv = elements.create('CARD_CVV', { styles });
                        const cardPostalCode = elements.create('CARD_POSTAL_CODE', { styles });

                        cardNumber.mount('#card-number-container');
                        cardDate.mount('#card-date-container');
                        cardCvv.mount('#card-cvv-container');
                        cardPostalCode.mount('#card-zip-container');

                        setClover(cloverInstance);
                    } catch (err) {
                        console.error("Clover initialization error:", err);
                    }
                }
            }, 1000);
        }
    }, [userInfo, cartItems, router, cloverReady]);

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    const taxPrice = 0; // Tax removed per user request
    
    // Fixed Shipping Rule: Free over $249, otherwise use selected rate or fallback
    const shippingPrice = subtotal >= 249 ? 0 : (selectedRate ? parseFloat(selectedRate.rate) : 45);
    const totalPrice = subtotal + shippingPrice;

    const submitShippingHandler = async (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ address, city, state: province, postalCode, country, phone }));

        if (subtotal >= 249) {
            setSelectedRate({
                service: 'Free Shipping',
                carrier: 'Standard Delivery',
                rate: 0,
                est_delivery_days: '3-5'
            });
            setStep(3); // Skip to payment if free
        } else {
            // Fetch real rates
            try {
                setFetchingRates(true);
                setRatesError(null);
                const { data } = await axios.post(`/api/shipping/rates`, {
                    shippingAddress: { address, city, state: province, postalCode, country, phone },
                    cartItems
                });
                
                if (data && data.length > 0) {
                    setRates(data);
                    // Select cheapest by default
                    const cheapest = data.reduce((prev, curr) => parseFloat(prev.rate) < parseFloat(curr.rate) ? prev : curr);
                    setSelectedRate(cheapest);
                } else {
                    setRatesError('No shipping rates found for this address. Falling back to flat rate.');
                    setSelectedRate({
                        service: 'Flat Rate Shipping',
                        carrier: 'Standard Delivery',
                        rate: 45,
                        est_delivery_days: '5-7'
                    });
                }
                setStep(2); // Go to shipping method selection
            } catch (err) {
                console.error("Error fetching rates:", err);
                setRatesError('Failed to calculate shipping. Using flat rate.');
                setSelectedRate({
                    service: 'Flat Rate Shipping',
                    carrier: 'Standard Delivery',
                    rate: 45,
                    est_delivery_days: '5-7'
                });
                setStep(3); // Skip to payment with fallback rate if API fails
            } finally {
                setFetchingRates(false);
            }
        }
        window.scrollTo(0, 0);
    };

    const initPayment = async () => {
        try {
            setLoading(true);
            if (!clover) {
                alert('Payment gateway is loading. Please try again in a few seconds.');
                setLoading(false);
                return;
            }

            const orderData = {
                orderItems: cartItems,
                shippingAddress: { address, city, state: province, postalCode, country, phone },
                paymentMethod: 'Clover',
                itemsPrice: subtotal,
                taxPrice,
                shippingPrice,
                totalPrice,
            };

            // 1. Create the Order first in DB
            const { data: createdOrder } = await axios.post(
                `/api/orders`,
                orderData,
                { headers: { Authorization: `Bearer ${userInfo.token}` } }
            );

            // 2. Try to get payment token
            const result = await clover.createToken({
                cardholderName: cardholderName || userInfo.name
            });
            if (result.errors || !result.token) {
                console.error("Clover Tokenization Failed:", result.errors || "No token returned");
                
                // Show detailed error to user
                let errorMsg = 'Payment initialization failed.';
                if (result.errors) {
                    const firstError = Object.values(result.errors)[0];
                    errorMsg = `Payment Error: ${firstError}`;
                }

                // If tokenization fails, delete the order we just created
                try {
                    await axios.delete(`/api/orders/${createdOrder._id}`, {
                        headers: { Authorization: `Bearer ${userInfo.token}` }
                    });
                } catch (delErr) {
                    console.error("Failed to cleanup order after tokenization error:", delErr);
                }

                alert(errorMsg + ' Please check your card details and try again.');
                setLoading(false);
                return;
            }

            // 3. Try to pay
            try {
                await axios.post(
                    `/api/orders/clover/pay`,
                    {
                        amount: totalPrice,
                        orderId: createdOrder._id,
                        source: result.token
                    },
                    { headers: { Authorization: `Bearer ${userInfo.token}` } }
                );

                // Payment Success
                dispatch({ type: CART_CLEAR_ITEMS });
                localStorage.removeItem('cartItems');
                router.push(`/order/${createdOrder._id}?success=true`);

            } catch (payErr) {
                console.error("Payment Step Failed:", payErr);
                alert(payErr.response?.data?.message || 'Payment failed. Order not placed. Please try again.');
                setLoading(false);
            }

        } catch (error) {
            console.error("Order Creation Failed:", error);
            alert(error.response?.data?.message || 'Failed to place order. Please try again or check your connection.');
        } finally {
            setLoading(false);
        }
    };

    if (cartItems.length === 0) return null;

    return (
        <div className="min-h-screen bg-[#F8F9FA] py-24 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-8 md:mb-12">
                    <h1 className="text-2xl sm:text-3xl font-bold text-black">
                        Checkout
                    </h1>
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium">
                        <span className={step >= 1 ? "text-[#024ad8] bg-blue-50 px-3 py-1.5 border border-blue-100 rounded-sm" : "text-gray-300 px-3 py-1.5"}>
                            1. Address
                        </span>
                        <ChevronRight size={16} className="text-gray-300" />
                        <span className={step >= 2 ? "text-[#024ad8] bg-blue-50 px-3 py-1.5 border border-blue-100 rounded-sm" : "text-gray-300 px-3 py-1.5"}>
                            2. Method
                        </span>
                        <ChevronRight size={16} className="text-gray-300" />
                        <span className={step >= 3 ? "text-[#024ad8] bg-blue-50 px-3 py-1.5 border border-blue-100 rounded-sm" : "text-gray-300 px-3 py-1.5"}>
                            3. Payment
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* Sidebar – Order Summary */}
                    <div className="lg:col-span-5 lg:order-last">
                        <div className="bg-white rounded-sm shadow-xl border-t-4 border-black p-7 lg:sticky lg:top-28">
                            <h3 className="text-sm font-bold text-black mb-6">Order Summary</h3>

                            <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2">
                                {cartItems.map((item, i) => (
                                    <div key={item.product || i} className="flex gap-4 pb-4 border-b border-gray-50 last:border-0">
                                        <div className="h-16 w-16 bg-[#F8F9FA] rounded-sm border border-gray-100 p-2 flex-shrink-0">
                                            <img
                                                src={item.image ? (item.image.startsWith('http') ? item.image : `/api${item.image}`) : "https://placehold.co/100"}
                                                alt={item.title}
                                                className="w-full h-full object-contain mix-blend-multiply"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-semibold text-black line-clamp-2 leading-snug">{item.title}</p>
                                            <p className="text-xs text-[#024ad8] font-medium mt-1">Qty: {item.qty}</p>
                                        </div>
                                        <div className="text-right flex-shrink-0">
                                            <p className="text-sm font-bold text-black">${(item.price * item.qty).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 pt-5 border-t border-gray-100">
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Subtotal</span>
                                    <span className="text-black font-semibold">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Shipping</span>
                                    <span className={shippingPrice === 0 ? "text-[#024ad8] font-bold" : "text-black font-semibold"}>
                                        {shippingPrice === 0 ? 'Free' : `$${shippingPrice.toFixed(2)}`}
                                    </span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-5 pt-5 border-t border-gray-100">
                                <span className="text-sm font-semibold text-black">Total</span>
                                <span className="text-2xl font-bold text-[#024ad8]">${totalPrice.toFixed(2)}</span>
                            </div>

                            <div className="mt-5 pt-5 border-t border-gray-50 flex items-center gap-2 text-gray-400">
                                <Lock size={13} />
                                <span className="text-xs">256-bit SSL encrypted checkout</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area with Persistent Steps */}
                    <div className="lg:col-span-7">
                        
                        {/* STEP 1: ADDRESS */}
                        <div className={step === 1 ? "block" : "hidden"}>
                            <div className="bg-white rounded-sm shadow-sm border border-gray-100 p-7 sm:p-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-[#F8F9FA] text-[#024ad8] rounded-sm">
                                        <Truck size={24} />
                                    </div>
                                    <h2 className="text-xl font-bold text-black">Shipping Address</h2>
                                </div>

                                <form onSubmit={submitShippingHandler} className="space-y-5">
                                    <div>
                                        <label className={labelStyle}>Street Address</label>
                                        <input
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            required
                                            placeholder="123 Main Street, Apt 4B"
                                            className={inputStyle}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className={labelStyle}>City</label>
                                            <input
                                                value={city}
                                                onChange={(e) => setCity(e.target.value)}
                                                required
                                                placeholder="New York"
                                                className={inputStyle}
                                            />
                                        </div>
                                        <div>
                                            <label className={labelStyle}>State / Province</label>
                                            <input
                                                value={province}
                                                onChange={(e) => setProvince(e.target.value)}
                                                required
                                                placeholder="NY"
                                                className={inputStyle}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className={labelStyle}>Postal Code</label>
                                            <input
                                                value={postalCode}
                                                onChange={(e) => setPostalCode(e.target.value)}
                                                required
                                                placeholder="10001"
                                                className={inputStyle}
                                            />
                                        </div>
                                        <div>
                                            <label className={labelStyle}>Country</label>
                                            <input
                                                value={country}
                                                onChange={(e) => setCountry(e.target.value)}
                                                required
                                                placeholder="US"
                                                className={inputStyle}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className={labelStyle}>Phone Number</label>
                                        <input
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                            placeholder="+1 (555) 000-0000"
                                            className={inputStyle}
                                        />
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-gray-100">
                                        <button
                                            type="submit"
                                            disabled={fetchingRates}
                                            className="w-full bg-black text-white py-4 rounded-sm font-bold text-sm hover:bg-[#024ad8] transition-all flex items-center justify-center gap-3 shadow-lg disabled:opacity-50"
                                        >
                                            {fetchingRates ? <><Loader2 className="animate-spin" size={18} /> Calculating...</> : <>Continue to Shipping Method <ChevronRight size={16} /></>}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* STEP 2: SHIPPING METHOD */}
                        <div className={step === 2 ? "block" : "hidden"}>
                            <div className="bg-white rounded-sm shadow-sm border border-gray-100 p-7 sm:p-10">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-[#F8F9FA] text-[#024ad8] rounded-sm">
                                            <Truck size={24} />
                                        </div>
                                        <h2 className="text-xl font-bold text-black">Shipping Method</h2>
                                    </div>
                                    <button onClick={() => setStep(1)} className="text-sm text-[#024ad8] hover:underline font-medium">Edit Address</button>
                                </div>

                                <div className="space-y-4">
                                    {rates.length > 0 ? (
                                        rates.map((rate) => (
                                            <div 
                                                key={rate.id}
                                                onClick={() => setSelectedRate(rate)}
                                                className={`flex items-center justify-between p-4 rounded-sm border cursor-pointer transition-all ${selectedRate?.id === rate.id ? 'border-[#024ad8] bg-blue-50/50 shadow-sm' : 'border-gray-100 bg-white hover:border-gray-300'}`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedRate?.id === rate.id ? 'border-[#024ad8]' : 'border-gray-200'}`}>
                                                        {selectedRate?.id === rate.id && <div className="w-2.5 h-2.5 bg-[#024ad8] rounded-full"></div>}
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-black">{rate.service}</p>
                                                        <p className="text-xs text-gray-400 font-medium">{rate.carrier} • {rate.est_delivery_days || '3-5'} business days</p>
                                                    </div>
                                                </div>
                                                <span className="font-bold text-black">${parseFloat(rate.rate).toFixed(2)}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center py-10 border-2 border-dashed border-gray-100 rounded-sm">
                                            <p className="text-gray-400 text-sm font-medium">No custom rates available for this location.</p>
                                            <p className="text-xs text-gray-300 mt-1">Standard Flat Rate will be applied.</p>
                                        </div>
                                    )}

                                    <button
                                        onClick={() => setStep(3)}
                                        className="w-full bg-black text-white py-4 rounded-sm font-bold text-sm hover:bg-[#024ad8] transition-all mt-8 flex items-center justify-center gap-3 shadow-lg"
                                    >
                                        Continue to Payment <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* STEP 3: PAYMENT (Always mounted, hidden until needed) */}
                        <div className={step === 3 ? "block" : "hidden"}>
                            <div className="bg-white rounded-sm shadow-sm border border-gray-100 p-7 sm:p-10">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-[#F8F9FA] text-[#024ad8] rounded-sm">
                                            <CreditCard size={24} />
                                        </div>
                                        <h2 className="text-xl font-bold text-black">Payment Details</h2>
                                    </div>
                                    <button
                                        onClick={() => setStep(subtotal >= 249 ? 1 : 2)}
                                        className="text-sm text-[#024ad8] hover:text-black font-medium transition-all hover:underline"
                                    >
                                        Edit {subtotal >= 249 ? 'Address' : 'Shipping'}
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    <div className="p-5 bg-black text-white rounded-sm border-l-4 border-[#024ad8] shadow-lg">
                                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                            <div>
                                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Total Amount Due</p>
                                                <p className="text-3xl font-bold text-white">${totalPrice.toFixed(2)}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-widest mb-1">Selected Method</p>
                                                <p className="text-xs text-gray-300 font-medium">
                                                    {selectedRate?.service} ({shippingPrice === 0 ? 'FREE' : `$${shippingPrice.toFixed(2)}`})
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-5">
                                        <div>
                                            <label className={labelStyle}>Cardholder Name</label>
                                            <input
                                                type="text"
                                                value={cardholderName}
                                                onChange={(e) => setCardholderName(e.target.value)}
                                                required
                                                placeholder="Name as it appears on card"
                                                className={inputStyle}
                                            />
                                        </div>

                                        <div>
                                            <label className={labelStyle}>Card Number</label>
                                            <div className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-sm focus-within:border-[#024ad8] transition-all">
                                                <div id="card-number-container" className="h-6"></div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className={labelStyle}>Expiry Date</label>
                                                <div className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-sm focus-within:border-[#024ad8] transition-all">
                                                    <div id="card-date-container" className="h-6"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <label className={labelStyle}>CVV</label>
                                                <div className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-sm focus-within:border-[#024ad8] transition-all">
                                                    <div id="card-cvv-container" className="h-6"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className={labelStyle}>Billing Zip Code</label>
                                            <div className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-sm focus-within:border-[#024ad8] transition-all">
                                                <div id="card-zip-container" className="h-6"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3 p-4 bg-gray-50/50 rounded-sm border border-gray-100 group cursor-pointer hover:bg-white transition-all select-none" onClick={() => setAgreedToTerms(!agreedToTerms)}>
                                            <div className={`mt-0.5 w-5 h-5 rounded-sm border-2 flex items-center justify-center transition-all flex-shrink-0 ${agreedToTerms ? 'border-[#024ad8] bg-[#024ad8]' : 'border-gray-200'}`}>
                                                {agreedToTerms && <Check size={14} className="text-white" />}
                                            </div>
                                            <span className="text-[11px] leading-relaxed text-gray-500 font-medium tracking-tight">
                                                By placing your order, you confirm that you have read and agree to our <Link href="/terms-conditions" target="_blank" className="text-[#024ad8] hover:underline mx-0.5">Terms & Conditions</Link>, <Link href="/return-refund" target="_blank" className="text-[#024ad8] hover:underline mx-0.5">Refund & Return Policy</Link> and understand how your personal information is collected and used as described in our <Link href="/privacy-policy" target="_blank" className="text-[#024ad8] hover:underline mx-0.5">Privacy Policy</Link>.
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-xs text-gray-400 bg-gray-50 p-3 rounded-sm border border-gray-100">
                                        <Lock size={12} className="text-[#024ad8] flex-shrink-0" />
                                        <span>Your payment info is encrypted and never stored on our servers.</span>
                                    </div>

                                    <button
                                        onClick={() => {
                                            if (!agreedToTerms) {
                                                alert("Please agree to the Terms & Conditions before placing your order.");
                                                return;
                                            }
                                            initPayment();
                                        }}
                                        disabled={loading}
                                        className="w-full bg-[#024ad8] text-white py-4 rounded-sm font-bold text-sm hover:bg-black transition-all flex items-center justify-center gap-3 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
                                    >
                                        {loading ? <><Loader2 className="animate-spin" size={18} /> Processing...</> : 'Place Order & Pay'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
