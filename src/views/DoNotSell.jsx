import React from 'react';

const DoNotSell = () => {
    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto text-left">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    <h1 className="text-4xl font-bold text-black mb-4">Do Not Sell or Share My Personal Information</h1>
                    <p className="text-lg text-gray-600 mb-4 font-medium">CCPA/CPRA Notice</p>
                    <div className="flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-medium whitespace-nowrap">
                        <p>Last Updated: March 25, 2026</p>
                    </div>
                </header>

                <div className="space-y-6 text-gray-700 leading-relaxed font-normal text-sm md:text-base">
                    <p>
                        This page is provided in accordance with the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA). These laws provide California residents with specific rights regarding their personal information.
                    </p>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">1. Our Commitment to Your Privacy</h2>
                        <p>Innovation Dynamics Group LLC respects your privacy and is committed to transparent data practices.</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4 font-bold text-black">
                            <li>We do NOT sell personal information</li>
                            <li>We do NOT share personal information for cross-context behavioral advertising</li>
                            <li>We do NOT use advertising cookies, tracking pixels, or profiling technologies</li>
                        </ul>
                        <p>Even though we do not sell or share data, California residents have the right to submit requests under applicable laws.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">2. Your Rights Under CCPA/CPRA</h2>
                        <p>California residents have the following specific rights:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li><strong>Right to Know:</strong> Request and receive information about the personal information we collect, use, or share.</li>
                            <li><strong>Right to Delete:</strong> Request deletion of your personal information (subject to legal exceptions).</li>
                            <li><strong>Right to Correct:</strong> Request correction of inaccurate personal information.</li>
                            <li><strong>Right to Opt-Out:</strong> Opt out of the "sale" or "sharing" of personal information (though we don't engage in these practices).</li>
                            <li><strong>Right to Limit Use of Sensitive Personal Information:</strong> Direct us to limit the use of sensitive personal information to necessary business purposes (we do not use sensitive data).</li>
                            <li><strong>Right to Non-Discrimination:</strong> Exercise these rights without experiencing discrimination, including denial of service or different pricing.</li>
                            <li><strong>Right to Exercise Rights at Anytime:</strong> You may submit requests at any time, and we will respond within the timeframes mandated by law (typically 45 days).</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">3. Our Data Practices</h2>
                        <p>Innovation Dynamics Group LLC adheres to strict data protection practices:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>We do NOT sell personal information to third parties.</li>
                            <li>We do NOT share personal information for advertising purposes.</li>
                            <li>We only disclose information to trusted service providers under strict contractual obligations.</li>
                            <li>We maintain industry-standard security measures to protect your data at all times.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">4. Categories of Personal Information We Collect</h2>
                        <p>We collect only limited information required for our eCommerce operations, including:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Contact information (name, email address, phone number)</li>
                            <li>Billing and shipping address</li>
                            <li>Order details and transaction history</li>
                            <li>Customer support communications</li>
                            <li>Essential technical/session data (e.g., cookies for cart and security)</li>
                        </ul>
                        <p>We do not use or disclose sensitive personal information for advertising purposes.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">5. No Sale or Sharing of Personal Information</h2>
                        <p>In the preceding 12 months, Innovation Dynamics Group LLC has:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Not sold personal information</li>
                            <li>Not shared personal information for cross-context behavioral advertising</li>
                            <li>Only disclosed information to trusted service providers (e.g., payment processors, shipping partners) strictly for business operations</li>
                        </ul>
                        <p>All service providers are contractually required to use data only for authorized purposes.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">6. Cookies & Tracking Technologies</h2>
                        <p>Innovation Dynamics Group LLC does not use:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Advertising or tracking cookies</li>
                            <li>Analytics tools or behavioral profiling technologies</li>
                            <li>Third-party marketing or retargeting pixels</li>
                        </ul>
                        <p>We only use strictly necessary cookies required for:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Cart functionality</li>
                            <li>Secure checkout</li>
                            <li>Account login</li>
                            <li>Website security and performance</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">7. How to Submit a Request</h2>
                        <p>You may submit a request to exercise your rights using the method below:</p>
                        <h3 className="font-bold text-black mb-2 mt-4">Email Request</h3>
                        <p>Send your request to: <a href="mailto:support@innovationdynamicsgroup.com" className="text-[#024ad8] hover:underline font-bold">support@innovationdynamicsgroup.com</a></p>
                        <p className="mt-2 text-sm text-gray-500 font-bold uppercase tracking-widest">Subject Line: "CCPA Request"</p>
                        <p className="mt-4">Please include:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Full name</li>
                            <li>Email address</li>
                            <li>Order number (if applicable)</li>
                            <li>Type of request (Access, Delete, Correct, or Opt-Out)</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">8. Verification Process</h2>
                        <p>To protect your personal information, we may verify your identity by requesting:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Email confirmation</li>
                            <li>Order details or transaction history</li>
                            <li>Basic account information</li>
                        </ul>
                        <p>We will respond to verified requests within 45 days, as required by law.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">9. Authorized Agents</h2>
                        <p>You may designate an authorized agent to submit a request on your behalf.</p>
                        <p className="mt-4">We may require proof of authorization and identity verification before processing such requests.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">10. Non-Discrimination Statement</h2>
                        <p>Innovation Dynamics Group LLC will not:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Deny goods or services</li>
                            <li>Charge different prices</li>
                            <li>Provide a lower level of service</li>
                            <li>Discriminate against you in any way</li>
                        </ul>
                        <p>...for exercising your privacy rights under applicable laws.</p>
                    </div>

                    <div id="contact" className="pt-12 border-t border-gray-100">
                        <h2 className="text-xl font-bold text-black mb-6">11. Contact Us</h2>
                        <p>For any questions about this notice or your privacy rights, please contact us:</p>
                        <div className="mt-4 space-y-2">
                            <p className="font-bold text-black">Innovation Dynamics Group LLC</p>
                            <p>📧 Email: support@innovationdynamicsgroup.com</p>
                            <p>📞 Phone: +1 (651) 815-4630</p>
                            <p>📍 Registered Address:<br/>11397 Quincy St NE<br/>Blaine, MN 55434<br/>United States</p>
                        </div>
                        <p className="mt-6">We are committed to handling all privacy-related requests promptly and in accordance with applicable data protection laws.</p>
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

export default DoNotSell;
