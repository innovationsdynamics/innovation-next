import React from 'react';
import Link from 'next/link';

const ShippingPolicy = () => {
    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto text-left">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    <h1 className="text-4xl font-bold text-black mb-4">Shipping Policy</h1>
                    <div className="flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-medium whitespace-nowrap">
                        <p>Last Updated: March 25, 2026</p>
                    </div>
                </header>

                <div className="space-y-6 text-gray-700 leading-relaxed font-normal text-sm md:text-base">
                    <p>
                        At Innovation Dynamics Group LLC, we are committed to providing clear, reliable, and transparent shipping services across the United States and Canada. This Shipping Policy outlines how orders are processed, shipped, and delivered.
                    </p>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">1. Order Processing Time</h2>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Orders are typically processed within 1–2 business days after payment confirmation</li>
                            <li>Orders placed on weekends or holidays are processed on the next business day</li>
                            <li>Processing times may vary due to product availability or high order volume</li>
                        </ul>
                        <p>You will receive:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>An order confirmation email after purchase</li>
                            <li>A shipping confirmation email with tracking details once dispatched</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">2. Shipping Regions</h2>
                        <p>We currently ship to:</p>
                        <ul className="list-none space-y-1 mt-2 mb-4 pl-2">
                            <li>🇺🇸 <strong>United States</strong> – All states (excluding certain restricted areas)</li>
                            <li>🇨🇦 <strong>Canada</strong> – All provinces and territories</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">3. Shipping Methods & Delivery Estimates</h2>
                        <p className="mb-4">
                            We partner with reliable and recognized logistics providers to ensure safe, secure, and timely delivery of all orders. Shipping methods are selected based on delivery location, order size, and service availability.
                        </p>
                        <div className="overflow-x-auto mt-4 mb-4">
                            <table className="w-full text-left border-collapse border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200 text-sm md:text-base text-black font-bold">
                                        <th className="p-3 border-r border-gray-200">Location</th>
                                        <th className="p-3 border-r border-gray-200">Standard Shipping</th>
                                        <th className="p-3">Expedited Shipping</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-3 border-r border-gray-200 font-medium text-black">United States</td>
                                        <td className="p-3 border-r border-gray-200">3–7 business days</td>
                                        <td className="p-3">2–4 business days</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border-r border-gray-200 font-medium text-black">Canada</td>
                                        <td className="p-3 border-r border-gray-200">3–8 business days</td>
                                        <td className="p-3">2–5 business days</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h3 className="text-lg font-bold text-black mb-2 mt-6">Important Notice:</h3>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Delivery timelines are estimated and not guaranteed</li>
                            <li>Additional transit time may be required for remote or rural areas</li>
                            <li>Delivery delays may occur due to weather conditions, transportation disruptions, or other external factors beyond our control</li>
                            <li>Shipping services are subject to availability based on destination and operational constraints</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">4. Shipping Costs</h2>
                        <p>Shipping charges are calculated at checkout based on:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Delivery location</li>
                            <li>Package weight and dimensions</li>
                            <li>Selected shipping method</li>
                        </ul>
                        <h3 className="text-lg font-bold text-black mb-2 mt-6">Free Shipping Offer:</h3>
                        <p className="mb-4">We offer free standard shipping on orders over $249 (where applicable).</p>
                        <p>Promotional shipping offers, including free shipping, may be available during specific campaigns and are subject to change without prior notice.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">5. Order Tracking</h2>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Tracking details are provided via email once your order is shipped</li>
                            <li>Tracking updates may take up to 24 hours to appear in the carrier system</li>
                            <li>Customers can track shipments directly through the carrier's website</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">6. Delivery Conditions & Customer Responsibility</h2>
                        <p>To ensure successful delivery:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Customers must provide accurate and complete shipping information</li>
                        </ul>

                        <p className="font-bold mt-4">Innovation Dynamics Group LLC is not responsible for:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Delivery failures due to incorrect or incomplete addresses</li>
                            <li>Delays caused by carriers or external factors</li>
                            <li>Packages lost due to incorrect details provided by the customer</li>
                        </ul>
                        <p>If an order is returned due to address issues, additional shipping charges may apply for re-delivery.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">7. Restricted Shipping Locations</h2>
                        <p>We currently do not ship to:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>P.O. Boxes (depending on carrier limitations)</li>
                            <li>APO/FPO/DPO military addresses</li>
                            <li>Areas with limited or restricted carrier access</li>
                        </ul>
                        <p>If an order cannot be fulfilled due to location restrictions, customers will be notified and refunded if applicable.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">8. Damaged, Missing, or Incorrect Items</h2>
                        <p>If your order arrives damaged, incomplete, or incorrect:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Contact us within 48 hours of delivery</li>
                            <li>Provide: Order number, Clear photos of the item and packaging, Description of the issue</li>
                        </ul>
                        <p>We will review and provide a replacement, exchange, or resolution as appropriate.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">9. Customs, Duties & Taxes</h2>
                        <p>For Canadian and cross-border shipments:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Orders may be subject to customs duties, taxes, or import fees</li>
                            <li>These charges are the customer's responsibility</li>
                            <li>Customs processing may cause additional delays</li>
                        </ul>
                        <p>We comply with all applicable trade and import regulations.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">10. Lost or Stolen Packages</h2>
                        <p>If tracking shows "Delivered" but you have not received your package:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Check with neighbors or household members</li>
                            <li>Allow up to 24 hours for delivery updates</li>
                            <li>Contact the shipping carrier</li>
                            <li>If unresolved, contact our support team</li>
                        </ul>
                        <p>⚠️ <strong>Please note:</strong> Resolutions (replacement or refund) depend on the carrier's investigation and confirmation.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">11. Order Cancellations</h2>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Orders may be canceled only before shipment</li>
                            <li>Once dispatched, cancellations are no longer possible</li>
                            <li>Customers may initiate a return after delivery per our <Link href="/return-refund" className="text-[#024ad8] hover:underline font-bold">Return Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">12. Compliance & Transparency</h2>
                        <p>
                            We are committed to fair and transparent business practices. Shipping timelines, costs, and conditions are clearly disclosed to ensure compliance with consumer protection and advertising standards.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">13. Contact Us</h2>
                        <p>For any shipping-related inquiries, order updates, or assistance, please contact us:</p>
                        <div className="mt-4 space-y-2">
                            <p className="font-bold text-black">Innovation Dynamics Group LLC</p>
                            <p>📧 Email: support@innovationdynamicsgroup.com</p>
                            <p>📞 Phone: +1 (651) 815-4630</p>
                            <p>📍 Registered Address:<br/>11397 Quincy St NE<br/>Blaine, MN 55434<br/>United States</p>
                        </div>
                        <p className="mt-6">We are committed to responding promptly and assisting you with all shipping-related concerns.</p>
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

export default ShippingPolicy;
