'use client';

import React from 'react';
import { useShop } from '../context/ShopContext';
import { Trash2, ShoppingBag, Heart, ArrowRight, Eye, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Build image URL from product
const getImageUrl = (product) => {
    if (!product.images || product.images.length === 0)
        return 'https://placehold.co/400x300?text=No+Image';
    const img = product.images[0];
    if (img.startsWith('http')) return img;
    return `/api${img}`;
};

const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useShop();
    const router = useRouter();

    const handleDetails = (product) => router.push(`/product/${product.slug || product._id}`);

    if (wishlist.length === 0) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-4 pt-20">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-24 h-24 bg-[#F8F9FA] rounded-sm flex items-center justify-center mb-8 border border-gray-100 shadow-sm"
                >
                    <Heart size={40} className="text-[#024ad8]" />
                </motion.div>
                <h2 className="text-2xl font-bold mb-3 text-black text-center">Your wishlist is empty</h2>
                <p className="text-gray-400 mb-8 text-center max-w-sm text-sm leading-relaxed">Save items you love and come back to them anytime.</p>
                <Link
                    href="/shop"
                    className="px-8 py-3.5 bg-[#024ad8] text-white font-bold rounded-sm hover:bg-[#0133a1] transition-all flex items-center gap-3 text-sm shadow-lg"
                >
                    Browse Products <ArrowRight size={16} />
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-[#F8F9FA] min-h-screen py-24 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                    <div className="flex items-center gap-4">
                        <h1 className="text-2xl sm:text-3xl font-bold text-black">My <span className="text-[#024ad8]">Wishlist</span></h1>
                        <span className="text-xs font-bold text-[#024ad8] bg-blue-50 px-3 py-1.5 rounded-sm border border-blue-100">{wishlist.length} {wishlist.length === 1 ? 'item' : 'items'}</span>
                    </div>
                    <a
                        href="/shop"
                        className="flex items-center gap-2 text-gray-500 text-sm font-medium hover:text-[#024ad8] transition-all"
                    >
                        Continue Shopping <ArrowRight size={16} />
                    </a>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode='popLayout'>
                        {wishlist.map((product) => (
                            <motion.div
                                layout
                                key={product._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                className="group bg-white border border-gray-50 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col h-full relative rounded-sm overflow-hidden"
                            >
                                {/* Remove Button */}
                                <button
                                    onClick={() => removeFromWishlist(product._id)}
                                    className="absolute top-6 right-6 z-20 p-3 bg-white/90 backdrop-blur-sm shadow-xl rounded-sm text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all transform hover:scale-110 active:scale-95 border border-gray-50"
                                    title="Revoke Asset"
                                >
                                    <Trash2 size={20} />
                                </button>

                                {/* Image Container */}
                                <div className="relative aspect-[4/5] p-10 flex items-center justify-center bg-[#F8F9FA] overflow-hidden group-hover:bg-white transition-colors duration-1000">
                                    <img
                                        src={getImageUrl(product)}
                                        alt={product.title || product.name}
                                        className="w-full h-full object-contain mix-blend-multiply transition-transform duration-1000 ease-out group-hover:scale-110"
                                        onError={(e) => { e.target.src = 'https://placehold.co/400x300?text=No+Image'; }}
                                    />

                                    {/* Action Hover Overlay */}
                                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                                        <button
                                            onClick={() => handleDetails(product)}
                                            className="w-full bg-black text-white py-3.5 rounded-sm font-bold shadow-lg hover:bg-[#024ad8] transition-all flex items-center justify-center gap-3 text-sm"
                                        >
                                            <Eye size={16} /> View Details
                                        </button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-1 border-t border-gray-50">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-[9px] font-extrabold text-[#024ad8] uppercase tracking-[.4em] bg-blue-50/50 px-3 py-1 rounded-sm">{product.brand || 'Premium'}</span>
                                        <div className="flex items-center text-[#024ad8] bg-gray-50 px-3 py-1 rounded-sm">
                                            <Star size={12} fill="currentColor" />
                                            <span className="text-[10px] font-extrabold ml-2 text-black">{product.rating || '4.8'}</span>
                                        </div>
                                    </div>

                                    <h3
                                        className="text-sm font-bold text-black mb-4 leading-tight group-hover:text-[#024ad8] transition-colors cursor-pointer line-clamp-2"
                                        onClick={() => handleDetails(product)}
                                    >
                                        {product.title || product.name}
                                    </h3>

                                    <div className="mt-auto pt-6 flex items-center justify-between border-t border-gray-50">
                                        <div className="flex flex-col">
                                            <span className="text-xl font-bold text-[#024ad8]">${(product.price || 0).toFixed(2)}</span>
                                            {product.countInStock > 0 ? (
                                                <span className="text-xs text-green-600 font-medium mt-0.5">In Stock</span>
                                            ) : (
                                                <span className="text-xs text-red-500 font-medium mt-0.5">Out of Stock</span>
                                            )}
                                        </div>

                                        <button
                                            onClick={() => handleDetails(product)}
                                            className="w-14 h-14 bg-black text-white hover:bg-[#024ad8] transition-all duration-500 rounded-sm flex items-center justify-center shadow-xl hover:shadow-[#024ad8]/20 transform hover:-translate-y-1 active:scale-95"
                                            title="Initialize Procurement"
                                        >
                                            <ShoppingBag size={24} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Features Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-12">
                    <div className="flex items-start gap-5">
                        <div className="p-4 bg-white rounded-sm shadow-sm border border-gray-100 text-[#024ad8] flex-shrink-0">
                            <Heart size={22} />
                        </div>
                        <div>
                            <h4 className="font-bold text-black mb-1 text-sm">Save for Later</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">Keep track of products you love and revisit them whenever you're ready.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-5">
                        <div className="p-4 bg-white rounded-sm shadow-sm border border-gray-100 text-[#024ad8] flex-shrink-0">
                            <ShoppingBag size={22} />
                        </div>
                        <div>
                            <h4 className="font-bold text-black mb-1 text-sm">Quick Add to Cart</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">Move wishlist items directly into your cart with one click.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-5">
                        <div className="p-4 bg-white rounded-sm shadow-sm border border-gray-100 text-[#024ad8] flex-shrink-0">
                            <Star size={22} />
                        </div>
                        <div>
                            <h4 className="font-bold text-black mb-1 text-sm">Top Rated Products</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">Discover and save highly rated HP printers and accessories.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;
