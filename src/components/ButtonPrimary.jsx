import React from 'react';

const ButtonPrimary = ({ children, onClick, className = '' }) => (
  <button onClick={onClick} className={`group relative inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3.5 rounded-full text-sm font-medium transition-all hover:bg-[#c9a96e] hover:text-black hover:scale-[1.02] active:scale-95 ${className}`}>
    {children}
  </button>
);

export default ButtonPrimary;
