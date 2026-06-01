import React from 'react';
import Meta from './Meta';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, FileText, Clock, ArrowLeft } from 'lucide-react';

const PolicyLayout = ({ title, lastUpdated, description, children, metaTitle, metaDescription }) => {
    return (
        <div className="bg-[#F8F9FA] min-h-screen pt-32 pb-24 font-sans text-gray-800">
            <Meta title={metaTitle} description={metaDescription} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-gray-400 mb-12">
                    <Link href="/" className="hover:text-[#024ad8] transition-colors">Home</Link>
                    <ChevronRight size={10} />
                    <span className="text-[#024ad8]">Legal</span>
                    <ChevronRight size={10} />
                    <span className="text-black">{title}</span>
                </nav>

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Sidebar Info */}
                    <aside className="lg:w-1/3">
                        <div className="sticky top-32 space-y-8">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white p-10 rounded-sm shadow-2xl border-t-8 border-[#024ad8]"
                            >
                                <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mb-8 text-[#024ad8]">
                                    <Shield size={32} />
                                </div>
                                <h1 className="text-4xl font-black text-black mb-6 leading-tight uppercase tracking-tighter">
                                    {title}
                                </h1>
                                <p className="text-sm text-gray-500 leading-relaxed mb-8">
                                    {description}
                                </p>
                                <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-t border-gray-50 pt-8">
                                    <Clock size={14} />
                                    <span>Last Updated: {lastUpdated}</span>
                                </div>
                            </motion.div>

                            <Link 
                                href="/contact"
                                className="flex items-center justify-between p-6 bg-black text-white rounded-sm group hover:bg-[#024ad8] transition-all duration-500 shadow-xl"
                            >
                                <div className="flex items-center gap-4">
                                    <FileText size={20} />
                                    <span className="text-xs font-bold uppercase tracking-widest">Need Clarification?</span>
                                </div>
                                <ArrowLeft size={18} className="rotate-180 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </aside>

                    {/* Content Area */}
                    <main className="lg:w-2/3">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-12 md:p-20 rounded-sm shadow-sm border border-gray-50 prose prose-blue max-w-none"
                        >
                            <div className="policy-content space-y-12">
                                {children}
                            </div>
                        </motion.div>

                        <div className="mt-16 text-center">
                            <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[.5em]">
                                Innovation Dynamics Group LLC • Official Legal Document
                            </p>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default PolicyLayout;
