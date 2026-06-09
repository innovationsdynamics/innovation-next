import React from 'react';

const RefundPolicy = () => {
    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto text-left">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    <h1 className="text-4xl font-bold text-black mb-4">Refund & Return Policy</h1>
                    <div className="flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-medium whitespace-nowrap">
                        <p>Last Updated: March 25, 2026</p>
                    </div>
                </header>

                <div className="space-y-6 text-gray-700 leading-relaxed font-normal text-sm md:text-base">
                    <p>
                        At Innovation Dynamics Group LLC, we are committed to providing a fair, transparent, and customer-friendly refund process. This policy outlines the conditions under which refunds are issued and how returns are handled.
                    </p>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">1. 30-Day Return Window</h2>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Eligible items may be returned within 30 days of delivery.</li>
                            <li>Returns outside this timeframe may not be accepted unless required under applicable consumer protection laws.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">2. Condition of Returned Items</h2>
                        <p>To qualify for a refund, items must be:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Unused and in original condition</li>
                            <li>In original packaging</li>
                            <li>Complete with all accessories, manuals, and components</li>
                        </ul>
                        <p><strong>Exception:</strong> Defective or damaged items may be returned even if opened, subject to inspection.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">3. Refund Processing</h2>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Refunds are issued after the returned item is received and inspected</li>
                            <li>Approved refunds are processed within 3–5 business days</li>
                            <li>Refunds are issued to the original payment method</li>
                        </ul>
                        <p>⚠️ <strong>Warning:</strong> Processing times may vary depending on your bank or payment provider.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div>
                            <h2 className="text-lg font-bold text-black mb-4">✔️ Returnable Items</h2>
                            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                                <li>Unused and unopened printers</li>
                                <li>Sealed ink and toner cartridges</li>
                                <li>Accessories in original condition</li>
                                <li>Defective or malfunctioning products</li>
                                <li>Incorrect items received</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-black mb-4">❌ Non-Returnable Items</h2>
                            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                                <li>Opened or used ink/toner cartridges (unless defective)</li>
                                <li>Items damaged due to misuse or improper handling</li>
                                <li>Products returned without original packaging or missing components</li>
                                <li>Customized, personalized, or special-order items</li>
                                <li>Items returned after the 30-day return period</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">5. How to Request a Return</h2>
                        
                        <h3 className="font-bold text-black mb-2 mt-4">Step 1: Submit a Request</h3>
                        <p>Email us at <a href="mailto:support@innovationdynamicsgroup.com" className="text-[#024ad8] hover:underline font-bold">support@innovationdynamicsgroup.com</a> with:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Order number</li>
                            <li>Product details and condition</li>
                            <li>Reason for return</li>
                            <li>Preferred resolution (refund or replacement)</li>
                        </ul>

                        <h3 className="font-bold text-black mb-2 mt-4">Step 2: Receive Authorization</h3>
                        <p>If approved, you will receive:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>A Return Merchandise Authorization (RMA) number</li>
                            <li>Return instructions</li>
                            <li>A prepaid return label (if applicable)</li>
                        </ul>
                        <p>⚠️ <strong>Returns without prior authorization may not be accepted.</strong></p>

                        <h3 className="font-bold text-black mb-2 mt-4">Step 3: Ship the Item</h3>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Pack the item securely to prevent damage</li>
                            <li>Include all original contents</li>
                            <li>Clearly label the RMA number</li>
                        </ul>

                        <h3 className="font-bold text-black mb-2 mt-4">Step 4: Inspection & Refund</h3>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Items are inspected within 2 business days of receipt</li>
                            <li>Approved refunds are processed within 3–5 business days</li>
                            <li>If applicable, original shipping charges may be refunded for defective or incorrect items.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">6. Refund Timeframes</h2>
                        <div className="overflow-x-auto mt-4 mb-4">
                            <table className="w-full text-left border-collapse border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200 text-sm md:text-base text-black font-bold">
                                        <th className="p-3 border-r border-gray-200">Payment Method</th>
                                        <th className="p-3 border-r border-gray-200">Estimated Time</th>
                                        <th className="p-3">Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-3 border-r border-gray-200 font-medium text-black">Credit Card</td>
                                        <td className="p-3 border-r border-gray-200">3–5 business days</td>
                                        <td className="p-3">May take additional billing cycle</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-3 border-r border-gray-200 font-medium text-black">Debit Card</td>
                                        <td className="p-3 border-r border-gray-200">3–5 business days</td>
                                        <td className="p-3">Reflected in bank account</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border-r border-gray-200 font-medium text-black">PayPal</td>
                                        <td className="p-3 border-r border-gray-200">1–3 business days</td>
                                        <td className="p-3">Typically faster</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">7. Return Shipping Responsibility</h2>
                        
                        <h3 className="text-lg font-bold text-black mb-2 mt-4">✔️ Covered by Innovation Dynamics Group LLC</h3>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Defective or damaged items</li>
                            <li>Incorrect items shipped</li>
                            <li>Approved returns where required by law</li>
                        </ul>

                        <h3 className="text-lg font-bold text-black mb-2 mt-4">⚠️ Customer Responsibility</h3>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Change-of-mind returns</li>
                            <li>Non-defective items</li>
                        </ul>
                        <p>Shipping costs may vary depending on location and carrier. Exact costs are communicated during return authorization.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">8. Exchanges</h2>
                        <p>We primarily process refunds instead of direct exchanges to ensure faster resolution.</p>
                        <p className="mt-4">To exchange a product:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Return the original item following this policy</li>
                            <li>Place a new order for the desired item</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">9. Damaged or Defective Items</h2>
                        <p>If your order arrives damaged or defective:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Contact us within 48 hours of delivery</li>
                            <li>Provide photos of the item and packaging</li>
                        </ul>
                        <p>We will provide a prompt resolution, including replacement or refund.</p>
                        <p><strong>No restocking fees apply for defective or incorrect items.</strong></p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">10. Manufacturer Warranty</h2>
                        <p>Some products may be covered under the manufacturer's warranty.</p>
                        <p className="mt-4">We can assist you in initiating a warranty claim where applicable.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">11. Order Cancellations</h2>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Orders may be canceled before shipment only</li>
                            <li>Once shipped, cancellations are not possible</li>
                            <li>Customers may return the item after delivery per this policy</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">12. International Returns</h2>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>30-day return window applies</li>
                            <li>Customers are responsible for return shipping costs</li>
                            <li>Customs duties and import fees are non-refundable</li>
                            <li>Refunds are issued in the original currency</li>
                            <li>Additional processing time may apply</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">13. Compliance & Transparency</h2>
                        <p>We are committed to fair and transparent refund practices in accordance with applicable consumer protection laws and advertising standards.</p>
                        <p className="mt-4">This policy clearly outlines eligibility, timelines, and responsibilities to avoid confusion or misleading expectations.</p>
                    </div>

                    <div id="contact" className="pt-12 border-t border-gray-100">
                        <h2 className="text-xl font-bold text-black mb-6">14. Contact Us</h2>
                        <p>For any refund-related inquiries, return requests, or assistance, please contact us:</p>
                        <div className="mt-4 space-y-2">
                            <p className="font-bold text-black">Innovation Dynamics Group LLC</p>
                            <p>📧 Email: support@innovationdynamicsgroup.com</p>
                            <p>📞 Phone: +1-612-445-9132</p>
                            <p>📍 Registered Address:<br/>11397 Quincy St NE<br/>Blaine, MN 55434<br/>United States</p>
                            <p className="mt-4">💬 Live Chat: Available on our website during business hours.</p>
                        </div>
                        <p className="mt-6">We are committed to responding promptly and assisting you with all refund and return-related concerns.</p>
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

export default RefundPolicy;
