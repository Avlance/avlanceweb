import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Plus, Globe, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import SectionLabel from '../components/SectionLabel';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonGhost from '../components/ButtonGhost';
import servicesData from '../data/services';
import testimonials from '../data/testimonials';
import MarqueeStrip from '../components/Marquee';
// import portfolioData from '../data/portfolio'; // Uncomment when Work page goes live

// --- TESTIMONIALS CAROUSEL --- //
const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const prev = () => setActive(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive(i => (i + 1) % testimonials.length);
  const t = testimonials[active];

  return (
    <section>
      <FadeIn>
        <SectionLabel>Client Stories</SectionLabel>
        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight mb-12">
          Don't take our word for it.
        </h2>

        <div className="relative">
          <div className="bg-neutral-900/40 border border-[#c9a96e]/20 rounded-3xl p-8 sm:p-12 relative overflow-hidden min-h-[240px] flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#c9a96e]/5 blur-[80px] rounded-full pointer-events-none" />

            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#c9a96e] text-[#c9a96e]" />
              ))}
            </div>

            <blockquote className="text-lg sm:text-xl font-light leading-relaxed text-neutral-200 mb-8 relative z-10 max-w-4xl">
              "{t.quote}"
            </blockquote>

            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#c9a96e]/20 border border-[#c9a96e]/30 flex items-center justify-center text-[#c9a96e] text-sm font-semibold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-neutral-500">{t.role}, {t.company}</p>
                </div>
              </div>
              <span className="px-3 py-1.5 rounded-full border border-neutral-800 text-[11px] text-neutral-500 bg-neutral-900/50">
                {t.industry}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${i === active ? 'w-6 h-1.5 bg-[#c9a96e]' : 'w-1.5 h-1.5 bg-neutral-700 hover:bg-neutral-500'}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={prev} className="w-10 h-10 rounded-full border border-neutral-800 hover:border-[#c9a96e]/60 flex items-center justify-center text-neutral-400 hover:text-[#c9a96e] transition-all">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={next} className="w-10 h-10 rounded-full border border-neutral-800 hover:border-[#c9a96e]/60 flex items-center justify-center text-neutral-400 hover:text-[#c9a96e] transition-all">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

// --- HOME VIEW --- //
const ViewHome = () => (
  <div className="flex flex-col gap-24 sm:gap-40 pb-20">

    {/* Hero */}
    <section className="min-h-[85vh] flex flex-col justify-center pt-40 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[#c9a96e]/10 blur-[120px] rounded-full pointer-events-none" />
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] font-bold tracking-[0.1em] whitespace-nowrap pointer-events-none select-none" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: 'rgba(255,255,255,0.015)' }}>AVLANCE</span>

      <div className="relative z-10">
        <FadeIn>
          <SectionLabel>Digital Agency</SectionLabel>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05] mb-8 text-white max-w-5xl">
            Built to scale, <br />
            <span className="text-[#c9a96e] italic font-garamond pr-4">Built to Last.</span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-10">
            AVLANCE is your all-in-one digital partner — from stunning websites and mobile apps to bold branding, smart automation, and AI-powered solutions. We don't just build for today. We build, grow, and maintain your digital presence for the long run.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/contact">
              <ButtonPrimary>
                Let's Build It <ArrowRight className="w-4 h-4" />
              </ButtonPrimary>
            </Link>
            <Link to="/services">
              <ButtonGhost>
                Explore Capabilities
              </ButtonGhost>
            </Link>
          </div>
          <p className="text-xs text-neutral-600 italic mt-4">No commitment. Just a conversation.</p>
        </FadeIn>
      </div>
    </section>

    {/* Promises Strip */}
    <section>
      <FadeIn delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800 rounded-3xl overflow-hidden relative z-10">
          {[
            { icon: <Globe className="w-5 h-5" />, title: 'Everything Under One Roof', desc: 'Web, mobile, branding, marketing, automation — we handle it all so you never need another agency.' },
            { icon: <Plus className="w-5 h-5" />, title: 'Results, Delivered Fast', desc: 'Our specialist team moves with urgency and precision to bring your ideas to life without the wait.' },
            { icon: <ArrowUpRight className="w-5 h-5" />, title: 'Lifetime Project Maintenance', desc: 'Every project we deliver comes with lifetime support. We grow with you — not just hand over and disappear.' }
          ].map((item, i) => (
            <div key={i} className="bg-black p-8 sm:p-10 group hover:bg-neutral-900 transition-colors">
              <div className="text-[#c9a96e] mb-6">{item.icon}</div>
              <h3 className="text-base font-medium mb-3">{item.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>

    {/* Marquee — service capabilities strip */}
    <div className="-mx-6 md:-mx-12">
      <MarqueeStrip
        items={['Web Design & Dev', 'Mobile Apps', 'ERP Solutions', 'Brand Identity', 'Digital Marketing', 'AI Automation', 'Video & Animation', 'Graphic Design', 'Lifetime Support', 'UI / UX Design']}
      />
    </div>

    {/* Testimonials */}
    <TestimonialsSection />

    {/* USPs Breakdown */}
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <FadeIn>
        <SectionLabel>Why AVLANCE</SectionLabel>
        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight mb-6">Why clients choose us — and stay with us.</h2>
        <p className="text-neutral-400 text-lg">We replace the chaos of managing multiple vendors with a single, dedicated partnership.</p>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="flex flex-col gap-10">
          {[
            { num: '01', title: 'We replace a whole team of agencies', desc: "Web designers, app developers, marketers, automation engineers — they're all under one roof at AVLANCE. Fewer vendors, faster decisions, better results." },
            { num: '02', title: 'We move fast — without cutting corners', desc: "Our specialists are handpicked for their ability to deliver excellence under tight timelines. Your project doesn't wait in a queue — it gets full attention." },
            { num: '03', title: "We're your partner for life, not just the launch", desc: "Every AVLANCE project comes with lifetime maintenance. Bugs, updates, improvements — we stay by your side long after the project goes live." },
            { num: '04', title: 'We serve every niche, every industry, globally', desc: "From startups in Chennai to enterprises in New York — we understand different markets and build digital solutions that truly fit your world." }
          ].map((usp, i) => (
            <div key={i} className="flex gap-6 items-start group">
              <span className="text-sm font-mono text-[#c9a96e] mt-1">{usp.num}</span>
              <div>
                <h4 className="text-lg font-medium mb-2 group-hover:text-[#c9a96e] transition-colors">{usp.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{usp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>

    {/* Services Chips */}
    <section>
      <FadeIn>
        <SectionLabel>Capabilities</SectionLabel>
        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight mb-4">One agency. Endless capabilities.</h2>
        <p className="text-neutral-400 text-lg mb-12">Whether you're starting from scratch or scaling fast, we have the right team for every challenge.</p>

        <div className="flex flex-wrap gap-3">
          {servicesData.filter(s => !s.isCustom).map((s, i) => (
            <Link key={i} to="/services" className="text-left px-5 py-4 rounded-2xl border border-neutral-800 hover:border-[#c9a96e] bg-neutral-900/30 hover:bg-[#c9a96e]/5 transition-all group">
              <span className="block text-sm font-medium text-white group-hover:text-[#c9a96e] transition-colors mb-1">{s.title}</span>
              <span className="block text-xs text-neutral-500 line-clamp-1">{s.tagline}</span>
            </Link>
          ))}
        </div>
      </FadeIn>
    </section>

    {/* How it Works & Industries */}
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-neutral-900 pt-20">
      <FadeIn>
        <SectionLabel>Process</SectionLabel>
        <h2 className="text-2xl sm:text-3xl font-medium mb-10">How it works</h2>
        <div className="flex flex-col gap-8">
          {[
            { num: '01', title: 'Tell us your vision', desc: 'Fill in a quick form or reach out directly. We respond within 24 hours — no delays, no runaround.' },
            { num: '02', title: 'We build it', desc: 'Our specialist team gets to work, delivering quality results at a pace that respects your timeline.' },
            { num: '03', title: 'We maintain it — forever', desc: "Your project is live. But we're not done. Lifetime support means AVLANCE is always in your corner." }
          ].map((step, i) => (
            <div key={i} className="flex gap-6 p-6 rounded-2xl border border-neutral-900 bg-neutral-950/50 hover:border-[#c9a96e]/50 transition-colors">
              <span className="text-xl font-light text-[#c9a96e]">{step.num}</span>
              <div>
                <h4 className="text-base font-medium mb-2">{step.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <SectionLabel>Reach</SectionLabel>
        <h2 className="text-2xl sm:text-3xl font-medium mb-4">Industries we serve</h2>
        <p className="text-neutral-400 text-sm mb-10">We don't believe in limiting who we help. Great digital work transcends industries.</p>
        <div className="flex flex-wrap gap-2">
          {['E-commerce', 'Healthcare', 'Education', 'Real Estate', 'Finance & Fintech', 'Hospitality', 'Logistics', 'Startups', 'Retail', 'SaaS & Tech', 'Media & Entertainment', 'Non-profits'].map((ind, i) => (
            <span key={i} className="px-4 py-2 rounded-full border border-neutral-800 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors cursor-default text-xs text-neutral-400 bg-neutral-900/30">
              {ind}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>

    {/* Bottom CTA */}
    <section>
      <FadeIn>
        <div className="bg-neutral-900/50 border border-[#c9a96e]/20 rounded-3xl p-10 sm:p-20 text-center flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#c9a96e]/10 to-transparent pointer-events-none" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-bold tracking-[0.1em] whitespace-nowrap pointer-events-none select-none" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: 'rgba(255,255,255,0.015)' }}>AVLANCE</span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight mb-4 relative z-10">Ready to build something great?</h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto mb-10 relative z-10">Tell us your vision. We'll handle everything — from first pixel to lifetime support.</p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link to="/contact"><ButtonPrimary>Let's Build It</ButtonPrimary></Link>
            <Link to="/contact"><ButtonGhost>Contact Us Directly</ButtonGhost></Link>
          </div>
          <p className="text-xs text-[#c9a96e]/70 mt-6 relative z-10">We respond within 24 hours. Available globally.</p>
        </div>
      </FadeIn>
    </section>
  </div>
);

export default ViewHome;
