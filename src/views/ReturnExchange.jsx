 'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const ReturnExchange = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        orderNumber: '',
        productName: '',
        reason: '',
        preferredResolution: '',
        details: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const API_URL = '/api';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch(`${API_URL}/returns`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || 'Failed to submit request');
            }

            setSubmitted(true);
            window.scrollTo(0, 0);
        } catch (err) {
            console.error("Submission error:", err);
            setError(err.message || 'An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    if (submitted) {
        return (
            <div className="bg-white min-h-screen pt-32 pb-16 px-6 font-sans text-center">
                <div className="max-w-2xl mx-auto text-left">
                    <h1 className="text-4xl font-bold text-black mb-6">Request Received</h1>
                    <p className="text-lg text-gray-600 mb-8 font-medium">
                        Thank you. We have logged your return request for order <strong>#{formData.orderNumber}</strong>. Our team will respond within 24 business hours.
                    </p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="bg-black text-white px-8 py-3 font-bold text-sm hover:bg-gray-800 transition-colors"
                    >
                        Return to Form
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto text-left">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    <h1 className="text-4xl font-bold text-black mb-4">Return & Exchange Policy</h1>
                    <div className="flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-medium whitespace-nowrap">
                        <p>Last Updated: March 25, 2026</p>
                    </div>
                </header>

                <div className="space-y-6 text-gray-700 leading-relaxed font-normal text-sm md:text-base">
                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">📅 30-Day Return Window</h2>
                        <p>
                            Eligible items may be returned within 30 days of the delivery date, provided they meet the return conditions outlined below.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">📦 Prepaid Return Shipping</h2>
                        <p>
                            For approved returns, Innovation Dynamics Group LLC provides prepaid return shipping labels. Return authorization is required before sending any item back.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">⚡ Fast Refund Processing</h2>
                        <p>
                            Once your returned item is received and inspected, refunds are processed within 3–5 business days to your original payment method.
                        </p>
                    </div>

                    <div className="pt-8 mt-12 border-t border-gray-100">
                        <h2 className="text-2xl font-bold text-black mb-2">Start a Return or Exchange</h2>
                        <p className="mb-8 font-medium">Quick Return Request: Fill in the details below and we'll process your request within 24 hours.</p>

                        {error && (
                            <div className="mb-8 p-4 bg-red-50 text-red-700 font-bold border-l-4 border-red-700">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 md:p-8 rounded-md border border-gray-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="font-bold text-black">Full Name *</label>
                                    <input
                                        required
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-all rounded-sm"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-bold text-black">Email Address *</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-all rounded-sm"
                                        placeholder="Enter your email address"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-bold text-black">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-all rounded-sm"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-bold text-black">Order Number *</label>
                                    <input
                                        required
                                        name="orderNumber"
                                        value={formData.orderNumber}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-all rounded-sm"
                                        placeholder="Enter your order number"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-bold text-black">Product Name *</label>
                                    <input
                                        required
                                        name="productName"
                                        value={formData.productName}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-all rounded-sm"
                                        placeholder="Which product are you returning?"
                                    />
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="font-bold text-black">Reason for Return / Exchange *</label>
                                    <select
                                        required
                                        name="reason"
                                        value={formData.reason}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-all rounded-sm bg-white"
                                    >
                                        <option value="">Select a reason</option>
                                        <option value="Incorrect Item">Received Wrong Item</option>
                                        <option value="Damaged/Defective">Item Arrived Damaged/Defective</option>
                                        <option value="Quality Issues">Quality Issues</option>
                                        <option value="Changed My Mind">Changed My Mind</option>
                                        <option value="Other">Other Issues</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="font-bold text-black">Preferred Resolution *</label>
                                    <select
                                        required
                                        name="preferredResolution"
                                        value={formData.preferredResolution}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-all rounded-sm bg-white"
                                    >
                                        <option value="">Choose an option</option>
                                        <option value="Refund">Refund to Original Payment Method</option>
                                        <option value="Store Credit">Store Credit (Fastest)</option>
                                        <option value="Replacement">Replacement Item</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="font-bold text-black">Additional Details</label>
                                <textarea
                                    name="details"
                                    value={formData.details}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-all resize-none rounded-sm"
                                    placeholder="Write here… Provide any helpful information such as packaging condition, issue details, or notes for our support team."
                                ></textarea>
                            </div>

                            <div className="flex items-start gap-3 mt-4">
                                <input type="checkbox" required className="mt-1 accent-black" />
                                <p className="text-sm">
                                    I agree that my data is collected and stored according to our <Link href="/privacy-policy" target="_blank" className="text-black font-bold hover:underline">Privacy Policy</Link>, <Link href="/terms-conditions" target="_blank" className="text-black font-bold hover:underline">Terms & Conditions</Link>, <Link href="/return-refund" target="_blank" className="text-black font-bold hover:underline">Refund & Return Policy</Link> and consent to us using your information for processing this return request.
                                </p>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-black text-white font-bold py-4 rounded-sm transition-all hover:bg-gray-800 disabled:opacity-50 mt-6"
                            >
                                {loading ? 'Submitting...' : 'Submit Return Request'}
                            </button>
                        </form>
                        <p className="mt-4 text-sm text-gray-500">We typically respond to return requests within 24 hours during business days.</p>
                    </div>

                    <div className="pt-12">
                        <h2 className="text-xl font-bold text-black mb-4">Return Eligibility</h2>
                        
                        <h3 className="text-lg font-bold text-black mb-2">✔ Eligible Items</h3>
                        <p>The following items are eligible for return if they are unused, unopened, and in original packaging:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-6">
                            <li>Printers</li>
                            <li>Ink cartridges</li>
                            <li>Toner cartridges</li>
                            <li>Paper products</li>
                            <li>Printing accessories</li>
                        </ul>

                        <h3 className="text-lg font-bold text-black mb-2">⚙️ Special Conditions</h3>
                        <p className="font-bold mt-4">Defective or Damaged Items:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Items received defective or damaged may be returned within 30 days</li>
                            <li>Opened ink or toner cartridges are only eligible if defective</li>
                        </ul>
                        
                        <p className="font-bold mt-4">Incorrect Items:</p>
                        <p className="mb-6">If you receive the wrong product, please contact us for a replacement or refund.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-4 mt-8">❌ Non-Returnable Items</h2>
                        <p>The following items are not eligible for return:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-6">
                            <li>Used or partially used ink/toner cartridges (unless defective)</li>
                            <li>Opened or used products (unless defective)</li>
                            <li>Digital or downloadable products</li>
                            <li>Custom, special-order, or personalized items</li>
                            <li>Items returned without original packaging or missing components</li>
                        </ul>

                        <h3 className="text-lg font-bold text-black mb-2 mt-4">🔒 Final Sale Items</h3>
                        <p>Certain promotional or clearance items may be marked as Final Sale and are not eligible for return or exchange.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">Packaging Requirements</h2>
                        <p>To ensure safe return and successful processing:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Items must include all original accessories, manuals, and packaging</li>
                            <li>Products must be securely packed to prevent damage during transit</li>
                            <li>We reserve the right to deny returns or apply partial refunds if items are damaged due to improper packaging.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">Exchange Policy</h2>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Exchanges are available for defective or incorrect items only</li>
                            <li>Replacement is subject to product availability</li>
                            <li>If a replacement is not available, a full refund will be issued</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">How to Request a Return</h2>
                        <ol className="list-decimal pl-6 space-y-2 mt-2 mb-4">
                            <li><strong>Submit a return request</strong> with your order details</li>
                            <li><strong>Wait for approval</strong> and receive a prepaid return label</li>
                            <li><strong>Ship the item</strong> securely in original packaging</li>
                            <li><strong>Once received and inspected</strong>, your refund or exchange will be processed</li>
                        </ol>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">Important Notes (Compliance & Transparency)</h2>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Returns without prior approval may not be accepted</li>
                            <li>Refund timelines may vary based on banks or payment providers</li>
                            <li>We reserve the right to verify return eligibility before approval</li>
                            <li>This policy does not affect your statutory rights under applicable consumer laws</li>
                        </ul>
                    </div>

                    <div id="contact" className="pt-12 border-t border-gray-100">
                        <h2 className="text-xl font-bold text-black mb-6">Need Help? Contact Us</h2>
                        <p>For any return requests, questions, or support:</p>
                        <div className="mt-4 space-y-2">
                            <p className="font-bold text-black">Innovation Dynamics Group LLC</p>
                            <p>📧 Email: support@innovationdynamicsgroup.com</p>
                            <p>📞 Phone: +1 (651) 815-4630</p>
                            <p>📍 Registered Address:<br/>11397 Quincy St NE<br/>Blaine, MN 55434<br/>United States</p>
                            <p className="mt-4">💬 Live Chat: Available on our website during business hours.</p>
                        </div>
                        <p className="mt-6">We are committed to assisting you promptly and ensuring a smooth return and refund experience.</p>
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

export default ReturnExchange;
