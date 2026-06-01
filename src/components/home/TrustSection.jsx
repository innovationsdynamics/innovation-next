import React from 'react';
import { ShieldCheck, Headphones, Check, Truck, Activity } from 'lucide-react';

const TrustSection = () => {
    const commitments = [
        {
            icon: <Truck size={24} />,
            title: "Free Shipping",
            description: "Enjoy free shipping across the United States and Canada on orders over $299, with secure packaging and reliable delivery."
        },
        {
            icon: <Activity size={24} />,
            title: "Order Tracking",
            description: "Stay informed with real-time tracking updates. Once your order is shipped, tracking details are provided so you can monitor delivery progress."
        },
        {
            icon: <ShieldCheck size={24} />,
            title: "Warranty",
            description: "All products are backed by a manufacturer warranty, ensuring quality, reliability, and peace of mind after purchase."
        },
        {
            icon: <Headphones size={24} />,
            title: "Support",
            description: "Access dedicated support for both home and business customers. Assistance is available for product selection, order updates, and post-purchase inquiries."
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden border-t border-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">

                    {/* Left Side: Text and General Commitment */}
                    <div className="flex flex-col justify-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#024ad8]">Service Ethics</span>
                                <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tighter uppercase leading-tight">
                                    Our Service <br/> Commitment
                                </h2>
                                <div className="w-16 h-1 bg-[#024ad8]"></div>
                                <p className="text-gray-700 font-medium text-base sm:text-lg leading-relaxed">
                                    We focus on providing a reliable and transparent experience at every step — from ordering to delivery and ongoing support.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">Our promise to you:</p>
                                <ul className="grid grid-cols-1 gap-4">
                                    {[
                                        "Free shipping on qualifying orders",
                                        "Real-time order tracking updates",
                                        "Full manufacturer warranty support",
                                        "Dedicated expert assistance"
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-center gap-4 group">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[#024ad8] group-hover:bg-[#024ad8] group-hover:text-white transition-all duration-300 border border-blue-100">
                                                <Check size={14} />
                                            </div>
                                            <span className="text-gray-700 font-bold uppercase text-[11px] tracking-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Detailed Commitments Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {commitments.map((item, index) => (
                            <div key={index} className="h-full bg-black p-10 rounded-sm text-white shadow-2xl relative overflow-hidden flex flex-col group hover:bg-[#024ad8] transition-colors duration-500">
                                <div className="text-[#024ad8] bg-white/5 w-14 h-14 flex items-center justify-center rounded-sm mb-8 group-hover:bg-white/10 group-hover:text-white transition-all">
                                    {item.icon}
                                </div>
                                <h3 className="text-sm font-black uppercase tracking-tight mb-4">{item.title}</h3>
                                <p className="text-neutral-200 text-[11px] leading-relaxed font-medium group-hover:text-blue-50 transition-colors">
                                    {item.description}
                                </p>
                                
                                <div className="mt-8 pt-6 opacity-40 group-hover:opacity-100 transition-opacity">
                                    <div className="w-8 h-px bg-white"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TrustSection;
