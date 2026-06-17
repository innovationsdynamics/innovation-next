import React from 'react';

function DoNotSell() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
      <div className="max-w-4xl mx-auto text-left">
        <header className="mb-12 border-b border-gray-100 pb-8 text-left">
          <h1 className="text-4xl font-bold text-black mb-2">Do Not Sell My Personal Information</h1>
          <p className="text-gray-500 text-sm mb-4">California Consumer Privacy Act (CCPA) Rights</p>
          <div className="flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-medium whitespace-nowrap">
            <p>Last Updated: June 18, 2026</p>
          </div>
        </header>

        <div className="space-y-6 text-gray-700 leading-relaxed font-normal text-sm md:text-base">
          <p>
            Residents of California can exercise their rights under the California Consumer Privacy Act (CCPA) regarding the collection and use of their personal information as described below. If you are a California resident, you have specific rights regarding your personal information, including the right to opt out of the sale or sharing of your personal data. <strong>Innovation Dynamics Group LLC</strong> does not knowingly sell personal information without consent.
          </p>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">1. Personal Information We Collect</h2>
            <p>We may collect the following categories of personal information when you visit our Website, make a purchase, or interact with our services:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Identifiers (name, email address, mailing address, phone number)</li>
              <li>Commercial information (purchase history, products viewed)</li>
              <li>Internet activity (browsing history on our site, search queries)</li>
              <li>Device identifiers (IP address, browser type, device information)</li>
              <li>Geolocation data (general location based on IP address)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">2. California Consumer Rights Under CCPA</h2>
            <p>If you are a California resident, you may have the following rights:</p>
            
            <h3 className="text-lg font-bold text-black mb-1 mt-4">Right to Know</h3>
            <p>You can request information about the categories and specific pieces of personal information we have collected about you, where we obtained it, and with whom we share it.</p>

            <h3 className="text-lg font-bold text-black mb-1 mt-4">Right to Access</h3>
            <p>You can request access to the personal information we have collected about you, delivered in a portable and commonly used format.</p>

            <h3 className="text-lg font-bold text-black mb-1 mt-4">Right to Delete</h3>
            <p>You can request that we delete personal information we have collected from you, subject to certain exceptions allowed by law.</p>

            <h3 className="text-lg font-bold text-black mb-1 mt-4">Right to Opt Out</h3>
            <p>Under the CCPA, you have the right to opt out of the sale or sharing of your personal information for targeted advertising purposes.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">3. Exercise Your Rights / Contact Us</h2>
            <p>To request any of the above, please contact our privacy compliance officer. When submitting your request, please include your full name, the email address associated with your account, and a clear description of the request (e.g., access request, deletion request, or opt-out restriction).</p>
            <p className="mt-2 text-sm text-gray-500">We will verify your identity before processing your request. Requests will be processed within the timeframes required by the CCPA (typically within 45 days).</p>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50 rounded-lg border border-gray-100 text-sm">
              <div>
                <p className="font-bold text-black mb-1">Privacy Email</p>
                <p className="text-gray-600">privacy@innovationdynamicsgroup.com</p>
                <p className="text-xs text-gray-400 mt-1">Please use "CCPA Request" in your subject line</p>
              </div>
              <div>
                <p className="font-bold text-black mb-1">Phone</p>
                <p className="text-gray-600">+1-612-445-9132</p>
                <p className="text-xs text-gray-400 mt-1">Available during business hours</p>
              </div>
              <div>
                <p className="font-bold text-black mb-1">Corporate Office</p>
                <p className="text-gray-600 whitespace-pre-line">
                  Innovation Dynamics Group LLC{"\n"}
                  11397 Quincy St NE,{"\n"}
                  Blaine, MN 55434{"\n"}
                  United States
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">4. Opt Out of Interest-Based Advertising</h2>
            <p>Innovation Dynamics Group LLC does not sell personal information without consent. However, we may share certain information with advertising partners for interest-based advertising. If you want to opt out of interest-based advertising, you can use the following public consumer opt-out platforms:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4 font-medium text-black">
              <li>Google Ads Settings</li>
              <li>Meta (Facebook) Ad Preferences</li>
              <li>Network Advertising Initiative</li>
              <li>Digital Advertising Alliance</li>
            </ul>
            <p>You can also email <span className="text-gray-600 font-medium">privacy@innovationdynamicsgroup.com</span> requesting that we disable all marketing tracking integrations manually for your session profile.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">5. Non-Discrimination</h2>
            <p>We will not discriminate against you for exercising your privacy rights under the CCPA, including:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Denying goods or services to you</li>
              <li>Charging different prices or rates, including through discounts or penalties</li>
              <li>Providing a different level or quality of goods or services</li>
              <li>Suggesting that you will receive a different price or level of service</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">6. Changes to This Page</h2>
            <p>
              This Do Not Sell My Personal Information page may be updated periodically. The date of the last update will be indicated at the top of the page. We encourage you to review this page periodically for any changes.
            </p>
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

export default DoNotSell;