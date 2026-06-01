import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const HomeContact = () => {
    return (
        <section className="py-16 sm:py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-sm shadow-xl shadow-gray-100 overflow-hidden border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Info Side — Black */}
                        <div className="p-8 sm:p-12 lg:p-16 bg-black text-white flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-[#024ad8]/10 rounded-full blur-3xl -mr-24 -mt-24"></div>
                            <div className="relative z-10 space-y-5 mb-10 sm:mb-12">
                                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                                    Get in <span className="text-[#4fa2ff]">Touch</span> With Us
                                </h2>
                                <p className="text-neutral-200 text-sm leading-relaxed max-w-md">
                                    We're here to help with any questions about printer solutions, orders, or service.
                                    Reach out from our administrative center in Blaine, Minnesota.
                                </p>
                                <div className="w-16 h-1 bg-[#4fa2ff] rounded-sm"></div>
                            </div>

                            <div className="relative z-10 space-y-6 sm:space-y-8">
                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 flex-shrink-0 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center group-hover:bg-[#4fa2ff] transition-all group-hover:border-[#4fa2ff]">
                                        <Mail size={18} className="text-[#4fa2ff] group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[10px] text-neutral-300 font-extrabold uppercase tracking-wider mb-1">Email</p>
                                        <p className="text-sm font-bold text-[#4fa2ff] break-all leading-snug">support@innovationdynamicsgroup.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 flex-shrink-0 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center group-hover:bg-[#4fa2ff] transition-all group-hover:border-[#4fa2ff]">
                                        <Phone size={18} className="text-[#4fa2ff] group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-neutral-300 font-extrabold uppercase tracking-wider mb-1">Phone</p>
                                        <p className="text-sm font-semibold text-white">+1 (651) 815-4630</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 flex-shrink-0 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center group-hover:bg-[#4fa2ff] transition-all group-hover:border-[#4fa2ff]">
                                        <Clock size={18} className="text-[#4fa2ff] group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-neutral-300 font-extrabold uppercase tracking-wider mb-1">Business Hours</p>
                                        <p className="text-sm font-semibold text-gray-300">Mon–Fri, 9:00 AM – 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Address Side */}
                        <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-center text-center bg-white relative">
                            <div className="w-18 h-18 sm:w-24 sm:h-24 bg-gray-50 border border-gray-100 rounded-sm flex items-center justify-center mb-6 sm:mb-8 shadow-lg">
                                <MapPin className="text-[#024ad8]" size={32} />
                            </div>

                            <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">Our Location</h3>
                            <p className="text-xs font-bold text-gray-700 mb-6">Innovation Dynamics Group LLC</p>

                            <div className="text-lg sm:text-xl font-bold text-black space-y-1 mb-8">
                                <p>11397 Quincy St NE</p>
                                <p className="text-[#024ad8]">Blaine, MN 55434</p>
                            </div>

                            <div className="pt-6 border-t border-gray-100 w-full max-w-sm">
                                <p className="text-xs text-black font-medium leading-relaxed">
                                    Focused on delivering a clear, reliable, and professional purchasing experience from product selection through delivery.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeContact;
