import React from 'react';

const ButtonGhost = ({ children, onClick, className = '' }) => (
  <button onClick={onClick} className={`group relative inline-flex items-center justify-center gap-2 bg-transparent text-white border border-neutral-700 px-6 py-3.5 rounded-full text-sm font-medium transition-all hover:border-[#c9a96e] hover:text-[#c9a96e] hover:bg-[#c9a96e]/10 active:scale-95 ${className}`}>
    {children}
  </button>
);

export default ButtonGhost;
