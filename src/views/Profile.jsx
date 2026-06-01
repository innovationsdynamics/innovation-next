'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { logout as logoutAction } from '../redux/actions/userActions';
import { listMyOrders } from '../redux/actions/orderActions';
import { User, Package, LogOut, MapPin, CreditCard, ChevronDown, ChevronUp, Plus, X, Save, Shield } from 'lucide-react';
import Link from 'next/link';

import { useAuth } from '../context/AuthContext';

const Profile = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { logout } = useAuth();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo: user } = userLogin;

    const orderListMy = useSelector((state) => state.orderListMy);
    const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

    // State for Features
    const [isEditingAddress, setIsEditingAddress] = useState(false);
    const [address, setAddress] = useState({
        street: user?.address || '',
        city: user?.city || '',
        zip: user?.zip || '',
        country: user?.country || ''
    });

    // Edit Address Form State
    const [editAddressForm, setEditAddressForm] = useState(address);

    const [showAllOrders, setShowAllOrders] = useState(false);

    const [isAddingCard, setIsAddingCard] = useState(false);
    const [cards, setCards] = useState([]);
    const [newCard, setNewCard] = useState({ number: '', expiry: '', cvv: '' });

    useEffect(() => {
        if (!user) {
            router.push('/login');
        } else {
            dispatch(listMyOrders());
        }
    }, [user, dispatch, router]);

    if (!user) return null;

    const handleLogout = () => {
        logout(); // AuthContext logout
        dispatch(logoutAction()); // Redux logout
        router.push('/');
    };

    // Address Handlers
    const handleEditAddress = () => {
        setEditAddressForm(address);
        setIsEditingAddress(true);
    };

    const handleSaveAddress = () => {
        setAddress(editAddressForm);
        setIsEditingAddress(false);
    };

    const handleCancelAddress = () => {
        setIsEditingAddress(false);
    };

    // Card Handlers
    const handleAddCard = () => {
        if (newCard.number && newCard.expiry) {
            setCards([...cards, {
                id: Date.now(),
                last4: newCard.number.slice(-4) || '0000',
                expiry: newCard.expiry
            }]);
            setNewCard({ number: '', expiry: '', cvv: '' });
            setIsAddingCard(false);
        }
    };

    const displayedOrders = showAllOrders ? orders : orders?.slice(0, 2);

    return (
        <div className="min-h-screen bg-[#F8F9FA] pt-24 sm:pt-32 pb-24 font-sans text-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap items-center gap-4 mb-8 md:mb-12">
                        <h1 className="text-3xl sm:text-4xl font-bold">My Profile</h1>
                        <div className="h-1 flex-1 bg-black opacity-5 hidden sm:block"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Sidebar / User Info Card */}
                        <div className="lg:col-span-1 space-y-8">
                <div className="bg-white p-8 rounded-sm shadow-xl border-t-4 border-[#024ad8] flex flex-col items-center text-center">
                                <div className="w-24 h-24 bg-[#F8F9FA] rounded-sm border-2 border-gray-100 flex items-center justify-center text-[#024ad8] text-3xl font-bold mb-5 shadow-inner">
                                    {user.name?.charAt(0) || <User size={40} />}
                                </div>
                                <h2 className="text-xl font-bold mb-1 leading-tight">{user.name}</h2>
                                <p className="text-gray-400 text-sm font-medium mb-7 break-all">{user.email}</p>

                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center justify-center gap-2 px-5 py-3 border border-red-100 text-red-500 rounded-sm font-semibold text-sm hover:bg-red-50 transition-all"
                                >
                                    <LogOut size={15} /> Sign Out
                                </button>
                            </div>

                            <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100">
                                <div className="flex justify-between items-center mb-5">
                                    <h3 className="font-semibold flex items-center gap-2 text-sm text-gray-600">
                                        <MapPin size={16} className="text-[#024ad8]" /> Shipping Address
                                    </h3>
                                    {!isEditingAddress && (
                                        <button onClick={handleEditAddress} className="text-[#024ad8] text-sm font-medium hover:underline">Edit</button>
                                    )}
                                </div>

                                {isEditingAddress ? (
                                    <div className="space-y-3">
                                        <input
                                            type="text"
                                            value={editAddressForm.street}
                                            onChange={e => setEditAddressForm({ ...editAddressForm, street: e.target.value })}
                                            className="w-full border border-gray-200 rounded-sm p-3 text-sm focus:border-[#024ad8] outline-none transition-all" placeholder="Street address"
                                        />
                                        <input
                                            type="text"
                                            value={editAddressForm.city}
                                            onChange={e => setEditAddressForm({ ...editAddressForm, city: e.target.value })}
                                            className="w-full border border-gray-200 rounded-sm p-3 text-sm focus:border-[#024ad8] outline-none transition-all" placeholder="City"
                                        />
                                        <div className="flex gap-3">
                                            <input
                                                type="text"
                                                value={editAddressForm.zip}
                                                onChange={e => setEditAddressForm({ ...editAddressForm, zip: e.target.value })}
                                                className="w-1/2 border border-gray-200 rounded-sm p-3 text-sm focus:border-[#024ad8] outline-none transition-all" placeholder="ZIP code"
                                            />
                                            <input
                                                type="text"
                                                value={editAddressForm.country}
                                                onChange={e => setEditAddressForm({ ...editAddressForm, country: e.target.value })}
                                                className="w-1/2 border border-gray-200 rounded-sm p-3 text-sm focus:border-[#024ad8] outline-none transition-all" placeholder="Country"
                                            />
                                        </div>
                                        <div className="flex gap-3 pt-2">
                                            <button onClick={handleSaveAddress} className="flex-1 bg-[#024ad8] text-white py-2.5 rounded-sm text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#0133a1] transition-all"><Save size={14} /> Save</button>
                                            <button onClick={handleCancelAddress} className="flex-1 bg-gray-100 text-gray-500 py-2.5 rounded-sm text-sm font-semibold hover:bg-gray-200 transition-all">Cancel</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-gray-600 text-sm leading-relaxed">
                                        <p>{address.street}</p>
                                        <p>{address.city}, {address.zip}</p>
                                        <p>{address.country}</p>
                                    </div>
                                )}
                            </div>

                            <div className="bg-black text-white p-6 rounded-sm shadow-sm border-l-4 border-[#024ad8]">
                                <h3 className="font-semibold flex items-center gap-2 text-sm text-gray-400 mb-4">
                                    <Shield size={16} className="text-[#024ad8]" /> Account Security
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                        <span className="text-xs text-gray-500">Security Level</span>
                                        <span className="text-green-400 text-xs font-semibold">Strong</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-gray-500">2FA Status</span>
                                        <span className="text-[#024ad8] text-xs font-semibold">Active</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="lg:col-span-2 space-y-12">

                            {/* Order History */}
                            <div className="bg-white rounded-sm shadow-xl border border-gray-100 overflow-hidden">
                                <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                                    <h3 className="text-sm font-semibold flex items-center gap-3">
                                        <Package size={18} className="text-[#024ad8]" /> Order History
                                    </h3>
                                    {orders && orders.length > 2 && (
                                        <button
                                            onClick={() => setShowAllOrders(!showAllOrders)}
                                            className="text-[#024ad8] text-sm font-medium hover:underline flex items-center gap-1"
                                        >
                                            {showAllOrders ? <>Show Less <ChevronUp size={15} /></> : <>View All <ChevronDown size={15} /></>}
                                        </button>
                                    )}
                                </div>

                                <div className="divide-y divide-gray-50">
                                    {loadingOrders ? (
                                        <div className="p-12 text-center text-gray-400 font-medium text-sm">Loading orders...</div>
                                    ) : errorOrders ? (
                                        <div className="p-12 text-center text-red-500 font-medium text-sm">{errorOrders}</div>
                                    ) : orders && orders.length === 0 ? (
                                        <div className="p-12 text-center">
                                            <p className="text-gray-400 font-medium text-sm mb-6">No orders yet</p>
                                            <Link href="/shop" className="inline-block bg-[#024ad8] text-white px-6 py-3 rounded-sm font-semibold text-sm hover:bg-[#0133a1] transition-all">Start Shopping</Link>
                                        </div>
                                    ) : (
                                        displayedOrders.map(order => (
                                            <div key={order._id} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-gray-50 transition-all">
                                                <div className="space-y-1">
                                                    <p className="font-bold text-sm">Order #{order._id}</p>
                                                    <p className="text-xs text-gray-400">{new Date(order.createdAt).toLocaleDateString()}</p>
                                                </div>
                                                <div>
                                                    <span className={`inline-block px-3 py-1 rounded-sm text-xs font-semibold border ${order.isDelivered ? 'bg-green-50 text-green-700 border-green-100' :
                                                        order.isPaid ? 'bg-blue-50 text-[#024ad8] border-blue-100' :
                                                            'bg-gray-50 text-gray-500 border-gray-100'
                                                        }`}>
                                                        {order.isDelivered ? 'Delivered' : order.isPaid ? 'Processing' : 'Pending'}
                                                    </span>
                                                </div>
                                                <div className="text-right flex items-center gap-4">
                                                    <div className="space-y-0.5">
                                                        <p className="font-bold text-sm">${order.totalPrice.toFixed(2)}</p>
                                                        <p className="text-xs text-gray-400">{order.orderItems.length} {order.orderItems.length === 1 ? 'item' : 'items'}</p>
                                                    </div>
                                                    <Link href={`/order/${order._id}`} className="bg-gray-50 p-2.5 rounded-sm text-gray-400 hover:bg-[#024ad8] hover:text-white transition-all">
                                                        <Plus size={16} />
                                                    </Link>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>

                            {/* Payment Methods */}
                            <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden">
                                <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50">
                                    <h3 className="text-sm font-semibold flex items-center gap-3">
                                        <CreditCard size={18} className="text-[#024ad8]" /> Payment Methods
                                    </h3>
                                </div>
                                <div className="p-8 space-y-6">
                                    {cards.length > 0 ? (
                                        cards.map(card => (
                                            <div key={card.id} className="flex items-center gap-4 p-4 border border-gray-100 rounded-sm hover:border-[#024ad8]/30 transition-all">
                                                <div className="w-12 h-8 bg-black rounded-sm relative overflow-hidden flex items-center justify-center flex-shrink-0">
                                                    <div className="w-3 h-3 bg-[#024ad8] rounded-full opacity-50 -ml-1"></div>
                                                    <div className="w-3 h-3 bg-white/20 rounded-full -mr-1"></div>
                                                </div>
                                                <div className="space-y-0.5">
                                                    <span className="font-semibold text-sm block">Ending in {card.last4}</span>
                                                    <span className="text-xs text-gray-400">Expires {card.expiry}</span>
                                                </div>
                                                <div className="ml-auto w-2 h-2 rounded-full bg-green-500"></div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center py-6 border border-dashed border-gray-200 rounded-sm">
                                            <p className="text-gray-400 text-xs font-medium">No payment methods saved.</p>
                                        </div>
                                    )}

                                    {isAddingCard ? (
                                        <div className="mt-5 p-6 bg-gray-50 rounded-sm border border-gray-100">
                                            <div className="flex justify-between items-center mb-5">
                                                <h4 className="text-sm font-semibold">Add New Card</h4>
                                                <button onClick={() => setIsAddingCard(false)} className="text-gray-400 hover:text-red-500 transition-colors"><X size={18} /></button>
                                            </div>
                                            <div className="space-y-3">
                                                <input
                                                    type="text"
                                                    placeholder="Card number"
                                                    className="w-full border border-gray-200 rounded-sm p-3 text-sm focus:border-[#024ad8] outline-none transition-all"
                                                    value={newCard.number}
                                                    onChange={e => setNewCard({ ...newCard, number: e.target.value })}
                                                    maxLength="16"
                                                />
                                                <div className="flex gap-3">
                                                    <input
                                                        type="text"
                                                        placeholder="MM/YY"
                                                        className="w-1/2 border border-gray-200 rounded-sm p-3 text-sm focus:border-[#024ad8] outline-none transition-all"
                                                        value={newCard.expiry}
                                                        onChange={e => setNewCard({ ...newCard, expiry: e.target.value })}
                                                        maxLength="5"
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder="CVV"
                                                        className="w-1/2 border border-gray-200 rounded-sm p-3 text-sm focus:border-[#024ad8] outline-none transition-all"
                                                        value={newCard.cvv}
                                                        onChange={e => setNewCard({ ...newCard, cvv: e.target.value })}
                                                        maxLength="3"
                                                    />
                                                </div>
                                                <button onClick={handleAddCard} className="w-full bg-[#024ad8] text-white py-3 rounded-sm text-sm font-bold mt-2 hover:bg-[#0133a1] transition-all">
                                                    Save Card
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => setIsAddingCard(true)}
                                            className="mt-4 text-[#024ad8] text-sm font-medium hover:underline flex items-center gap-2 transition-all"
                                        >
                                            <div className="bg-blue-50 p-1.5 rounded-sm"><Plus size={14} /></div> Add Payment Method
                                        </button>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
