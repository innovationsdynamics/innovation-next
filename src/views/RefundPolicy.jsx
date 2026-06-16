import React from 'react';

function RefundPolicy() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
      <div className="max-w-4xl mx-auto text-left">
        <header className="mb-12 border-b border-gray-100 pb-8 text-left">
          <h1 className="text-4xl font-bold text-black mb-2">Returns & Refunds Policy</h1>
          <div className="flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-medium whitespace-nowrap">
            <p>Last Updated: January 2026</p>
          </div>
        </header>

        <div className="space-y-6 text-gray-700 leading-relaxed font-normal text-sm md:text-base">
          <p>
            At <strong>Innovation Dynamics Group LLC</strong>, your satisfaction is our priority. If you're not completely happy with your purchase, we offer a straightforward 30-day return policy. Please read this Returns & Refunds Policy carefully before placing an order to understand your rights and our procedures.
          </p>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">1. Eligibility for Returns</h2>
            <p>To qualify for a return, please ensure your item meets the following conditions:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Items must be returned within 30 days of delivery</li>
              <li>The item must be unused and in its original condition</li>
              <li>The item must include original packaging</li>
              <li>All accessories, manuals, and components must be included</li>
              <li>Items must not show signs of wear, damage, or modification</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">2. How to Initiate a Return</h2>
            <p>To start a return, please follow these steps:</p>
            <ol className="list-decimal pl-6 space-y-2 mt-2 mb-4">
              <li>Contact our customer service team at <strong>returns@innovationdynamicsgroup.com</strong> with your order number.</li>
              <li>We will verify eligibility and provide a Return Merchandise Authorization (RMA) number.</li>
              <li>Package the item securely with all original accessories and documentation.</li>
              <li>Ship the item to our return address using a trackable shipping method.</li>
            </ol>
            <blockquote className="bg-red-50/50 border border-red-100 p-4 rounded-lg my-4 text-sm text-gray-700">
              <strong>Important:</strong> Do not send items back without an RMA number. Returns without an RMA may be refused or delayed.
            </blockquote>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">3. Return Shipping Costs</h2>
            <div className="my-4 border border-gray-100 rounded-lg overflow-hidden max-w-xl">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="p-3 font-bold text-black">Reason for Return</th>
                    <th className="p-3 font-bold text-black">Responsibility</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr>
                    <td className="p-3 font-medium">Standard returns</td>
                    <td className="p-3 text-gray-500">Customer pays return shipping</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Defective or damaged items</td>
                    <td className="p-3 text-green-600 font-medium">Free return shipping provided</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Our error (wrong item sent)</td>
                    <td className="p-3 text-green-600 font-medium">Free return shipping provided</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">4. Refunds</h2>
            <p>Once your return is received and inspected, we will notify you of the approval status:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Refund will be issued to your original payment method</li>
              <li>Refund processing takes 5-10 business days after inspection</li>
              <li>Your bank may take additional time to post the refund</li>
              <li>Original shipping costs are non-refundable (unless our error)</li>
            </ul>
            <p className="text-sm text-gray-500">
              If you haven't received your refund after 15 business days from approval, please contact your financial institution first, then reach out to our customer service team.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">5. Damaged or Defective Items</h2>
            <p>If a product arrives damaged or defective, we'll make it right:</p>
            <ol className="list-decimal pl-6 space-y-1 mt-2 mb-4">
              <li>Contact us within 48 hours of delivery with photos of the damage.</li>
              <li>Keep all original packaging until the claim is resolved.</li>
              <li>We will arrange for pickup or provide return shipping instructions.</li>
              <li>Choose between a replacement or full refund.</li>
            </ol>
            
            <h3 className="text-base font-bold text-black mb-2 mt-4">Resolution options for damaged/defective items:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <p className="font-bold text-black mb-1">Replacement</p>
                <p className="text-xs text-gray-600">Receive a new item of the same product</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <p className="font-bold text-black mb-1">Refund</p>
                <p className="text-xs text-gray-600">Get your money back to original payment method</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <p className="font-bold text-black mb-1">Store Credit</p>
                <p className="text-xs text-gray-600">Receive credit for future store purchases</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">6. Non-Returnable Items</h2>
            <p>The following items cannot be returned unless defective:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Opened ink or toner cartridges</li>
              <li>Software with a broken seal or activated license</li>
              <li>Consumables (paper, labels, cleaning supplies)</li>
              <li>Items returned without original accessories</li>
              <li>Custom or personalized orders</li>
              <li>Items damaged due to customer misuse</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">7. Exchanges</h2>
            <p>We do not automatically exchange items. If you need a different product, please follow this process:</p>
            <ol className="list-decimal pl-6 space-y-1 mt-2 mb-4">
              <li>Return the original item for a refund (following our standard return process).</li>
              <li>Place a new order on our website for the desired product.</li>
            </ol>
            <p className="text-sm text-gray-500">This ensures you get exactly what you want and allows us to process your orders efficiently.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">8. Policy Updates</h2>
            <p>
              Innovation Dynamics Group LLC reserves the right to update this Returns & Refunds Policy at any time. Changes take effect when posted on this page. The "Last updated" date at the top of this page indicates when the policy was most recently revised. We encourage you to review this policy periodically.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">9. Contact Us</h2>
            <p>If you have questions about returns, refunds, or need assistance with an order, please contact us:</p>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50 rounded-lg border border-gray-100 text-sm">
              <div>
                <p className="font-bold text-black mb-1">Returns & Refunds</p>
                <p className="text-gray-600">returns@innovationdynamicsgroup.com</p>
                <p className="text-xs text-gray-400 mt-1">Include your order number</p>
              </div>
              <div>
                <p className="font-bold text-black mb-1">General Support</p>
                <p className="text-gray-600">support@innovationdynamicsgroup.com</p>
                <p className="text-xs text-gray-400 mt-1">+1-612-445-9132</p>
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

export default RefundPolicy;