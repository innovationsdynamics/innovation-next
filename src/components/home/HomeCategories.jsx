import React from 'react';
import Link from 'next/link';
import { ArrowRight, Printer, Briefcase, Zap, Palette, Droplet, Check } from 'lucide-react';

const HomeCategories = () => {
    const categories = [
        {
            title: "Home Printers",
            description: "Compact and easy-to-use printers suitable for everyday tasks such as documents, schoolwork, and personal use.",
            icon: <Printer size={24} />,
            webp: "/homeImage/img1.webp",
            jpg:  "/homeImage/img1.jpg",
            link: "/home-printers/"
        },
        {
            title: "Office Printers",
            description: "Reliable and efficient printers built for productivity, ideal for business environments and regular document workflows.",
            icon: <Briefcase size={24} />,
            webp: "/homeImage/img2_opt.webp",
            jpg:  "/homeImage/img2.jpg",
            link: "/office-printers/"
        },
        {
            title: "Inkjet Printers",
            description: "Designed for high-quality color printing, making them suitable for photos, graphics, and detailed output.",
            icon: <Palette size={24} />,
            webp: "/homeImage/img3.webp",
            jpg:  "/homeImage/img3.jpg",
            link: "/inkjet-printers/"
        },
        {
            title: "Laser Printers",
            description: "Fast and cost-efficient printing solutions for high-volume tasks and professional document handling.",
            icon: <Zap size={24} />,
            webp: "/homeImage/img4.webp",
            jpg:  "/homeImage/img4.jpg",
            link: "/laser-printers/"
        },
        {
            title: "Ink & Toner",
            description: "A range of compatible ink and toner supplies to support consistent print quality and long-term usage.",
            icon: <Droplet size={24} />,
            webp: "/homeImage/img5_opt_super.webp",
            jpg:  "/homeImage/img5.jpg",
            link: "/ink-toner/"
        }
    ];

    return (
        <section id="catalog" className="py-24 md:py-32 bg-[#fcfcfd] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-1 bg-[#024ad8]"></div>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0133a1]">Catalog</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-black tracking-tighter uppercase">What We Sell</h2>
                        <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed">
                            We offer a focused selection of printers and essential printing supplies designed to meet the needs of both home users and business environments.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <Link href="/shop/" className="text-[10px] font-black uppercase tracking-[0.2em] text-black border-b-2 border-black pb-1 hover:text-[#024ad8] hover:border-[#024ad8] transition-all">
                            View Entire Store
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {categories.map((type, index) => (
                        <Link
                            key={index}
                            href={type.link}
                            className={`group relative h-full transition-all duration-700 ${index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                        >
                            <div className="bg-white rounded-sm overflow-hidden h-full flex flex-col border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_50px_rgba(2,74,216,0.1)] group-hover:-translate-y-2 transition-all duration-500">
                                <div className="relative h-56 sm:h-64 overflow-hidden bg-[#fafafa] p-6 lg:p-10">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                    <picture>
                                        <source srcSet={type.webp} type="image/webp" />
                                        <img
                                            src={type.jpg}
                                            alt={type.title}
                                            width="400"
                                            height="300"
                                            loading="lazy"
                                            className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-1000 mix-blend-multiply"
                                        />
                                    </picture>
                                    <div className="absolute top-6 left-6 flex flex-col items-center">
                                        <div className="bg-white w-10 h-10 rounded-sm flex items-center justify-center text-black shadow-sm border border-gray-100 group-hover:bg-[#024ad8] group-hover:text-white transition-colors duration-500">
                                            {type.icon}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 lg:p-10 flex-grow flex flex-col border-t border-gray-50">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-[8px] font-black text-[#0133a1] uppercase tracking-[0.2em]">Category 0{index + 1}</span>
                                        <div className="flex-grow h-px bg-gray-100"></div>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-black text-black uppercase tracking-tighter mb-4 group-hover:text-[#024ad8] transition-colors">
                                        {type.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow font-medium line-clamp-3">
                                        {type.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-black font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-[#024ad8] transition-colors">
                                            EXPLORE SERIES <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
                                        </div>
                                        <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all">
                                            <Check className="text-[#024ad8]" size={14} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeCategories;
