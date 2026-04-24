import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SectionLabel from '../components/SectionLabel';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonGhost from '../components/ButtonGhost';
import portfolioData from '../data/portfolio';

// All unique categories for the filter
const allCategories = ['All', ...new Set(portfolioData.map(p => p.category))];

const ViewWork = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? portfolioData
    : portfolioData.filter(p => p.category === activeFilter);

  return (
    <div className="flex flex-col gap-20 sm:gap-32 pb-20">

      {/* Header */}
      <section className="pt-40 relative">
        <div className="absolute top-0 left-[10%] w-[500px] h-[500px] bg-[#c9a96e]/8 blur-[130px] rounded-full pointer-events-none -z-10" />
        <FadeIn>
          <SectionLabel>Our Work</SectionLabel>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-8 max-w-4xl">
            Results we're proud to put our name on.
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
            Every project here started with a conversation. A problem to solve, an idea to bring to life, or a business ready to grow. Here's what happened next.
          </p>
        </FadeIn>
      </section>

      {/* Filter Tabs */}
      <section>
        <FadeIn>
          <div className="flex flex-wrap gap-2 mb-12">
            {allCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 border ${
                  activeFilter === cat
                    ? 'bg-[#c9a96e] text-black border-[#c9a96e]'
                    : 'bg-transparent text-neutral-400 border-neutral-800 hover:border-[#c9a96e]/60 hover:text-[#c9a96e]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filtered.map((project, index) => (
              <div
                key={project.id}
                className="group relative border border-neutral-800 hover:border-[#c9a96e]/50 rounded-3xl overflow-hidden bg-black transition-all duration-500 hover:shadow-[0_0_60px_rgba(201,169,110,0.08)]"
              >
                {/* Background image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  {/* Project number */}
                  <span className="absolute top-6 right-6 font-mono text-sm opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: project.color }}>
                    {project.id}
                  </span>
                  {/* Category badge */}
                  <span className="absolute bottom-6 left-6 text-[10px] font-medium uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border" style={{ borderColor: `${project.color}40`, color: project.color, background: `${project.color}15` }}>
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-medium text-white group-hover:text-[#c9a96e] transition-colors mb-1">
                        {project.title}
                      </h2>
                      <p className="text-xs text-neutral-500 uppercase tracking-widest">{project.industry}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-neutral-800 group-hover:border-[#c9a96e]/50 flex items-center justify-center text-neutral-600 group-hover:text-[#c9a96e] transition-all shrink-0 mt-1">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">{project.summary}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Result callout */}
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800 group-hover:border-[#c9a96e]/20 transition-colors">
                    <span className="text-[#c9a96e] text-lg leading-none mt-0.5">✦</span>
                    <p className="text-sm text-neutral-300 leading-relaxed italic">"{project.result}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Disclaimer note */}
      <section>
        <FadeIn>
          <p className="text-xs text-neutral-600 text-center italic border-t border-neutral-900 pt-8">
            Projects above are representative examples. All results are real outcomes achieved for clients across comparable engagements.
          </p>
        </FadeIn>
      </section>

      {/* CTA */}
      <section>
        <FadeIn>
          <div className="bg-neutral-900/50 border border-[#c9a96e]/20 rounded-3xl p-10 sm:p-20 text-center flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#c9a96e]/8 to-transparent pointer-events-none" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-bold tracking-[0.1em] whitespace-nowrap pointer-events-none select-none" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: 'rgba(255,255,255,0.015)' }}>AVLANCE</span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight mb-4 relative z-10">Want results like these?</h2>
            <p className="text-neutral-400 text-lg max-w-xl mx-auto mb-10 relative z-10">
              Tell us your goal. We'll build you a plan — no cost, no pressure.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Link to="/contact"><ButtonPrimary>Start a Project</ButtonPrimary></Link>
              <Link to="/services"><ButtonGhost>View Our Services</ButtonGhost></Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default ViewWork;
