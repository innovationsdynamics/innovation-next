import React from 'react';
import Link from 'next/link';
import {
    Target, ShieldCheck, Printer, Users, ArrowRight, CheckCircle,
    Search, FileText, DollarSign, Truck, MessageSquare, Scale,
    Eye, RefreshCcw, UserCheck, Clock, Award, ExternalLink, MapPin, Mail, Phone
} from 'lucide-react';

const About = () => {
    const howWeWork = [
        {
            icon: <Search size={24} />,
            title: "Product Evaluation & Selection",
            text: "Before a product is listed, it is evaluated based on availability, intended use, consumable access, and long-term support. Products are not added just to expand the catalog. Each listing is selected because it serves a clear purpose."
        },
        {
            icon: <FileText size={24} />,
            title: "Accurate Listings & Documentation",
            text: "Product pages are structured to provide clear and useful information. Specifications, compatibility details, and usage guidance are written to help customers understand the product, not to promote it."
        },
        {
            icon: <DollarSign size={24} />,
            title: "Transparent Pricing & Checkout",
            text: "Pricing reflects actual value based on sourcing and logistics. There are no artificial discounts or misleading offers. Customers see clear pricing without hidden fees or unexpected conditions."
        },
        {
            icon: <Truck size={24} />,
            title: "Order Handling & Fulfillment",
            text: "Orders are processed through a consistent workflow. Products are packed securely and shipped through reliable carriers. Inventory is managed to reflect actual availability at the time of purchase."
        },
        {
            icon: <MessageSquare size={24} />,
            title: "Customer Communication",
            text: "Communication is handled in a clear and structured way. Support is available for product questions, order updates, and post-purchase assistance. Responses focus on providing accurate and helpful information."
        },
        {
            icon: <Scale size={24} />,
            title: "Policy-Driven Operations",
            text: "Returns, refunds, and order-related issues are handled according to clearly defined policies. This ensures consistency and helps customers understand what to expect throughout the process."
        }
    ];

    const differentiators = [
        {
            icon: <Target size={24} />,
            title: "Focused Catalog, Not Overloaded Listings",
            text: "Many online stores list a large number of similar products, which can make choosing difficult. Here, the catalog is intentionally selective. Products are included because they serve a specific purpose."
        },
        {
            icon: <Eye size={24} />,
            title: "Clarity Over Marketing Language",
            text: "Product information is presented clearly and factually. Instead of relying on promotional language, listings focus on real-world usage, compatibility, and performance."
        },
        {
            icon: <RefreshCcw size={24} />,
            title: "Long-Term Usability in Mind",
            text: "Product selection considers long-term use, including consumable availability and ongoing support. This helps reduce issues that often arise after purchase."
        },
        {
            icon: <UserCheck size={24} />,
            title: "Clear Responsibility",
            text: "All operations—from product listings to order fulfillment and support—are handled within a single system. Customers know exactly who they are buying from."
        },
        {
            icon: <Clock size={24} />,
            title: "Predictable Process",
            text: "Delivery timelines and order handling are based on realistic expectations rather than best-case scenarios. This helps create a more predictable and reliable experience."
        },
        {
            icon: <Award size={24} />,
            title: "Built for Informed Buyers",
            text: "This platform is designed for customers who value clarity, accuracy, and reliability. The focus is on helping people make informed decisions without pressure or confusion."
        }
    ];

    return (
        <div className="bg-white text-black font-sans leading-relaxed">
            {/* ── Hero Section: Professional & Authoritative ────────────────── */}
            <div className="relative bg-black text-white py-24 md:py-36 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black z-10"></div>
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-3 text-[#024ad8] text-[10px] font-bold tracking-[0.3em] uppercase bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm border border-white/10 mb-8">
                            <Users size={14} /> About Innovation Dynamics Group
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter text-white leading-[1.1]">
                            An Independent <br />
                            <span className="text-[#024ad8]">eCommerce Retailer</span>
                        </h1>
                        <p className="text-sm md:text-lg text-gray-400 font-medium leading-relaxed max-w-3xl mb-10">
                            Innovation Dynamics Group LLC, based in Blaine, Minnesota, USA, is a registered and legitimate business operating as an independent online retailer specializing in printers and related equipment for home, office, and professional use.
                            <br />

                            Established in 2024, we have successfully served 1,000+ customers across the United States and Canada, supporting both individual users and businesses with reliable printing solutions and a structured, transparent online shopping experience.
                        </p>

                        <div className="mt-16 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
                            <div className="flex flex-col gap-2">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white-700 mb-2">Verified Distribution</span>
                                <a
                                    href="https://locator.hp.com/us/en/?ml___task=search_zip&ml___id=569440&ml___ml_skip_interstitial=1&ml___url_share_action=1&ml___lang=en-US%20(1)&ml___redirect_commercial_destination_Itemid=1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 pl-1 pr-6 py-1.5 bg-white shadow-xl rounded-full hover:scale-105 transition-all duration-500"
                                >
                                    <div className="w-10 h-10 bg-[#024ad8] rounded-full flex items-center justify-center">
                                        <ShieldCheck size={18} className="text-white" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-[#024ad8]">Official License</span>
                                        <span className="text-[11px] font-bold text-black uppercase tracking-widest">HP AUTHORISED PARTNER</span>
                                    </div>
                                </a>
                            </div>

                            <div className="flex flex-col items-center md:items-end gap-2">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white-700 mb-2">Corporate Registration</span>
                                <a
                                    href="https://mblsportal.sos.mn.gov/Business/SearchDetails?filingGuid=f20eb44b-2111-ef11-9081-00155d01c440"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-row-reverse items-center gap-4 pr-1 pl-6 py-1.5 bg-white shadow-xl rounded-full hover:scale-105 transition-all duration-500"
                                >
                                    <div className="w-10 h-10 bg-[#024ad8] rounded-full flex items-center justify-center">
                                        <Award size={18} className="text-white" />
                                    </div>
                                    <div className="flex flex-col items-end ">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-[#024ad8]">Verified Entity</span>
                                        <span className="text-[11px] font-bold text-black uppercase tracking-widest">REGISTERED BUSINESS</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Section: Our Responsibility ────────────────────────────── */}
            <section className="py-20 bg-[#F8F9FA] border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight leading-tight">
                                Direct Sourcing & <br />Operational Accountability
                            </h2>
                            <div className="w-16 h-1 bg-[#024ad8]"></div>
                            <div className="space-y-4 text-gray-600 font-medium">
                                <p>
                                    We are not a marketplace or a multi-seller platform. Every product available on the website is sourced through verified distribution channels and managed directly under our operational responsibility.
                                </p>
                                <p>
                                    This approach allows for better control over product accuracy, availability, and fulfillment, ensuring customers interact with a single, accountable retailer rather than multiple sellers with inconsistent policies.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                                {[
                                    { title: "Free Shipping", text: "Above $249" },
                                    { title: "Full Warranty", text: "Manufacturer Backed" },
                                    { title: "Expert Support", text: "Dedicated Assistance" }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-4 bg-white border border-gray-100 rounded-sm">
                                        <p className="text-[#024ad8] text-xs font-bold uppercase mb-1">{item.title}</p>
                                        <p className="text-[11px] text-gray-500 font-bold">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-black p-8 md:p-12 text-white rounded-sm shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#024ad8]/10 rounded-full blur-3xl group-hover:bg-[#024ad8]/20 transition-all duration-700"></div>
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <ShieldCheck className="text-[#024ad8]" /> Our Service Commitment
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                The focus is on delivering a clear, reliable, and professional purchasing experience from product selection through delivery.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Accuracy Over Promotion",
                                    "Focused on Practical Printer Use",
                                    "Structured Fulfillment & Logistics",
                                    "Dedicated Manufacturer Warranty Support"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-300">
                                        <div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Section: Philosophy ────────────────────────────────────── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-5">
                            <div className="w-12 h-12 bg-blue-50 text-[#024ad8] flex items-center justify-center rounded-sm">
                                <Printer size={24} />
                            </div>
                            <h3 className="text-xl font-extrabold text-black">Focused on Practical Use</h3>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                Printers are not simple purchases. They are chosen based on workload, compatibility, consumables, and long-term usability. Instead of listing hundreds of similar options, products are organized to help customers quickly identify what fits their needs without unnecessary complexity.
                            </p>
                        </div>
                        <div className="space-y-5">
                            <div className="w-12 h-12 bg-blue-50 text-[#024ad8] flex items-center justify-center rounded-sm">
                                <FileText size={24} />
                            </div>
                            <h3 className="text-xl font-extrabold text-black">Accuracy Over Promotion</h3>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                Product listings are designed to inform, not persuade. Specifications, compatibility details, and features are presented clearly and factually. We avoid exaggerated claims, allowing customers to make decisions based on real information.
                            </p>
                        </div>
                        <div className="space-y-5">
                            <div className="w-12 h-12 bg-blue-50 text-[#024ad8] flex items-center justify-center rounded-sm">
                                <Truck size={24} />
                            </div>
                            <h3 className="text-xl font-extrabold text-black">Structured Logistics</h3>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                Orders are handled through established processes designed to keep things reliable and predictable. Products are shipped as factory-sealed units and packaged carefully. Delivery timelines are communicated based on realistic expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Section: How We Work (Process) ─────────────────────────── */}
            <section className="py-24 bg-black text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                    <Printer size={300} strokeWidth={1} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">How We Work</h2>
                        <div className="w-20 h-1 bg-[#024ad8] mx-auto mb-6"></div>
                        <p className="text-gray-400 font-medium leading-relaxed">
                            Every part of the process is built around clarity and consistency—from product selection to post-purchase support.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {howWeWork.map((item, idx) => (
                            <div key={idx} className="group p-8 border border-white/10 hover:border-[#024ad8]/50 transition-all duration-300 relative">
                                <div className="text-[#024ad8] mb-6 transform group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg font-black uppercase mb-4 group-hover:text-[#024ad8] transition-colors">{item.title}</h4>
                                <p className="text-sm text-gray-400 font-medium leading-relaxed">{item.text}</p>
                                <span className="absolute top-4 right-4 text-[40px] font-black text-white/5 group-hover:text-[#024ad8]/10 transition-colors">0{idx + 1}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Section: What Makes Us Different ──────────────────────── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-20 text-center md:text-left">
                        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#024ad8] mb-4 block">Differentiation</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight leading-tight">
                            What Makes This <br />Platform Different
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {differentiators.map((item, idx) => (
                            <div key={idx} className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-14 h-14 bg-[#F8F9FA] text-black border border-gray-100 flex items-center justify-center rounded-sm shadow-sm">
                                    {item.icon}
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-lg font-bold text-black uppercase">{item.title}</h4>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-10 bg-gray-50 border border-gray-100 rounded-sm text-center">
                        <p className="text-sm text-gray-600 font-semibold mb-0">
                            "This platform is designed for customers who value clarity, accuracy, and reliability. The focus is on helping people make informed decisions without pressure, confusion, or unnecessary complexity."
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Section: Business Information ─────────────────────────── */}
            <section className="py-24 bg-[#F8F9FA] border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-sm shadow-xl border border-gray-100 overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-3">
                            <div className="p-10 lg:p-14 bg-black text-white space-y-8">
                                <h3 className="text-2xl font-black uppercase">Business <br /> Information</h3>
                                <div className="w-12 h-1 bg-[#024ad8]"></div>
                                <p className="text-sm text-gray-400 font-medium leading-relaxed">
                                    Innovation Dynamics Group LLC is a registered and legitimate business entity committed to professional standards in eCommerce.
                                </p>
                            </div>
                            <div className="p-10 lg:p-14 border-r border-gray-100 flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-10 h-10 bg-blue-50 text-[#024ad8] flex items-center justify-center rounded-sm">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Address</p>
                                        <p className="text-sm font-bold text-black">11397 Quincy St NE <br /> Blaine, MN 55434, USA</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-blue-50 text-[#024ad8] flex items-center justify-center rounded-sm">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Contact</p>
                                        <p className="text-sm font-bold text-black">+1 (651) 815-4630</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-10 lg:p-14 flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-10 h-10 bg-blue-50 text-[#024ad8] flex items-center justify-center rounded-sm">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Email</p>
                                        <p className="text-sm font-bold text-[#024ad8]">support@innovationdynamicsgroup.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-blue-50 text-[#024ad8] flex items-center justify-center rounded-sm">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Support Hours</p>
                                        <p className="text-sm font-bold text-black">Mon–Fri, 9AM – 5PM CST</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Final CTA ──────────────────────────────────────────────── */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-shadow-lg font-black uppercase mb-8">Focusing on clarity so you can focus on clarity.</h2>
                    <Link href="/shop" className="inline-flex items-center gap-10 px-12 py-5 bg-[#024ad8] text-white font-black rounded-sm hover:bg-black transition-all shadow-2xl hover:-translate-y-1">
                        VIEW OUR FOCUSED CATALOG <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
