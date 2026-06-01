import React from 'react';
import { Home, Briefcase, Building2, User } from 'lucide-react';

const WhoWeServe = () => {
    return (
        <section className="py-24 bg-white border-t border-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-16">
                    <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#024ad8] mb-4 block">Our Partners</span>
                    <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tighter uppercase leading-tight">
                        Who We Serve
                    </h2>
                    <div className="w-16 h-1 bg-[#024ad8] mx-auto mt-6"></div>
                    <p className="mt-8 text-gray-500 font-medium max-w-3xl mx-auto">
                        Our platform is designed to support a wide range of customers with different printing needs, from everyday use to professional environments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Home Users",
                            description: "Individuals and families looking for reliable printers for daily tasks such as documents, schoolwork, and personal printing.",
                            icon: <Home size={28} className="text-[#024ad8]" />
                        },
                        {
                            title: "Small Businesses",
                            description: "Business owners who need dependable printing solutions for invoices, reports, and regular office operations.",
                            icon: <Briefcase size={28} className="text-[#024ad8]" />
                        },
                        {
                            title: "Office & Corporate Teams",
                            description: "Work environments that require efficient, high-performance printers for consistent and high-volume printing.",
                            icon: <Building2 size={28} className="text-[#024ad8]" />
                        },
                        {
                            title: "Professionals & Remote Workers",
                            description: "Individuals working from home or in professional roles who need reliable and easy-to-use printing solutions.",
                            icon: <User size={28} className="text-[#024ad8]" />
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="p-10 bg-[#F8F9FA] border border-transparent hover:border-[#024ad8]/20 hover:bg-white transition-all duration-500 rounded-sm group">
                            <div className="mb-6 w-14 h-14 bg-white rounded-sm flex items-center justify-center shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-sm font-black text-black uppercase tracking-tight mb-4 group-hover:text-[#024ad8] transition-colors">{item.title}</h3>
                            <p className="text-gray-500 text-xs leading-relaxed font-medium">{item.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhoWeServe;
