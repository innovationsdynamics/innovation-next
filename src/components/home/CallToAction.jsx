import React from 'react';

const CallToAction = () => {
    return (
        <section className="py-20 bg-black text-white overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#024ad8] opacity-10 skew-x-12 translate-x-20"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="max-w-2xl text-center lg:text-left">
                        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-400 mb-6 block">Ready to Begin</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-tight mb-6">
                            Find the Right Printer <br/> 
                            <span className="text-blue-500">with Confidence</span>
                        </h2>
                        <p className="text-gray-300 text-base sm:text-lg font-medium leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                            From home printing to business solutions, explore a range of printers designed to match your specific needs. Experience a new standard in procurement.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a 
                                href="/shop" 
                                className="px-10 py-5 bg-[#024ad8] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#0239a5] transition-all rounded-sm text-center shadow-lg shadow-blue-900/20"
                            >
                                Shop Now
                            </a>
                            <a 
                                 href="/shop?filter=home-printers" 
                                 className="px-10 py-5 bg-transparent border border-gray-700 text-white font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-all rounded-sm text-center"
                            >
                                Explore All Categories
                            </a>
                        </div>
                    </div>

                    <div className="hidden lg:block relative">
                         <div className="w-80 h-80 border-2 border-gray-800 rounded-sm rotate-12 absolute -top-10 -right-10"></div>
                         <div className="w-80 h-80 bg-gray-900 rounded-sm -rotate-12 flex items-center justify-center border border-gray-800 relative z-10">
                             <div className="text-center p-8">
                                 <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-4">Verification Check</p>
                                 <p className="text-sm font-bold text-white uppercase leading-loose">
                                     Authorized Partner<br/>
                                     Direct Fulfillment<br/>
                                     Zero Hidden Fees
                                 </p>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
