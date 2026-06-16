 'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { Mail, Phone, MapPin, Send, Clock, Info, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');
        
        try {
            const apiURL = '/api';
            await axios.post(`${apiURL}/contact`, formData);
            
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            
            // Auto-reset success message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            setErrorMessage(error.response?.data?.message || 'Failed to send message. Please try again later.');
        }
    };

    return (
        <div className="bg-white text-black min-h-screen">

            {/* Hero Section */}
            <div className="relative bg-black text-white py-32 md:py-44 overflow-hidden border-b-4 border-[#024ad8]">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/contact.jpg"
                        alt="Contact Support"
                        className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
                        onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=1920";
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-3 text-[#024ad8] text-[10px] font-bold tracking-[0.3em] uppercase bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm border border-white/10 mb-8">
                            <Mail size={14} /> Contact Us
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white leading-tight">
                            Get in <br /><span className="text-[#024ad8]">Touch</span>
                        </h1>
                        <div className="w-16 h-1.5 bg-[#024ad8] mb-8"></div>
                        <p className="text-base md:text-lg text-gray-400 font-medium leading-relaxed max-w-xl">
                            Have a question about our products or need help with an order? We're here to assist you.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

                    {/* Left: Contact Form */}
                    <div className="space-y-10">
                        <div className="border-l-4 border-[#024ad8] pl-6">
                            <p className="text-sm text-gray-600 font-medium leading-relaxed">
                                Our team is available to help with product inquiries, order-related questions, and general information about our store and services.
                            </p>
                        </div>

                        <div className="bg-white p-8 md:p-10 rounded-sm border border-gray-100 shadow-lg relative">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#024ad8]"></div>
                            <h2 className="text-2xl font-bold mb-2 flex items-center gap-4 text-black">
                                <Send className="text-[#024ad8]" size={24} />
                                Send a Message
                            </h2>
                            <p className="text-xs text-gray-400 font-medium mb-8">
                                Fill out the form below and we'll get back to you as soon as possible.
                            </p>

                            {status === 'success' && (
                                <div className="mb-8 p-4 bg-green-50 border border-green-100 rounded-sm flex items-center gap-4 text-green-700 font-medium text-sm animate-in fade-in slide-in-from-top-4">
                                    <CheckCircle2 size={20} className="flex-shrink-0" />
                                    Your message has been sent successfully. We'll get back to you soon!
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-sm flex items-center gap-4 text-red-700 font-medium text-sm animate-in fade-in slide-in-from-top-4">
                                    <AlertCircle size={20} className="flex-shrink-0" />
                                    {errorMessage}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-semibold text-[#024ad8] uppercase tracking-wider mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3.5 rounded-sm border border-gray-200 focus:border-[#024ad8] outline-none transition-all bg-gray-50/50 text-sm font-medium placeholder:text-gray-300"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-[#024ad8] uppercase tracking-wider mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3.5 rounded-sm border border-gray-200 focus:border-[#024ad8] outline-none transition-all bg-gray-50/50 text-sm font-medium placeholder:text-gray-300"
                                            placeholder="name@email.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-[#024ad8] uppercase tracking-wider mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3.5 rounded-sm border border-gray-200 focus:border-[#024ad8] outline-none transition-all bg-gray-50/50 text-sm font-medium placeholder:text-gray-300"
                                        placeholder="What is your inquiry about?"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-[#024ad8] uppercase tracking-wider mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3.5 rounded-sm border border-gray-200 focus:border-[#024ad8] outline-none transition-all bg-gray-50/50 text-sm font-medium placeholder:text-gray-300 resize-none"
                                        placeholder="Tell us more about your question or concern..."
                                    ></textarea>
                                </div>
                                <div className="flex items-start gap-3 py-2">
                                    <input
                                        type="checkbox"
                                        id="privacy-consent"
                                        required
                                        className="mt-1 w-4 h-4 text-[#024ad8] border-gray-300 rounded focus:ring-[#024ad8] cursor-pointer"
                                    />
                                        <label htmlFor="privacy-consent" className="text-xs text-gray-500 font-medium leading-relaxed cursor-pointer">
                                        By submitting this form, you agree to our <Link href="/privacy-policy" className="text-[#024ad8] hover:underline mx-0.5">Privacy Policy</Link>, <Link href="/terms-conditions" className="text-[#024ad8] hover:underline mx-0.5">Terms & Conditions</Link>, <Link href="/return-refund" className="text-[#024ad8] hover:underline mx-0.5">Refund & Return Policy</Link> and consent to us using your information to respond to your request.
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-black hover:bg-[#024ad8] text-white font-bold py-4 rounded-sm shadow-lg transition-all text-sm tracking-wide hover:-translate-y-0.5 disabled:opacity-50 flex items-center justify-center gap-3"
                                >
                                    {status === 'loading' ? (
                                        <><Loader2 className="animate-spin" size={18} /> Sending...</>
                                    ) : (
                                        <>Send Message</>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right: Contact Info */}
                    <div className="space-y-10">
                        <h2 className="text-3xl font-bold text-black">Contact Information</h2>

                        <div className="space-y-8">
                            {/* Email */}
                            <div className="flex gap-5 items-start group">
                                <div className="bg-white p-4 rounded-sm border border-gray-100 shadow-sm group-hover:bg-[#024ad8] group-hover:border-[#024ad8] transition-all duration-300">
                                    <Mail className="text-[#024ad8] group-hover:text-white transition-colors" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xs font-semibold text-[#024ad8] uppercase tracking-wider mb-1.5">Email</h3>
                                    <p className="text-base font-semibold text-black">support@innovationdynamicsgroup.com</p>
                                    <p className="text-xs text-gray-400 font-medium mt-1">We typically respond within 24 hours</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex gap-5 items-start group">
                                <div className="bg-white p-4 rounded-sm border border-gray-100 shadow-sm group-hover:bg-[#024ad8] group-hover:border-[#024ad8] transition-all duration-300">
                                    <Phone className="text-[#024ad8] group-hover:text-white transition-colors" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xs font-semibold text-[#024ad8] uppercase tracking-wider mb-1.5">Phone</h3>
                                    <p className="text-base font-semibold text-black">+1-612-445-9132</p>
                                    <p className="text-xs text-gray-400 font-medium mt-1">Available during business hours</p>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex gap-5 items-start group">
                                <div className="bg-white p-4 rounded-sm border border-gray-100 shadow-sm group-hover:bg-[#024ad8] group-hover:border-[#024ad8] transition-all duration-300">
                                    <MapPin className="text-[#024ad8] group-hover:text-white transition-colors" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xs font-semibold text-[#024ad8] uppercase tracking-wider mb-1.5">Address</h3>
                                    <p className="text-base font-semibold text-black leading-snug">
                                        11397 Quincy St NE,<br />Blaine, MN 55434
                                    </p>
                                    <p className="text-xs text-gray-400 font-medium mt-1">United States</p>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="bg-black text-white p-8 rounded-sm shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#024ad8]/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                                <Clock className="text-[#024ad8]" size={22} />
                                Business Hours
                            </h3>
                            <div className="space-y-4 text-sm font-medium">
                                <div className="flex justify-between border-b border-white/10 pb-3">
                                    <span className="text-gray-400">Monday – Friday</span>
                                    <span className="text-white font-semibold">9:00 AM – 6:00 PM</span>
                                </div>
                                <div className="flex justify-between border-b border-white/10 pb-3">
                                    <span className="text-gray-400">Saturday</span>
                                    <span className="text-white font-semibold">10:00 AM – 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Sunday</span>
                                    <span className="text-[#024ad8] font-semibold">Closed</span>
                                </div>
                            </div>
                            <p className="mt-6 text-xs text-gray-500 font-medium">All times are Central Standard Time (CST)</p>
                        </div>

                        {/* What We Can Help With */}
                        <div className="bg-[#F8F9FA] p-8 rounded-sm border border-gray-100">
                            <h3 className="text-sm font-bold text-black mb-5">What we can help with</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    "Product inquiries",
                                    "Order questions",
                                    "Availability details",
                                    "Shipping information",
                                    "Printing supplies info",
                                    "General store inquiries"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 size={15} className="text-[#024ad8] flex-shrink-0" />
                                        <span className="text-sm text-gray-600 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 flex gap-4 p-4 bg-white rounded-sm border border-blue-50">
                                <Info className="text-[#024ad8] flex-shrink-0 mt-0.5" size={16} />
                                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                                    Please note: We provide product and purchase-related assistance only. For manufacturer technical support, please contact the brand directly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

{/* Faq based on contact us  */}
           {/* Contact FAQ */}

<section className="py-16 sm:py-24 bg-[#F8F9FA] border-t border-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Header */}
    <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
      <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#024ad8] mb-4 block">
        Quick Answers
      </span>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-6 leading-tight uppercase">
        Frequently Asked Questions
      </h2>

      <div className="w-16 h-1 bg-[#024ad8] mx-auto mb-6"></div>

      <p className="text-gray-500 font-medium text-base sm:text-lg leading-relaxed">
        Find answers to common questions about contacting our team and
        receiving support.
      </p>
    </div>

    {/* FAQ Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {[
        {
          title: "How Can I Contact Support?",
          description:
            "You can reach our support team by phone or email during normal business hours. We aim to respond as quickly as possible to all inquiries.",
        },
        {
          title: "When Will I Receive A Response?",
          description:
            "Most inquiries receive a response within one business day. Response times may vary depending on the nature and volume of requests.",
        },
        {
          title: "What Types Of Questions Can You Help With?",
          description:
            "Our team can assist with general inquiries, website-related questions, available resources, and other support requests.",
        },
        {
          title: "Do You Offer Assistance By Email?",
          description:
            "Yes. Email support is available for users who prefer written communication and detailed responses to their questions.",
        },
        {
          title: "What Are Your Business Hours?",
          description:
            "Support is available Monday through Friday from 9:00 AM to 5:00 PM CST, excluding major holidays and special closures.",
        },
        {
          title: "Where Is Your Company Located?",
          description:
            "Innovation Dynamics Group LLC is located in Blaine, Minnesota, United States, and serves customers through online support channels.",
        },
      ].map((faq, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#024ad8]/20 transition-all duration-500"
        >
          <div className="w-12 h-12 mb-5 bg-[#024ad8]/10 flex items-center justify-center rounded-sm">
            <span className="text-[#024ad8] font-black text-lg">
              {index + 1}
            </span>
          </div>

          <h3 className="text-sm font-bold text-black mb-3 uppercase tracking-tight">
            {faq.title}
          </h3>

          <p className="text-gray-500 text-[13px] leading-relaxed font-medium">
            {faq.description}
          </p>
        </div>
      ))}
    </div>

    {/* Bottom Text */}
    <div className="text-center mt-12">
      <p className="text-sm text-gray-700 font-bold uppercase tracking-widest bg-white inline-block px-8 py-4 border border-gray-100 rounded-sm">
        We're Here To Help
      </p>
    </div>
  </div>
</section>

            {/* Bottom Section */}
            <div className="py-16 text-center bg-[#F8F9FA] border-t border-gray-100">
                <div className="max-w-3xl mx-auto px-4">
                    <h3 className="text-2xl font-bold mb-4 text-black">We're Here to Help</h3>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">
                        Innovation Dynamics Group LLC is committed to providing clear information, reliable products, and responsive customer support.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
