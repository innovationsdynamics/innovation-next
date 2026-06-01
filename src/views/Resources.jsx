import React from 'react';

const Resources = () => {
    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto text-left">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    <h1 className="text-4xl font-bold text-black mb-4">Support Hub</h1>
                    <div className="flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-medium whitespace-nowrap">
                        <p>Effective Date: March 25, 2026</p>
                        <p>Last Updated: March 25, 2026</p>
                    </div>
                </header>

                <div className="space-y-6 text-gray-700 leading-relaxed font-normal text-sm md:text-base">
                    <p>
                        The Support Hub is your primary source for practical information regarding printers, supplies, and strategic buying decisions. We aim to provide clear, actionable guidance to ensure optimal equipment performance and a seamless ownership experience.
                    </p>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">1. Printer Architecture</h2>
                        <p>Understanding the fundamental differences between hardware tiers is essential for proper selection and long-term satisfaction.</p>
                        
                        <h3 className="text-lg font-bold text-black mb-2 mt-4">1.1 Inkjet Systems</h3>
                        <p>Engineered for liquid-based precision. Ideal for vibrant colors, high-resolution photography, graphics, and everyday diverse creative printing needs.</p>
                        
                        <h3 className="text-lg font-bold text-black mb-2 mt-4">1.2 Laser Infrastructure</h3>
                        <p>Utilizes advanced powder-based toner technology. Best for fast, high-volume document throughput and professional-grade text clarity in office environments.</p>
                        
                        <h3 className="text-lg font-bold text-black mb-2 mt-4">1.3 Operational Tiers</h3>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li><strong>Home Series:</strong> Compact, budget-friendly units designed for low to moderate demand in residential settings.</li>
                            <li><strong>Office Series:</strong> Durable, high-capacity systems built for multi-user environments and high-frequency deployment.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">2. Replenishment Matrix</h2>
                        <p>Selecting the correct supplies directly impacts equipment longevity and cost-per-page efficiency.</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Ink Cartridges:</strong> Precision liquid-base designed for photorealistic output and color-rich documents.</li>
                            <li><strong>Toner Cartridges:</strong> High-yield powder-base engineered for crisp text, stability, and volume efficiency.</li>
                            <li><strong>High-Yield (XL) Options:</strong> Maximum capacity reservoirs designed to reduce replenishment frequency and lower overall operational costs.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">3. Key Performance Indicators (KPIs)</h2>
                        <p>When evaluating hardware assets, focus on these critical technical metrics to ensure they meet your performance goals:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>PPM (Pages Per Minute):</strong> The standard metric for print velocity and throughput efficiency in busy environments.</li>
                            <li><strong>DPI (Dots Per Inch):</strong> Measurement of print resolution affecting the sharpness, clarity, and detail of the final output.</li>
                            <li><strong>Connectivity Sync:</strong> Evaluation of USB, Ethernet, and modern Wireless/Mobile protocols for seamless integration.</li>
                            <li><strong>Duty Cycle:</strong> The maximum monthly operational capacity a system is engineered to handle without technical degradation.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">4. Assistance & Support</h2>
                        <p>If you require help selecting printing products or understanding technical compatibility, please contact our support center. Note that our guidance is strictly limited to product, purchase, and compatibility-related inquiries.</p>
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

export default Resources;

