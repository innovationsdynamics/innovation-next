import React from "react";
import {
  ShieldCheck,
  BadgeCheck,
  Zap,
  Wind,
  Droplets,
  FileWarning,
  Sparkles,
  HeartHandshake,
  Phone,
  Mail,
  MapPin,
  Recycle,
} from "lucide-react";

const sections = [
  {
    icon: <BadgeCheck className="w-6 h-6 text-[#024ad8]" />,
    title: "Manufacturer Warranty",
    points: [
      "Warranty coverage is provided by the original manufacturer.",
      "Coverage duration varies depending on the product and brand.",
      "Register eligible products with the manufacturer when required.",
      "Keep your purchase confirmation for future warranty claims.",
      "Warranty service is handled directly through the manufacturer.",
    ],
  },
  {
    icon: <Zap className="w-6 h-6 text-[#024ad8]" />,
    title: "Electrical Safety",
    points: [
      "Use only the supplied power cable or an approved replacement.",
      "Connect devices to a properly grounded electrical outlet.",
      "Avoid overloaded extension cords or power strips.",
      "Disconnect the device during severe electrical storms.",
      "Do not attempt to disassemble or repair internal components.",
    ],
  },
  {
    icon: <Wind className="w-6 h-6 text-[#024ad8]" />,
    title: "Proper Ventilation",
    points: [
      "Place your printer in an open, well-ventilated location.",
      "Leave sufficient space around all ventilation openings.",
      "Avoid enclosed cabinets while the device is operating.",
      "Keep vents free from dust and obstructions.",
      "Turn off the device immediately if unusual heat, smoke, or odors appear.",
    ],
  },
  {
    icon: <Droplets className="w-6 h-6 text-[#024ad8]" />,
    title: "Handling Ink & Toner",
    points: [
      "Avoid touching electrical contacts or imaging drums.",
      "Wash exposed skin thoroughly after accidental contact.",
      "Store cartridges in a cool, dry environment.",
      "Recycle used cartridges whenever possible.",
      "Keep printing supplies away from children and pets.",
    ],
  },
  {
    icon: <FileWarning className="w-6 h-6 text-[#024ad8]" />,
    title: "Resolving Paper Jams",
    points: [
      "Power off the printer before removing jammed paper.",
      "Allow hot internal components to cool when necessary.",
      "Remove paper carefully in the direction of the paper path.",
      "Inspect the printer for remaining paper fragments.",
      "Use paper types recommended by the manufacturer.",
    ],
  },
  {
    icon: <Sparkles className="w-6 h-6 text-[#024ad8]" />,
    title: "Cleaning & Maintenance",
    points: [
      "Switch off and unplug the printer before cleaning.",
      "Use only soft, lint-free cloths.",
      "Apply cleaning solution to the cloth instead of directly on the device.",
      "Run built-in maintenance utilities when available.",
      "Avoid abrasive cleaners or harsh chemicals.",
    ],
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-[#024ad8]" />,
    title: "Product Care",
    points: [
      "Protect equipment from direct sunlight and excessive humidity.",
      "Operate inkjet printers regularly to prevent ink drying.",
      "Use genuine or manufacturer-approved supplies whenever possible.",
      "Keep firmware and drivers up to date.",
      "Store equipment in a clean, dust-free environment.",
    ],
  },
];

function WarrantySafety() {
  return (
    <div className="bg-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero */}
        <div className="max-w-4xl">
          <span className="uppercase tracking-[0.3em] text-[#024ad8] font-bold text-xs">
            Support Center
          </span>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
            Warranty & Safety Information
          </h1>

          <p className="text-sm text-gray-500 mt-3">
            Last Updated: June 18, 2026
          </p>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            At <strong>Innovation Dynamics Group LLC</strong>, we want every
            customer to enjoy a safe and reliable experience with their printing
            equipment. This page outlines important warranty information,
            product safety recommendations, maintenance tips, and best practices
            to help maximize the performance and lifespan of your printer or
            scanner.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-[#F8F9FA] rounded-xl p-8 border border-gray-200 hover:border-[#024ad8]/30 transition"
            >
              <div className="w-12 h-12 rounded-lg bg-[#024ad8]/10 flex items-center justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-5">
                {item.title}
              </h3>

              <ul className="space-y-3">
                {item.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-gray-600">
                    <ShieldCheck className="w-5 h-5 text-[#024ad8] flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-20 bg-[#024ad8] rounded-2xl p-10 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Need Assistance?
          </h2>

          <p className="text-blue-100 max-w-3xl leading-8 mb-10">
            If you're experiencing product issues, have questions about an
            order, or need general assistance, our support team is ready to
            help. Warranty claims should be submitted directly to the product
            manufacturer according to their warranty policy.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="flex gap-4">
              <Mail className="w-7 h-7 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p>support@innovationdynamicsgroup.com</p>
                <p className="text-blue-100 text-sm mt-1">
                  We typically respond within 24 hours.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-7 h-7 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p>+1 (612) 445-9132</p>
                <p className="text-blue-100 text-sm mt-1">
                  Available during normal business hours.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="w-7 h-7 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg">Address</h4>
                <p>
                  11397 Quincy St NE
                  <br />
                  Blaine, MN 55434
                  <br />
                  United States
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Environment */}
        <div className="mt-20 bg-green-50 border border-green-200 rounded-xl p-10">
          <div className="flex items-center gap-4 mb-5">
            <Recycle className="w-10 h-10 text-green-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              Environmental Responsibility
            </h2>
          </div>

          <p className="text-gray-600 leading-8">
            Innovation Dynamics Group LLC encourages responsible recycling of
            ink cartridges, toner cartridges, and electronic equipment. Many
            manufacturers provide dedicated recycling programs, making it easy
            to return used consumables for environmentally responsible
            processing. When replacing older printers or scanners, please use
            authorized e-waste recycling facilities to reduce environmental
            impact and help conserve valuable resources.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <span className="bg-white border rounded-full px-5 py-2 font-medium">
              ♻️ Cartridge Recycling
            </span>

            <span className="bg-white border rounded-full px-5 py-2 font-medium">
              🖨️ Printer Recycling
            </span>

            <span className="bg-white border rounded-full px-5 py-2 font-medium">
              🌎 Responsible E-Waste Disposal
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default WarrantySafety;