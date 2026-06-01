import React from 'react';
import { Activity } from 'lucide-react';
const Hero = () => {


    return (
        <div className="bg-white text-gray-900">
            {/* Hero Section: Clean & Authoritative Restoration */}
            <div className="relative overflow-hidden bg-[#F8F9FA] border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        
                        {/* ── Left Content: Refined Typography ────────────────── */}
                        <div className="space-y-8 max-w-2xl text-left">
                            <div className="space-y-6">
                                <div className="inline-block">
                                    <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#024ad8] border-b-2 border-[#024ad8] pb-2">
                                        An Independent eCommerce Retailer
                                    </span>
                                </div>
                                
                                <div className="space-y-4">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black leading-[1.1] text-black tracking-tighter uppercase">
                                     Smart Printing Solutions<br className="hidden md:block" />
                                         <span className="text-[#024ad8]"> for Every Need</span>
                                    </h1>
                                    <h2 className="text-lg md:text-xl font-bold text-gray-500 uppercase tracking-tight">
                                       Reliable Printers for Home, Office, and Business Use
                                    </h2>
                                </div>
                                
                                <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium max-w-xl">
                                    Explore a carefully selected range of printers designed to deliver performance, reliability, and ease of use. Whether you need a compact device for everyday tasks or a high-efficiency printer for business operations, finding the right solution is simple and straightforward.
                                </p>

                                <ul className="space-y-3 pt-2">
                                    {[
                                        "Wide range of trusted printer models",
                                        "Clear product details for informed decisions",
                                        "Secure and user-friendly shopping experience"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-xs font-bold uppercase tracking-tight text-gray-700">
                                            <div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
                                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                    <a 
                                        href="/shop/" 
                                        className="w-full sm:w-auto px-10 py-5 bg-[#024ad8] text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#0133a1] transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl shadow-[#024ad8]/20"
                                    >
                                        Shop Printers
                                    </a>
                                    <a 
                                        href="/home-printers/" 
                                        className="w-full sm:w-auto px-10 py-5 bg-white border border-gray-200 text-black text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
                                    >
                                        Browse Categories
                                    </a>
                                </div>
                                
                                <div className="flex items-center gap-6">
                                    <div className="h-12 w-px bg-gray-200 hidden sm:block"></div>
                                    <a href="https://locator.hp.com/us/en?ml___task=search_zip&ml___id=569440&ml___ml_skip_interstitial=1&ml___url_share_action=1&ml___lang=en-US%20(1)&ml___redirect_commercial_destination_Itemid=1" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                                        <img src="/logo/hp-partner.webp" alt="HP Partner" width="184" height="90" className="h-14 lg:h-23 w-auto object-contain aspect-[120/64]" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* ── Right Content: Original Product Visual ────────────────── */}
                        <div className="relative">
                            <div className="relative z-10 bg-white p-6 md:p-12 rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden group">
                                <div className="relative aspect-[4/3] overflow-hidden bg-[#FDFDFD]">
                                    <picture>
                                        <source srcSet="/hero/hero-right.webp" type="image/webp" />
                                        <img
                                            src="/hero/hero-right.png"
                                            alt="Modern Printing Solutions"
                                            width="700"
                                            height="525"
                                            fetchPriority="high"
                                            className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-1000"
                                        />
                                    </picture>
                                </div>
                                
                                {/* Floating Specs Label */}
                                <div className="absolute -bottom-2 -right-2 z-20 bg-white p-4 md:p-6 shadow-2xl border border-gray-100 hidden md:block">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-gray-50 text-black border border-gray-200">
                                            <Activity size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-[#024ad8] uppercase tracking-[0.1em] mb-0.5">Specifications</p>
                                            <p className="text-sm font-bold text-black uppercase tracking-tight">Precision Output</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Background Accents */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-[#024ad8]/5 rounded-full blur-[120px] pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;
