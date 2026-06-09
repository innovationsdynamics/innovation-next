 'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrackOrder = () => {
    const [orderId, setOrderId] = useState('');
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        if (id) {
            setOrderId(id);
            fetchOrder(id);
        }
    }, []);

    const fetchOrder = async (id) => {
        const cleanId = id.replace('#', '').replace('ORD-', '').trim();
        if (!cleanId) return;

        try {
            setLoading(true);
            setError(null);
            const { data } = await axios.get(`/api/orders/${cleanId}`);
            setOrder(data);
            setLoading(false);
        } catch (err) {
            setError(err.response?.data?.message || "Order tracking details not found. Please verify your Order ID.");
            setOrder(null);
            setLoading(false);
        }
    };

    const handleTrack = (e) => {
        e.preventDefault();
        fetchOrder(orderId);
    };

    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    <h1 className="text-4xl font-bold text-black mb-4">Order Tracking</h1>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-2xl">Stay informed with real-time tracking updates. Once your order is shipped, tracking details are provided so you can monitor delivery progress.</p>
                </header>

                <div className="mb-16">
                    <h2 className="text-xl font-bold text-black mb-6">Verify Status</h2>
                    <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4 max-w-2xl">
                        <input
                            type="text"
                            className="flex-1 px-4 py-4 bg-gray-50 border border-gray-100 rounded-sm outline-none focus:border-black focus:bg-white transition-all text-sm font-medium placeholder:text-gray-300"
                            placeholder="ORDER REFERENCE (e.g. 65f...)"
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-10 py-4 bg-black text-white font-bold text-xs rounded-sm hover:bg-gray-800 transition-all disabled:opacity-50"
                        >
                            {loading ? 'Initializing...' : 'Verify Status'}
                        </button>
                    </form>
                    {error && (
                        <div className="mt-4 text-red-600 bg-red-50 p-4 rounded-sm border border-red-100 text-xs font-bold uppercase tracking-wider">
                            {error}
                        </div>
                    )}
                </div>

                {order ? (
                    <div className="space-y-12 animate-in fade-in duration-700 mb-16">
                        <section className="bg-gray-50 p-8 border border-gray-100 rounded-sm">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h2 className="text-xl font-bold text-black mb-1">Order Status</h2>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">#{order._id.toUpperCase()}</p>
                                </div>
                                <span className="px-4 py-2 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
                                    {order.status}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-[#024ad8] uppercase tracking-wider">Payment</p>
                                    <p className="text-sm font-bold text-black">{order.isPaid ? 'Success' : 'Pending'}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-[#024ad8] uppercase tracking-wider">Location</p>
                                    <p className="text-sm font-bold text-black">{order.tracking?.currentLocation || 'Processing Center'}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-[#024ad8] uppercase tracking-wider">Delivery Estimate</p>
                                    <p className="text-sm font-bold text-black">{order.tracking?.estTime || '3-5 Business Days'}</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-lg font-bold text-black mb-6">Order Manifest</h3>
                            <div className="border border-gray-100 rounded-sm divide-y divide-gray-100">
                                {order.orderItems.map((item, idx) => (
                                    <div key={idx} className="p-6 flex items-center gap-6">
                                        <div className="w-16 h-16 bg-gray-50 rounded-sm p-2 flex-shrink-0 border border-gray-100">
                                            <img
                                                src={item.image.startsWith('http') ? item.image : `/api${item.image}`}
                                                alt={item.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-black">{item.name}</p>
                                            <p className="text-xs text-gray-400 font-medium">Qty: {item.qty} × ${item.price.toFixed(2)}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-bold text-black">${(item.qty * item.price).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 p-6 bg-gray-50 rounded-sm flex justify-between items-center">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Total Amount Charged</span>
                                <span className="text-xl font-bold text-black">${order.totalPrice.toFixed(2)}</span>
                            </div>
                        </section>
                    </div>
                ) : (
                    !loading && (
                        <div className="mt-20 mb-16">
                            <p className="text-sm text-gray-400 font-medium leading-relaxed max-w-2xl italic">
                                Professional inventory management system ensures you stay informed at every step of your order's journey. Use your unique order identification code for real-time tracking node updates.
                            </p>
                        </div>
                    )
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-gray-100 font-medium">
                    <div className="space-y-12">
                        <section>
                            <h2 className="text-xl font-bold text-black mb-4">Warranty</h2>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                All products are backed by a manufacturer warranty, ensuring quality, reliability, and peace of mind after purchase.
                            </p>
                        </section>
                        
                        <section>
                            <h2 className="text-xl font-bold text-black mb-4">Support</h2>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Access dedicated support for both home and business customers. Assistance is available for product selection, order updates, and post-purchase inquiries.
                            </p>
                        </section>
                    </div>

                    <div className="bg-gray-50 p-8 border border-gray-100 rounded-sm">
                        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Business Information</h2>
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h3 className="font-bold text-[#024ad8] uppercase text-xs tracking-wider">Company</h3>
                                <p className="text-sm font-bold text-black">Innovation Dynamics Group LLC</p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-bold text-[#024ad8] uppercase text-xs tracking-wider">Warehouse Address</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    11397 Quincy St NE<br />
                                    Blaine, MN 55434<br />
                                    United States
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-bold text-[#024ad8] uppercase text-xs tracking-wider">Direct Contact</h3>
                                <p className="text-sm font-bold text-black">+1-612-445-9132</p>
                                <p className="text-sm font-bold text-black break-all">support@innovationdynamicsgroup.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="mt-24 pt-10 border-t border-gray-100 text-center">
                    <p className="text-xs text-gray-300 font-medium tracking-wide">
                        Innovation Dynamics Group LLC © 2026 • Secure Logistics Verification
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default TrackOrder;
