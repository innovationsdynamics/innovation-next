import React from 'react';

const Disclaimer = () => {
    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto text-left">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    <h1 className="text-4xl font-bold text-black mb-4">Disclaimer</h1>
                    <div className="flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-medium whitespace-nowrap">
                        <p>Last Updated: March 25, 2026</p>
                    </div>
                </header>

                <div className="space-y-6 text-gray-700 leading-relaxed font-normal text-sm md:text-base">
                    <p>
                        Innovation Dynamics Group LLC is committed to providing accurate, clear, and helpful information to support informed purchasing decisions. This Disclaimer applies to all content, products, and services available on our website.
                    </p>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">1. Product Information & Accuracy</h2>
                        <p>We make reasonable efforts to ensure that product details—including specifications, descriptions, pricing, availability, and images—are accurate and up to date. However:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Product specifications, features, and packaging may change without notice by manufacturers</li>
                            <li>Product appearance (such as color) may vary depending on display settings and lighting conditions</li>
                            <li>Print yields and performance metrics are based on manufacturer standards and may vary in actual use</li>
                            <li>Occasional typographical errors or outdated information may occur</li>
                        </ul>
                        <p>All product information is provided on an "as-is" and "as-available" basis for general reference only.</p>
                        <p className="mt-4 font-bold">We do not guarantee that all product details are always complete, current, or error-free.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">2. Usage & Performance Disclaimer</h2>
                        <p>Product performance may vary based on factors outside our control, including:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Usage frequency and print volume</li>
                            <li>Environmental conditions (temperature, humidity, dust)</li>
                            <li>Paper type and print settings</li>
                            <li>Maintenance and device condition</li>
                            <li>Use of compatible or third-party consumables</li>
                        </ul>
                        <p><strong>Important:</strong> Any references to cost savings, efficiency, or performance are general estimates only and are not guaranteed. Innovation Dynamics Group LLC does not guarantee specific print yields, cost savings, or performance outcomes.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">3. Independent Retailer & Trademark Disclaimer</h2>
                        <p>All product names, logos, trademarks, and brand images (including but not limited to HP, Canon, Epson, Brother, and others) are the property of their respective owners and are used strictly for identification and compatibility purposes.</p>
                        
                        <p className="mt-4 font-bold text-black">Innovation Dynamics Group LLC:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Operates as an independent online retailer</li>
                            <li>Is not affiliated with, endorsed by, or officially authorized by any manufacturer unless explicitly stated</li>
                            <li>Does not claim any official partnership, certification, or dealership status</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">4. Manufacturer Warranty Disclaimer</h2>
                        <p>Manufacturer warranties are provided solely by the respective brands and are subject to their individual terms and conditions.</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Warranty coverage may vary by product, region, and usage</li>
                            <li>Use of third-party or non-OEM consumables may affect warranty eligibility depending on manufacturer policies</li>
                        </ul>
                        <p className="font-bold">Customers are advised to review manufacturer warranty documentation for full details.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">5. No Professional or Technical Advice</h2>
                        <p>All information on this website is provided for general informational purposes only and should not be considered professional, technical, or legal advice.</p>
                        
                        <p className="mt-4">Customers are responsible for verifying:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Product compatibility</li>
                            <li>Installation and usage requirements</li>
                            <li>Warranty terms and limitations</li>
                        </ul>
                        <p>For clarification, customers are encouraged to contact us prior to purchase.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">6. Limitation of Reliance</h2>
                        <p>Users agree that any reliance on the information provided on this website is at their own discretion.</p>
                        <p className="mt-4 font-bold">Innovation Dynamics Group LLC shall not be held liable for decisions made based on website content or product descriptions.</p>
                    </div>

                    <div id="contact" className="pt-12 border-t border-gray-100 mt-8">
                        <h2 className="text-xl font-bold text-black mb-6">7. Contact Us</h2>
                        <p>For product inquiries, clarification, or assistance before making a purchase, please contact us:</p>
                        <div className="mt-4 space-y-2">
                            <p className="font-bold text-black">Innovation Dynamics Group LLC</p>
                            <p>📧 Email: support@innovationdynamicsgroup.com</p>
                            <p>📞 Phone: +1 (651) 815-4630</p>
                            <p>📍 Registered Address:<br/>11397 Quincy St NE<br/>Blaine, MN 55434<br/>United States</p>
                        </div>
                        <p className="mt-6">We are committed to providing clear and helpful assistance to all customers.</p>
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

export default Disclaimer;
