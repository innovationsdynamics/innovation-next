import React from 'react';

function WarrantySafety() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
      <div className="max-w-4xl mx-auto text-left">
        <header className="mb-12 border-b border-gray-100 pb-8 text-left">
          <h1 className="text-4xl font-bold text-black mb-2">Warranty & Safety Information</h1>
          <div className="flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-medium whitespace-nowrap">
            <p>Last Updated: June 18, 2026</p>
          </div>
        </header>

        <div className="space-y-6 text-gray-700 leading-relaxed font-normal text-sm md:text-base">
          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">Understanding Your Coverage</h2>
            <p>
              At <strong>Innovation Dynamics Group LLC</strong>, we want you to get the most out of your printing and scanning equipment. This page provides essential information about manufacturer warranties, safe operation practices, and proper care recommendations to ensure your devices perform optimally for years to come. We believe that understanding your equipment and following proper safety guidelines leads to a better experience for everyone.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">Product Warranty</h2>
            <p>
              All products sold by Innovation Dynamics Group LLC are covered by the manufacturer's warranty as specified by each brand. Warranty periods and coverage vary by product and manufacturer.
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Warranty terms set by each manufacturer</li>
              <li>Coverage varies by product type and brand</li>
              <li>Register products with manufacturer for coverage</li>
              <li>Retain proof of purchase for warranty claims</li>
              <li>Contact manufacturer directly for warranty service</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">Electrical Safety</h2>
            <p>
              Printers and scanners are electrical devices that require proper handling to ensure safe operation. Following these guidelines protects both you and your equipment.
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Use only the provided power cord and adapter</li>
              <li>Plug into a grounded electrical outlet</li>
              <li>Avoid extension cords that may overload circuits</li>
              <li>Unplug during electrical storms</li>
              <li>Never modify or repair electrical components yourself</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">Proper Ventilation</h2>
            <p>
              Laser printers and some inkjet models generate heat during operation and require adequate ventilation to function properly and safely.
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Place in well-ventilated areas</li>
              <li>Maintain several inches clearance on all sides</li>
              <li>Avoid enclosed cabinets or closets</li>
              <li>Never block ventilation openings</li>
              <li>Turn off immediately if you notice smoke or unusual odors</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">Handling Ink and Toner</h2>
            <p>
              Ink and toner cartridges should be handled with care to avoid spills, stains, and potential health concerns.
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Avoid touching print head contacts or toner drum</li>
              <li>Wash skin thoroughly if contact occurs</li>
              <li>Seek fresh air if toner is inhaled</li>
              <li>Store cartridges in cool, dry places</li>
              <li>Dispose responsibly through recycling programs</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">Dealing with Paper Jams</h2>
            <p>
              Paper jams are common issues that can usually be resolved safely with proper technique and patience.
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Turn off printer and allow to cool first</li>
              <li>Open access panels as directed in manual</li>
              <li>Pull paper gently in the paper path direction</li>
              <li>Check for small paper fragments</li>
              <li>Use manufacturer-recommended paper types</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">Cleaning and Maintenance</h2>
            <p>
              Regular cleaning helps maintain print quality and extends the life of your equipment significantly.
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Turn off and unplug before cleaning</li>
              <li>Use soft, lint-free cloths only</li>
              <li>Apply glass cleaner to cloth, not directly</li>
              <li>Use built-in cleaning utilities when available</li>
              <li>Avoid harsh chemicals or abrasive materials</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">Product Care Recommendations</h2>
            <p>
              Proper care and handling will maximize the performance and longevity of your printing equipment.
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Keep away from direct sunlight and humidity</li>
              <li>Use printer regularly to prevent ink drying</li>
              <li>Cover device when not in use</li>
              <li>Use manufacturer-recommended supplies</li>
              <li>Update firmware and drivers regularly</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">When to Contact Us</h2>
            <p>
              While many issues can be resolved with basic troubleshooting, some situations require professional assistance. Please reach out if you experience any of the following:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Persistent error messages that basic troubleshooting doesn't resolve</li>
              <li>Unusual noises or vibrations during operation</li>
              <li>Print quality issues persisting after cleaning and maintenance</li>
              <li>Connectivity problems that troubleshooting doesn't fix</li>
              <li>Signs of electrical problems such as sparks or burning smells</li>
            </ul>
            <p className="mt-2">
              For warranty issues, contact manufacturer directly. Contact Innovation Dynamics Group LLC for orders & inquiries.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">Environmental Responsibility</h2>
            <p>
              We encourage responsible disposal of printing supplies and equipment. Many manufacturers offer recycling programs for used ink and toner cartridges. These programs help reduce environmental impact and often provide prepaid shipping labels for easy returns. When disposing of old equipment, check with local recycling facilities for proper e-waste disposal options. Together, we can minimize the environmental footprint of our printing needs.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2 mt-8">Contact Us</h2>
            <p>If you have questions about this policy or need assistance, please contact us:</p>
            
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

export default WarrantySafety;
