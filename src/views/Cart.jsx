import React from 'react';
import { useShop } from '../context/ShopContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart, shippingPrice, taxPrice, totalPrice } = useShop();

    if (cart.length === 0) {
        return (
            <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center px-4">
                <ShoppingBag size={64} className="text-gray-200 mb-6" />
                <h2 className="text-2xl font-bold text-black mb-2">Your cart is empty</h2>
                <p className="text-gray-500 mb-8 text-center max-w-xs">Looks like you haven't added anything to your cart yet.</p>
                <Link href="/shop" className="bg-black text-white px-8 py-3 rounded-sm font-bold hover:bg-[#024ad8] transition-all">
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-black mb-10">Shopping Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Cart Items List */}
                    <div className="lg:col-span-8 space-y-4">
                        {cart.map((item) => (
                            <div key={item.id} className="bg-white p-4 rounded-sm shadow-sm flex flex-col sm:flex-row items-center gap-6 border border-gray-100">
                                <div className="h-24 w-24 bg-[#F8F9FA] rounded-sm p-2 flex-shrink-0">
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-contain mix-blend-multiply"
                                    />
                                </div>
                                
                                <div className="flex-1 text-center sm:text-left">
                                    <h3 className="font-bold text-black line-clamp-1">{item.title}</h3>
                                    <p className="text-[#024ad8] font-bold mt-1">${item.price}</p>
                                </div>

                                <div className="flex items-center gap-4 bg-gray-50 p-1 rounded-sm border border-gray-100">
                                    <button 
                                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                        className="p-1 hover:bg-white rounded-sm transition-all"
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span className="w-8 text-center font-bold">{item.quantity}</span>
                                    <button 
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="p-1 hover:bg-white rounded-sm transition-all"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>

                                <div className="text-right font-bold text-black min-w-[80px]">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>

                                <button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="p-2 text-gray-400 hover:text-red-500 transition-all"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        ))}

                        <div className="flex justify-between items-center pt-6">
                            <Link href="/shop" className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-black transition-all">
                                <ArrowLeft size={16} /> Continue Shopping
                            </Link>
                            <button 
                                onClick={clearCart}
                                className="text-sm font-bold text-red-500 hover:underline"
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-4">
                        <div className="bg-white p-6 rounded-sm shadow-xl border-t-4 border-black">
                            <h2 className="text-lg font-bold text-black mb-6">Order Summary</h2>
                            
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-gray-500 text-sm">
                                    <span>Subtotal</span>
                                    <span className="text-black font-semibold">${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-500 text-sm">
                                    <span>Shipping</span>
                                    <span className={shippingPrice === 0 ? "text-[#024ad8] font-bold" : "text-black font-semibold"}>
                                        {shippingPrice === 0 ? 'FREE' : `$${shippingPrice.toFixed(2)}`}
                                    </span>
                                </div>
                                <div className="flex justify-between text-gray-500 text-sm">
                                    <span>Estimated Tax</span>
                                    <span className="text-black font-semibold">${taxPrice.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-6 mb-8 flex justify-between items-center">
                                <span className="text-base font-bold text-black">Total</span>
                                <span className="text-2xl font-bold text-[#024ad8]">${totalPrice.toFixed(2)}</span>
                            </div>

                            <Link 
                                href="/checkout" 
                                className="w-full bg-black text-white py-4 rounded-sm font-bold flex items-center justify-center gap-3 hover:bg-[#024ad8] transition-all shadow-lg"
                            >
                                Proceed to Checkout <ArrowRight size={18} />
                            </Link>
                            
                            <div className="mt-6 flex items-center justify-center gap-4">
                                <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-6 opacity-70" />
                                <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="h-6 opacity-70" />
                                <img src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex" className="h-6 opacity-70" />
                                <img src="https://img.icons8.com/color/48/000000/discover.png" alt="Discover" className="h-6 opacity-70" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
