import React from "react";
import {
  CheckSquare,
  Cpu,
  Wifi,
  Gauge,
  ShieldCheck,
  Settings,
  ArrowRight,
} from "lucide-react";

const checklistItems = [
  {
    icon: Cpu,
    title: "Device Compatibility",
    description:
      "Verify that the printer supports your operating system, devices, and software requirements before making a decision.",
  },
  {
    icon: Wifi,
    title: "Connection Methods",
    description:
      "Consider whether you need USB, Wi-Fi, Ethernet, or mobile printing support based on your environment and workflow.",
  },
  {
    icon: Gauge,
    title: "Performance Needs",
    description:
      "Evaluate expected print frequency and workload to ensure the device can handle your daily requirements efficiently.",
  },
  {
    icon: Settings,
    title: "Maintenance Planning",
    description:
      "Review replacement supplies, maintenance needs, and long-term upkeep to avoid unexpected costs later.",
  },
  {
    icon: ShieldCheck,
    title: "Security Features",
    description:
      "For shared environments, look for secure printing options and administrative controls to protect sensitive information.",
  },
  {
    icon: CheckSquare,
    title: "Future Scalability",
    description:
      "Choose a solution that can adapt as your requirements grow, reducing the need for early replacement.",
  },
];

function BuyingAdvice() {
  return (
    <section className="py-16 sm:py-24 bg-[#F8F9FA] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#024ad8] mb-4 block">
            Smart Buying Checklist
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-6 leading-tight uppercase">
            What Matters Before You Choose
          </h2>

          <div className="w-16 h-1 bg-[#024ad8] mx-auto mb-6"></div>

          <p className="text-gray-500 font-medium text-base sm:text-lg leading-relaxed">
            Understanding the key considerations before selecting a printer can
            help you make a more informed decision and avoid unnecessary
            complications later.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
          {checklistItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#024ad8]/20 transition-all duration-500"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-sm border border-gray-100 bg-[#F8F9FA] transition-all duration-500 group-hover:bg-[#024ad8]">
                    <Icon className="h-7 w-7 text-[#024ad8] transition-colors duration-500 group-hover:text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-black mb-3 uppercase tracking-tight group-hover:text-[#024ad8] transition-colors duration-500">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-[13px] leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 font-medium text-base mb-6">
            Explore additional resources and guidance to make a confident and
            informed purchasing decision.
          </p>

          <button className="inline-flex items-center gap-2 bg-[#024ad8] text-white px-6 py-3 text-sm font-bold uppercase tracking-wide hover:bg-[#0139a6] transition-all duration-300 shadow-lg">
            Explore Guides
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default BuyingAdvice;