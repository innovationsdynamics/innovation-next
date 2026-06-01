'use client';

import React, { useState } from 'react';
import {
    Menu, X, ChevronDown, User, Search, ShoppingCart,
    LogOut, Truck, Printer, Users, ArrowRight, Zap,
    Droplets, ShoppingBag
} from 'lucide-react';
import Link from 'next/link';
import { useShop } from '../context/ShopContext';
import { useAuth } from '../context/AuthContext';
import { useDispatch } from 'react-redux';
import { USER_LOGOUT } from '../redux/constants/userConstants';
import { useRouter } from 'next/navigation';

/**
 * Navbar Component
 * Handles global navigation, shop categories dropdown, user authentication state,
 * and search functionality across the platform.
 */
const Navbar = () => {
    // ─── UI State ───────────────────────────────────────────────────────────
    const [isMenuOpen, setIsMenuOpen] = useState(false);         // Mobile hamburger menu
    const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false); // Desktop Shop categories
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false); // Desktop Profile/Logout
    const [searchTerm, setSearchTerm] = useState('');            // Global search query
    const { cartCount } = useShop();
    const { user, isAuthenticated, logout } = useAuth();
    const router = useRouter();
    const dispatch = useDispatch();

    /**
     * Handle global search input
     * Redirects to the shop page with the search query as a parameter
     */
    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchTerm.trim()) {
            window.location.href = `/shop?search=${encodeURIComponent(searchTerm.trim())}`;
            setSearchTerm('');
            if (isMenuOpen) setIsMenuOpen(false);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleShopDropdown = () => {
        setIsShopDropdownOpen(!isShopDropdownOpen);
    };

    const closeAllMenus = () => {
        setIsMenuOpen(false);
        setIsShopDropdownOpen(false);
        setIsUserDropdownOpen(false);
    };

    const toggleUserDropdown = () => {
        setIsUserDropdownOpen(!isUserDropdownOpen);
    };

    /**
     * Logs the user out and clears the local session
     */
    const handleLogout = () => {
        logout();
        dispatch({ type: USER_LOGOUT });
        setIsUserDropdownOpen(false);
        window.location.href = '/';
    };

    /**
     * Determines CSS classes for desktop navigation links based on active route
     */
    const getLinkClasses = (path) => {
        const currentPath = window.location.pathname;
        const baseClasses = "text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-300 hover:text-white/70 relative py-1";
        const activeClasses = "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white";
        const inactiveClasses = "text-white";

        const isHome = path === '/' && (currentPath === '/' || currentPath === '/index');
        const isMatch = currentPath === path || currentPath === `${path}`;

        return (isHome || isMatch) ? `${baseClasses} ${activeClasses}` : `${baseClasses} ${inactiveClasses}`;
    };

    const getMobileLinkClasses = (path) => {
        const currentPath = window.location.pathname;
        const baseClasses = "block px-3 py-2 rounded-md text-base font-medium transition-colors";
        const activeClasses = "text-white bg-white/20";
        const inactiveClasses = "text-white hover:text-white/80 hover:bg-white/10";

        const isHome = path === '/' && (currentPath === '/' || currentPath === '/index');
        const isMatch = currentPath === path || currentPath === `${path}`;

        return (isHome || isMatch) ? `${baseClasses} ${activeClasses}` : `${baseClasses} ${inactiveClasses}`;
    };

    return (
        <nav className="bg-[#024ad8] text-white shadow-lg border-b border-white/10 sticky top-0 z-50 font-sans backdrop-blur-md">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2 group">
                            <img
                                src="/idg-logo.png"
                                alt="Innovation Dynamics Group Logo"
                                className="w-32 h-32 object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* <div className="flex flex-col leading-none">
                                <span className="font-bold text-2xl sm:text-3xl tracking-tighter lowercase">idg</span>
                            </div>
                            <div className="flex flex-col leading-tight text-[0.6rem] sm:text-[0.7rem] font-bold tracking-widest uppercase border-l-2 border-white/70 pl-3 py-0.5 group-hover:border-white transition-colors">
                                <span>Innovation</span>
                                <span>Dynamics</span>
                                <span>Group</span>
                            </div> */}
                        </Link>
                    </div>

                    <div className="hidden lg:flex space-x-8 items-center">
                        <Link href="/" className={getLinkClasses('/')}>Home</Link>
                        <Link href="/about/" className={getLinkClasses('/about')}>About Us</Link>

                        <div
                            className="relative"
                            onMouseEnter={() => setIsShopDropdownOpen(true)}
                            onMouseLeave={() => setIsShopDropdownOpen(false)}
                        >
                            <button
                                onClick={toggleShopDropdown}
                                className={`flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 focus:outline-none relative py-2 ${window.location.pathname.includes('/shop')
                                    ? "text-white"
                                    : 'text-white/80 hover:text-white'
                                    }`}
                            >
                                Shop
                                <ChevronDown size={14} className={`transition-transform duration-500 ${isShopDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <div className={`absolute left-1/2 -translate-x-1/2 mt-5 w-72 bg-white text-black rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 transition-all duration-500 z-50 overflow-hidden ${isShopDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                                <div className="p-4 grid grid-cols-1 gap-1">
                                    <Link href="/shop/" onClick={closeAllMenus} className="group/item flex items-center justify-between px-4 py-4 mb-2 bg-[#024ad8] text-white hover:bg-black transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                                                <ShoppingBag size={16} />
                                            </div>
                                            <span className="text-[11px] font-black uppercase tracking-[0.2em]">Shop All Products</span>
                                        </div>
                                        <ArrowRight size={14} />
                                    </Link>

                                    <div className="px-4 py-2 border-b border-gray-50 mb-2">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#024ad8]/50">Browse By Category</span>
                                    </div>

                                    <Link href="/home-printers/" onClick={closeAllMenus} className="group/item flex items-center justify-between px-4 py-3 rounded-sm hover:bg-[#024ad8]/5 transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 group-hover/item:text-[#024ad8] group-hover/item:bg-white transition-all">
                                                <Printer size={16} />
                                            </div>
                                            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-600 group-hover/item:text-black">Home Printers</span>
                                        </div>
                                        <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#024ad8]" />
                                    </Link>

                                    <Link href="/office-printers/" onClick={closeAllMenus} className="group/item flex items-center justify-between px-4 py-3 rounded-sm hover:bg-[#024ad8]/5 transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 group-hover/item:text-[#024ad8] group-hover/item:bg-white transition-all">
                                                <Users size={16} />
                                            </div>
                                            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-600 group-hover/item:text-black">Office Printers</span>
                                        </div>
                                        <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#024ad8]" />
                                    </Link>

                                    <Link href="/laser-printers/" onClick={closeAllMenus} className="group/item flex items-center justify-between px-4 py-3 rounded-sm hover:bg-[#024ad8]/5 transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 group-hover/item:text-[#024ad8] group-hover/item:bg-white transition-all">
                                                <Zap size={16} />
                                            </div>
                                            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-600 group-hover/item:text-black">Laser Printers</span>
                                        </div>
                                        <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#024ad8]" />
                                    </Link>

                                    <Link href="/inkjet-printers/" onClick={closeAllMenus} className="group/item flex items-center justify-between px-4 py-3 rounded-sm hover:bg-[#024ad8]/5 transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 group-hover/item:text-[#024ad8] group-hover/item:bg-white transition-all">
                                                <Droplets size={16} />
                                            </div>
                                            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-600 group-hover/item:text-black">Inkjet Printers</span>
                                        </div>
                                        <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#024ad8]" />
                                    </Link>

                                    <Link href="/ink-toner/" onClick={closeAllMenus} className="mt-4 group/item flex items-center gap-4 px-4 py-4 bg-gray-900 text-white hover:bg-[#024ad8] transition-all">
                                        <ShoppingCart size={16} className="text-[#024ad8] group-hover/item:text-white" />
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-none">Ink & Toner</span>
                                            <span className="text-[8px] font-bold uppercase tracking-[0.1em] text-white/50 group-hover/item:text-white/80">Genuine Supplies</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link href="/faqs/" className={getLinkClasses('/faqs')}>FAQs</Link>
                        <Link href="/contact/" className={getLinkClasses('/contact')}>Contact Us</Link>
                    </div>

                    <div className="hidden lg:flex items-center space-x-6">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyUp={handleSearch}
                                className="bg-white/10 text-xs rounded-full pl-10 pr-4 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#024ad8] text-white w-32 focus:w-56 transition-all duration-700 placeholder-white/30"
                            />
                            <Search className="absolute left-3.5 top-2.5 text-white/30 w-3.5 h-3.5" />
                        </div>

                        <div className="relative group/user">
                            {isAuthenticated ? (
                                <button className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:bg-white hover:border-white transition-all duration-500">
                                    <div className="w-6 h-6 bg-[#024ad8] rounded-full flex items-center justify-center text-[10px] font-black">
                                        {user.name.charAt(0)}
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white group-hover/user:text-black transition-colors">{user.name.split(' ')[0]}</span>
                                    <ChevronDown size={14} className="text-white group-hover/user:text-[#024ad8] group-hover/user:rotate-180 transition-all" />
                                </button>
                            ) : (
                                <Link href="/login/" className="flex items-center gap-2 group/login" aria-label="Login">
                                    <div className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center group-hover/login:bg-white group-hover/login:border-white transition-all">
                                        <User size={18} className="text-white group-hover/login:text-[#024ad8]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-white">LOGIN</span>
                                    </div>
                                </Link>
                            )}

                            {isAuthenticated && (
                                <div className="absolute right-0 mt-4 w-60 bg-white text-black rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-200 opacity-0 invisible group-hover/user:opacity-100 group-hover/user:visible transition-all duration-500 translate-y-2 group-hover/user:translate-y-0 z-50 overflow-hidden">
                                    <div className="p-5 bg-gray-50 flex flex-col items-center">
                                        <div className="w-16 h-16 bg-[#024ad8] text-white rounded-full flex items-center justify-center text-2xl font-black mb-3 shadow-lg">
                                            {user.name.charAt(0)}
                                        </div>
                                        <p className="text-xs font-black uppercase tracking-widest text-gray-900 leading-tight mb-2">{user.name}</p>
                                        <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Verified User</p>
                                    </div>
                                    <div className="p-2 grid grid-cols-1 gap-1">
                                        {user?.isAdmin && (
                                            <Link href="/admin/dashboard" className="flex items-center gap-4 px-4 py-3 rounded-sm hover:bg-[#024ad8]/10 text-[#024ad8] transition-colors border-b border-gray-100 mb-1">
                                                <Zap size={16} className="animate-pulse" />
                                                <span className="text-[10px] font-black uppercase tracking-widest">Admin Dashboard</span>
                                            </Link>
                                        )}
                                        <Link href="/profile/" className="flex items-center gap-4 px-4 py-3 rounded-sm hover:bg-gray-100 transition-colors">
                                            <User size={16} className="text-[#024ad8]" />
                                            <span className="text-[10px] font-bold uppercase tracking-widest">Profile</span>
                                        </Link>
                                        <Link href="/track-order/" className="flex items-center gap-4 px-4 py-3 rounded-sm hover:bg-gray-100 transition-colors">
                                            <Truck size={16} className="text-[#024ad8]" />
                                            <span className="text-[10px] font-bold uppercase tracking-widest">Track Order</span>
                                        </Link>
                                        <div className="h-px bg-gray-200 my-1 mx-4"></div>
                                        <button onClick={handleLogout} className="w-full flex items-center gap-4 px-4 py-3 rounded-sm hover:bg-red-50 text-red-700 transition-colors">
                                            <LogOut size={16} />
                                            <span className="text-[10px] font-bold uppercase tracking-widest">Logout</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link href="/cart/" aria-label={`Shopping Cart, ${cartCount} items`} className="text-white hover:text-white/90 transition-colors duration-300 relative group">
                            <ShoppingCart size={22} />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-white text-[#024ad8] text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>
                            )}
                        </Link>
                    </div>

                    <div className="lg:hidden flex items-center gap-2">
                        <Link href="/cart/" aria-label={`Shopping Cart, ${cartCount} items`} className="text-white hover:text-white/90 transition-colors duration-300 relative p-3 flex items-center justify-center">
                            <ShoppingCart size={22} className="relative z-10" />
                            {cartCount > 0 && (
                                <span className="absolute top-1.5 right-1.5 bg-white text-[#024ad8] text-[0.6rem] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-md">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        <button onClick={toggleMenu} aria-label="Toggle Menu" className="text-white hover:text-white/90 focus:outline-none transition-colors p-3 flex items-center justify-center rounded-sm hover:bg-white/10">
                            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`lg:hidden transition-all duration-300 ease-in-out bg-[#024ad8] overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 shadow-xl' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pt-2 pb-6 space-y-2 border-t border-white/20">
                    <div className="relative mb-4 mt-4">
                        <input
                            type="text"
                            aria-label="Search products"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyUp={handleSearch}
                            className="w-full bg-white/10 text-white placeholder-white/70 rounded-lg pl-10 pr-4 py-2 border border-white/20 focus:outline-none focus:ring-1 focus:ring-white"
                        />
                        <Search className="absolute left-3 top-2.5 text-white/70 w-5 h-5" />
                    </div>

                    <Link href="/" onClick={toggleMenu} className={getMobileLinkClasses('/')}>Home</Link>
                    <Link href="/about/" onClick={toggleMenu} className={getMobileLinkClasses('/about')}>About Us</Link>

                    <div>
                        <button
                            onClick={toggleShopDropdown}
                            aria-expanded={isShopDropdownOpen}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none ${window.location.pathname.includes('/shop') ? 'text-white bg-white/20' : 'text-white hover:text-white/90 hover:bg-white/10'}`}
                        > Shop <ChevronDown size={16} className={`transform transition-transform duration-300 ${isShopDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`pl-6 space-y-1 transition-all duration-300 overflow-hidden ${isShopDropdownOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                            <Link href="/shop/" onClick={closeAllMenus} className="block px-3 py-3 rounded-md text-sm font-black uppercase tracking-widest text-white bg-white/10 mb-2">Shop All Products</Link>
                            <Link href="/home-printers/" onClick={closeAllMenus} className="block px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">Home Printers</Link>
                            <Link href="/office-printers/" onClick={closeAllMenus} className="block px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">Office Printers</Link>
                            <Link href="/laser-printers/" onClick={closeAllMenus} className="block px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">Laser Printers</Link>
                            <Link href="/inkjet-printers/" onClick={closeAllMenus} className="block px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">Inkjet Printers</Link>
                            <Link href="/ink-toner/" onClick={closeAllMenus} className="block px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">Ink & Toner</Link>
                        </div>
                    </div>

                    <Link href="/faqs/" onClick={toggleMenu} className={getMobileLinkClasses('/faqs')}>FAQs</Link>
                    <Link href="/contact/" onClick={toggleMenu} className={getMobileLinkClasses('/contact')}>Contact Us</Link>

                    <div className="border-t border-white/20 pt-4 mt-4 flex items-center gap-4 px-3 flex-wrap">
                        {isAuthenticated ? (
                            <>
                                {user?.isAdmin && (
                                    <Link href="/admin/dashboard" onClick={toggleMenu} className="w-full flex items-center gap-3 px-3 py-3 bg-white/20 rounded-lg text-white mb-2">
                                        <Zap size={18} className="text-yellow-300" />
                                        <span className="text-sm font-black uppercase tracking-widest">Admin Panel</span>
                                    </Link>
                                )}
                                <div className="w-full flex items-center justify-between bg-white/10 p-3 rounded-lg border border-white/20 mb-2">
                                    <Link href="/profile/" onClick={toggleMenu} className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[#024ad8] shadow-inner flex items-center justify-center text-white font-black text-lg">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-white/70 text-[9px] uppercase tracking-widest font-black">Welcome</span>
                                            <p className="text-white font-black text-sm uppercase tracking-widest truncate max-w-[150px]">
                                                {user.name}
                                            </p>
                                        </div>
                                    </Link>
                                    <button onClick={handleLogout} className="text-white/60 hover:text-red-400 p-2 rounded-full transition-colors">
                                        <LogOut size={20} />
                                    </button>
                                </div>
                            </>
                        ) : (
                            <Link href="/login/" onClick={toggleMenu} className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/20 mb-2 w-full hover:bg-white/20 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                                    <User size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white/70 text-[9px] uppercase tracking-widest font-black">Account</span>
                                    <span className="text-white font-black text-sm uppercase tracking-widest">Sign In</span>
                                </div>
                            </Link>
                        )}

                        <Link href="/track-order/" onClick={toggleMenu} className="flex items-center gap-2 text-white hover:text-white/80 transition-colors w-full">
                            <Truck size={20} />
                            <span>Track Order</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
