import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import SectionLabel from '../components/SectionLabel';
import ButtonPrimary from '../components/ButtonPrimary';
import MarqueeStrip from '../components/Marquee';

const ViewAbout = () => (
  <div className="flex flex-col gap-24 sm:gap-40 pb-20">
    <section className="pt-40 relative">
      <div className="absolute top-0 right-[20%] w-[500px] h-[500px] bg-[#c9a96e]/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <FadeIn>
        <SectionLabel>About Us</SectionLabel>
      </FadeIn>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* why-left */}
        <div className="flex flex-col">
          <FadeIn>
            <h2 className="font-garamond text-4xl sm:text-5xl lg:text-[3.2rem] font-light leading-[1.3] mb-8">
              <em className="italic text-[#c9a96e]">Independent structure.</em><br />
              Direct collaboration.<br />
              Exceptional results.
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-sm sm:text-base leading-[1.9] text-neutral-300 mb-12">
              We are AVLANCE, a dedicated freelance studio passionate about building impactful digital experiences. We partner directly with you to understand your needs, offering the expertise of an agency with the agility and personal commitment of independent freelancers. Reach out, and let's craft something amazing together.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-neutral-800">
              <div>
                <div className="font-garamond text-4xl sm:text-5xl font-light text-[#c9a96e] leading-none mb-2">100%</div>
                <div className="text-[0.72rem] tracking-[0.15em] uppercase text-neutral-300">Freelance Dedication</div>
              </div>
              <div>
                <div className="font-garamond text-4xl sm:text-5xl font-light text-[#c9a96e] leading-none mb-2">∞</div>
                <div className="text-[0.72rem] tracking-[0.15em] uppercase text-neutral-300">Creative Vision</div>
              </div>
              <div>
                <div className="font-garamond text-4xl sm:text-5xl font-light text-[#c9a96e] leading-none mb-2">1:1</div>
                <div className="text-[0.72rem] tracking-[0.15em] uppercase text-neutral-300">Direct Communication</div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* why-right */}
        <div className="flex flex-col">
          {[
            { num: '—01', title: 'Who We Are', text: 'We are independent professionals specializing in web development, design, and digital strategy. Freelancing allows us to handpick the best solutions for you.' },
            { num: '—02', title: 'Direct & Personal', text: 'No account managers or middlemen. You talk directly with the people doing the work, ensuring your vision is understood and executed perfectly.' },
            { num: '—03', title: 'Flexible & Agile', text: 'As freelancers, we adapt to your timeline and specific needs effortlessly, free from the rigid structures of large agencies.' },
            { num: '—04', title: 'Our Commitment', text: 'Every project is personal. We treat your business as our own, guaranteeing a quality-first approach that delivers real results.' },
          ].map((item, i) => (
            <FadeIn key={item.num} delay={i * 100}>
              <div className="py-8 border-b border-neutral-800 first:border-t grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr] gap-6 items-start hover:pl-3 transition-all duration-400 cursor-default">
                <span className="font-mono text-xs text-[#c9a96e] opacity-60 mt-1">{item.num}</span>
                <div>
                  <h4 className="text-[1.1rem] font-medium font-sans uppercase tracking-[0.1em] mb-2 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{item.title}</h4>
                  <p className="text-sm text-neutral-400 leading-[1.8]">{item.text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Marquee — brand values & identity words */}
    <div className="-mx-6 md:-mx-12">
      <MarqueeStrip
        items={['Independent Studio', 'Direct Collaboration', 'Quality First', 'Lifetime Support', 'Global Reach', 'Radical Transparency', 'Specialist Team', 'Agile & Flexible', 'Client-First Thinking', 'Results Driven']}
        reverse={true}
      />
    </div>

    <section>
      <FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-neutral-900/40 border border-[#c9a96e]/20 hover:border-[#c9a96e]/50 transition-colors p-10 rounded-3xl group">
            <h4 className="text-xs tracking-widest uppercase text-[#c9a96e] mb-6">Our Mission</h4>
            <p className="text-xl sm:text-2xl font-medium leading-relaxed group-hover:text-white transition-colors text-neutral-300">To empower businesses worldwide with complete digital solutions — built fast, built right, and supported for life.</p>
          </div>
          <div className="bg-neutral-900/40 border border-[#c9a96e]/20 hover:border-[#c9a96e]/50 transition-colors p-10 rounded-3xl group">
            <h4 className="text-xs tracking-widest uppercase text-[#c9a96e] mb-6">Our Vision</h4>
            <p className="text-xl sm:text-2xl font-medium leading-relaxed group-hover:text-white transition-colors text-neutral-300">To be the last digital agency your business ever needs — a partner that grows with you at every stage.</p>
          </div>
        </div>
      </FadeIn>
    </section>

    <section>
      <FadeIn>
        <SectionLabel>Core Values</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-12">What we stand for</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Speed with substance', desc: "We move fast — but never at the cost of quality. Every deliverable is something we're proud to put our name on." },
            { title: 'Radical transparency', desc: "No jargon, no hidden costs, no surprises. You'll always know where your project stands." },
            { title: 'Lifetime ownership', desc: "We treat every project like it's our own. That's why we offer lifetime maintenance — because we care about what happens next." },
            { title: 'Client-first thinking', desc: "Your goals drive every decision we make. We don't push solutions — we find what genuinely fits." }
          ].map((val, i) => (
            <div key={i} className="border border-neutral-800 hover:border-[#c9a96e]/40 rounded-2xl p-8 bg-black transition-colors">
              <h4 className="text-base font-medium mb-3 text-white">{val.title}</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>

    <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <FadeIn>
        <SectionLabel>The Team</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-6">A team built for every challenge</h2>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="text-sm sm:text-base text-neutral-400 leading-relaxed space-y-6">
          <p>AVLANCE is made up of dedicated specialists across every digital discipline. No generalists wearing too many hats — when you come to us for a mobile app, a mobile app specialist builds it. When you need a brand identity, a brand designer creates it.</p>
          <p>Every team member shares one thing in common: a drive to deliver results that genuinely move the needle for our clients.</p>
        </div>
      </FadeIn>
    </section>

    <section>
      <FadeIn>
        <div className="bg-neutral-900/30 border border-[#c9a96e]/20 rounded-3xl p-10 sm:p-16 text-center flex flex-col items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#c9a96e]/5 to-transparent pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-medium mb-4 relative z-10">Like what you see? Let's build something together.</h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto mb-8 relative z-10">We'd love to hear about your project — big, small, or still just an idea.</p>
          <div className="relative z-10"><Link to="/contact"><ButtonPrimary>Start a Conversation</ButtonPrimary></Link></div>
          <p className="text-xs text-neutral-500 mt-5 relative z-10">We respond within 24 hours, every time.</p>
        </div>
      </FadeIn>
    </section>
  </div>
);

export default ViewAbout;
