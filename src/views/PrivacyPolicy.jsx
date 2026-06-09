import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto text-left">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    <h1 className="text-4xl font-bold text-black mb-4">Privacy Policy</h1>
                    <div className="flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-medium whitespace-nowrap">
                        <p>Effective Date: March 25, 2026</p>
                        <p>Last Updated: March 25, 2026</p>
                    </div>
                </header>

                <div className="space-y-6 text-gray-700 leading-relaxed font-normal text-sm md:text-base">
                    <p>
                        Innovation Dynamics Group LLC ("we," "our," or "us") is committed to protecting your privacy and ensuring full transparency in how your personal information is collected, used, and managed. This Privacy Policy explains our data practices in accordance with applicable laws in the United States and Canada, including expectations under Microsoft Advertising and Google Ads policies.
                    </p>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">1. Data Controller Information</h2>
                        <ul className="list-none space-y-1">
                            <li><strong>Innovation Dynamics Group LLC</strong></li>
                            <li>📧 Email: support@innovationdynamicsgroup.com</li>
                            <li>📞 Phone: +1-612-445-9132</li>
                            <li>📍 Address: 11397 Quincy St NE, Blaine, MN 55434, United States</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">2. Information We Collect</h2>
                        <p>We collect only the information necessary to operate our eCommerce platform, process orders, and provide customer support.</p>
                        
                        <h3 className="text-lg font-bold text-black mb-2 mt-4">2.1 Information You Provide</h3>
                        <p>When you interact with our website, we may collect:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Billing and shipping address</li>
                            <li>Order and transaction details</li>
                            <li>Account login credentials (if applicable)</li>
                            <li>Customer service communications</li>
                        </ul>
                        <p><strong>Payment Information:</strong> Payments are processed securely via PCI DSS–compliant third-party providers. We do not store full credit/debit card details.</p>
                        
                        <h3 className="text-lg font-bold text-black mb-2 mt-6">2.2 Information Collected Automatically</h3>
                        <p>When you browse our website, certain data may be collected automatically:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>IP address</li>
                            <li>Browser type and version</li>
                            <li>Device type and operating system</li>
                            <li>Pages visited and session activity</li>
                            <li>Cart and checkout session data</li>
                            <li>Basic device metrics</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">3. How We Use Your Information</h2>
                        <p>We use your information for legitimate business purposes only:</p>
                        
                        <h3 className="text-lg font-bold text-black mb-2 mt-4">3.1 Order Processing</h3>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Process and fulfill purchases</li>
                            <li>Send order confirmations and updates</li>
                            <li>Coordinate shipping and delivery</li>
                        </ul>

                        <h3 className="text-lg font-bold text-black mb-2 mt-4">3.2 Customer Support</h3>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Respond to inquiries</li>
                            <li>Provide assistance with orders, returns, or issues</li>
                        </ul>

                        <h3 className="text-lg font-bold text-black mb-2 mt-4">3.3 Security & Compliance</h3>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Detect fraud or unauthorized activity</li>
                            <li>Maintain website security</li>
                            <li>Comply with legal obligations</li>
                        </ul>

                        <h3 className="text-lg font-bold text-black mb-2 mt-4">3.4 Website Functionality</h3>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Ensure proper site performance</li>
                            <li>Improve user experience and checkout flow</li>
                        </ul>
                        <p><strong>Legal Basis:</strong> Contractual necessity, legitimate business interest, legal compliance, and user consent where applicable.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">4. How We Share Information</h2>
                        <p>We do not sell or rent your personal data. We only share information when necessary:</p>
                        
                        <h3 className="text-lg font-bold text-black mb-2 mt-4">4.1 Service Providers</h3>
                        <p>We may share data with trusted partners for:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Payment processing</li>
                            <li>Shipping and logistics</li>
                            <li>Website hosting and security</li>
                            <li>Customer support systems</li>
                        </ul>
                        <p>All partners are required to maintain confidentiality and use data only for authorized purposes.</p>

                        <h3 className="text-lg font-bold text-black mb-2 mt-6">4.2 Legal Requirements</h3>
                        <p>We may disclose data if required by:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Law enforcement</li>
                            <li>Court orders</li>
                            <li>Regulatory authorities</li>
                        </ul>

                        <h3 className="text-lg font-bold text-black mb-2 mt-6">4.3 Business Transfers</h3>
                        <p>In case of a merger or acquisition, your data may be transferred. Users will be notified of such changes.</p>

                        <h3 className="text-lg font-bold text-black mb-2 mt-6">4.4 With Consent</h3>
                        <p>We will share your information only when you explicitly authorize us to do so.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">5. Cookies & Tracking Technologies</h2>
                        <p>We are committed to transparency regarding tracking and data usage.</p>
                        
                        <h3 className="text-lg font-bold text-black mb-2 mt-4">5.1 Types of Cookies We Use</h3>
                        <p>We use limited and essential cookies, including:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Cart and checkout functionality cookies</li>
                            <li>Session and security cookies</li>
                            <li>Basic preference cookies (e.g., region/language)</li>
                        </ul>

                        <h3 className="text-lg font-bold text-black mb-2 mt-4">5.2 Analytics & Tracking Disclosure</h3>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>We do not use behavioral advertising cookies or cross-site tracking technologies.</li>
                            <li>We do not sell or share personal data for advertising purposes.</li>
                            <li>If analytics or tracking tools (such as conversion tracking or performance measurement tools) are implemented in the future, they will be clearly disclosed in this policy.</li>
                        </ul>

                        <h3 className="text-lg font-bold text-black mb-2 mt-4">5.3 Third-Party Technologies</h3>
                        <p>Some third-party service providers (such as payment processors or hosting services) may use limited technical cookies necessary for their functionality.</p>

                        <h3 className="text-lg font-bold text-black mb-2 mt-4">5.4 Cookie Consent & Control</h3>
                        <p>You have full control over cookie usage:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>You can accept or reject non-essential cookies through our cookie banner (if applicable)</li>
                            <li>You can disable cookies via browser settings</li>
                            <li>You can manage preferences through your device settings</li>
                        </ul>
                        <p>⚠️ <strong>Note:</strong> Disabling essential cookies may impact website functionality (e.g., checkout process).</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">6. Your Privacy Rights</h2>
                        <p>Depending on your location (including Canada and certain U.S. states), you may have the following rights:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Access your personal data</li>
                            <li>Request correction of inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Restrict or object to data processing</li>
                            <li>Withdraw consent</li>
                            <li>Request data portability</li>
                        </ul>
                        <p>To exercise your rights:</p>
                        <p className="mt-2 font-medium text-black">📧 support@innovationdynamicsgroup.com</p>
                        <p className="mt-2">We respond to verified requests within 30 days.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">7. Opt-Out Options</h2>
                        
                        <h3 className="text-lg font-bold text-black mb-2 mt-4">7.1 Email Communications</h3>
                        <p>You may opt out of non-essential emails by:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Clicking "Unsubscribe" in emails</li>
                            <li>Contacting us directly</li>
                        </ul>
                        <p>Transactional emails (order updates, invoices) will still be sent as necessary.</p>

                        <h3 className="text-lg font-bold text-black mb-2 mt-6">7.2 Tracking & Cookies</h3>
                        <p>You can:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Disable cookies via browser settings</li>
                            <li>Reject non-essential cookies (if enabled)</li>
                            <li>Limit tracking through device or browser privacy controls</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">8. Data Retention</h2>
                        <p>We retain personal data only as long as necessary to:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Complete transactions</li>
                            <li>Provide customer support</li>
                            <li>Meet legal obligations</li>
                            <li>Prevent fraud</li>
                        </ul>
                        <p>Data is securely deleted or anonymized when no longer required.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">9. Data Security</h2>
                        <p>We implement industry-standard safeguards:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>HTTPS/TLS encryption</li>
                            <li>Secure servers and firewalls</li>
                            <li>Access controls</li>
                            <li>Regular monitoring and audits</li>
                            <li>PCI DSS–compliant payment systems</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">10. Third-Party Links</h2>
                        <p>Our website may contain links to external sites. We are not responsible for their privacy practices. Please review their policies before sharing information.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">11. Children's Privacy</h2>
                        <p>We do not knowingly collect data from children under 13. If such data is identified, it will be removed promptly.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">12. Policy Updates</h2>
                        <p>We may update this Privacy Policy periodically. Changes will be posted with a revised "Last Updated" date.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">13. Contact Us</h2>
                        <p>For any privacy-related inquiries, data requests, or concerns, you may contact us using the details below:</p>
                        <div className="mt-4 space-y-2">
                            <p className="font-bold text-black">Innovation Dynamics Group LLC</p>
                            <p>📧 Email: support@innovationdynamicsgroup.com</p>
                            <p>📞 Phone: +1-612-445-9132</p>
                            <p>📍 Address: 11397 Quincy St NE, Blaine, MN 55434, United States</p>
                        </div>
                        <p className="mt-6">We are committed to responding promptly and handling all privacy-related requests in accordance with applicable data protection laws.</p>
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
