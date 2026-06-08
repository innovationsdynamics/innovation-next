'use client';

import React, { useState, useEffect } from 'react';
import Meta from './common/Meta';


import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../redux/actions/productActions';
import { Eye, ShoppingBag, ChevronRight, X, ChevronLeft, Truck } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { getImageUrl } from '../utils/imageUtils';



// ── Product Card ─────────────────────────────────────────────────────────────
const ProductCard = ({ product, onDetails }) => {
    const imageUrl = getImageUrl(product.images, 300);
    return (
        <div className="group bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 relative rounded-sm overflow-hidden flex flex-row sm:flex-col h-full">
            {/* Image area */}
            <div className="relative flex-shrink-0 w-40 sm:w-auto sm:aspect-[4/3] sm:flex flex-col items-center justify-center bg-gray-50/50 overflow-hidden group-hover:bg-white transition-colors duration-500 aspect-square">
                <img
                    src={imageUrl}
                    alt={product.title}
                    className="w-full h-full object-contain p-4 sm:p-6 transform group-hover:scale-105 transition-transform duration-700"
                    loading={product.isLCP ? "eager" : "lazy"}
                    fetchPriority={product.isLCP ? "high" : "auto"}
                    onError={(e) => { e.target.src = 'https://placehold.co/400x300?text=No+Image'; }}
                />
                {product.countInStock === 0 && (
                    <div className="absolute top-0 right-0 bg-red-600 text-white text-[9px] font-bold px-2 py-1 uppercase tracking-wider">Sold Out</div>
                )}
                {/* Hover overlay buttons — only on sm+ */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:flex items-center justify-center gap-2">

                    <button
                        className="p-2.5 bg-white text-gray-900 shadow-lg hover:bg-[#024ad8] hover:text-white transition-all transform hover:scale-110 rounded-sm"
                        title="View Details"
                        onClick={() => onDetails(product)}
                    >
                        <Eye size={16} />
                    </button>
                </div>
            </div>

            {/* Content area */}
            <div className="p-4 sm:p-6 flex flex-col flex-1 sm:border-t border-l sm:border-l-0 border-gray-50 min-w-0">
                <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">{product.brand || 'HP'}</span>
                </div>
                <h2
                    className="text-sm font-bold text-black mb-2 leading-tight group-hover:text-[#024ad8] transition-colors cursor-pointer line-clamp-2"
                    onClick={() => onDetails(product)}
                >
                    {product.title || 'Printer'}
                </h2>
                <p className="text-xs text-gray-600 mb-3 line-clamp-2 flex-grow leading-relaxed hidden sm:block">{product.description}</p>

                <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex flex-col">

                        <span className="text-base sm:text-lg font-black text-black tracking-tight">${Number(product.price || 0).toFixed(2)}</span>
                    </div>
                    <button
                        onClick={() => onDetails(product)}
                        className="px-3 sm:px-5 py-2 bg-[#024ad8] text-white text-[10px] font-bold uppercase tracking-wider hover:bg-[#0133a1] transition-all duration-300 flex items-center gap-1.5 rounded-sm shadow-sm"
                    >
                        <ShoppingBag size={13} /> Details
                    </button>
                </div>
            </div>
        </div>
    );
};

// ── Category Section (overview page preview) ──────────────────────────────────
const CategorySection = ({ products = [], loading = false, sectionLabel, onViewAll, onDetails }) => {
    if (!loading && products.length === 0) return null;

    return (
        <section className="mb-16">
            <div className="flex items-center justify-between mb-8 border-b-2 border-gray-50 pb-4">
                <div className="flex items-center gap-4">
                    <div className="w-1 h-8 bg-[#024ad8]" />
                    <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight">{sectionLabel}</h2>
                    {!loading && (
                        <span className="text-[11px] text-gray-600 font-bold uppercase tracking-widest ml-2">
                            [{products.length} Models]
                        </span>
                    )}
                </div>
                <button
                    onClick={onViewAll}
                    className="flex items-center gap-2 text-xs font-bold text-[#024ad8] hover:text-[#0133a1] uppercase tracking-widest group transition-colors"
                >
                    View All <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {loading ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map(i => <div key={i} className="bg-gray-100 aspect-[4/3] rounded animate-pulse" />)}
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map(p => (
                        <ProductCard key={p._id} product={p} onDetails={onDetails} />
                    ))}
                </div>
            )}
        </section>
    );
};

// ── Filtered View (full paginated listing with search & sort) ─────────────────
const FilteredView = ({ catName, initialSearch = '', usageCategory = '', onDetails, forceHomeRoute = false }) => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState(initialSearch);
    const [debounced, setDeb] = useState(initialSearch);
    const [sortBy, setSortBy] = useState('featured');
    const [selectedBrand, setSelectedBrand] = useState('');
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const pageParam = Number(searchParams.get('page')) || 1;
    const brandParam = searchParams.get('brand') || '';

    const pushFilterUpdate = (href) => {
        router.push(href, { scroll: false });
    };

    const productList = useSelector(s => s.productList || {});
    const { loading, error, products = [], pages = 1, page = 1, total = 0 } = productList;

    useEffect(() => { setSearch(initialSearch); }, [initialSearch]);
    useEffect(() => { const t = setTimeout(() => setDeb(search), 400); return () => clearTimeout(t); }, [search]);
    useEffect(() => { if (brandParam !== selectedBrand) setSelectedBrand(brandParam); }, [brandParam]);
    useEffect(() => {
        const cleanPath = pathname.replace(/\/$/, '');
        const isHomePrintersRoute = (forceHomeRoute || cleanPath === '/home-printers') && !debounced;
        const pageSize = isHomePrintersRoute ? 12 : null;
        const isHomeFirstPage = isHomePrintersRoute && pageParam === 1 && !brandParam;
        const isHomeRemainderPage = isHomePrintersRoute && pageParam > 1 && !brandParam;
        const brandToUse = isHomeFirstPage ? 'HP' : selectedBrand;
        const countAll = isHomeFirstPage;
        const nonHpPage = isHomeRemainderPage;

        dispatch(listProducts(debounced, catName, pageParam, brandToUse, usageCategory, pageSize, countAll, nonHpPage));
    }, [dispatch, debounced, catName, usageCategory, selectedBrand, pageParam, pathname, brandParam, forceHomeRoute]);

    if (error) {
        return (
            <div className="text-center py-20 text-red-500">
                <p className="font-bold">{error}</p>
                <button onClick={() => dispatch(listProducts('', catName, 1, '', usageCategory))} className="mt-4 px-6 py-2 bg-[#024ad8] text-white font-bold text-xs uppercase tracking-widest">Retry</button>
            </div>
        );
    }

    const safeProducts = Array.isArray(products) ? products : [];

    const sorted = [...safeProducts].sort((a, b) => {
        // If it's Home Printers and sorting by Featured, prioritize brands: HP > Epson > Canon
        if (usageCategory === 'Home' && sortBy === 'featured') {
            const brandOrder = { 'HP': 1, 'EPSON': 2, 'CANON': 3 };
            const brandA = (a.brand || '').toUpperCase();
            const brandB = (b.brand || '').toUpperCase();
            
            const orderA = brandOrder[brandA] || 99;
            const orderB = brandOrder[brandB] || 99;
            
            if (orderA !== orderB) {
                return orderA - orderB;
            }
        }

        if (sortBy === 'price-low') return (a.price || 0) - (b.price || 0);
        if (sortBy === 'price-high') return (b.price || 0) - (a.price || 0);
        if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
        return 0;
    });

    return (
        <>
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-8 md:mb-12 items-stretch md:items-center justify-between bg-white p-4 md:p-6 border-b-4 border-black shadow-2xl shadow-gray-100">
                <div className="w-full md:w-1/2 relative">
                    <input
                        type="text" placeholder="ENTER SEARCH PARAMETERS..." value={search}
                        onChange={e => setSearch(e.target.value)}
                        aria-label="Search products"
                        className="w-full pl-12 pr-4 py-3 md:py-4 bg-gray-50 border border-gray-100 text-[11px] font-bold uppercase tracking-[0.1em] focus:outline-none focus:ring-1 focus:ring-[#024ad8] focus:bg-white rounded-sm transition-all placeholder:text-gray-300"
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
                    <label htmlFor="sort-select" className="text-[10px] font-bold text-gray-600 uppercase tracking-wider whitespace-nowrap">Sort:</label>
                    <select id="sort-select" value={sortBy} onChange={e => setSortBy(e.target.value)}
                        className="flex-1 md:flex-none py-3 md:py-4 px-4 md:px-6 bg-gray-50 border border-gray-100 text-[11px] font-bold uppercase tracking-wider focus:outline-none focus:ring-1 focus:ring-[#024ad8] focus:bg-white rounded-sm transition-all cursor-pointer">
                        <option value="featured">Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Top Rated</option>
                    </select>
                </div>
            </div>

            {/* Brand Filter */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mr-2">Brand:</span>
                {['', 'HP', 'Brother', 'Canon', 'Epson'].map((brand) => (
                    <button
                        key={brand}
                        onClick={() => {
                            const newBrand = brand;
                            setSelectedBrand(newBrand);
                            const params = new URLSearchParams(searchParams.toString());
                            if (newBrand) params.set('brand', newBrand); else params.delete('brand');
                            params.set('page', '1');
                            pushFilterUpdate(`${pathname}?${params.toString()}`);
                        }}
                        className={`px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest border transition-all ${
                            selectedBrand === brand
                                ? 'bg-black text-white border-black'
                                : 'bg-white text-gray-500 border-gray-100 hover:border-black hover:text-black'
                        }`}
                    >
                        {brand || 'All Brands'}
                    </button>
                ))}
            </div>

            <div className="flex items-center gap-4 mb-8">
                <div className="h-0.5 flex-grow bg-gray-100"></div>
                <p className="text-gray-600 text-xs font-medium whitespace-nowrap">
                    <span className="text-[#024ad8] font-bold">{total || sorted.length}</span> products found
                </p>
                <div className="h-0.5 flex-grow bg-gray-100"></div>
            </div>

            {loading ? (
                <div className="flex justify-center py-32">
                    <div className="animate-spin rounded-sm h-12 w-12 border-4 border-[#024ad8] border-t-transparent shadow-xl" />
                </div>
            ) : sorted.length === 0 ? (
                <div className="text-center py-28 bg-gray-50 rounded-sm border border-dashed border-gray-200">
                    <X size={40} className="text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-black mb-2">No Products Found</h3>
                    <p className="text-sm text-gray-600">Try adjusting your search or selecting a different category.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {sorted.map((p, index) => (
                        <ProductCard
                            key={p._id || Math.random()}
                            product={{ ...p, isLCP: index === 0 }}
                            onDetails={onDetails}
                        />
                    ))}
                </div>
            )}

            {/* Pagination */}
            {pages > 1 && (
                <div className="flex justify-center items-center gap-3 mt-20 pb-16">
                    <button
                        onClick={() => {
                            const params = new URLSearchParams(searchParams.toString());
                            params.set('page', String(Math.max(1, page - 1)));
                            router.push(`${pathname}?${params.toString()}`);
                        }}
                        disabled={page <= 1}
                        className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-sm bg-white hover:border-black transition-all disabled:opacity-20 shadow-sm"
                        aria-label="Previous Page"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    {[...Array(isNaN(pages) ? 0 : Number(pages))].map((_, i) => (
                        <button key={i + 1} onClick={() => {
                            const params = new URLSearchParams(searchParams.toString());
                            params.set('page', String(i + 1));
                            router.push(`${pathname}?${params.toString()}`);
                        }}
                            className={`w-12 h-12 text-[11px] font-bold uppercase tracking-wider rounded-sm border transition-all shadow-sm ${page === i + 1 ? 'bg-black text-white border-black' : 'bg-white text-gray-600 border-gray-100 hover:border-[#024ad8] hover:text-[#024ad8]'}`}
                            aria-label={`Page ${i + 1}`}
                            aria-current={page === i + 1 ? "page" : undefined}
                        >
                            {String(i + 1).padStart(2, '0')}
                        </button>
                    ))}
                    <button
                        onClick={() => {
                            const params = new URLSearchParams(searchParams.toString());
                            params.set('page', String(Math.min(pages, page + 1)));
                            router.push(`${pathname}?${params.toString()}`);
                        }}
                        disabled={page >= pages}
                        className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-sm bg-white hover:border-black transition-all disabled:opacity-20 shadow-sm"
                        aria-label="Next Page"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}
        </>
    );
};

// ── Main Printers Page ────────────────────────────────────────────────────────
const Printers = ({ hideHero = false, forceHomeRoute = false }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const urlParams = new URLSearchParams(searchParams.toString());
    const globalSearch = urlParams.get('search') || '';
    const filterParam  = urlParams.get('filter')  || '';

    // Map ?filter= values from navbar links to tab objects
    const FILTER_MAP = {
        'shop':            { label: 'All Products',    filterType: null,            filterValue: null, bg: '/shop.webp', bgMobile: '/shopMobile.webp' },
        'home-printers':   { label: 'Home Printers',   filterType: 'usageCategory', filterValue: 'Home', bg: '/home.webp', bgMobile: '/homeMobile.webp' },
        'office-printers': { label: 'Office Printers', filterType: 'usageCategory', filterValue: 'Office', bg: '/office.webp', bgMobile: '/officeMobile.webp' },
        'laser-printers':  { label: 'Laser Printers',  filterType: 'catName',       filterValue: 'Laser', bg: '/laser.webp', bgMobile: '/laserMobile.webp' },
        'inkjet-printers': { label: 'Inkjet Printers', filterType: 'catName',       filterValue: 'Inkjet', bg: '/inkjet.webp', bgMobile: '/inkjetMobile.webp' },
        'ink-toner':       { label: 'Ink & Toner',     filterType: 'catName',       filterValue: 'Ink & Toner', bg: '/ink-toner.webp', bgMobile: '/ink-tonerMobile.webp' },
    };

    // Hardcoded navigation tabs
    const NAV_TABS = [
        { label: 'Home Printers',   filterType: 'usageCategory', filterValue: 'Home', bg: '/home.webp', bgMobile: '/homeMobile.webp' },
        { label: 'Office Printers', filterType: 'usageCategory', filterValue: 'Office', bg: '/office.webp', bgMobile: '/officeMobile.webp' },
        { label: 'Laser Printers',  filterType: 'catName',       filterValue: 'Laser', bg: '/laser.webp', bgMobile: '/laserMobile.webp' },
        { label: 'Inkjet Printers', filterType: 'catName',       filterValue: 'Inkjet', bg: '/inkjet.webp', bgMobile: '/inkjetMobile.webp' },
        { label: 'Ink & Toner',     filterType: 'catName',       filterValue: 'Ink & Toner', bg: '/ink-toner.webp', bgMobile: '/ink-tonerMobile.webp' },
    ];

    const pathKey = pathname.replace(/^\//, '').replace(/\/$/, '');
    const initialTab = filterParam && FILTER_MAP[filterParam]
        ? FILTER_MAP[filterParam]
        : (FILTER_MAP[pathKey] || NAV_TABS[0]);

    const [activeTab, setActiveTab] = useState(initialTab);

    // Sync activeTab with the ?filter= query param or the pathname (for separate html pages)
    useEffect(() => {
        const path = pathname.replace(/^\/|\/$/g, '').replace('/', '');
        if (filterParam && FILTER_MAP[filterParam]) {
            setActiveTab(FILTER_MAP[filterParam]);
        } else if (FILTER_MAP[path]) {
            setActiveTab(FILTER_MAP[path]);
        } else if (!filterParam && !globalSearch) {
            setActiveTab(NAV_TABS[0]);
        }
    }, [filterParam, pathname]);

    // Reset to Home Printers when a new global search is made
    useEffect(() => { if (globalSearch) setActiveTab(NAV_TABS[0]); }, [globalSearch]);

    const handleDetails = (product) => router.push(`/product/${product.slug || product._id}`);


    // Derive filter values from the active tab
    const activeCatName  = activeTab?.filterType === 'catName'       ? activeTab.filterValue : '';
    const activeUsageCat = activeTab?.filterType === 'usageCategory' ? activeTab.filterValue : '';
    
    // Explicitly set the heading label based on activeTab to ensure it changes
    const headingLabel = globalSearch
        ? `Search: "${globalSearch}"`
        : (activeTab?.label || 'Home Printers');

    return (
        <div className="bg-white min-h-screen font-sans text-black">
            <Meta 
                title="Shop | Innovation Dynamics Group"
                description={globalSearch ? `Browse search results for "${globalSearch}" at Innovation Dynamics Group. Find the best HP printers and genuine ink or toner supplies.` : `Explore our collection of ${activeTab?.label || 'professional printers and supplies'}. High-quality HP solutions for home and office use.`}
            />

            {/* ── Hero Banner (Full Width) ─────────────────────────────────── */}
            {!hideHero && (
                <div className="relative w-[100vw] h-[100vh] overflow-hidden">
                    {/* Background Image */}
                    <picture>
                        <source srcSet={activeTab?.bgMobile || activeTab?.bg || "/printer-banner.webp"} media="(max-width: 768px)" />
                        <img 
                            src={activeTab?.bg || "/printer-banner.webp"} 
                            alt={activeTab?.label || "Hero Banner"} 
                            key={activeTab?.bg} // Force re-render on tab change
                            className="w-full h-full object-cover"
                        />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                </div>
            )}

            {/* Banner Content (Moved below the image) */}
            <div className="bg-white pt-16 sm:pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-6 animate-fade-in">
                            <div className="w-8 h-px bg-[#024ad8]" />
                            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-[#024ad8]">
                                Official HP Partner
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black mb-8 leading-none uppercase tracking-tighter">
                            {headingLabel.split(' ').map((word, i) => (
                                <span key={i} className={i === 1 ? 'text-[#024ad8] block sm:inline' : 'block sm:inline'}>
                                    {word}{' '}
                                </span>
                            ))}
                        </h1>
                        <div className="w-24 h-2 bg-black mb-10" />
                        <p className="text-base sm:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mb-12">
                            {globalSearch
                                ? 'Showing precision-filtered results from our comprehensive professional inventory.'
                                : (activeTab
                                    ? `Experience the next generation of ${activeTab.label} designed for peak performance, extreme reliability, and professional output quality.`
                                    : 'Browse our full spectrum of professional-grade printing solutions and genuine factory supplies.')}
                        </p>

                        {/* ── Category Filters (Like reference image) ────────────────── */}
                        <div className="flex flex-wrap gap-3 sm:gap-4 mt-8">
                            {NAV_TABS.map((tab) => {
                                const isActive = activeTab?.label === tab.label;
                                const tabPath = tab.label === 'Home Printers' ? '/home-printers/' :
                                               tab.label === 'Office Printers' ? '/office-printers/' :
                                               tab.label === 'Laser Printers' ? '/laser-printers/' :
                                               tab.label === 'Inkjet Printers' ? '/inkjet-printers/' :
                                               tab.label === 'Ink & Toner' ? '/ink-toner/' : '/shop/';

                                return (
                                    <button
                                            key={tab.label}
                                            onClick={() => {
                                                setActiveTab(tab);
                                                const params = new URLSearchParams();
                                                params.set('page', '1');
                                                router.push(`${tabPath}?${params.toString()}`);
                                            }}
                                        className={`px-6 sm:px-5 py-4 sm:py-5 text-[10px] sm:text-[10px] font-extrabold uppercase tracking-[0.2em] transition-all duration-500 rounded-sm ${
                                            isActive 
                                            ? 'bg-[#024ad8] text-white shadow-[0_15px_30px_rgba(2,74,216,0.2)] scale-105 z-10' 
                                            : 'bg-white text-gray-400 border border-gray-100 hover:border-black hover:text-black hover:shadow-lg'
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">

                {/* ── Content ─────────────────────────────────────────────── */}
                {globalSearch ? (
                    <FilteredView
                        catName=""
                        initialSearch={globalSearch}
                        usageCategory=""
                        onDetails={handleDetails}
                        forceHomeRoute={forceHomeRoute}
                    />
                ) : (
                    <FilteredView
                        catName={activeCatName}
                        usageCategory={activeUsageCat}
                        onDetails={handleDetails}
                        forceHomeRoute={forceHomeRoute}
                    />
                )}
            </div>
        </div>
    );
};

export default Printers;
