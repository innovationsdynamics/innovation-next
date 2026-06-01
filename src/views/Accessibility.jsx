import React from 'react';

const Accessibility = () => {
    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto text-left">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    <h1 className="text-4xl font-bold text-black mb-4">Accessibility Statement</h1>
                    <div className="flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-medium whitespace-nowrap">
                        <p>Effective Date: March 25, 2026</p>
                        <p>Last Updated: March 25, 2026</p>
                    </div>
                </header>

                <div className="space-y-6 text-gray-700 leading-relaxed font-normal text-sm md:text-base">
                    <p>
                        Innovation Dynamics Group LLC is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability. We are actively working to increase the accessibility and usability of our website and in doing so adhere to many of the available standards and guidelines.
                    </p>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">1. Our Commitment</h2>
                        <p>
                            Innovation Dynamics Group LLC strives to ensure that its services are accessible to people with disabilities. We believe that every user has the right to navigate the digital world with dignity, equality, and independence.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">2. Standards & Guidelines</h2>
                        <p>
                            We utilize the Web Content Accessibility Guidelines (WCAG 2.1) as our primary framework. These protocols ensure our digital touchpoints are Perceivable, Operable, Understandable, and Robust. Our target compliance is WCAG 2.1 Level AA.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">3. Technical Features</h2>
                        
                        <h3 className="text-lg font-bold text-black mb-2 mt-4">3.1 Keyboard Control</h3>
                        <p>All interactive elements on our storefront can be triggered via keyboard commands, supporting users who operate without traditional pointer devices.</p>
                        
                        <h3 className="text-lg font-bold text-black mb-2 mt-4">3.2 Contrast Fidelity</h3>
                        <p>We maintain rigorous color contrast ratios across all textual and UI elements to optimize visibility for users with visual impairments.</p>
                        
                        <h3 className="text-lg font-bold text-black mb-2 mt-4">3.3 Alt Text & Semantic HTML</h3>
                        <p>We use descriptive alternative text for images and follow semantic HTML structures to improve compatibility with screen readers and assistive technologies.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">4. Continuous Evolution</h2>
                        <p>
                            Digital accessibility is an ongoing journey. We perform quarterly audits of our checkout flow and product pages to identify and dismantle barriers to access, ensuring a first-class experience for every user.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">5. Assistance & Feedback</h2>
                        <p>If you experience any difficulty in accessing any part of this website, please feel free to call us or email us. We will work with you to provide the information, item, or transaction you seek through an alternate communication method or one that is accessible for you consistent with applicable law.</p>
                        <div className="mt-4 space-y-2">
                            <p className="font-bold text-black">Innovation Dynamics Group LLC</p>
                            <p>📧 Email: support@innovationdynamicsgroup.com</p>
                            <p>📞 Phone: +1 (651) 815-4630</p>
                            <p>📍 Address: 11397 Quincy St NE, Blaine, MN 55434, United States</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-2 mt-8">6. Third-Party Content</h2>
                        <p>While we strive to adhere to the accepted guidelines and standards for accessibility and usability, it is not always possible to do so in all areas of the website. Some content or functionality on our site is provided by third-party vendors. We monitor these providers closely to ensure they also prioritize an inclusive digital experience.</p>
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

export default Accessibility;

