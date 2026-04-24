import React from 'react';

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 text-[10px] sm:text-xs font-medium tracking-[0.15em] text-[#c9a96e] uppercase mb-6 sm:mb-8">
    <div className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] opacity-80" />
    {children}
  </div>
);

export default SectionLabel;
