import React from 'react';
import Link from 'next/link';

const CookiePolicy = () => {
    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto text-left">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    <h1 className="text-4xl font-bold text-black mb-4">Cookie Policy</h1>
                    <div className="flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-medium whitespace-nowrap">
                        <p>Last Updated: March 25, 2026</p>
                    </div>
                </header>

                <div className="space-y-6 text-gray-700 leading-relaxed font-normal text-sm md:text-base">
                    <p>
                        This Cookie Policy explains how Innovation Dynamics Group LLC ("we," "our," or "us") uses cookies and similar technologies to operate, secure, and improve our website. It also explains your choices regarding cookie usage.
                    </p>
                    <p>
                        By continuing to use our website, you acknowledge the use of cookies as described in this policy. Where applicable, you will be provided with options to manage your cookie preferences.
                    </p>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">1. What Are Cookies?</h2>
                        <p>
                            Cookies are small text files stored on your device (computer, smartphone, or tablet) when you visit a website. They help websites function properly, maintain secure sessions, and remember basic preferences.
                        </p>
                        
                        <h3 className="text-lg font-bold text-black mb-2 mt-6">Important:</h3>
                        <p>
                            Cookies used on our website do not store sensitive personal information such as your full payment details. Any personal data you provide is handled in accordance with our <Link href="/privacy-policy" className="text-[#024ad8] hover:underline font-bold">Privacy Policy</Link>.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">2. Types of Cookies We Use</h2>
                        <p>Innovation Dynamics Group LLC uses limited, essential, and functional cookies only to ensure proper website operation.</p>
                        
                        <div className="overflow-x-auto mt-4 mb-4">
                            <table className="w-full text-left border-collapse border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200 text-sm md:text-base text-black font-bold">
                                        <th className="p-3 border-r border-gray-200">Cookie Type</th>
                                        <th className="p-3 border-r border-gray-200">Purpose</th>
                                        <th className="p-3 border-r border-gray-200">Examples</th>
                                        <th className="p-3">Consent Required</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-3 border-r border-gray-200 font-medium text-black">Strictly Necessary</td>
                                        <td className="p-3 border-r border-gray-200">Enable core website functionality and security</td>
                                        <td className="p-3 border-r border-gray-200">Cart sessions, login authentication</td>
                                        <td className="p-3">No (Required)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border-r border-gray-200 font-medium text-black">Functional</td>
                                        <td className="p-3 border-r border-gray-200">Store basic preferences for usability</td>
                                        <td className="p-3 border-r border-gray-200">Language or region settings</td>
                                        <td className="p-3">Implied</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-lg font-bold text-black mb-2 mt-6">We Do Not Use</h3>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Advertising or behavioral tracking cookies</li>
                            <li>Third-party retargeting or remarketing cookies</li>
                            <li>Social media tracking pixels</li>
                            <li>Analytics or profiling tools</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">3. Purpose of Cookies</h2>
                        <p>The cookies we use are necessary for:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Maintaining your shopping cart and checkout session</li>
                            <li>Securing login sessions and protecting account data</li>
                            <li>Processing orders through secure connections</li>
                            <li>Remembering basic preferences (such as language or region)</li>
                            <li>Ensuring overall website performance and reliability</li>
                        </ul>
                        <p>⚠️ <strong>Warning:</strong> Disabling essential cookies may prevent key features such as checkout, account login, or cart functionality from working properly.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">4. Cookie Consent & User Control</h2>
                        <p>You have control over how cookies are used:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>You can accept or reject non-essential cookies (if implemented in future updates)</li>
                            <li>You can disable cookies through your browser settings</li>
                            <li>You can delete stored cookies at any time</li>
                        </ul>
                        <p>At present, since we only use essential cookies, a full opt-out may affect website functionality.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">5. Managing Cookies in Your Browser</h2>
                        <p>You can manage cookies through your browser settings:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li><strong>Google Chrome:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                            <li><strong>Mozilla Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                            <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                            <li><strong>Microsoft Edge:</strong> Settings → Cookies and Site Permissions</li>
                        </ul>
                        <p>Blocking or deleting cookies may impact certain features of the website.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">6. Third-Party Cookies</h2>
                        <p>We do not currently use third-party cookies for advertising, analytics, or behavioral tracking.</p>
                        <p className="mt-4">If third-party services (such as payment processors or live chat tools) require cookies for functionality:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                            <li>Their usage will be clearly disclosed</li>
                            <li>This policy will be updated accordingly</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">7. Data Privacy and Cookies</h2>
                        <p>Any limited data collected through cookies (such as session identifiers or preferences) is processed in accordance with our Privacy Policy.</p>
                        <p className="mt-4">We do not use cookies to collect or store sensitive personal information.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">8. Policy Updates</h2>
                        <p>
                            We may update this Cookie Policy from time to time to reflect changes in legal requirements or website functionality. Updates will be posted on this page with a revised "Last Updated" date.
                        </p>
                    </div>

                    <div id="contact" className="pt-12 border-t border-gray-100">
                        <h2 className="text-xl font-bold text-black mb-6">9. Contact Us</h2>
                        <p>For any questions about this Cookie Policy or your cookie preferences, please contact us:</p>
                        <div className="mt-4 space-y-2">
                            <p className="font-bold text-black">Innovation Dynamics Group LLC</p>
                            <p>📧 Email: support@innovationdynamicsgroup.com</p>
                            <p>📞 Phone: +1 (651) 815-4630</p>
                            <p>📍 Registered Address:<br/>11397 Quincy St NE<br/>Blaine, MN 55434<br/>United States</p>
                        </div>
                        <p className="mt-6">We are committed to transparency and will respond promptly to any inquiries regarding cookies and data usage.</p>
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

export default CookiePolicy;
