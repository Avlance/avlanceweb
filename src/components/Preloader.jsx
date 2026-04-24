import React, { useState, useEffect } from 'react';

const Preloader = ({ onComplete }) => {
  const [phase, setPhase] = useState('visible'); // visible -> sliding -> done

  useEffect(() => {
    // Phase 1: Logo clip-path reveal + line animation plays for 5.0s
    const slideTimer = setTimeout(() => setPhase('sliding'), 5000);
    // Phase 2: Curtain slides up (1.6s transition), then remove from DOM
    const doneTimer = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 6600);
    return () => {
      clearTimeout(slideTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  const dustParticles = React.useMemo(() => [...Array(30)].map((_, i) => (
    <div
      key={i}
      style={{
        position: 'absolute',
        bottom: '-10vh',
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 4 + 1}px`,
        height: `${Math.random() * 4 + 1}px`,
        background: '#c9a96e',
        borderRadius: '50%',
        boxShadow: '0 0 10px #c9a96e',
        animation: `floatUp ${3 + Math.random() * 4}s linear ${Math.random() * 3}s infinite`,
        willChange: 'transform, opacity',
        opacity: 0
      }}
    />
  )), []);

  return (
    <>
      <style>{`
        @keyframes fillProgress {
          0% {
            clip-path: inset(0 100% 0 0);
            filter: brightness(0.8);
          }
          40% {
            clip-path: inset(0 60% 0 0);
            filter: brightness(1);
          }
          50% {
            clip-path: inset(0 60% 0 0);
          }
          80% {
            clip-path: inset(0 15% 0 0);
          }
          90% {
            clip-path: inset(0 15% 0 0);
          }
          100% {
            clip-path: inset(0 0 0 0);
            filter: brightness(1.1) drop-shadow(0 0 10px rgba(201, 169, 110, 0.3));
          }
        }
        @keyframes logoDive {
          0% {
            transform: scale(1);
            opacity: 1;
            filter: brightness(1.1) drop-shadow(0 0 10px rgba(201, 169, 110, 0.3));
          }
          40% {
            transform: scale(0.92);
            opacity: 1;
            filter: brightness(1.3) drop-shadow(0 0 25px rgba(201, 169, 110, 0.8));
          }
          100% {
            transform: scale(4) translateY(-20px);
            opacity: 0;
            filter: brightness(2) blur(10px);
          }
        }
        @keyframes floatUp {
          0% { transform: translateY(0) scale(0.5); opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.8; transform: translateY(-70vh) scale(1.5); }
          100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
        }
      `}</style>
      <div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
        style={{
          background: 'radial-gradient(circle at center, #111110 0%, #080808 100%)',
          transition: 'transform 1.6s cubic-bezier(0.8, 0, 0.2, 1), opacity 1.6s ease',
          transform: phase === 'sliding' ? 'translateY(-100%)' : 'translateY(0)',
          opacity: phase === 'sliding' ? 0 : 1,
          pointerEvents: phase === 'sliding' ? 'none' : 'auto',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
          {dustParticles}
        </div>
        <div className="flex flex-col items-center relative z-10">
          <img
            src="./Logo.png"
            alt="AVLANCE"
            style={{
              height: '350px',
              animation: 'fillProgress 4s cubic-bezier(0.65, 0, 0.35, 1) forwards, logoDive 0.8s 4.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
              willChange: 'transform, filter, clip-path',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Preloader;
