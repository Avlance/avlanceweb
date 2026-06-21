import React, { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('avlance_cookie_consent');
    const declined = sessionStorage.getItem('avlance_cookie_decline');
    if (!consent && !declined) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setClosing(true);
    setTimeout(() => {
      localStorage.setItem('avlance_cookie_consent', 'accepted');
      setVisible(false);
    }, 500); // Allow exit animation to finish
  };

  const handleDecline = () => {
    setClosing(true);
    setTimeout(() => {
      sessionStorage.setItem('avlance_cookie_decline', 'declined');
      setVisible(false);
    }, 500); // Allow exit animation to finish
  };

  if (!visible) return null;

  return (
    <div 
      className={`fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[100] 
        bg-[#0a0a0a]/80 backdrop-blur-lg border border-white/5 rounded-2xl p-6 
        shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]
        ${closing 
          ? 'opacity-0 translate-y-12 scale-95 pointer-events-none' 
          : 'opacity-100 translate-y-0 scale-100 animate-[fadeInUp_0.6s_cubic-bezier(0.2,0.8,0.2,1)_backwards]'
        }`}
    >
      <div className="flex flex-col gap-4">
        <div>
          <h4 className="text-xs uppercase tracking-[0.15em] text-[#c9a96e] font-semibold">Cookie Consent</h4>
          <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
            We use cookies to optimize site performance, analyze traffic, and personalize your experience. By clicking "Accept", you consent to our use of cookies.
          </p>
        </div>
        <div className="flex justify-end items-center gap-3">
          <button 
            onClick={handleDecline} 
            className="text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-neutral-400 hover:text-white px-4 py-2.5 rounded-full transition-all duration-300 cursor-pointer"
          >
            Decline
          </button>
          <button 
            onClick={handleAccept} 
            className="text-[0.75rem] font-semibold uppercase tracking-[0.1em] bg-[#c9a96e] hover:bg-white text-black px-6 py-2.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(201,169,110,0.15)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
