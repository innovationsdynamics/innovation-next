import React from 'react';
import {
    FileText,
    CheckCircle,
    Truck,
    ShoppingBag,
    DollarSign,
} from 'lucide-react';

const WhyChooseUs = () => {
    return (
        <section className="py-16 sm:py-24 bg-[#F8F9FA] border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
                    <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#024ad8] mb-4 block text-center">
                        Clear, Reliable, and Focused
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-6 leading-tight uppercase">
                        Why Choose Us
                    </h2>

                    <div className="w-16 h-1 bg-[#024ad8] mx-auto mb-6"></div>

                    <p className="text-gray-500 font-medium text-base sm:text-lg leading-relaxed">
                        Our platform is designed to provide a simple, transparent, and reliable
                        shopping experience, helping customers find the right printing solutions
                        with confidence.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 mb-12">
                    {[
                        {
                            icon: <ShoppingBag className="text-[#024ad8]" size={32} />,
                            title: "Curated Selection",
                            description:
                                "Carefully selected printers and printing supplies for home, office, and business needs."
                        },
                        {
                            icon: <FileText className="text-[#024ad8]" size={32} />,
                            title: "Clear Information",
                            description:
                                "Detailed product descriptions and specifications to help you make informed purchasing decisions."
                        },
                        {
                            icon: <DollarSign className="text-[#024ad8]" size={32} />,
                            title: "Transparent Pricing",
                            description:
                                "Competitive pricing with no hidden fees, so you know exactly what you're paying for."
                        },
                        {
                            icon: <CheckCircle className="text-[#024ad8]" size={32} />,
                            title: "Easy Shopping",
                            description:
                                "A streamlined browsing and secure checkout experience designed for convenience."
                        },
                        {
                            icon: <Truck className="text-[#024ad8]" size={32} />,
                            title: "Reliable Delivery",
                            description:
                                "Fast and dependable shipping throughout the United States with secure packaging and order tracking."
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group"
                        >
                            <div className="mb-6 w-14 h-14 bg-[#F8F9FA] rounded-sm flex items-center justify-center border border-gray-100 group-hover:bg-[#024ad8] group-hover:text-white transition-all duration-500">
                                {item.icon}
                            </div>

                            <h3 className="text-sm font-bold text-black mb-3 group-hover:text-[#024ad8] transition-colors duration-500 leading-tight uppercase tracking-tight">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 text-[13px] leading-relaxed font-medium">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-sm text-gray-700 font-bold uppercase tracking-widest bg-white inline-block px-8 py-4 border border-gray-100 rounded-sm">
                        COMMITTED TO TRANSPARENCY, QUALITY, AND CUSTOMER SATISFACTION
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;