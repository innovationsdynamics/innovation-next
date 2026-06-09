import React, { useEffect } from "react";
import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Shield,
  Award,
} from "lucide-react";

const Footer = () => {
  useEffect(() => {
    const sealContainer = document.getElementById("siteseal");
    if (!sealContainer) return;

    const loadGodaddy = () => {
      if (!sealContainer.getAttribute("data-loaded")) {
        sealContainer.setAttribute("data-loaded", "true");
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://seal.godaddy.com/getSealBasic?sealID=fA5q8U4ngWQoJeQEXnOBnpptwPqM7bmoMSuTzJZg8anUXt6Iwh86nBMt5ys1";
        sealContainer.appendChild(script);
      }
    };

    const events = ['mousemove', 'touchmove', 'wheel', 'keydown'];
    const initGodaddy = () => {
      loadGodaddy();
      events.forEach(e => window.removeEventListener(e, initGodaddy));
    };
    
    events.forEach(e => window.addEventListener(e, initGodaddy, { once: true, passive: true }));

    return () => {
      events.forEach(e => window.removeEventListener(e, initGodaddy));
    };
  }, []);

  return (
    <footer className="bg-black text-white relative border-t border-white/10 overflow-hidden font-sans">
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#024ad8]/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-10 pt-16 pb-0 relative z-10 justify-center align-center">
        <div className="mb-12 pb-8 border-b border-white flex flex-col items-center">
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-5xl text-center mx-auto">
            <span className="text-white font-bold mr-1">Trademark Notice:</span>
            All product names, images, brand logos, and trademarks displayed on this website are the property of their respective owners and are used for identification purposes only. Innovation Dynamics Group LLC operates as an independent e-commerce retailer and is not affiliated with, endorsed by, or sponsored by any manufacturer unless explicitly stated. Product availability, specifications, and pricing are subject to change without prior notice. While we strive to provide accurate and up-to-date information, Innovation Dynamics Group LLC does not guarantee that all content on this site is complete, current, or free from errors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          <div className="lg:col-span-3 space-y-6">
            <Link href="/" className="flex items-center gap-3 min-h-[40px] select-none h-10 overflow-hidden">
              <span className="font-bold text-4xl tracking-tighter text-white lowercase leading-[0.8] py-1">
                idg
              </span>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="flex flex-col text-[10px] uppercase font-bold tracking-[0.15em]">
                <span className="text-blue-400">Innovation Dynamics</span>
                <span className="text-neutral-300">Group LLC</span>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Innovation Dynamics Group LLC is an independent U.S.-based retailer providing printers and related products with verified sourcing, reliable fulfillment, and a seamless shopping experience across the U.S. and Canada.
            </p>
          </div>

          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white/70">
                Our Inventory
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Home Printers", link: "/home-printers/" },
                  { name: "Office Printers", link: "/office-printers/" },
                  { name: "Inkjet Printers", link: "/inkjet-printers/" },
                  { name: "Laser Printers", link: "/laser-printers/" },
                  { name: "Ink & Toner", link: "/ink-toner/" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.link}
                      className="text-sm font-semibold text-neutral-400 hover:text-[#024ad8] transition-colors block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white/70">
                Support
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Track Order", link: "/track-order/" },
                  { name: "Shipping Policy", link: "/shipping-policy/" },
                  { name: "Return & Exchange", link: "/return-exchange/" },
                  { name: "Refund & Return Policy", link: "/refund-policy/" },
                  { name: "Buying Guide", link: "/buying-guide/" },
                  { name: "Support Hub", link: "/resources/" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.link}
                      className="text-sm font-semibold text-neutral-400 hover:text-[#024ad8] transition-colors block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white/70">
                Policy Center
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Privacy Policy", link: "/privacy-policy/" },
                  { name: "Terms & Conditions", link: "/terms-conditions/" },
                  { name: "Cookie Policy", link: "/cookie-policy/" },
                  { name: "Accessibility", link: "/accessibility/" },
                  { name: "Disclaimer", link: "/disclaimer/" },
                  { name: "Do Not Sell My Info", link: "/do-not-sell/" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.link}
                      className="text-sm font-semibold text-neutral-400 hover:text-[#024ad8] transition-colors block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white/70">
                Direct Contact
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <MapPin
                    size={16}
                    className="text-[#3b82f6] mt-0.5 shrink-0"
                  />
                  <span className="text-sm font-bold text-neutral-300 group-hover:text-white transition-colors">
                    11397 Quincy St NE,
                    <br />
                    Blaine, MN 55434
                  </span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Mail size={16} className="text-[#3b82f6] shrink-0" />
                  <span className="text-sm font-bold text-neutral-300 group-hover:text-white transition-colors truncate">
                    support@innovationdynamicsgroup.com
                  </span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Phone size={16} className="text-[#024ad8] shrink-0" />
                  <span className="text-sm font-bold text-neutral-400 group-hover:text-white transition-colors">
                    +1-612-445-9132
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 border-b grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-wrap border-radius-2xl md:flex-nowrap items-center gap-4 justify-center  lg:justify-start">
            <div className="h-[80px] w-[150px] rounded-sm flex items-center justify-center p-2 shadow-sm shrink-0 bg-white">
              <span id="siteseal" className="flex items-center justify-center h-full w-full overflow-hidden" />
            </div>

            <a
              href="https://transparencyreport.google.com/safe-browsing/search?url=http:%2F%2Finnovationdynamicsgroup.com&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[80px] w-[150px] rounded-sm flex items-center justify-center shadow-sm shrink-0 group overflow-hidden"
              >
              <img
                src="/footer_google.webp"
                alt="Google Safe Browsing"
                className="w-full h-full object-contain p-1 transition-all duration-500"
              />
            </a>

            <a
              href="https://www.trustpilot.com/review/innovationdynamicsgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[80px] w-[150px] rounded-sm flex items-center justify-center shadow-sm shrink-0 group overflow-hidden"
            >
              <img
                src="/logo/start_inno.webp"
                alt="Trustpilot Reviews"
                className="w-full h-full object-contain p-1 transition-all duration-500"
              />
            </a>
          </div>

          <div className="flex flex-col items-center lg:items-end justify-center gap-4 w-full h-full">
            <div className="w-full max-w-[240px] rounded-sm p-4 shadow-xl flex flex-col items-center gap-3 hover:-translate-y-1 transition-transform duration-300">
             <a href="https://www.clover.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="/clover-payment.png"
                alt="Secure Payments Powered by Clover"
                className="w-full h-auto object-contain"
              />
             </a>
              <div className="w-full h-px bg-gray-100"></div>
              <span className="text-[9px] font-black text-gray-500 tracking-[0.2em] uppercase text-center w-full">
                256-Bit SSL Encrypted
              </span>
            </div>
          </div>
        </div>

        <div className="pt-10 pb-12 flex justify-center items-center">
          <div className="flex items-center gap-8 px-8 py-3 bg-neutral-900/50 border border-white/5 rounded-full backdrop-blur-sm">
            <img src="/payment/mastercard.svg" alt="MasterCard" className="h-6 w-auto opacity-70 hover:opacity-100 transition-all hover:scale-110" />
            <img src="/payment/amex.svg" alt="Amex" className="h-6 w-auto opacity-70 hover:opacity-100 transition-all hover:scale-110" />
            <img src="/payment/discover.svg" alt="Discover" className="h-6 w-16 bg-white p-0.5 rounded-sm opacity-70 hover:opacity-100 transition-all hover:scale-110" />
            <img src="/payment/paypal.svg" alt="PayPal" className="h-6 w-auto opacity-70 hover:opacity-100 transition-all hover:scale-110" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
