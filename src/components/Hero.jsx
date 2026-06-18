import React from "react";
import { Activity } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F8F9FA] border-b border-gray-200 min-h-[70vh] lg:min-h-[75vh] xl:min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-5 lg:px-6 py-6 md:py-8 lg:py-10 xl:py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6 lg:gap-10 xl:gap-14 items-center">
            {/* LEFT CONTENT */}
            <div className="max-w-2xl space-y-4 lg:space-y-5 text-left">
              <div className="space-y-3">
                <div className="inline-block">
                  <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#024ad8] border-b-2 border-[#024ad8] pb-1.5">
                    An Independent eCommerce Retailer
                  </span>
                </div>

                <div className="space-y-2">
                  <h1 className="text-2xl sm:text-3xl md:text-[2.2rem] lg:text-[2.8rem] xl:text-[3.2rem] font-black leading-[1.02] tracking-tight uppercase text-black">
                    Smart Printing Solutions
                    <br className="hidden xl:block" />
                    <span className="text-[#024ad8]">
                      {" "}
                      for Every Need
                    </span>
                  </h1>

                  <h2 className="text-sm md:text-base lg:text-lg font-bold uppercase tracking-tight text-gray-500">
                    Reliable Printers for Home, Office, and Business Use
                  </h2>
                </div>

                <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-lg lg:max-w-xl">
                  Explore a carefully selected range of printers designed to
                  deliver performance, reliability, and ease of use. Whether
                  you need a compact device for everyday tasks or a
                  high-efficiency printer for business operations, finding the
                  right solution is simple and straightforward.
                </p>

                <ul className="space-y-1.5 pt-0.5">
                  {[
                    "Wide range of trusted printer models",
                    "Clear product details for informed decisions",
                    "Secure and user-friendly shopping experience",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2.5 text-xs md:text-sm font-bold uppercase tracking-tight text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#024ad8]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <a
                    href="/shop/"
                    className="w-full sm:w-auto px-6 py-3 lg:px-8 lg:py-4 bg-[#024ad8] hover:bg-[#0133a1] text-white text-xs font-bold uppercase tracking-[0.18em] rounded-sm transition-all duration-300 flex justify-center items-center shadow-xl shadow-[#024ad8]/20"
                  >
                    Shop Printers
                  </a>

                  <a
                    href="/home-printers/"
                    className="w-full sm:w-auto px-6 py-3 lg:px-8 lg:py-4 bg-white border border-gray-200 hover:bg-gray-50 text-black text-xs font-bold uppercase tracking-[0.18em] rounded-sm transition-all duration-300 flex justify-center items-center"
                  >
                    Browse Categories
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="hidden sm:block h-10 w-px bg-gray-200" />

                  <a
                    href="https://locator.hp.com/us/en?ml___task=search_zip&ml___id=569440&ml___ml_skip_interstitial=1&ml___url_share_action=1&ml___lang=en-US%20(1)&ml___redirect_commercial_destination_Itemid=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/logo/hp-partner.webp"
                      alt="HP Partner"
                      width={160}
                      height={78}
                      className="h-10 md:h-12 lg:h-14 w-auto object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative">
              <div className="relative z-10 bg-white p-4 md:p-5 lg:p-7 rounded-sm border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden group">
                <div className="relative aspect-[5/4] lg:aspect-[4/3] overflow-hidden bg-[#FDFDFD]">
                  <picture>
                    <source
                      srcSet="/hero/hero-right.webp"
                      type="image/webp"
                    />

                    <img
                      src="/hero/hero-right.png"
                      alt="Modern Printing Solutions"
                      width={700}
                      height={525}
                      fetchPriority="high"
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </picture>
                </div>

                <div className="absolute bottom-2.5 right-2.5 lg:bottom-3.5 lg:right-3.5 hidden md:block bg-white border border-gray-100 shadow-xl p-2.5 lg:p-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 bg-gray-50 border border-gray-200">
                      <Activity size={20} />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-[#024ad8]">
                        Specifications
                      </p>

                      <p className="text-sm font-bold uppercase text-black">
                        Precision Output
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[120%] h-[120%] rounded-full bg-[#024ad8]/5 blur-[120px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
