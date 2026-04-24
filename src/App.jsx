import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Preloader from './components/Preloader';
import ButtonPrimary from './components/ButtonPrimary';
import ViewHome from './views/Home';
import ViewServices from './views/Services';
import ViewAbout from './views/About';
import ViewContact from './views/Contact';
// import ViewWork from './views/Work'; // TODO: Uncomment when portfolio is ready to go live

// --- SCROLL TO TOP ON ROUTE CHANGE --- //

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- NAV LINKS --- //

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  // { path: '/work', label: 'Work' }, // TODO: Uncomment when portfolio is ready to go live
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' }
];

// --- MAIN APP --- //

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent scroll during preloader
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [loading]);

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 font-sans selection:bg-[#c9a96e] selection:text-black overflow-x-hidden">
      <ScrollToTop />

      {/* Preloader */}
      {loading && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-[400ms] ${isScrolled ? 'pt-5' : 'pt-[30px]'}`}>
        <div className={`flex items-center justify-between transition-all duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] border rounded-[50px] w-[95%] ${isScrolled
          ? 'max-w-[800px] px-8 py-1 bg-[#0f0f0f]/85 backdrop-blur-md border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'max-w-[1400px] px-0 py-2 bg-transparent border-transparent shadow-none'
          }`}>

          {/* Left Logo */}
          <div className="flex-1 flex justify-start">
            <Link to="/" className="flex items-center relative z-50 group">
              <img
                src="./Logo.png"
                alt="AVLANCE"
                className={`object-contain origin-left transition-all duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:opacity-80 ${isScrolled ? 'h-[40px] md:h-[50px] scale-[3] -translate-x-4 translate-y-1' : 'h-[120px] md:h-[180px] scale-100 translate-x-0 translate-y-0'}`}
              />
            </Link>
          </div>

          {/* Center Nav Links */}
          <div className={`hidden md:flex justify-center transition-all duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isScrolled ? 'gap-[20px]' : 'gap-[40px]'}`}>
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[0.75rem] font-medium uppercase tracking-[0.15em] transition-colors hover:text-[#c9a96e] relative ${location.pathname === link.path ? 'text-[#c9a96e]' : 'text-white'}`}
              >
                {link.label}
                {location.pathname === link.path && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#c9a96e] rounded-full" />}
              </Link>
            ))}
          </div>

          {/* Right Button & Mobile Toggle */}
          <div className="flex-1 flex justify-end">
            <div className="hidden md:block">
              <Link
                to="/contact"
                className={`text-[0.75rem] font-semibold uppercase tracking-[0.15em] px-6 py-3 rounded-[30px] transition-all duration-300 border ${isScrolled
                  ? 'bg-[#c9a96e] text-black border-[#c9a96e] hover:bg-transparent hover:text-[#c9a96e]'
                  : 'bg-transparent text-white border-transparent hover:text-[#c9a96e]'
                  }`}
              >
                Let's Build It
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden relative z-50 p-2 -mr-2 text-white hover:text-[#c9a96e] transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <div className="flex flex-col gap-1.5 w-6">
                <span className={`h-px bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-px bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-px bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#050505] z-40 transition-all duration-500 flex flex-col justify-center items-center gap-8 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        {navLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-3xl font-medium tracking-tight transition-colors hover:text-[#c9a96e] ${location.pathname === link.path ? 'text-[#c9a96e]' : 'text-white'}`}
          >
            {link.label}
          </Link>
        ))}
        <div className="mt-8">
          <Link to="/contact"><ButtonPrimary>Let's Build It</ButtonPrimary></Link>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 pt-12 min-h-[90vh]">
        <Routes>
          <Route path="/" element={<ViewHome />} />
          <Route path="/services" element={<ViewServices />} />
          {/* <Route path="/work" element={<ViewWork />} /> */}{/* TODO: Uncomment when portfolio is ready to go live */}
          <Route path="/about" element={<ViewAbout />} />
          <Route path="/contact" element={<ViewContact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900 bg-black pt-16 pb-8 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#c9a96e]/5 blur-[100px] rounded-[100%] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            <div className="max-w-md">
              <Link to="/">
                <img
                  src="./Logo.png"
                  alt="AVLANCE"
                  loading="lazy"
                  className="h-[140px] md:h-[220px] object-contain mb-8 cursor-pointer hover:opacity-80 transition-opacity"
                />
              </Link>
              <p className="text-sm text-neutral-500 leading-relaxed">
                A single, reliable digital partner. One team with every skill you'll ever need. Built fast, built right, and supported for life.
              </p>
            </div>

            <div className="flex gap-16">
              <div className="flex flex-col gap-4">
                <h4 className="text-xs uppercase tracking-[0.1em] text-[#c9a96e] font-medium mb-2">Company</h4>
                {navLinks.map(link => (
                  <Link key={link.path} to={link.path} className="text-sm text-neutral-400 hover:text-[#c9a96e] transition-colors text-left">
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-xs uppercase tracking-[0.1em] text-[#c9a96e] font-medium mb-2">Social</h4>
                <a href="#" className="text-sm text-neutral-400 hover:text-[#c9a96e] transition-colors">LinkedIn</a>
                <a href="https://www.instagram.com/avlance" className="text-sm text-neutral-400 hover:text-[#c9a96e] transition-colors">Instagram</a>
                <a href="https://x.com/avlance_studio" className="text-sm text-neutral-400 hover:text-[#c9a96e] transition-colors">X (Twitter)</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-neutral-900 text-xs text-neutral-600">
            <p>© {new Date().getFullYear()} AVLANCE. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-[#c9a96e] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#c9a96e] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}