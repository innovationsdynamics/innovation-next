'use client';

import React, { useState, useEffect, useRef } from 'react';
import { User, Quote, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
    {
        id: 1,
        name: "William B Adams jr",
        role: "Verified Professional",
        content: "The website provided clear product details, which helped in making a quick decision.",
        rating: 5,
        location: "United States",
        verified: true
    },
    {
        id: 2,
        name: "Glinda Evans",
        role: "Corporate Client",
        content: "The ordering experience was simple, and confirmation details were received promptly.",
        rating: 5,
        location: "United States",
        verified: true
    },
    {
        id: 3,
        name: "Tina L Rocchio",
        role: "Technical Specialist",
        content: "The product arrived as described, and the packaging was handled carefully.",
        rating: 5,
        location: "United States",
        verified: true
    },
    {
        id: 4,
        name: "William Armstrong",
        role: "Business Owner",
        content: "Navigation on the website is straightforward, making it easy to find relevant products.",
        rating: 5,
        location: "United States",
        verified: true
    },
    {
        id: 5,
        name: "Randy Young",
        role: "Logistics Lead",
        content: "Delivery timelines were communicated clearly, and updates were provided along the way.",
        rating: 5,
        location: "United States",
        verified: true
    },
    {
        id: 6,
        name: "Beverley Feather",
        role: "Office Manager",
        content: "The printer matched the specifications listed on the product page.",
        rating: 5,
        location: "United States",
        verified: true
    }
];

const CustomerReviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);
    const containerRef = useRef(null);

    useEffect(() => {
        const updateVisibleCount = () => {
            if (window.innerWidth < 768) setVisibleCount(1);
            else if (window.innerWidth < 1024) setVisibleCount(2);
            else setVisibleCount(3);
        };
        updateVisibleCount();
        window.addEventListener('resize', updateVisibleCount);
        return () => window.removeEventListener('resize', updateVisibleCount);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    // Calculate which reviews to show
    const getVisibleReviews = () => {
        const result = [];
        for (let i = 0; i < visibleCount; i++) {
            result.push(reviews[(currentIndex + i) % reviews.length]);
        }
        return result;
    };

    return (
        <section className="bg-white py-24 border-t border-gray-100 overflow-hidden relative">
            {/* Background Accent Gradient */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/30 to-transparent pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-none tracking-tight"
                    >
                        What Our Customers Say
                    </motion.h2>
                </div>

                {/* Slider Container */}
                <div className="relative group">
                    {/* Navigation Buttons */}
                    <button 
                        onClick={prevSlide}
                        aria-label="Previous slide"
                        className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-20 p-4 bg-white border border-gray-100 rounded-full shadow-xl hover:bg-[#024ad8] hover:text-white transition-all duration-300 hidden md:block"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button 
                        onClick={nextSlide}
                        aria-label="Next slide"
                        className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-20 p-4 bg-white border border-gray-100 rounded-full shadow-xl hover:bg-[#024ad8] hover:text-white transition-all duration-300 hidden md:block"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Responsive Controls for Mobile */}
                    <div className="flex md:hidden justify-end gap-3 mb-4">
                         <button onClick={prevSlide} aria-label="Previous slide" className="p-3 bg-gray-50 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-100 active:scale-95 transition-all outline-none"><ChevronLeft size={20}/></button>
                         <button onClick={nextSlide} aria-label="Next slide" className="p-3 bg-gray-50 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-100 active:scale-95 transition-all outline-none"><ChevronRight size={20}/></button>
                    </div>

                    {/* Review Cards Slider */}
                    <div className="overflow-hidden py-10 px-2" ref={containerRef}>
                        <div className="flex gap-8">
                            <AnimatePresence mode="popLayout" initial={false}>
                                {getVisibleReviews().map((review, index) => (
                                    <motion.div 
                                        key={`${review.id}-${currentIndex}-${index}`}
                                        layout
                                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: -50, scale: 0.9 }}
                                        transition={{ duration: 0.5, ease: "circOut" }}
                                        className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.333px)] flex-shrink-0 group relative bg-white border border-gray-100 p-8 hover:shadow-[0_20px_50px_rgba(2,74,216,0.1)] transition-all duration-500 rounded-sm"
                                    >
                                        {/* Quote Decoration */}
                                        <div className="absolute top-8 right-8 text-gray-50 opacity-10 group-hover:text-blue-50 group-hover:opacity-100 transition-all duration-500">
                                            <Quote size={64} fill="currentColor" />
                                        </div>

                                        <div className="relative z-10 flex flex-col h-full">
                                            {/* User Info at Top */}
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#024ad8] shrink-0 border border-blue-100">
                                                    <User size={24} />
                                                </div>
                                                <div className="flex flex-col">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-base font-black text-black leading-tight">{review.name}</span>
                                                        {review.verified && (
                                                            <CheckCircle2 size={14} className="text-[#024ad8]" />
                                                        )}
                                                    </div>
                                                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.1em]">{review.role}</span>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="relative mb-8">
                                                <p className="text-gray-600 text-base leading-relaxed italic">
                                                    "{review.content}"
                                                </p>
                                            </div>

                                            {/* Footer with Location */}
                                            <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                                                <div className="flex items-center gap-1.5">
                                                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{review.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Progress Dots */}
                    <div className="flex justify-center gap-1 mt-8">
                        {reviews.map((_, i) => (
                            <button 
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                className="p-4 group flex items-center justify-center transition-all border-none bg-transparent"
                            >
                                <div className={`h-1.5 transition-all duration-500 rounded-full ${currentIndex === i ? 'w-8 bg-[#024ad8]' : 'w-2 bg-gray-300 group-hover:bg-gray-400'}`} />
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CustomerReviews;

