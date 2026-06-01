import React from 'react';
import { Truck, Shield, Globe, Award, ArrowRight } from 'lucide-react';

const CorporateAccountability = () => {
    return (
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
            {/* Subtle background accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#024ad8]/3 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Label */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-0.5 bg-[#024ad8]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#024ad8]">
                        Innovation Dynamics Direct Distribution
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tighter leading-tight mb-8">
                    An Independent <span className="text-[#024ad8]">eCommerce Retailer</span>
                </h2>

                {/* Body paragraphs */}
                <div className="space-y-5 mb-10">
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
                        Innovation Dynamics Group LLC, based in Blaine, Minnesota, USA, operates as an independent online retailer focused exclusively on printers and related equipment for home, office, and professional use.
                    </p>

                    {/* Blockquote */}
                    <blockquote className="border-l-4 border-[#024ad8] pl-6 py-3 bg-gray-50 rounded-r-sm">
                        <p className="text-black font-semibold text-base md:text-lg leading-relaxed">
                            "We are not a marketplace or a multi-seller platform. Every product available on the website is sourced through verified distribution channels and managed directly under our operational responsibility."
                        </p>
                    </blockquote>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl">
                        This approach allows for better control over product accuracy, availability, and fulfillment, ensuring customers interact with a single, accountable retailer rather than multiple sellers with inconsistent policies.
                    </p>
                </div>

                {/* Benefit pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                    {[
                        { icon: <Truck size={20} className="text-[#024ad8]" />,  title: "Free Shipping" },
                        { icon: <Shield size={20} className="text-[#024ad8]" />, title: "Manufacturer Warranty" },
                        { icon: <Globe size={20} className="text-[#024ad8]" />,  title: "Dedicated Support" },
                        { icon: <Award size={20} className="text-[#024ad8]" />,  title: "Verified Distribution" },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col sm:flex-row items-center sm:items-center gap-3 bg-gray-50 border border-gray-100 rounded-sm px-4 py-4 hover:border-[#024ad8]/30 hover:bg-[#024ad8]/3 transition-all duration-300"
                        >
                            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100">
                                {item.icon}
                            </div>
                            <span className="text-[10px] font-black text-gray-800 uppercase tracking-widest text-center sm:text-left leading-tight">
                                {item.title}
                            </span>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <a
                    href="/shop"
                    className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-[#024ad8] hover:translate-x-2 transition-transform duration-300 group"
                >
                    EXPLORE PRODUCTS
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </section>
    );
};

export default CorporateAccountability;
