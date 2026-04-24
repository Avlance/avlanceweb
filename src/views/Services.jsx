import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import SectionLabel from '../components/SectionLabel';
import ButtonPrimary from '../components/ButtonPrimary';
import servicesData from '../data/services';

const ViewServices = () => (
  <div className="flex flex-col gap-20 sm:gap-32 pb-20">
    <section className="pt-40 relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c9a96e]/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <FadeIn>
        <SectionLabel>Our Services</SectionLabel>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-8 max-w-4xl">
          Every digital service your business will ever need — in one place.
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
          From your first website to enterprise automation, AVLANCE brings together specialist teams under one roof. No juggling vendors, no broken handoffs — just seamless execution and lifetime support across every solution we deliver.
        </p>
      </FadeIn>
    </section>

    <section className="flex flex-col gap-6">
      {servicesData.map((s, index) => (
        <FadeIn key={s.id} delay={index * 50}>
          <div className="border border-neutral-800 bg-black rounded-3xl p-8 sm:p-12 group hover:border-[#c9a96e]/60 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 sm:p-12 text-sm font-mono text-[#c9a96e] opacity-40 group-hover:opacity-100 transition-opacity z-20">{s.id}</div>

            {/* Service Image */}
            {s.img && (
              <div className="absolute top-0 right-0 w-[65%] h-full hidden lg:block pointer-events-none">
                <img src={s.img} alt="" loading="lazy" className="w-full h-full object-cover opacity-[0.25] group-hover:opacity-[0.5] transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
              </div>
            )}

            <div className="max-w-3xl relative z-10">
              <h2 className="text-2xl sm:text-3xl font-medium mb-3 group-hover:text-[#c9a96e] transition-colors">{s.title}</h2>
              <p className="text-neutral-500 text-sm sm:text-base font-medium mb-6">{s.tagline}</p>
              <p className="text-neutral-400 text-sm leading-relaxed mb-10">{s.desc}</p>

              {!s.isCustom ? (
                <>
                  <div className="h-px w-full bg-neutral-900 group-hover:bg-[#c9a96e]/20 transition-colors mb-10" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="text-xs tracking-widest uppercase text-neutral-500 mb-5">What you get</h4>
                      <ul className="flex flex-col gap-3">
                        {s.get.map((item, i) => (
                          <li key={i} className="text-sm text-neutral-300 flex items-start gap-3">
                            <span className="text-[#c9a96e] mt-0.5">—</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs tracking-widest uppercase text-neutral-500 mb-5">Why AVLANCE</h4>
                      <p className="text-sm text-neutral-400 italic leading-relaxed mb-6">"{s.why}"</p>
                      {s.chip && (
                        <span className="inline-block px-3 py-1.5 rounded-full border border-[#c9a96e]/30 text-[11px] text-[#c9a96e] bg-[#c9a96e]/10">
                          ✦ {s.chip}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link to="/contact"><ButtonPrimary className="!py-2.5 !px-5 !text-xs">Get a Free Quote</ButtonPrimary></Link>
                  </div>
                </>
              ) : (
                <div className="mt-6">
                  <Link to="/contact"><ButtonPrimary className="!py-2.5 !px-5 !text-xs">Tell Us Your Idea</ButtonPrimary></Link>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      ))}
    </section>

    <section>
      <FadeIn>
        <div className="bg-neutral-900/30 border border-[#c9a96e]/20 rounded-3xl p-10 sm:p-16 text-center flex flex-col items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#c9a96e]/5 to-transparent pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-medium mb-4 relative z-10">Not sure which service you need?</h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto mb-8 relative z-10">Tell us your goal and we'll recommend the right solution. No pressure, no jargon — just honest advice.</p>
          <div className="relative z-10"><Link to="/contact"><ButtonPrimary>Get a Free Recommendation</ButtonPrimary></Link></div>
          <p className="text-xs text-neutral-500 mt-5 relative z-10">We respond within 24 hours. Serving clients globally.</p>
        </div>
      </FadeIn>
    </section>
  </div>
);

export default ViewServices;
