'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQHome = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const faqs = [
        {
            question: "1. What types of printers and scanners do you sell?",
            answer: "We carry inkjet printers, laser printers, multifunction (all-in-one) devices, flatbed scanners, sheet-fed scanners, and portable scanners. Our catalog includes models from well-known manufacturers suitable for home, office, and professional use."
        },
        {
            question: "2. Do you ship to all 50 U.S. states?",
            answer: "Yes, we ship to all 50 states within the United States. Orders over $50 qualify for free standard shipping. Standard delivery typically takes 5 to 7 business days depending on your location. Expedited shipping options are available at checkout for an additional fee."
        },
        {
            question: "3. What is your return policy?",
            answer: "We offer a 30-day return policy on most products. Items must be returned in their original packaging and in unused condition. Once we receive and inspect the return, we process refunds within 5 to 10 business days. Please visit our Shipping & Returns page for complete details."
        },
        {
            question: "4. Do your products come with a warranty?",
            answer: "All products sold through Neo Printix include the manufacturer's standard warranty. Warranty terms and duration vary by brand and model. We recommend checking the product listing or the manufacturer's website for specific warranty details for the item you are interested in."
        },
        {
            question: "5. How do I decide between an inkjet and a laser printer?",
            answer: "Inkjet printers are generally better for photo printing and occasional use, with lower upfront costs. Laser printers excel at high-volume text printing with faster speeds and lower cost per page over time. If you print frequently or need sharp text documents, a laser printer is usually the more economical choice. Our buying guides can help you compare in detail."
        },
        {
            question: "6. Can I print from my phone or tablet?",
            answer: "Many of the printers we sell support mobile printing through Wi-Fi, AirPrint (for Apple devices), or manufacturer-specific apps. Check the product specifications to confirm mobile printing compatibility for the model you are considering."
        },
        {
            question: "7. Do you sell ink, toner, or replacement parts?",
            answer: "Our focus is on printers and scanners. For ink, toner, and replacement parts, we recommend purchasing directly from the manufacturer or an authorized supplies retailer to ensure compatibility and quality."
        },
        
        {
            question: "8. How can I contact customer support?",
            answer: "You can reach Innovation Dynamics Group LLC via email at support@innovationdynamicsgroup.com or call +1-612-445-9132. Our business address is 11397 Quincy St NE, Blaine, MN 55434."
        }
    ];

    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 border-b border-gray-100 pb-8">
                    <h1 className="text-4xl font-bold text-black mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-2xl">
                        Find answers to common questions about our products, shipping,
                        orders, returns, and customer support. We're here to help you
                        make informed purchasing decisions.
                    </p>
                </header>

                <div className="space-y-4 mb-20">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-sm overflow-hidden transition-all duration-300 bg-white ${
                                openIndex === index
                                    ? 'shadow-sm border-[#024ad8]/40'
                                    : 'border-gray-100 hover:border-gray-200'
                            }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50/50 transition-colors group"
                            >
                                <span
                                    className={`font-bold text-sm pr-4 transition-colors duration-300 ${
                                        openIndex === index
                                            ? 'text-[#024ad8]'
                                            : 'text-black'
                                    }`}
                                >
                                    {faq.question}
                                </span>

                                <div
                                    className={`p-2 rounded-sm transition-all duration-300 flex-shrink-0 ${
                                        openIndex === index
                                            ? 'bg-[#024ad8] text-white'
                                            : 'bg-gray-50 text-gray-400'
                                    }`}
                                >
                                    {openIndex === index ? (
                                        <Minus size={14} />
                                    ) : (
                                        <Plus size={14} />
                                    )}
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === index
                                        ? 'max-h-[500px] opacity-100'
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-6 pb-6">
                                    <div className="p-5 bg-gray-50 rounded-sm border border-gray-100 text-sm text-gray-600 font-medium leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQHome;