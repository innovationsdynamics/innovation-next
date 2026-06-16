import React from "react";
import {
  Search,
  BookOpen,
  Settings,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Find Your Device",
    description:
      "Search for your printer model and access dedicated setup, installation, and troubleshooting resources.",
    icon: Search,
  },
  {
    number: "02",
    title: "Follow The Guide",
    description:
      "Use our easy-to-understand instructions to install drivers, connect devices, and resolve common issues.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Get Everything Working",
    description:
      "Complete the setup process and keep your printer running smoothly with maintenance and support tips.",
    icon: Settings,
  },
];

function HowItWork() {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#024ad8] mb-4 block">
            Simple Process
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-6 leading-tight uppercase">
            How It Works
          </h2>

          <div className="w-16 h-1 bg-[#024ad8] mx-auto mb-6"></div>

          <p className="text-gray-500 font-medium text-base sm:text-lg leading-relaxed">
            Access helpful resources, follow clear instructions, and get your
            devices working efficiently in just a few simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop Line */}
          <div className="hidden lg:block absolute top-7 left-[20%] right-[20%] h-[2px] bg-gray-200"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={index} className="relative text-center">
                  {/* Icon */}
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 bg-[#024ad8] rounded-full flex items-center justify-center shadow-lg shadow-blue-100">
                      <Icon className="w-9 h-9 text-white" />
                    </div>

                    {/* Number Badge */}
                    <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                      <span className="text-xs font-bold text-black">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-black mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-500 text-[13px] leading-relaxed font-medium max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-14">
          <p className="text-sm text-gray-700 font-bold uppercase tracking-widest bg-white inline-flex items-center gap-2 px-8 py-4 border border-gray-100 rounded-sm">
            Fast, Clear & Easy To Follow
            <ArrowRight size={16} className="text-[#024ad8]" />
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWork;