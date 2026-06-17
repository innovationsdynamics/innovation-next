import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Printer, Scan, Settings } from 'lucide-react';
import { guides } from './GuideDetail';

const BuyingGuide = () => {
  return (
    <div className="bg-[#F8F9FA]  pt-28 pb-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-black mb-4">Helpful Guides</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
            Whether you're shopping for a new printer, scanner, or looking to get more out of your current equipment, our guides are here to help. Browse our collection of practical resources designed to make your purchasing decisions easier and help you maintain your devices for years to come.
          </p>
        </header>

        {/* Guide Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <Link href={`/buying-guide/${guide.slug}`} key={guide.slug} className="group">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:border-[#024ad8] hover:shadow-lg transition-all duration-300">
                <div className={`w-12 h-12 ${guide.iconBg} rounded-lg flex items-center justify-center mb-6`}>
                  {guide.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#024ad8] transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600 text-lg mb-4">
                  {guide.intro.slice(0, 120)}...
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  Read More <ArrowLeft size={16} className="rotate-180" />
                </div>
              </div>
            </Link>
          ))}
        </div>

   
       
      </div>
    </div>
  );
};

export default BuyingGuide;
