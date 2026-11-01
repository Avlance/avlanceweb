import React, { useState, useEffect, useRef, useSyncExternalStore } from 'react';

const motionQuery = '(prefers-reduced-motion: reduce)';
const subscribeMotion = callback => {
  const media = window.matchMedia(motionQuery);
  media.addEventListener('change', callback);
  return () => media.removeEventListener('change', callback);
};
const reducedMotion = () => window.matchMedia(motionQuery).matches;
const serverMotion = () => false;

const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();
  const prefersReduced = useSyncExternalStore(subscribeMotion, reducedMotion, serverMotion);

  useEffect(() => {
    if (prefersReduced) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [delay, prefersReduced]);

  return (
    <div
      data-reveal=""
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${isVisible || prefersReduced ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
