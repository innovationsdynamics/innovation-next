 'use client';
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

const faqs = [
    {
        question: "1. What is Innovation Dynamics Group LLC?",
        answer: "Innovation Dynamics Group LLC is an independent online retailer offering printers and printing supplies for home, office, and business use across the United States."
    },
    {
        question: "2. Are you affiliated with brands like HP, Canon, or Epson?",
        answer: "No. Innovation Dynamics Group LLC operates independently and is not affiliated with or endorsed by any manufacturer unless explicitly stated. All brand names and trademarks are used for identification purposes only."
    },
    {
        question: "3. Where do you ship?",
        answer: "We currently ship throughout the United States. Shipping availability may vary based on your location and carrier service."
    },
    {
        question: "4. Do you offer free shipping?",
        answer: "Yes. We offer free shipping on qualifying orders over $50 within the United States. Shipping eligibility and any applicable conditions are shown at checkout."
    },
    {
        question: "5. How long does delivery take?",
        answer: "Estimated delivery within the United States is typically 3–7 business days. Delivery times may vary depending on your location, weather conditions, carrier delays, or other external factors."
    },
    {
        question: "6. How can I track my order?",
        answer: "Once your order has shipped, you'll receive a tracking number via email. You can use it to monitor your shipment through the carrier's website."
    },
    {
        question: "7. What is your return policy?",
        answer: "We offer a 30-day return window for eligible items. Products must be unused and in their original packaging unless they are defective. Please refer to our Return & Refund Policy for complete details."
    },
    {
        question: "8. How long does it take to receive a refund?",
        answer: "Refunds are typically processed within 3–5 business days after the returned item has been received and inspected. The time for the refund to appear in your account may vary depending on your payment provider."
    },
    {
        question: "9. What if I receive a damaged or incorrect item?",
        answer: "If your order arrives damaged or incorrect, please contact us within 48 hours of delivery and provide photos of the product and packaging. We'll arrange a replacement or refund as appropriate."
    },
    {
        question: "10. Can I cancel my order?",
        answer: "Orders may be canceled before they are shipped. Once an order has shipped, cancellations are no longer possible, but eligible items may be returned according to our Return & Refund Policy."
    },
    {
        question: "11. Do your products come with a warranty?",
        answer: "Yes. Most eligible products include the applicable manufacturer warranty. Warranty terms and coverage are determined by the respective manufacturer."
    },
    {
        question: "12. Do you provide technical support?",
        answer: "We provide general product guidance and customer assistance. For technical troubleshooting, warranty claims, or advanced product support, customers should contact the product manufacturer directly."
    },
    {
        question: "13. How is my personal information protected?",
        answer: "We take your privacy seriously and collect only the information necessary to process orders and provide customer support. We do not sell your personal information. Please review our Privacy Policy for more details."
    },
    {
        question: "14. Do you use cookies or tracking technologies?",
        answer: "We use essential cookies to ensure our website functions properly, including features such as shopping cart and checkout. We do not use advertising or third-party tracking cookies."
    },
    {
        question: "15. How can I contact customer support?",
        answer: "You can contact Innovation Dynamics Group LLC by email at support@innovationdynamicsgroup.com or by phone at +1-612-445-9132. Our business address is 11397 Quincy St NE, Blaine, MN 55434."
    }
];

    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    <h1 className="text-4xl font-bold text-black mb-4">Frequently Asked Questions</h1>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-2xl">Find answers to common questions about our products, shipping, orders, and more. Our team is here to help you make informed decisions.</p>
                </header>

                <div className="space-y-4 mb-20 font-medium text-left">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-sm overflow-hidden transition-all duration-300 bg-white ${openIndex === index
                                    ? 'shadow-sm border-[#024ad8]/40'
                                    : 'border-gray-100 hover:border-gray-200'
                                }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50/50 transition-colors group"
                            >
                                <span className={`font-bold text-sm transition-all duration-300 pr-4 ${openIndex === index ? 'text-[#024ad8]' : 'text-black'}`}>
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-sm transition-all duration-300 flex-shrink-0 ${openIndex === index ? 'bg-[#024ad8] text-white' : 'bg-gray-50 text-gray-400'}`}>
                                    {openIndex === index ? (
                                        <Minus size={14} />
                                    ) : (
                                        <Plus size={14} />
                                    )}
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index
                                        ? 'max-h-[500px] opacity-100'
                                        : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 pb-6 pt-0">
                                    <div className="p-5 bg-gray-50 rounded-sm border border-gray-100 text-sm text-gray-600 font-medium leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-gray-100 font-medium">
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                             <HelpCircle className="text-[#024ad8] flex-shrink-0 mt-1" size={18} />
                             <div>
                                <h3 className="font-bold text-black text-sm mb-2">Important Notice</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    Product availability, pricing, and delivery timelines are subject to change without prior notice. Please verify all details before placing an order. Manufacturer warranties are handled directly by the respective brand and may vary by product.
                                </p>
                             </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 border border-gray-100 rounded-sm">
                        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Contact Inquiries</h2>
                        <div className="space-y-6">
                            <div className="space-y-1">
                                <p className="text-xs font-bold text-[#024ad8] uppercase tracking-wider">Support Channel</p>
                                <p className="text-sm font-bold text-black break-all">support@innovationdynamicsgroup.com</p>
                                <p className="text-sm font-bold text-black">+1-612-445-9132</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-bold text-[#024ad8] uppercase tracking-wider">Business Center</p>
                                <div className="text-sm font-medium text-gray-500">
                                    <p>11397 Quincy St NE</p>
                                    <p>Blaine, MN 55434</p>
                                    <p>United States</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="mt-24 pt-10 border-t border-gray-100 text-center">
                    <p className="text-xs text-gray-300 font-medium tracking-wide">
                        Innovation Dynamics Group LLC © 2026 • Dedicated Customer Assistance
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default FAQs;
