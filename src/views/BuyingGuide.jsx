import React from 'react';

const BuyingGuide = () => {
    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto text-left">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    <h1 className="text-4xl font-bold text-black mb-4">Buying Guide</h1>
                    <div className="flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-medium whitespace-nowrap">
                        <p>Effective Date: March 25, 2026</p>
                        <p>Last Updated: March 25, 2026</p>
                    </div>
                </header>

                <div className="space-y-6 text-gray-700 leading-relaxed font-normal text-sm md:text-base">
                    <p>
                        Choosing the correct hardware profile and replenishment matrix is fundamental to operational success. This Strategic procurement framework is designed to streamline your equipment selection and optimize printing infrastructure across the U.S. and Canada.
                    </p>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">1. Solution Architecture</h2>
                        <p>We categorize our inventory based on specific technical requirements and operational environments to ensure a perfect match for your workflow.</p>
                        
                        <h3 className="text-lg font-bold text-black mb-2 mt-4">1.1 Home Infrastructure</h3>
                        <p>Compact, high-fidelity systems optimized for remote professionals, academic workflows, and creative output. Key features include zero-footprint design, wireless handshake capabilities, and versatile media support for diverse residential printing needs.</p>
                        
                        <h3 className="text-lg font-bold text-black mb-2 mt-4">1.2 Office Performance</h3>
                        <p>High-velocity deployment units engineered for enterprise reliability, multi-tenant access, and heavy volume. These units feature rapid output tiers, modular reservoirs, and robust duplex engines to handle rigorous business demands.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">2. Technology Matrix</h2>
                        <p>Understanding the underlying engine technology is critical for project-specific deployment.</p>
                        
                        <h3 className="text-lg font-bold text-black mb-2 mt-4">2.1 Inkjet Precision</h3>
                        <p>Recommended for luxury color reproduction, vibrant marketing collateral, and precision-grade photographic assets where detail and color depth are paramount.</p>
                        
                        <h3 className="text-lg font-bold text-black mb-2 mt-4">2.2 Laser Efficiency</h3>
                        <p>Selected for sharp text clarity, accelerated document throughput, and superior cost-per-page performance in high-document, professional environments.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">3. Procurement Workflow</h2>
                        <p>Follow our standardized approach to equipment acquisition for a seamless fulfillment experience:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Define Requirements:</strong> Audit whether your specific application requires home-tier, enterprise, or specialized hardware.</li>
                            <li><strong>Spec Comparison:</strong> Evaluate page yield metadata, transmission speeds, and encryption protocols.</li>
                            <li><strong>Asset Selection:</strong> Finalize hardware platform and verify compatible replenishment supplies.</li>
                            <li><strong>Deployment:</strong> Execute procurement and await expedited executive logistics delivery.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">4. Quality Curation Guaranteed</h2>
                        <p>
                            Innovation Dynamics Group LLC only manages authorized assets that meet our rigorous standards. This framework empowers your infrastructure with verified printing excellence, authentic manufacturer-backed reliability, and dedicated support.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">5. Assistance & Contact</h2>
                        <p>For procurement-related inquiries or technical guidance, please contact our support center:</p>
                        <div className="mt-4 space-y-2">
                            <p className="font-bold text-black">Innovation Dynamics Group LLC</p>
                            <p>📧 Email: support@innovationdynamicsgroup.com</p>
                            <p>📞 Phone: +1 (651) 815-4630</p>
                            <p>📍 Address: 11397 Quincy St NE, Blaine, MN 55434, United States</p>
                        </div>
                    </div>
                </div>

                <footer className="mt-24 pt-10 border-t border-gray-100 text-center">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                        Innovation Dynamics Group LLC © 2026
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default BuyingGuide;


