'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { listMyOrders } from '../redux/actions/orderActions';
import { Package, Truck, CheckCircle, Clock, AlertCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const MyOrders = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const orderListMy = useSelector((state) => state.orderListMy);
    const { loading, error, orders } = orderListMy;

    useEffect(() => {
        if (!userInfo) {
            router.push('/login');
        } else {
            dispatch(listMyOrders());
        }
    }, [dispatch, userInfo, router]);

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 font-sans">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
                        <p className="text-gray-500 mt-1">Manage and track your recent dynamic solutions.</p>
                    </div>
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
                        <div className="w-12 h-12 border-4 border-gray-200 border-t-primary-blue rounded-full animate-spin mb-4"></div>
                        <p className="text-gray-500 font-medium">Fetching your orders...</p>
                    </div>
                ) : error ? (
                    <div className="bg-red-50 border border-red-100 rounded-2xl p-8 text-center">
                        <AlertCircle className="mx-auto text-red-500 text-3xl mb-4" />
                        <h3 className="text-red-800 font-bold text-lg mb-2">Failed to Load Orders</h3>
                        <p className="text-red-600">{error}</p>
                        <button
                            onClick={() => dispatch(listMyOrders())}
                            className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                ) : orders && orders.length === 0 ? (
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-16 text-center">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Package className="text-gray-300" size={40} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">No Orders Yet</h2>
                        <p className="text-gray-500 mb-8 max-w-sm mx-auto">You haven't placed any orders yet. Explore our latest products and start your journey.</p>
                        <Link href="/shop" className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white font-bold rounded-xl hover:bg-primary-blue transition-all">
                                Start Shopping <ArrowRight size={18} />
                            </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6">
                        {orders.map((order) => (
                            <div key={order._id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                                <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex gap-8">
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Order Placed</p>
                                            <p className="text-sm font-bold text-gray-800">{new Date(order.createdAt).toLocaleDateString()}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total Amount</p>
                                            <p className="text-sm font-bold text-gray-800">${order.totalPrice.toFixed(2)}</p>
                                        </div>
                                        <div className="hidden sm:block">
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Order ID</p>
                                            <p className="text-sm font-mono text-gray-500">#{order._id.slice(-8).toUpperCase()}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            {order.isDelivered ? (
                                                <span className="flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                                    <CheckCircle size={14} /> Delivered
                                                </span>
                                            ) : order.isPaid ? (
                                                <span className="flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-primary-blue rounded-full text-[10px] font-bold uppercase tracking-wider">
                                                    <Truck size={14} /> Processing
                                                </span>
                                            ) : (
                                                <span className="flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-600 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                                    <Clock size={14} /> Payment Pending
                                                </span>
                                            )}
                                        </div>
                                                    <Link href={`/order/${order._id}`} className="px-5 py-2 bg-white border border-gray-200 text-gray-600 text-sm font-bold rounded-lg hover:border-primary-blue hover:text-primary-blue transition-colors">
                                            View Details
                                                    </Link>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 overflow-x-auto pb-2">
                                        {order.orderItems.map((item, idx) => (
                                            <div key={idx} className="flex-shrink-0 w-20 h-20 bg-white border border-gray-100 rounded-lg p-2 relative group shadow-sm transition-transform hover:scale-105" title={item.name}>
                                                <img
                                                    src={item.image.startsWith('http') ? item.image : `/api${item.image}`}
                                                    alt={item.name}
                                                    className="w-full h-full object-contain"
                                                />
                                                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                                                    {item.qty}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyOrders;
