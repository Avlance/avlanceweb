import React from 'react';

// Default items used as fallback
const defaultItems = [
  'Web Design & Development',
  'Mobile App Development',
  'ERP Solutions',
  'Brand Identity Design',
  'Digital Marketing & SEO',
  'AI Agents & Automation',
  'Video Production & Animation',
  'Graphic Design',
  'Lifetime Support',
];

/**
 * MarqueeStrip — infinite scrolling word strip (pure CSS, zero JS overhead)
 *
 * Props:
 *   items   — string[]  custom words for this strip (defaults to service list)
 *   reverse — boolean   scroll right-to-left vs left-to-right
 *   speed   — 'slow' | 'normal' | 'fast'  (default: 'normal')
 */
const MarqueeStrip = ({ items = defaultItems, reverse = false, speed = 'normal' }) => {
  // Render 3× so the seamless loop fills any screen width
  const strip = [...items, ...items, ...items];

  const speedMap = { slow: '50s', normal: '35s', fast: '20s' };
  const duration = speedMap[speed] || '35s';

  return (
    <div className="overflow-hidden select-none border-y border-neutral-900 py-px">
      <div
        className={reverse ? 'marquee-right' : 'marquee-left'}
        style={{ animationDuration: duration }}
      >
        {strip.map((item, i) => (
          <span
            key={i}
            className="flex items-center shrink-0 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-600 whitespace-nowrap hover:text-[#c9a96e] transition-colors"
          >
            {item}
            <span className="ml-8 text-[#c9a96e]/30 text-[8px]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
