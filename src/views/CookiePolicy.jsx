import React from 'react';

function CookiePolicy() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
      <div className="max-w-4xl mx-auto text-left">
        <header className="mb-12 border-b border-gray-100 pb-8 text-left">
          <h1 className="text-4xl font-bold text-black mb-2">Cookies Policy</h1>
          <div className="flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-medium whitespace-nowrap">
            <p>Last Updated: June 18, 2026</p>
          </div>
        </header>

        <div className="space-y-6 text-gray-700 leading-relaxed font-normal text-sm md:text-base">
          <p>
            This Cookies Policy explains how <strong>Innovation Dynamics Group LLC</strong> ("we," "our," or "us") uses cookies and similar technologies when you visit our website. By using this website, you agree that we can store and access cookies on your device in accordance with this policy.
          </p>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your browser or device when you visit a website. Cookies help the site recognize your device and remember your preferences, improve performance, and support advertising and analytics.
            </p>
            <p className="mt-2">Cookies may be:</p>
            <ul className="list-disc pl-6 space-y-1 mt-1">
              <li><strong>Session cookies:</strong> These expire as soon as you close your browser.</li>
              <li><strong>Persistent cookies:</strong> These stay on your device for a set period or until you delete them.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">Types of Cookies We Use</h2>
            
            <h3 className="text-lg font-bold text-black mb-1 mt-4">A. Essential Cookies</h3>
            <p>These cookies are necessary for the website to operate correctly. They enable basic functions such as:</p>
            <ul className="list-disc pl-6 space-y-1 mt-1 mb-3">
              <li>Page navigation and access to secure areas</li>
              <li>Shopping cart functionality</li>
              <li>Remembering your login session</li>
              <li>Preventing fraud</li>
            </ul>
            <p className="text-sm text-gray-500 italic">Essential cookies cannot be disabled through our website as they are required for core functionality.</p>

            <h3 className="text-lg font-bold text-black mb-1 mt-6">B. Performance & Analytics Cookies</h3>
            <p>These cookies help us understand how visitors use our website. We may use:</p>
            <ul className="list-disc pl-6 space-y-1 mt-1 mb-3">
              <li>Google Analytics to analyze traffic and behavior</li>
              <li>Platform analytics to collect data about site usage</li>
              <li>Google Tag Manager to manage tags and tracking scripts</li>
            </ul>
            <p>Analytics cookies collect information such as pages visited, time spent on site, and how you arrived at our website. This data is aggregated and anonymous.</p>

            <h3 className="text-lg font-bold text-black mb-1 mt-6">C. Marketing & Advertising Cookies</h3>
            <p>These cookies are used to track visitors across websites and display relevant advertisements. Marketing cookies we may use include:</p>
            <ul className="list-disc pl-6 space-y-1 mt-1 mb-3">
              <li>Google Ads cookies to measure ad performance and show personalized ads</li>
              <li>Meta Pixel to track conversions and show relevant ads on Meta properties</li>
            </ul>
            <p>These cookies may track your activity across different websites to build a profile of your interests.</p>

            <h3 className="text-lg font-bold text-black mb-1 mt-6">D. Functional Cookies</h3>
            <p>These cookies remember your preferences and choices to provide enhanced functionality:</p>
            <ul className="list-disc pl-6 space-y-1 mt-1">
              <li>Language and region preferences</li>
              <li>Display settings and customizations</li>
              <li>Previously viewed products</li>
              <li>Form information for faster checkout</li>
            </ul>
            <p className="mt-2 text-sm text-gray-500">⚠️ Disabling functional cookies may result in reduced functionality and a less personalized experience.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">How We Use Cookies</h2>
            <p>We use cookies for purposes including:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Enabling essential site functionality</li>
              <li>Analyzing and improving website performance</li>
              <li>Personalizing your shopping experience</li>
              <li>Delivering targeted advertising based on your interests</li>
            </ul>
            <p>We do not use cookies to collect information that directly identifies you without your consent.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">Third-Party Cookies</h2>
            <p>Third parties may also set cookies when you visit our website, including:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Google (Analytics, Ads, Tag Manager)</li>
              <li>Meta (Facebook Pixel)</li>
              <li>E-commerce core configuration assets</li>
              <li>Secure PCI-compliant payment processors</li>
            </ul>
            <p>We do not control these cookies. Their use is subject to the privacy policies of the respective third parties.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">Your Cookie Choices</h2>
            <p>You can control cookies in the following ways:</p>
            
            <h3 className="text-lg font-bold text-black mb-1 mt-4">Browser Settings</h3>
            <p>Most browsers allow you to block cookies, delete existing cookies, or receive a notification before a cookie is stored. Please check your specific browser configuration panels:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-3 font-medium text-black">
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Apple Safari</li>
              <li>Microsoft Edge</li>
            </ul>
            <p className="text-sm text-gray-500">Note: Disabling cookies may affect website functionality, including your ability to maintain items in your shopping cart or access your dynamic user preferences.</p>
            
            <h3 className="text-lg font-bold text-black mb-1 mt-6">Opt-Out Options</h3>
            <p>You can also opt out of targeted third-party advertising tracking tools directly via external configurations:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Google Ads Panel:</strong> adssettings.google.com</li>
              <li><strong>Meta Ads Panel:</strong> facebook.com/adpreferences</li>
              <li><strong>Network Advertising Initiative Platform:</strong> optout.networkadvertising.org</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">Changes to This Policy</h2>
            <p>
              We may update this Cookies Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. The "Last updated" date at the top of this page indicates when this policy was last revised. We encourage you to review this policy periodically.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">Contact Us</h2>
            <p>For any questions about this Cookies Policy or how we manage tracking tools, please reach out to our privacy management setup:</p>
            
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

export default CookiePolicy;