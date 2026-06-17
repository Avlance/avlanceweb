import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const CustomSelect = ({ name, required, options, placeholder, label, hint }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectOption = (value) => {
    setSelected(value);
    setIsOpen(false);
    setFocusedIndex(-1);
    triggerRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (!isOpen) {
      // Open on Enter/Space/ArrowDown
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault();
        setIsOpen(true);
        setFocusedIndex(0);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(i => Math.min(i + 1, options.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(i => Math.max(i - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedIndex >= 0) selectOption(options[focusedIndex].value);
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        setFocusedIndex(-1);
        triggerRef.current?.focus();
        break;
      case 'Tab':
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative group mt-2" ref={dropdownRef}>
      {/* Hidden native input for form submission */}
      <input
        type="text"
        name={name}
        value={selected}
        onChange={() => {}}
        required={required}
        className="absolute opacity-0 -z-10 w-full h-full pointer-events-none top-0 left-0"
        tabIndex={-1}
      />

      {/* Trigger button — keyboard focusable */}
      <div
        ref={triggerRef}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="custom-select-list"
        tabIndex={0}
        className={`w-full bg-transparent border-b py-3 text-sm flex justify-between items-center cursor-pointer transition-colors outline-none ${selected ? 'text-white' : 'text-neutral-500'} ${isOpen ? 'border-[#c9a96e]' : 'border-neutral-800'}`}
        onClick={() => { setIsOpen(!isOpen); if (!isOpen) setFocusedIndex(0); }}
        onKeyDown={handleKeyDown}
      >
        <span>{selected ? options.find(o => o.value === selected)?.label : placeholder}</span>
        <div className={`text-neutral-500 transition-transform duration-300 ${isOpen ? '-rotate-90' : 'rotate-90'}`}>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>

      <label className={`absolute left-0 -top-3.5 text-xs transition-colors ${isOpen || selected ? 'text-[#c9a96e]' : 'text-neutral-500'}`}>
        {label} {required && '*'}
      </label>

      {hint && <p className="text-[10px] text-neutral-600 mt-2 italic">{hint}</p>}

      {/* Dropdown list */}
      <div
        id="custom-select-list"
        role="listbox"
        className={`absolute left-0 top-full mt-2 w-full bg-[#0a0a0a] border border-neutral-800 rounded-xl overflow-hidden shadow-2xl z-50 transition-all duration-300 origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95 pointer-events-none'}`}
      >
        <div className="max-h-60 overflow-y-auto">
          {options.map((opt, i) => (
            <div
              key={i}
              role="option"
              aria-selected={selected === opt.value}
              className={`px-4 py-3 text-sm cursor-pointer transition-colors hover:bg-neutral-800/50 ${selected === opt.value ? 'text-[#c9a96e] bg-[#c9a96e]/10' : 'text-neutral-300'} ${focusedIndex === i ? 'bg-neutral-800/70 outline-none ring-1 ring-[#c9a96e]/30' : ''}`}
              onMouseEnter={() => setFocusedIndex(i)}
              onClick={() => selectOption(opt.value)}
            >
              {opt.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;
