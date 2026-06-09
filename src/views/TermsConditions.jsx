import React from 'react';
import Link from 'next/link';

const TermsConditions = () => {
    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto text-left">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    <h1 className="text-4xl font-bold text-black mb-4">Terms & Conditions</h1>
                    <div className="flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-medium whitespace-nowrap">
                        <p>Last Updated: March 25, 2026</p>
                    </div>
                </header>

                <div className="space-y-6 text-gray-700 leading-relaxed font-normal text-sm md:text-base">
                    <p>
                        Please read these Terms & Conditions carefully before using our website or purchasing products.
                    </p>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">1. Agreement to Terms</h2>
                        <p>
                            By accessing or using the Innovation Dynamics Group LLC website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must discontinue use of the website immediately.
                        </p>
                        <p className="mt-4">
                            Innovation Dynamics Group LLC functions as an independent online retailer offering printers and related products. We are not affiliated with or endorsed by any manufacturer unless explicitly stated.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">2. Definitions</h2>
                        <p>For the purposes of these Terms:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>"Company," "we," "us," or "our" refers to Innovation Dynamics Group LLC</li>
                            <li>"User," "Customer," "you," or "your" refers to any person using the website</li>
                            <li>"Products" refers to printers, ink, toner, and related accessories</li>
                            <li>"Services" refers to website functionality, order processing, and customer support</li>
                            <li>"Content" refers to all materials on the website, including text, images, and product details</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">3. Use of Website</h2>
                        <p>You agree to use the website only for lawful purposes and in accordance with these Terms. You agree that you will:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Provide accurate and complete information during checkout</li>
                            <li>Maintain the confidentiality of your account details</li>
                            <li>Use the website without disrupting its functionality or security</li>
                            <li>Comply with all applicable laws and regulations</li>
                        </ul>

                        <h3 className="text-lg font-bold text-black mb-2 mt-6">Prohibited Activities</h3>
                        <p>You may not:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Engage in fraudulent, deceptive, or misleading practices</li>
                            <li>Attempt unauthorized access to systems or data</li>
                            <li>Upload malware or harmful code</li>
                            <li>Interfere with website performance or security</li>
                            <li>Misuse product information or content</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">4. Product Information & Disclaimer</h2>
                        <p>We strive to ensure that all product information is accurate and up to date. However:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Product descriptions, specifications, and images are provided for general informational purposes only</li>
                            <li>Minor inaccuracies or typographical errors may occur</li>
                            <li>Product availability and pricing may change without notice</li>
                            <li>Manufacturers may update specifications or packaging</li>
                        </ul>

                        <h3 className="text-lg font-bold text-black mb-2 mt-6">Important Disclaimer</h3>
                        <p>
                            All product names, logos, and trademarks are the property of their respective owners and are used for identification purposes only. Innovation Dynamics Group LLC operates independently and does not claim official authorization unless explicitly stated.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">5. Orders & Payment</h2>
                        <p>By placing an order, you agree that:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>All orders are subject to acceptance and availability</li>
                            <li>We reserve the right to cancel or refuse any order (e.g., fraud suspicion, incorrect pricing, or stock issues)</li>
                            <li>Payment must be completed before order processing</li>
                            <li>You are responsible for providing accurate billing and shipping details</li>
                            <li>Additional charges may include: Applicable taxes, Shipping and handling fees.</li>
                        </ul>
                        <p>If an order is canceled after payment, a full refund will be issued.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">6. Shipping & Delivery</h2>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Delivery timelines are estimates only and may vary</li>
                            <li>Risk of loss transfers once the order is handed to the carrier</li>
                            <li>Customers must ensure accurate delivery details</li>
                            <li>Additional fees may apply for remote or special delivery locations</li>
                            <li>International orders may be subject to customs duties or taxes</li>
                        </ul>
                        <p>Please refer to our <Link href="/shipping-policy" className="text-[#024ad8] hover:underline font-bold">Shipping Policy</Link> for complete details.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">7. Returns & Refunds</h2>
                        <p>Returns and refunds are subject to our <Link href="/return-refund" className="text-[#024ad8] hover:underline font-bold">Return & Refund Policy</Link>:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Returns must be initiated within the specified return window</li>
                            <li>Items must be unused and in original packaging unless defective</li>
                            <li>Refunds are processed after inspection</li>
                            <li>Certain items may not be eligible for return</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">8. Intellectual Property</h2>
                        <p>All website content is protected by applicable intellectual property laws. You may not:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Copy, reproduce, or distribute content without permission</li>
                            <li>Use trademarks, logos, or brand names without authorization</li>
                        </ul>
                        <p>All third-party trademarks remain the property of their respective owners.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">9. Limitation of Liability</h2>
                        <p>To the maximum extent permitted by law:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>We are not liable for indirect, incidental, or consequential damages</li>
                            <li>We are not responsible for losses due to misuse of products or third-party services</li>
                            <li>We are not liable for delays caused by shipping carriers or external providers</li>
                        </ul>
                        <p>Our total liability is limited to the amount paid for the purchased product.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">10. Compliance & Fair Use</h2>
                        <p>
                            We are committed to transparent and fair business practices in accordance with applicable advertising and consumer protection standards. Users agree not to misuse the website for deceptive, abusive, or unlawful purposes.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">11. Governing Law</h2>
                        <p>These Terms are governed by:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Canadian law for customers located in Canada</li>
                            <li>Applicable U.S. laws for customers located in the United States</li>
                        </ul>
                        <p>Any disputes shall be resolved in the appropriate jurisdiction based on the customer's location.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">12. Changes to Terms</h2>
                        <p>
                            We may update these Terms periodically. Any changes will be posted on this page with an updated "Last Updated" date. Continued use of the website constitutes acceptance of revised Terms.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">13. Contact Us</h2>
                        <p>For any questions, concerns, or requests related to these Terms & Conditions, you may contact us using the details below:</p>
                        <div className="mt-4 space-y-2">
                            <p className="font-bold text-black">Innovation Dynamics Group LLC</p>
                            <p>📧 Email: support@innovationdynamicsgroup.com</p>
                            <p>📞 Phone: +1-612-445-9132</p>
                            <p>📍 Registered Address:<br/>11397 Quincy St NE<br/>Blaine, MN 55434<br/>United States</p>
                        </div>
                        <p className="mt-6">We are committed to responding promptly and handling all inquiries in accordance with applicable laws and standard business practices.</p>
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

export default TermsConditions;
