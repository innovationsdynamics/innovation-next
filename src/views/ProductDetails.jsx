'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails, createProductReview } from '../redux/actions/productActions';
// import { addToCart } from '../redux/actions/cartActions';
import { PRODUCT_CREATE_REVIEW_RESET } from '../redux/constants/productConstants';
import { useShop } from '../context/ShopContext';
import { useAuth } from '../context/AuthContext';
import {
    Star, ShoppingBag, ShoppingCart, Truck, Shield,
    ChevronLeft, ChevronRight, Check, RotateCcw, Award
} from 'lucide-react';
import Link from 'next/link';
import { getImageUrl } from '../utils/imageUtils';

/* ── Micro components ─────────────────────────────────────────────────────── */
const Loader = () => (
    <div className="flex justify-center items-center py-24">
        <div className="w-14 h-14 rounded-sm border-4 border-gray-100 border-t-[#024ad8] animate-spin" />
    </div>
);

const Alert = ({ variant = 'info', children }) => {
    const cls = {
        danger: 'bg-red-50 border-gray-100 text-red-700 font-extrabold uppercase tracking-widest text-[10px]',
        success: 'bg-green-50 border-gray-100 text-green-700 font-extrabold uppercase tracking-widest text-[10px]',
        info: 'bg-blue-50 border-gray-100 text-[#024ad8] font-extrabold uppercase tracking-widest text-[10px]',
    };
    return <div className={`rounded-sm p-5 border text-center ${cls[variant] || cls.info}`}>{children}</div>;
};

const Stars = ({ value, size = 16, interactive = false, onSet, onHover, onLeave }) => (
    <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
            <Star
                key={s}
                size={size}
                fill={value >= s ? 'currentColor' : 'none'}
                className={`${value >= s ? 'text-[#024ad8]' : 'text-gray-200'} ${interactive ? 'cursor-pointer transition-transform hover:scale-110' : ''}`}
                onClick={interactive ? () => onSet?.(s) : undefined}
                onMouseEnter={interactive ? () => onHover?.(s) : undefined}
                onMouseLeave={interactive ? () => onLeave?.() : undefined}
            />
        ))}
    </div>
);

/* helper chip */
const Chip = ({ label, value }) => (
    <span className="inline-flex items-center gap-2 bg-white border border-gray-100 rounded-sm px-4 py-2 text-[9px] uppercase font-extrabold tracking-[0.2em] text-gray-300 shadow-sm">
        {label && <span className="text-gray-400">{label}:</span>}
        <span className="text-black">{value}</span>
    </span>
);
/* ─────────────────────────────────────────────────────────────────────────── */

const ProductDetails = () => {
    const { id } = useParams();
    const router = useRouter();
    const dispatch = useDispatch();

    const [activeImg, setActiveImg] = useState(0);
    const [qty, setQty] = useState(1);
    const [activeTab, setActiveTab] = useState('overview');
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [comment, setComment] = useState('');

    const { addToCart: ctxAddToCart } = useShop();
    const { isAuthenticated } = useAuth();

    const { loading, error, product } = useSelector((s) => s.productDetails);
    const { userInfo } = useSelector((s) => s.userLogin);
    const {
        success: okReview,
        loading: loadingReview,
        error: errReview,
    } = useSelector((s) => s.productReviewCreate);

    /* fetch ---------------------------------------------------------------- */
    useEffect(() => {
        dispatch(listProductDetails(id));
        setActiveImg(0);
        window.scrollTo({ top: 0 });
    }, [dispatch, id]);

    useEffect(() => {
        if (product) {
            document.title = `${product.title || product.name} • Innovation Dynamics`;
            const desc = document.querySelector('meta[name="description"]');
            const content = product.description ? product.description.substring(0, 160) : 'Find detailed product specifications and purchasing options at Innovation Dynamics.';
            if (desc) desc.setAttribute('content', content);
            else {
                const m = document.createElement('meta');
                m.name = 'description';
                m.content = content;
                document.head.appendChild(m);
            }
        }
    }, [product]);

    useEffect(() => {
        if (okReview) {
            setRating(0); setComment('');
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
            dispatch(listProductDetails(id));
        }
    }, [dispatch, id, okReview]);



    const images = product?.images?.length ? product.images : [];
    const mainImg = getImageUrl(images[activeImg], 800);
    const toCart = () => {
        if (!isAuthenticated) { alert('Please sign in to add items to cart.'); router.push('/login'); return; }
        ctxAddToCart(product, qty); router.push('/cart');
    };
    const buyNow = () => {
        if (!isAuthenticated) { alert('Please sign in to buy products.'); router.push('/login'); return; }
        ctxAddToCart(product, qty); router.push('/cart?redirect=shipping');
    };


    const submitReview = (e) => {
        e.preventDefault();
        dispatch(createProductReview(id, { rating, comment }));
    };

    /* ── render ─────────────────────────────────────────────────────────── */
    return (
        <div className="bg-[#F8F9FA] min-h-screen">

            {/* ── Breadcrumb ───────────────────────────────────────────── */}
            <div className="border-b border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                    <nav className="flex items-center gap-4 text-[10px] font-extrabold uppercase tracking-[0.3em] text-gray-300">
                        <Link href="/" className="hover:text-[#024ad8] transition-colors">Home</Link>
                        <ChevronRight size={10} className="text-gray-200" />
                        <Link href="/shop" className="hover:text-[#024ad8] transition-colors">Shop</Link>
                        <ChevronRight size={10} className="text-gray-200" />
                        <span className="text-black truncate max-w-xs block">
                            {product?.title || 'Product'}
                        </span>
                    </nav>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

                {loading ? <Loader /> : error ? (
                    <div className="max-w-lg mx-auto mt-8 space-y-6">
                        <Alert variant="danger">{error}</Alert>
                        <button onClick={() => router.push('/shop')} className="flex items-center justify-center gap-3 w-full py-4 font-extrabold text-[10px] uppercase tracking-[0.3em] text-black border border-black hover:bg-black hover:text-white rounded-sm transition-all">
                            <ChevronLeft size={14} /> Back to Shop
                        </button>
                    </div>
                ) : product ? (
                    <>
                        {/* ══ MAIN GRID ══════════════════════════════════ */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 mb-12 md:mb-24">

                            {/* ── LEFT: Gallery ─────────────────────── */}
                            <div className="space-y-6">
                                {/* Main image */}
                                <div className="relative bg-white aspect-square rounded-sm overflow-hidden flex items-center justify-center border border-gray-100 group shadow-sm">
                                    <img
                                        src={mainImg}
                                        alt={product.title}
                                        className="w-full h-full object-contain p-12 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                                        onError={(e) => { e.target.src = 'https://placehold.co/600x600?text=No+Image'; }}
                                    />

                                    {/* Stock badge */}
                                    <div className="absolute top-4 left-4">
                                        {product.countInStock > 0 ? (
                                            <span className="inline-flex items-center gap-1.5 bg-[#024ad8] text-white text-[9px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider">
                                                <Check size={10} strokeWidth={3} /> In Stock
                                            </span>
                                        ) : (
                                            <span className="bg-gray-800 text-white text-[9px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider">
                                                Out of Stock
                                            </span>
                                        )}
                                    </div>



                                    {/* Arrow nav */}
                                    {images.length > 1 && (
                                        <>
                                            <button onClick={() => setActiveImg((p) => (p - 1 + images.length) % images.length)}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-sm flex items-center justify-center text-gray-500 hover:text-[#024ad8] opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                <ChevronLeft size={20} />
                                            </button>
                                            <button onClick={() => setActiveImg((p) => (p + 1) % images.length)}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-sm flex items-center justify-center text-gray-500 hover:text-[#024ad8] opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                <ChevronRight size={20} />
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* Thumbnails */}
                                {images.length > 1 && (
                                    <div className="flex gap-3 overflow-x-auto pb-2">
                                        {images.map((img, i) => (
                                            <button key={i} onClick={() => setActiveImg(i)}
                                                className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-sm overflow-hidden border-2 transition-all bg-white ${activeImg === i ? 'border-[#024ad8] shadow-md' : 'border-gray-100 hover:border-gray-300'}`}>
                                                <img src={getImageUrl(img, 200)} alt={`view ${i + 1}`}
                                                    className="w-full h-full object-contain p-2 mix-blend-multiply"
                                                    onError={(e) => { e.target.src = 'https://placehold.co/80x80?text=x'; }} />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* ── RIGHT: Info ───────────────────────── */}
                            <div className="flex flex-col py-2">

                                {/* Brand / category chips */}
                                <div className="flex flex-wrap items-center gap-2 mb-5">
                                    {product.brand && (
                                        <span className="text-[10px] font-bold text-[#024ad8] bg-blue-50 border border-blue-100 px-3 py-1 rounded-sm uppercase tracking-wider">
                                            {product.brand}
                                        </span>
                                    )}
                                    {product.category?.name && (
                                        <span className="text-[10px] font-bold text-gray-400 bg-gray-50 border border-gray-100 px-3 py-1 rounded-sm uppercase tracking-wider">
                                            {product.category.name}
                                        </span>
                                    )}
                                </div>

                                {/* Title */}
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-5 leading-tight tracking-tight">
                                    {product.title}
                                </h1>

                                {/* Rating row */}
                                {/* <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                                    <Stars value={Math.round(product.rating || 0)} size={16} />
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-semibold text-gray-700">
                                            {Number(product.rating || 0).toFixed(1)}
                                        </span>
                                        <span className="text-xs text-gray-400">
                                            ({product.numReviews || 0} {product.numReviews === 1 ? 'review' : 'reviews'})
                                        </span>
                                    </div>
                                </div> */}

                                {/* Price */}
                                <div className="flex items-baseline gap-4 mb-6">
                                    <span className="text-3xl sm:text-4xl font-bold text-black">
                                        ${Number(product.price || 0).toFixed(2)}
                                    </span>

                                </div>

                                {/* Attributes */}
                                {(product.technology?.length > 0 || product.usageCategory?.length > 0) && (
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {product.technology?.length > 0 && (
                                            <Chip label="Technology" value={product.technology.join(', ')} />
                                        )}
                                        {product.usageCategory?.length > 0 && (
                                            <Chip label="Use" value={product.usageCategory.join(', ')} />
                                        )}
                                    </div>
                                )}

                                {/* ── Quantity + Buttons ──────────────── */}
                                {product.countInStock > 0 ? (
                                    <div className="space-y-5">
                                        <div className="flex items-center gap-6">
                                            <div className="flex flex-col gap-1.5">
                                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Quantity</span>
                                                <div className="flex items-center border border-gray-200 rounded-sm overflow-hidden bg-white">
                                                    <button
                                                        onClick={() => setQty(Math.max(1, qty - 1))}
                                                        className="w-10 h-10 flex items-center justify-center text-lg font-semibold text-gray-600 hover:bg-gray-50 transition-colors border-r border-gray-100"
                                                    >−</button>
                                                    <span className="min-w-[44px] text-center font-semibold text-base">{qty}</span>
                                                    <button
                                                        onClick={() => setQty(Math.min(product.countInStock, qty + 1))}
                                                        className="w-10 h-10 flex items-center justify-center text-lg font-semibold text-gray-600 hover:bg-gray-50 transition-colors border-l border-gray-100"
                                                    >+</button>
                                                </div>
                                            </div>
                                            <div className="pt-5">
                                                <span className="text-xs text-gray-400">
                                                    {product.countInStock} available
                                                </span>
                                            </div>
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <button
                                                onClick={toCart}
                                                className="flex-1 flex items-center justify-center gap-2 bg-black text-white font-semibold py-4 px-6 rounded-sm hover:bg-gray-800 transition-colors text-sm"
                                            >
                                                <ShoppingCart size={17} />
                                                Add to Cart
                                            </button>

                                            <button
                                                onClick={buyNow}
                                                className="flex-1 flex items-center justify-center gap-2 bg-[#024ad8] text-white font-semibold py-4 px-6 rounded-sm hover:bg-[#0133a1] transition-colors text-sm"
                                            >
                                                <ShoppingBag size={17} />
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-full py-4 text-center bg-gray-100 text-gray-500 rounded-sm font-semibold text-sm border border-gray-200">
                                        Currently Out of Stock
                                    </div>
                                )}

                                {/* ── Trust badges ────────────────────── */}
                                <div className="grid grid-cols-2 gap-3 mt-8 pt-6 border-t border-gray-100">
                                    {[
                                        { icon: <Truck size={16} />, label: 'Free Shipping', sub: 'Orders over $249' },
                                        { icon: <RotateCcw size={16} />, label: 'Easy Returns', sub: '30-day window' },
                                        { icon: <Shield size={16} />, label: 'Warranty', sub: 'Manufacturer covered' },
                                        { icon: <Award size={16} />, label: 'Authentic', sub: 'HP authorized' },
                                    ].map((b, i) => (
                                        <div key={i} className="flex items-center gap-3 py-3">
                                            <div className="text-[#024ad8] flex-shrink-0">
                                                {b.icon}
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-gray-700">{b.label}</p>
                                                <p className="text-[10px] text-gray-400">{b.sub}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ══ TABS ══════════════════════════════════════ */}
                        <div className="bg-white rounded-sm border border-gray-100 shadow-sm overflow-hidden">
                            {/* Tab header */}
                            <div className="flex border-b border-gray-100 px-4 sm:px-8 overflow-x-auto">
                                <div className="flex">
                                    {['overview', 'specifications', 'reviews'].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`relative py-5 px-2 mr-8 sm:mr-12 text-xs font-bold uppercase tracking-wider transition-colors flex-shrink-0 whitespace-nowrap ${activeTab === tab ? 'text-[#024ad8]' : 'text-gray-400 hover:text-gray-700'}`}
                                        >
                                            {tab}
                                            {activeTab === tab && (
                                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#024ad8]" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Tab body */}
                            <div className="p-6 sm:p-10 lg:p-14 min-h-72">

                                {/* OVERVIEW */}
                                {activeTab === 'overview' && (
                                    <div className="max-w-4xl">
                                        <div
                                            className="prose prose-sm max-w-none text-gray-600 leading-relaxed prose-headings:text-black prose-headings:font-bold prose-headings:tracking-tight prose-p:mb-4 prose-p:text-gray-600"
                                            dangerouslySetInnerHTML={{ __html: product.overview }}
                                        />
                                    </div>
                                )}

                                {/* SPECIFICATIONS */}
                                {activeTab === 'specifications' && (
                                    <div className="max-w-5xl">
                                        <h2 className="text-lg font-bold text-black mb-6">Technical Specifications</h2>
                                        {product.technicalSpecification ? (
                                            <div
                                                className="prose max-w-none text-gray-600 [&>table]:w-full [&>table]:border-collapse [&>table>tbody>tr]:border-b [&>table>tbody>tr]:border-gray-100 [&>table>tbody>tr>td]:py-3 [&>table>tbody>tr>td]:px-4 [&>table>tbody>tr>td]:text-sm [&>table>tbody>tr>td]:text-gray-600 [&>table>tbody>tr>td:first-child]:font-semibold [&>table>tbody>tr>td:first-child]:w-1/3 [&>table>tbody>tr>td:first-child]:bg-gray-50 [&>table>tbody>tr>td:first-child]:text-gray-700"
                                                dangerouslySetInnerHTML={{ __html: product.technicalSpecification }}
                                            />
                                        ) : (
                                            <Alert>No specifications available for this product.</Alert>
                                        )}
                                    </div>
                                )}

                                {/* REVIEWS */}
                                {activeTab === 'reviews' && (
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

                                        {/* Review list */}
                                        <div className="lg:col-span-7">
                                            <h2 className="text-lg font-bold text-black mb-6 flex items-center gap-3">
                                                Customer Reviews
                                                {product.numReviews > 0 && (
                                                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">{product.numReviews}</span>
                                                )}
                                            </h2>

                                            {/* Average rating */}
                                            {product.numReviews > 0 && (
                                                <div className="flex items-center gap-6 p-6 bg-gray-50 border border-gray-100 rounded-sm mb-8">
                                                    <div className="text-5xl font-bold text-black">
                                                        {Number(product.rating || 0).toFixed(1)}
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <Stars value={Math.round(product.rating || 0)} size={20} />
                                                        <p className="text-xs text-gray-500">{product.numReviews} {product.numReviews === 1 ? 'review' : 'reviews'}</p>
                                                    </div>
                                                </div>
                                            )}

                                            {!product.reviews?.length ? (
                                                <Alert>No reviews yet. Be the first to review this product.</Alert>
                                            ) : (
                                                <div className="space-y-4">
                                                    {product.reviews.map((rev) => (
                                                        <div key={rev._id} className="border border-gray-100 rounded-sm p-5 bg-white">
                                                            <div className="flex items-start justify-between mb-3">
                                                                <div className="flex items-center gap-3">
                                                                    <div className="w-9 h-9 rounded-full bg-[#024ad8] flex items-center justify-center text-white font-semibold text-sm uppercase">
                                                                        {rev.name?.charAt(0)?.toUpperCase() || 'U'}
                                                                    </div>
                                                                    <div>
                                                                        <p className="font-semibold text-sm text-black">{rev.name}</p>
                                                                        <p className="text-xs text-gray-400">{rev.createdAt?.substring(0, 10)}</p>
                                                                    </div>
                                                                </div>
                                                                <Stars value={rev.rating} size={13} />
                                                            </div>
                                                            <p className="text-gray-600 text-sm leading-relaxed">{rev.comment}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Write review */}
                                        <div className="lg:col-span-5">
                                            <h2 className="text-lg font-bold text-black mb-6">Write a Review</h2>

                                            {okReview && <div className="mb-5"><Alert variant="success">Your review has been submitted. Thank you!</Alert></div>}
                                            {errReview && <div className="mb-5"><Alert variant="danger">{errReview}</Alert></div>}

                                            {userInfo ? (
                                                <form onSubmit={submitReview} className="bg-gray-50 border border-gray-100 rounded-sm p-6 space-y-5">
                                                    <div className="space-y-2">
                                                        <label className="block text-xs font-semibold text-gray-600">Your Rating</label>
                                                        <Stars
                                                            value={hoverRating || rating}
                                                            size={28}
                                                            interactive
                                                            onSet={setRating}
                                                            onHover={setHoverRating}
                                                            onLeave={() => setHoverRating(0)}
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="block text-xs font-semibold text-gray-600">Your Review</label>
                                                        <textarea
                                                            rows="5"
                                                            value={comment}
                                                            onChange={(e) => setComment(e.target.value)}
                                                            placeholder="Share your experience with this product..."
                                                            className="w-full p-4 bg-white border border-gray-200 rounded-sm text-sm text-gray-700 focus:outline-none focus:border-[#024ad8] resize-none placeholder:text-gray-300"
                                                        />
                                                    </div>
                                                    <button
                                                        type="submit"
                                                        disabled={loadingReview || rating === 0 || !comment.trim()}
                                                        className="w-full py-3.5 bg-black text-white font-semibold rounded-sm hover:bg-[#024ad8] transition-colors text-sm disabled:opacity-30 disabled:cursor-not-allowed"
                                                    >
                                                        {loadingReview ? 'Submitting...' : 'Submit Review'}
                                                    </button>
                                                </form>
                                            ) : (
                                                <div className="bg-gray-50 border border-gray-100 rounded-sm p-8 text-center">
                                                    <p className="text-sm text-gray-500 mb-5">Please sign in to write a review.</p>
                                                    <Link href="/login"
                                                        className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-sm hover:bg-[#024ad8] transition-colors text-sm">
                                                        Sign In
                                                    </Link>
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                )}

                            </div>
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    );
};


export default ProductDetails;
