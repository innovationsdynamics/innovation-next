import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto text-left">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    {/* <h1 className="text-4xl font-bold text-black mb-2">Your Privacy Matters</h1> */}
                    <h2 className="text-2xl font-semibold text-gray-600 mb-4">Privacy Policy</h2>
                    <div className="flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-medium whitespace-nowrap">
                        <p>Last Updated: January 2026</p>
                    </div>
                </header>

                <div className="space-y-6 text-gray-700 leading-relaxed font-normal text-sm md:text-base">
                    <p>
                        <strong>Innovation Dynamics Group LLC</strong> ("we," "our," or "us") is committed to protecting the privacy of our customers and website visitors. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website or make purchases from our online store. By using our website, you acknowledge that you have read and understood this policy.
                    </p>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">1. Information We Collect</h2>
                        <p>We collect information to provide and improve our services. The types of information we may collect include:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Name, email address, phone number</li>
                            <li>Shipping and billing addresses</li>
                            <li>Payment information (processed securely by third parties)</li>
                            <li>Account login credentials</li>
                            <li>Order history and preferences</li>
                            <li>Device information (IP address, browser type, operating system)</li>
                            <li>Website usage data (pages visited, time spent, referral source)</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">2. How We Use Your Information</h2>
                        <p>We use the information we collect for the following purposes:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Process and fulfill your orders</li>
                            <li>Send order confirmations and shipping updates</li>
                            <li>Respond to inquiries and assist you</li>
                            <li>Improve our website, products, and services</li>
                            <li>Prevent fraud and maintain security</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">3. Marketing Communications</h2>
                        <p>With your consent, we may send you promotional emails about new products, special offers, and updates. Marketing communications may include:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Product updates and new arrivals</li>
                            <li>Exclusive discounts and promotions</li>
                            <li>Tips and guides for printers and scanners</li>
                        </ul>
                        <p>You can unsubscribe at any time by clicking the link in our emails or contacting us directly.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">4. Payments & Security</h2>
                        <p>All payments are handled by secure, PCI-compliant third-party processors. We do not store your full credit card information on our servers. We use SSL encryption and industry-standard security tools to protect your data during transmission and storage.</p>
                        <p className="mt-2 font-medium text-black">Your payment information is encrypted and processed securely.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">5. Cookies & Tracking</h2>
                        <p>We use cookies and similar tracking technologies to enhance your browsing experience:</p>
                        
                        <h3 className="text-lg font-bold text-black mb-1 mt-4">Essential Cookies</h3>
                        <p className="mb-3">Required for basic website functionality, including shopping cart and checkout processes.</p>
                        
                        <h3 className="text-lg font-bold text-black mb-1 mt-4">Analytics Cookies</h3>
                        <p className="mb-3">Help us understand how visitors interact with our site to improve user experience.</p>
                        
                        <h3 className="text-lg font-bold text-black mb-1 mt-4">Marketing Cookies</h3>
                        <p className="mb-3">Used to deliver relevant advertisements and track campaign effectiveness.</p>
                        
                        <p className="mt-2">You may disable cookies in your browser settings. For more information, see our Cookie Policy.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">6. Third-Party Advertising</h2>
                        <p>We may work with third-party advertising partners who use cookies to display relevant ads based on your visit to our website. These partners may collect information about your browsing activity across different websites.</p>
                        <p>You can opt out of interest-based advertising through the Network Advertising Initiative or Digital Advertising Alliance.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">7. Data Sharing</h2>
                        <p>We may share your information with trusted third parties who assist us in operating our business:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Payment processors (for secure transaction handling)</li>
                            <li>Shipping carriers (to deliver your orders)</li>
                            <li>Email service providers (to send transactional and marketing emails)</li>
                            <li>Analytics providers (to analyze website traffic and usage)</li>
                            <li>Advertising partners (with your consent, for relevant ads)</li>
                        </ul>
                        <p>It is our policy not to sell, rent, or trade your personal information to third parties for their marketing purposes without your explicit consent.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">8. Your Rights</h2>
                        <p>Depending on your location, you may have certain rights regarding your personal information:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li><strong>Right to Access:</strong> Request a copy of the personal information we hold about you</li>
                            <li><strong>Right to Correct:</strong> Request that we update or correct inaccurate information</li>
                            <li><strong>Right to Delete:</strong> Request deletion of your personal data, subject to legal requirements</li>
                            <li><strong>Right to Opt Out:</strong> Opt out of marketing communications at any time</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">9. California Residents (CCPA)</h2>
                        <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Request disclosure of categories and specific pieces of personal information collected</li>
                            <li>Request deletion of personal information</li>
                            <li>Opt out of the sale of personal information</li>
                            <li>Not be discriminated against for exercising your privacy rights</li>
                        </ul>
                        <p>For more information, see our Do Not Sell My Personal Information page.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">10. Children's Privacy</h2>
                        <p>Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately so we can delete the information.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">11. Policy Updates</h2>
                        <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. Any updates will be posted on this page with a revised "Last updated" date. We encourage you to review this policy periodically.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">12. Contact Us </h2>
                        <p>We're here to help. Reach out to our team for any privacy-related inquiries or to exercise your data rights.</p>
                        
                        <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-100 space-y-2">
                            <p className="font-bold text-black text-lg">Innovation Dynamics Group LLC</p>
                            <p className="flex items-center gap-2">📧 <span>Email: support@innovationdynamicsgroup.com</span></p>
                            <p className="flex items-center gap-2">📞 <span>Phone: +1-612-445-9132</span></p>
                            <p className="flex items-center gap-2">📍 <span>Address: 11397 Quincy St NE, Blaine, MN 55434, United States</span></p>
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

export default PrivacyPolicy;