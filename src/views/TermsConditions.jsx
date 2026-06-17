import React from 'react';

function TermsConditions() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
      <div className="max-w-4xl mx-auto text-left">
        <header className="mb-12 border-b border-gray-100 pb-8 text-left">
          <h1 className="text-4xl font-bold text-black mb-2">Terms of Service</h1>
          <div className="flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-medium whitespace-nowrap">
            <p>Last Updated: June 18, 2026</p>
          </div>
        </header>

        <div className="space-y-6 text-gray-700 leading-relaxed font-normal text-sm md:text-base">
          <p>
            These Terms of Service ("Terms") govern your use of our website and any related services provided by <strong>Innovation Dynamics Group LLC</strong>. By accessing our website or making a purchase, you agree to be bound by these Terms. Please read them carefully before using our services. If you do not agree with any part of these Terms, you should not use our website or purchase products from our store.
          </p>

          <div className="bg-red-50/50 border border-red-100 p-4 rounded-lg my-4 text-sm text-gray-700">
            <strong>Important:</strong> By placing an order, creating an account, or otherwise using our services, you confirm that you accept these Terms and agree to comply with them.
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">1. Acceptance of Terms</h2>
            <p>
              By accessing, browsing, or using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms. This agreement is effective upon your first use of the website. If you are using our website on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">2. Eligibility</h2>
            <p>To use our website and services, you must meet the following requirements:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Be at least 18 years of age or the age of majority in your jurisdiction</li>
              <li>Have the legal capacity to enter into a binding agreement</li>
              <li>Provide accurate and complete information during account creation or checkout</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Be a resident of the United States</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">3. Account Registration</h2>
            <p>You may be required to create an account to access certain features of our website. When you create an account, you are responsible for:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Providing accurate, current, and complete information during registration</li>
              <li>Updating your information to keep it accurate and complete</li>
              <li>Maintaining the security of your account credentials</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
              <li>All activities that occur under your account</li>
            </ul>
            <p>We reserve the right to suspend or terminate your account if we believe you have violated these Terms or if your account information is inaccurate.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">4. Use of Website</h2>
            <p>You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to engage in the following prohibited activities:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Using the website for any unlawful purpose or in violation of these Terms</li>
              <li>Attempting to gain unauthorized access to our systems or other users' accounts</li>
              <li>Interfering with or disrupting the website's functionality or security</li>
              <li>Transmitting viruses, malware, or other harmful code</li>
              <li>Engaging in data mining, scraping, or automated data collection</li>
              <li>Impersonating any person or entity or misrepresenting your affiliation</li>
              <li>Using the website to transmit unsolicited commercial communications (spam)</li>
              <li>Violating any applicable local, state, national, or international law</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">5. Orders & Payment</h2>
            <p>Orders are processed through our secure checkout system. By placing an order:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>You agree to provide accurate billing and shipping information</li>
              <li>All orders are subject to product availability and confirmation</li>
              <li>We reserve the right to limit quantities or refuse orders at our discretion</li>
              <li>Orders are processed within 1-2 business days after payment confirmation</li>
              <li>Products are sourced from authorized manufacturers and distributors</li>
            </ul>
            
            <h3 className="text-lg font-bold text-black mb-1 mt-4">Payment Methods</h3>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>All major credit cards (Visa, MasterCard, American Express, Discover)</li>
              <li>PayPal and other secure digital payment options</li>
              <li>Prices displayed are in USD and exclude applicable taxes</li>
              <li>Sales tax is calculated based on shipping destination</li>
              <li>Payment is processed securely through PCI-compliant payment processors</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">6. Shipping & Delivery</h2>
            <p>Orders are typically processed within 1-2 business days. We ship to addresses within the United States. We offer the following shipping options:</p>
            
            <div className="my-4 border border-gray-100 rounded-lg overflow-hidden">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="p-3 font-bold text-black">Shipping Method</th>
                    <th className="p-3 font-bold text-black">Estimated Delivery</th>
                    <th className="p-3 font-bold text-black">Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr>
                    <td className="p-3 font-medium">Standard Shipping</td>
                    <td className="p-3">5-7 business days</td>
                    <td className="p-3 text-green-600 font-medium">Free on orders over $50</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Expedited Shipping</td>
                    <td className="p-3">2-3 business days</td>
                    <td className="p-3 text-gray-500">Additional fee applies</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Express Shipping</td>
                    <td className="p-3">1-2 business days</td>
                    <td className="p-3 text-gray-500">Additional fee applies</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-sm text-gray-500">
              Delivery times are estimates and may vary. We are not responsible for delays caused by shipping carriers, weather, or other circumstances beyond our control. For full details, see our Shipping Policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">7. Returns & Refunds</h2>
            <p>We offer a 30-day return policy for most items. To be eligible for a return:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Items must be returned within 30 days of delivery</li>
              <li>Products must be unused and in original packaging with all accessories</li>
              <li>Opened ink or toner cartridges may not be eligible for return</li>
              <li>Return shipping costs are the responsibility of the customer unless the item is defective</li>
              <li>Refunds are processed within 5-10 business days after inspection</li>
            </ul>
            <p>For complete details, please see our Returns & Refunds Policy.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">8. Order Cancellation</h2>
            <p>You may cancel an order before it has shipped by contacting our customer service team. Once an order has shipped, it must be returned according to our Return Policy.</p>
            <p>We reserve the right to cancel orders for any of the following reasons:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Pricing or product information errors</li>
              <li>Suspected fraudulent activity</li>
              <li>Product unavailability or discontinuation</li>
              <li>Shipping address verification issues</li>
              <li>Violation of our Terms of Service</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">9. Product Information</h2>
            <p>We strive to ensure that all product descriptions, specifications, images, and pricing on our website are accurate. However, we do not warrant that product descriptions or other content on our website are accurate, complete, reliable, current, or error-free.</p>
            <p>If a product offered by us is not as described, your sole remedy is to return it in unused condition in accordance with our Returns Policy. Colors displayed may vary depending on your device settings and are for illustration purposes only.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">10. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, images, product descriptions, and software, is the property of Innovation Dynamics Group LLC or our content suppliers and is protected by United States and international copyright, trademark, and other intellectual property laws.</p>
            <p>You may not reproduce, distribute, modify, create derivative works from, publicly display, or otherwise use any content from our website without our prior written consent. Our company name, logo, and all related product and service names are trademarks and may not be used without permission.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">11. Disclaimer of Warranties</h2>
            <p>Our website and products are provided "as is" and "as available" without any warranties of any kind, either express or implied. To the fullest extent permitted by law, Innovation Dynamics Group LLC disclaims all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
            <p>We do not warrant that our website will be uninterrupted, secure, or error-free, or that any defects will be corrected. You use our website and purchase products at your own risk.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">12. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Innovation Dynamics Group LLC and its affiliates, officers, employees, agents, and suppliers shall not be liable for:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Indirect, incidental, special, or consequential damages</li>
              <li>Loss of data, profits, revenue, or business opportunities</li>
              <li>Damages arising from product misuse or modification</li>
              <li>Third-party claims related to our products</li>
              <li>Interruption of business or service</li>
              <li>Personal injury or property damage from product use</li>
            </ul>
            <p>Our total liability for any claims arising from your use of our services shall not exceed the amount you paid for the specific product giving rise to the claim.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">13. Indemnification</h2>
            <p>You agree to defend, indemnify, and hold harmless Innovation Dynamics Group LLC and its affiliates, officers, directors, employees, agents, and suppliers from and against any claims, liabilities, damages, judgments, awards, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or relating to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Your use or misuse of our website or services</li>
              <li>Your violation of these Terms of Service</li>
              <li>Your violation of any third-party rights</li>
              <li>Any content or information you submit to our website</li>
              <li>Any claims arising from purchases you make through our website</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">14. Governing Law</h2>
            <p>
              These Terms of Service and any disputes arising from your use of the website or services shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles. Any legal action or proceeding relating to these Terms shall be brought exclusively in the competent federal or state courts within the United States. You consent to the personal jurisdiction of such courts and waive any objection to venue.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">15. Changes to These Terms</h2>
            <p>We may update these Terms of Service at any time. Changes take effect when posted on this page with a revised "Last updated" date. Your continued use of our website after any modifications constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically for any updates.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">16. Contact Us</h2>
            <p>For any questions or concerns regarding these Terms of Service, please contact us at:</p>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50 rounded-lg border border-gray-100 text-sm">
              <div>
                <p className="font-bold text-black mb-1">Email</p>
                <p className="text-gray-600">support@innovationdynamicsgroup.com</p>
                <p className="text-xs text-gray-400 mt-1">We typically respond within 24 hours</p>
              </div>
              <div>
                <p className="font-bold text-black mb-1">Phone</p>
                <p className="text-gray-600">+1-612-445-9132</p>
                <p className="text-xs text-gray-400 mt-1">Available during business hours</p>
              </div>
              <div>
                <p className="font-bold text-black mb-1">Address</p>
                <p className="text-gray-600 whitespace-pre-line">
                  Innovation Dynamics Group LLC{"\n"}
                  11397 Quincy St NE,{"\n"}
                  Blaine, MN 55434{"\n"}
                  United States
                </p>
              </div>
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
}

export default TermsConditions;