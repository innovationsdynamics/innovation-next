import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsent = () => {
    // Read from localStorage synchronously to eliminate artificial 3000ms Element Render Delay for LCP audits
    const [isVisible, setIsVisible] = useState(() => {
        if (typeof window !== 'undefined') {
            return !localStorage.getItem('idg-cookie-consent');
        }
        return false;
    });

    useEffect(() => {
        // Effect left intentionally blank; state initialized synchronously.
    }, []);

    const handleAccept = () => {
        localStorage.setItem('idg-cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('idg-cookie-consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-[600px] animate-in slide-in-from-bottom-10 fade-in duration-500">
            <div className="bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.15)] rounded-lg border border-gray-100">
                <div className="space-y-6">
                    <p className="text-[15px] leading-relaxed text-gray-700 font-medium">
                        We use essential cookies to make our site work. With your consent, we may also use non-essential cookies to improve user experience and analyze website traffic. By clicking "Accept," you agree to our website's cookie use as described in our <Link href="/cookies-policy" className="underline hover:text-black">Cookie Policy</Link>. You can change your cookie settings at any time by clicking "Preferences."
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <button 
                            onClick={() => {}} 
                            className="flex-1 px-6 py-3 bg-white border border-black text-black font-bold text-sm rounded-md hover:bg-gray-50 transition-colors"
                        >
                            Preferences
                        </button>
                        <button 
                            onClick={handleDecline}
                            className="flex-1 px-6 py-3 bg-[#024ad8] text-white font-bold text-sm rounded-md hover:bg-[#0238a8] transition-colors"
                        >
                            Decline
                        </button>
                        <button 
                            onClick={handleAccept}
                            className="flex-1 px-6 py-3 bg-[#024ad8] text-white font-bold text-sm rounded-md hover:bg-[#0238a8] transition-colors"
                        >
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
