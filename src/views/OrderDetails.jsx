 'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Package, Truck, CheckCircle, Clock, MapPin, CreditCard, ChevronLeft, Calendar, User, ShoppingBag, Download, Lock, Loader2, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

const OrderDetails = () => {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Payment state
    const [clover, setClover] = useState(null);
    const [payLoading, setPayLoading] = useState(false);
    const [payError, setPayError] = useState(null);
    const [paySuccess, setPaySuccess] = useState(false);
    const [showPayForm, setShowPayForm] = useState(false);

    const { userInfo } = useSelector((state) => state.userLogin);

    const downloadInvoice = () => {
        if (!order) return;

        const itemsRows = order.orderItems.map(item => `
            <tr style="border-bottom:1px solid #f0f0f0">
                <td style="padding:12px 8px;font-size:13px;color:#111">${item.name}</td>
                <td style="padding:12px 8px;font-size:13px;color:#555;text-align:center">${item.qty}</td>
                <td style="padding:12px 8px;font-size:13px;color:#555;text-align:right">$${item.price.toFixed(2)}</td>
                <td style="padding:12px 8px;font-size:13px;font-weight:700;color:#111;text-align:right">$${(item.price * item.qty).toFixed(2)}</td>
            </tr>
        `).join('');

        const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <title>Invoice #${order._id}</title>
            <style>
                * { margin:0; padding:0; box-sizing:border-box; }
                body { font-family: 'Segoe UI', Arial, sans-serif; color:#111; background:#fff; padding:48px; }
                .header { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:40px; border-bottom:3px solid #024ad8; padding-bottom:24px; }
                .brand { font-size:22px; font-weight:800; color:#024ad8; letter-spacing:-0.5px; }
                .brand span { color:#111; }
                .invoice-meta { text-align:right; }
                .invoice-meta h1 { font-size:28px; font-weight:800; color:#111; }
                .invoice-meta p { font-size:13px; color:#888; margin-top:4px; }
                .section { margin-bottom:28px; }
                .section-title { font-size:11px; font-weight:700; color:#024ad8; text-transform:uppercase; letter-spacing:0.08em; margin-bottom:10px; }
                .info-box { background:#f8f9fa; border-radius:6px; padding:16px; font-size:13px; color:#444; line-height:1.7; }
                .info-box strong { color:#111; }
                .two-col { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:28px; }
                table { width:100%; border-collapse:collapse; margin-bottom:28px; }
                thead th { background:#f0f4ff; padding:12px 8px; font-size:12px; font-weight:700; color:#024ad8; text-transform:uppercase; letter-spacing:0.05em; }
                thead th:last-child, thead th:nth-child(3) { text-align:right; }
                thead th:nth-child(2) { text-align:center; }
                .totals { margin-left:auto; width:300px; }
                .total-row { display:flex; justify-content:space-between; padding:8px 0; font-size:13px; color:#555; border-bottom:1px solid #f0f0f0; }
                .total-row.grand { border-top:2px solid #111; border-bottom:none; padding-top:14px; margin-top:4px; }
                .total-row.grand span { font-size:18px; font-weight:800; color:#024ad8; }
                .status { display:inline-block; padding:4px 12px; border-radius:20px; font-size:11px; font-weight:700; }
                .status.paid { background:#dcfce7; color:#166534; }
                .status.pending { background:#fef9c3; color:#854d0e; }
                .footer { margin-top:48px; padding-top:20px; border-top:1px solid #e5e7eb; text-align:center; font-size:12px; color:#aaa; }
                @media print { body { padding:32px; } }
            </style>
        </head>
        <body>
            <div class="header">
                <div>
                    <div class="brand">idg | <span>INNOVATION DYNAMICS GROUP</span></div>
                    <p style="font-size:12px;color:#888;margin-top:6px">11397 Quincy St NE, Blaine, MN 55434</p>
                    <p style="font-size:12px;color:#888">support@innovationdynamicsgroup.com</p>
                </div>
                <div class="invoice-meta">
                    <h1>INVOICE</h1>
                    <p>#${order._id.slice(-8).toUpperCase()}</p>
                    <p>Date: ${new Date(order.createdAt).toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' })}</p>
                    <span class="status ${order.isPaid ? 'paid' : 'pending'}">${order.isPaid ? 'PAID' : 'PENDING'}</span>
                </div>
            </div>

            <div class="two-col">
                <div class="section">
                    <div class="section-title">Bill To</div>
                    <div class="info-box">
                        <strong>${order.user?.name || 'Customer'}</strong><br/>
                        ${order.user?.email || ''}
                    </div>
                </div>
                <div class="section">
                    <div class="section-title">Ship To</div>
                    <div class="info-box">
                        ${order.shippingAddress.address}<br/>
                        ${order.shippingAddress.city}, ${order.shippingAddress.postalCode || ''}<br/>
                        ${order.shippingAddress.country}
                    </div>
                </div>
            </div>

            <div class="section-title">Order Items</div>
            <table>
                <thead>
                    <tr>
                        <th style="text-align:left">Product</th>
                        <th>Qty</th>
                        <th>Unit Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>${itemsRows}</tbody>
            </table>

            <div class="totals">
                <div class="total-row"><span>Subtotal</span><span>$${order.itemsPrice.toFixed(2)}</span></div>
                <div class="total-row"><span>Shipping</span><span>$${order.shippingPrice.toFixed(2)}</span></div>
                <div class="total-row"><span>Tax</span><span>$${order.taxPrice.toFixed(2)}</span></div>
                <div class="total-row grand"><span>Total</span><span>$${order.totalPrice.toFixed(2)}</span></div>
            </div>

            <div class="footer">
                <p>Thank you for your purchase! For support, contact support@innovationdynamicsgroup.com or call +1-612-445-9132</p>
                <p style="margin-top:6px">Innovation Dynamics Group LLC &bull; HP Amplify Partner &bull; All trademarks belong to their respective owners.</p>
            </div>

            <script>window.onload = function(){ window.print(); }</script>
        </body>
        </html>`;

        const win = window.open('', '_blank');
        win.document.write(html);
        win.document.close();
    };

    const fetchOrder = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`/api/orders/${id}`);
            setOrder(data);
            setLoading(false);
        } catch (err) {
            setError(err.response?.data?.message || err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrder();
    }, [id]);

    // Mount Clover fields when Pay Now panel opens
    useEffect(() => {
        if (!showPayForm || !window.Clover) return;
        const timer = setTimeout(() => {
            const el = document.querySelector('#od-card-number');
            if (el && !el.hasChildNodes()) {
                try {
                    const instance = new window.Clover(process.env.NEXT_PUBLIC_CLOVER_PUBLIC_KEY);
                    const elements = instance.elements();
                    const styles = { body: { fontFamily: "'Segoe UI', sans-serif", fontSize: '15px', color: '#111', fontWeight: '500' } };
                    elements.create('CARD_NUMBER', { styles }).mount('#od-card-number');
                    elements.create('CARD_DATE',   { styles }).mount('#od-card-date');
                    elements.create('CARD_CVV',    { styles }).mount('#od-card-cvv');
                    elements.create('CARD_POSTAL_CODE', { styles }).mount('#od-card-zip');
                    setClover(instance);
                } catch (e) { console.error('Clover init error:', e); }
            }
        }, 300);
        return () => clearTimeout(timer);
    }, [showPayForm]);

    const handlePayNow = async () => {
        if (!clover) { setPayError('Payment form is still loading. Please wait a moment.'); return; }
        setPayLoading(true);
        setPayError(null);
        try {
            const result = await clover.createToken();
            if (result.errors) { throw new Error(Object.values(result.errors).join(', ')); }
            await axios.post(
                `/api/orders/clover/pay`,
                { amount: order.totalPrice, orderId: order._id, source: result.token },
                { headers: { Authorization: `Bearer ${userInfo.token}` } }
            );
            setPaySuccess(true);
            setShowPayForm(false);
            await fetchOrder(); // refresh order data so isPaid updates
        } catch (err) {
            setPayError(err.response?.data?.message || err.message || 'Payment failed. Please try again.');
        } finally {
            setPayLoading(false);
        }
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-16">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-primary-blue rounded-full animate-spin"></div>
        </div>
    );

    if (error) return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pt-16 px-4 text-center">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4">
                <Clock size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Not Found</h2>
            <p className="text-gray-600 mb-8">{error}</p>
            <Link href="/orders" className="px-6 py-2 bg-black text-white rounded-lg font-bold hover:bg-primary-blue transition-colors">
                Back to My Orders
            </Link>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 font-sans px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <Link href="/orders" className="flex items-center gap-1 text-gray-500 hover:text-primary-blue font-bold text-sm mb-4 transition-colors">
                            <ChevronLeft size={16} /> Back to My Orders
                        </Link>
                        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                            Order Details
                            <span className="text-gray-400 text-xl font-medium font-mono">#{order._id}</span>
                        </h1>
                    </div>
                    <div className="flex items-center gap-3">
                        {order.isDelivered ? (
                            <span className="flex items-center gap-1.5 px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider">
                                <CheckCircle size={14} /> Delivered
                            </span>
                        ) : order.isPaid ? (
                            <span className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-100 text-primary-blue rounded-full text-xs font-bold uppercase tracking-wider">
                                <Truck size={14} /> Processing
                            </span>
                        ) : (
                            <span className="flex items-center gap-1.5 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase tracking-wider">
                                <Clock size={14} /> Pending
                            </span>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Main Details */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Order Items */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex items-center gap-2">
                                <ShoppingBag size={18} className="text-gray-400" />
                                <h3 className="font-bold text-gray-800">Order Items</h3>
                            </div>
                            <div className="p-6 divide-y divide-gray-100">
                                {order.orderItems.map((item, idx) => (
                                    <div key={idx} className="py-4 first:pt-0 last:pb-0 flex items-center gap-4">
                                        <div className="w-20 h-20 bg-gray-50 rounded-xl border border-gray-100 p-2 flex-shrink-0">
                                            <img
                                                src={item.image.startsWith('http') ? item.image : `/api${item.image}`}
                                                alt={item.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
                                            <p className="text-xs text-gray-500 mt-1">
                                                Price: ${item.price.toFixed(2)} | Qty: {item.qty}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-gray-900">${(item.price * item.qty).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Customer Information Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Shipping Details */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-4 border-b pb-3 border-gray-50">
                                    <MapPin size={18} className="text-primary-blue" /> Shipping Details
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                                            <User size={16} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Recipient</p>
                                            <p className="text-sm font-bold text-gray-800">{order.user.name}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                                            <Truck size={16} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Address</p>
                                            <p className="text-sm text-gray-600">
                                                {order.shippingAddress.address}<br />
                                                {order.shippingAddress.city}, {order.shippingAddress.postalCode}<br />
                                                {order.shippingAddress.country}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Info */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-4 border-b pb-3 border-gray-50">
                                    <CreditCard size={18} className="text-primary-blue" /> Payment Summary
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                                            <Calendar size={16} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Ordered On</p>
                                            <p className="text-sm font-bold text-gray-800">{new Date(order.createdAt).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                                            <CheckCircle size={16} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Payment Status</p>
                                            <p className={`text-sm font-bold ${order.isPaid ? 'text-green-600' : 'text-amber-500'}`}>
                                                {order.isPaid ? 'Paid via Clover' : 'Awaiting Payment'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Price Summary */}
                    <div className="lg:col-span-1">
                        <div className="space-y-4 sticky top-24">

                            {/* Cost Summary Card */}
                            <div className="bg-black text-white rounded-2xl shadow-xl p-6">
                                <h3 className="text-base font-bold mb-5 border-b border-gray-800 pb-4">Cost Summary</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm text-gray-400">
                                        <span>Subtotal</span>
                                        <span className="text-white font-medium">${order.itemsPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-gray-400">
                                        <span>Shipping</span>
                                        <span className="text-white font-medium">${order.shippingPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-gray-400">
                                        <span>Tax</span>
                                        <span className="text-white font-medium">${order.taxPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="pt-4 border-t border-gray-800 flex justify-between">
                                        <span className="text-base font-bold">{order.isPaid ? 'Total Paid' : 'Amount Due'}</span>
                                        <span className="text-base font-bold text-[#024ad8]">${order.totalPrice.toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <button
                                        onClick={downloadInvoice}
                                        className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-[#024ad8] hover:text-white transition-all text-sm flex items-center justify-center gap-2"
                                    >
                                        <Download size={15} /> Download Invoice
                                    </button>
                                </div>
                            </div>

                            {/* Pay Now Panel — only for unpaid orders */}
                            {!order.isPaid && (
                                <div className="bg-white rounded-2xl shadow-sm border-2 border-amber-200 overflow-hidden">
                                    <div className="bg-amber-50 px-5 py-3 flex items-center gap-2 border-b border-amber-100">
                                        <AlertTriangle size={16} className="text-amber-500 flex-shrink-0" />
                                        <span className="text-sm font-bold text-amber-700">Payment Pending</span>
                                    </div>

                                    {paySuccess ? (
                                        <div className="p-5 text-center">
                                            <CheckCircle size={36} className="text-green-500 mx-auto mb-2" />
                                            <p className="font-bold text-green-700 text-sm">Payment successful!</p>
                                            <p className="text-xs text-gray-400 mt-1">Your order is now confirmed.</p>
                                        </div>
                                    ) : !showPayForm ? (
                                        <div className="p-5">
                                            <p className="text-sm text-gray-500 mb-4">
                                                This order has not been paid yet. Complete your payment to confirm the order.
                                            </p>
                                            <button
                                                onClick={() => setShowPayForm(true)}
                                                className="w-full py-3 bg-[#024ad8] text-white font-bold rounded-xl hover:bg-black transition-all text-sm flex items-center justify-center gap-2"
                                            >
                                                <CreditCard size={15} /> Pay ${order.totalPrice.toFixed(2)} Now
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="p-5 space-y-4">
                                            <p className="text-xs font-semibold text-gray-500">Enter your card details to complete payment</p>

                                            {/* Card Number */}
                                            <div>
                                                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Card Number</label>
                                                <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus-within:border-[#024ad8] transition-all">
                                                    <div id="od-card-number" className="h-5"></div>
                                                </div>
                                            </div>

                                            {/* Expiry + CVV */}
                                            <div className="grid grid-cols-2 gap-3">
                                                <div>
                                                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">Expiry</label>
                                                    <div className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-lg focus-within:border-[#024ad8] transition-all">
                                                        <div id="od-card-date" className="h-5"></div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">CVV</label>
                                                    <div className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-lg focus-within:border-[#024ad8] transition-all">
                                                        <div id="od-card-cvv" className="h-5"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Billing Zip */}
                                            <div>
                                                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Billing Zip Code</label>
                                                <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus-within:border-[#024ad8] transition-all">
                                                    <div id="od-card-zip" className="h-5"></div>
                                                </div>
                                            </div>

                                            {payError && (
                                                <div className="flex gap-2 items-start p-3 bg-red-50 border border-red-100 rounded-lg text-xs text-red-600">
                                                    <AlertTriangle size={13} className="flex-shrink-0 mt-0.5" />
                                                    {payError}
                                                </div>
                                            )}

                                            <div className="flex gap-2 items-center text-xs text-gray-400">
                                                <Lock size={11} className="flex-shrink-0" />
                                                <span>256-bit SSL encrypted</span>
                                            </div>

                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => { setShowPayForm(false); setPayError(null); }}
                                                    className="flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-500 font-medium hover:border-gray-400 transition-all"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    onClick={handlePayNow}
                                                    disabled={payLoading}
                                                    className="flex-1 py-2.5 bg-[#024ad8] text-white font-bold rounded-lg text-sm hover:bg-black transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                                                >
                                                    {payLoading ? <><Loader2 size={14} className="animate-spin" /> Processing...</> : `Pay $${order.totalPrice.toFixed(2)}`}
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
