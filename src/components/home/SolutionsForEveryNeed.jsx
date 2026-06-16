import React from "react";
import {
  Printer,
  Wifi,
  Wrench,
  Download,
  ShieldCheck,
  Headphones,
  CheckCircle2,
} from "lucide-react";

const solutions = [
  {
    title: "Printer Setup Guides",
    description:
      "Step-by-step instructions to help install, configure, and start using your printer quickly.",
    features: ["Easy Installation", "Quick Start", "Device Setup"],
    icon: Printer,
  },
  {
    title: "Wireless Connectivity",
    description:
      "Learn how to connect printers to Wi-Fi networks and resolve common wireless connection issues.",
    features: ["Wi-Fi Setup", "Network Support", "Connection Help"],
    icon: Wifi,
  },
  {
    title: "Driver Downloads",
    description:
      "Find installation resources and guidance for locating the correct printer drivers and software.",
    features: ["Latest Drivers", "Installation Help", "Compatibility Tips"],
    icon: Download,
  },
  {
    title: "Troubleshooting",
    description:
      "Resolve common printing, scanning, connectivity, and performance issues with clear instructions.",
    features: ["Error Fixes", "Performance Tips", "Issue Resolution"],
    icon: Wrench,
  },
  {
    title: "Security & Updates",
    description:
      "Understand firmware updates, security best practices, and maintenance recommendations.",
    features: ["Firmware Guidance", "Security Tips", "Maintenance"],
    icon: ShieldCheck,
  },
  {
    title: "Support Resources",
    description:
      "Access helpful articles, FAQs, and troubleshooting information for a smoother experience.",
    features: ["Helpful Guides", "FAQs", "Support Articles"],
    icon: Headphones,
  },
];

function SolutionsForEveryNeed() {
  return (
    <section className="relative overflow-hidden bg-[#020817] py-16 sm:py-24 border-t border-slate-800">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-[#024ad8]/15 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#024ad8]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#024ad8] mb-4 block">
            Solutions & Resources
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6 leading-tight uppercase">
            Solutions For Every Need
          </h2>

          <div className="w-16 h-1 bg-[#024ad8] mx-auto mb-6"></div>

          <p className="text-slate-400 font-medium text-base sm:text-lg leading-relaxed">
            Whether you need installation guidance, troubleshooting help,
            wireless setup instructions, or driver-related resources, our
            platform provides clear and easy-to-follow information.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {solutions.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-sm border border-slate-800 bg-slate-900/80 backdrop-blur-sm p-8 transition-all duration-500 hover:border-[#024ad8]/40 hover:shadow-[0_10px_40px_rgba(2,74,216,0.15)]"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#024ad8]/10 blur-3xl" />
                </div>

                {/* Icon */}
                <div className="relative mb-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-sm border border-[#024ad8]/20 bg-[#024ad8]/10 transition-all duration-500 group-hover:bg-[#024ad8]">
                    <Icon className="h-7 w-7 text-[#024ad8] group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-sm font-bold text-white uppercase tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mb-5 text-[13px] leading-relaxed font-medium text-slate-400">
                  {item.description}
                </p>

                {/* Divider */}
                <div className="mb-5 h-px bg-slate-800"></div>

                {/* Features */}
                <ul className="space-y-2">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-[13px] font-medium text-slate-300"
                    >
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#024ad8]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#024ad8] transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Footer Text */}
        <div className="text-center mt-12">
          <p className="text-sm text-slate-300 font-bold uppercase tracking-widest bg-slate-900 inline-block px-8 py-4 border border-slate-800 rounded-sm">
            Built Around Simplicity, Reliability & User Support
          </p>
        </div>
      </div>
    </section>
  );
}

export default SolutionsForEveryNeed;