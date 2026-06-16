import React from 'react';

function Disclaimer() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
      <div className="max-w-4xl mx-auto text-left">
        <header className="mb-12 border-b border-gray-100 pb-8 text-left">
          <h1 className="text-4xl font-bold text-black mb-2">Disclaimer</h1>
          <div className="flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-medium whitespace-nowrap">
            <p>Last Updated: January 2026</p>
          </div>
        </header>

        <div className="space-y-6 text-gray-700 leading-relaxed font-normal text-sm md:text-base">
          <p>
            The information provided on this website ("Website") is intended for general informational purposes only. By accessing and using this Website, you acknowledge that you have read, understood, and agree to be bound by this Disclaimer. If you do not agree with any part of this Disclaimer, please do not use our Website.
          </p>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">1. General Information</h2>
            <p>
              The information provided on this Website is intended for general informational purposes only. While we strive to ensure the accuracy of all product descriptions, specifications, prices, and availability, we do not warrant that such information is error-free, complete, or current at all times.
            </p>
            <p className="mt-2">
              Product specifications, features, and availability are subject to change without prior notice. We recommend verifying product details with the manufacturer before making purchasing decisions, especially for technical specifications and compatibility requirements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">2. Product Information & Availability</h2>
            <p>All products displayed on the Website are subject to availability. Prices shown are in U.S. dollars and may vary based on promotions, market conditions, or supplier pricing changes. <strong>Innovation Dynamics Group LLC</strong> reserves the right to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Modify product pricing at any time without prior notice</li>
              <li>Limit quantities available for purchase</li>
              <li>Cancel orders if products are discontinued or unavailable</li>
              <li>Correct any pricing errors that may occur</li>
            </ul>
            <p className="text-sm text-gray-500 italic">
              Product images are for illustration purposes only and may not exactly represent the actual product. Colors, dimensions, and features shown may vary from the physical product.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">3. Trademark Notice</h2>
            <p>
              All product names, brand names, logos, and trademarks displayed on this Website are the property of their respective owners. Reference to any products, services, processes, or other information by trade name, trademark, manufacturer, or otherwise does not constitute or imply endorsement, sponsorship, or recommendation by our company.
            </p>
            <p className="mt-3">
              <strong>Innovation Dynamics Group LLC</strong> is an independent retailer and is not affiliated with, authorized by, or sponsored by any of the manufacturers whose products we sell, unless otherwise explicitly stated. Trademarks are used for identification and informational purposes only.
            </p>
            
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-100 text-sm space-y-1">
              <p>• <strong>HP®</strong> is a registered trademark of HP Inc.</p>
              <p>• <strong>Canon®</strong> is a registered trademark of Canon Inc.</p>
              <p>• <strong>Epson®</strong> is a registered trademark of Seiko Epson Corporation</p>
              <p>• <strong>Brother®</strong> is a registered trademark of Brother Industries, Ltd.</p>
              <p className="text-xs text-gray-400 pt-1 border-t border-gray-200 mt-2">All other trademarks are the property of their respective owners.</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">4. Warranty Information</h2>
            <p>
              Products sold through our online store may be eligible for manufacturer warranty coverage where applicable. Innovation Dynamics Group LLC does not provide manufacturer warranty service, technical support, or repair services directly.
            </p>
            <p className="mt-2">
              For warranty service or product support, please contact the manufacturer directly. Warranty terms and coverage vary by manufacturer and product. Customers are advised to review manufacturer warranty policies and retain proof of purchase for warranty claims.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Extended warranty options may be available for select products. Any extended warranty offerings are provided by third-party warranty providers and are subject to their terms and conditions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">5. Third-Party Links</h2>
            <p>This Website may contain links to third-party websites. These links are provided for convenience and informational purposes only. Innovation Dynamics Group LLC:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Does not endorse or assume responsibility for any third-party content</li>
              <li>Is not responsible for the content, availability, or accuracy of any third-party sites</li>
              <li>Does not guarantee the security or privacy practices of third-party websites</li>
              <li>Recommends reviewing the terms of service and privacy policies of any third-party sites you visit</li>
            </ul>
            <p className="text-sm text-gray-500">
              Clicking on third-party links is at your own risk, and we shall not be liable for any damages or losses arising from your use of third-party websites.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">6. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, Innovation Dynamics Group LLC, its officers, directors, employees, agents, suppliers, and affiliates shall not be liable for any:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Direct or indirect damages</li>
              <li>Loss of data, income, or profits</li>
              <li>Business interruption or loss of business opportunity</li>
              <li>Special, incidental, consequential, or punitive damages</li>
              <li>Damages arising from your use of or inability to use the Website</li>
              <li>Damages resulting from reliance on any information obtained through the Website</li>
            </ul>
            <p>
              This limitation applies regardless of the theory of liability, whether based on contract, tort (including negligence), strict liability, or any other legal theory, even if we have been advised of the possibility of such damages.
            </p>
            <p className="mt-3 font-medium text-black">
              Your use of this Website is at your sole risk. The Website and all information, products, and services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">7. Accuracy of Information</h2>
            <p>While we make every effort to ensure the information on this Website is accurate and up-to-date, we make no representations or warranties about:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>The completeness or accuracy of any information</li>
              <li>The reliability or suitability of the content for any particular purpose</li>
              <li>The availability or functionality of the Website at any given time</li>
            </ul>
            <p>
              Errors and omissions may occur. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">8. Changes to This Disclaimer</h2>
            <p>
              We may update this Disclaimer at any time by posting a revised version on this page. The updated Disclaimer takes effect when it is published. We encourage you to periodically review this page for any changes.
            </p>
            <p className="mt-2">
              Your continued use of the Website after any changes to this Disclaimer constitutes your acceptance of such changes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">9. Contact Us</h2>
            <p>If you have any questions about this Disclaimer or need clarification on any information provided on our Website, please contact us:</p>
            
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

export default Disclaimer;