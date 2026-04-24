const servicesData = [
  {
    id: '01',
    title: 'Web Design & Development',
    tagline: 'Your digital storefront, built to impress and convert',
    img: '/images/web-dev.png',
    desc: "Your website is often the first — and most lasting — impression you make. We design and build websites that don't just look stunning; they're fast, responsive, and engineered to turn visitors into paying clients. Whether it's a landing page, a corporate site, or a full-scale web platform, we build it to work as hard as you do.",
    get: ['Custom UI/UX design', 'Mobile-first, responsive builds', 'SEO-ready architecture', 'Fast load speeds & performance', 'CMS integration (if needed)', 'Post-launch lifetime maintenance'],
    why: "We don't use cookie-cutter templates. Every site we build is designed from scratch around your brand and your goals — then supported forever after launch.",
    chip: 'Lifetime maintenance included'
  },
  {
    id: '02',
    title: 'Mobile App Development',
    tagline: 'Native experiences your users will keep coming back to',
    img: '/images/mobile-app.png',
    desc: "Mobile is where your customers live. We build iOS and Android apps that are intuitive, performant, and built for real-world usage — not just demos. From consumer apps to internal business tools, our developers bring your idea to life with clean code and a user experience that feels effortless.",
    get: ['iOS & Android development', 'UI/UX design for mobile', 'API & backend integration', 'App Store & Play Store submission', 'QA testing & bug-free delivery', 'Ongoing updates & support'],
    why: "Our mobile developers specialise in nothing else. You get focused expertise, not a web developer moonlighting in mobile — plus lifetime maintenance so your app never feels outdated.",
    chip: 'Lifetime maintenance included'
  },
  {
    id: '03',
    title: 'ERP Solutions',
    tagline: 'Streamline your entire operation with one intelligent system',
    img: '/images/erp.png',
    desc: "Running a business across spreadsheets, disconnected software, and manual processes isn't sustainable. We build custom ERP systems that unify your operations — from inventory and HR to finance, sales, and beyond — giving you real-time visibility and control across every department.",
    get: ['Custom ERP architecture & build', 'Module-based: HR, Finance, CRM, Inventory', 'Role-based access & dashboards', 'Data migration from legacy systems', 'Staff training & documentation', 'Lifetime support & upgrades'],
    why: "Off-the-shelf ERPs force you to adapt your business to their system. We build yours around how you actually work — then stay on to evolve it as your business grows.",
    chip: 'Lifetime maintenance included'
  },
  {
    id: '04',
    title: 'Branding & Graphic Design',
    tagline: 'Make your first impression unforgettable',
    desc: "Great branding isn't just a logo — it's the feeling your business leaves behind. We craft visual identities that are distinctive, memorable, and built to scale across every touchpoint. From your logo to your full brand guidelines, we give your business the visual foundation it deserves.",
    get: ['Logo design (multiple concepts)', 'Colour palette & typography system', 'Brand guidelines document', 'Business card & stationery design', 'Social media brand kit', 'All source files included'],
    why: "Our designers don't just make things look good — they build visual systems with strategy behind them. Your brand will be consistent, recognisable, and ready for any medium.",
    img: '/images/branding.png'
  },
  {
    id: '05',
    title: 'Digital Marketing & SEO',
    tagline: 'Get found. Get clicks. Get customers.',
    desc: "Having a great website means nothing if no one sees it. We drive qualified traffic to your business through smart SEO, targeted ad campaigns, and data-backed digital strategy. Every move we make is tied to real outcomes — more visibility, more leads, more revenue.",
    get: ['On-page & technical SEO', 'Keyword research & content strategy', 'Google & Meta ad campaigns', 'Performance tracking & reporting', 'Conversion rate optimisation', 'Monthly strategy reviews'],
    why: "We don't chase vanity metrics. We focus on what actually matters — traffic that converts. Every campaign we run is built around your specific business goals.",
    img: '/images/marketing.png'
  },
  {
    id: '06',
    title: 'AI Agents & Business Automation',
    tagline: 'Let intelligent systems handle the heavy lifting',
    desc: "Repetitive tasks, manual follow-ups, data entry, call handling — these are hours your team should never waste. We build custom AI agents and automation workflows that handle your operational load intelligently, so your team can focus on work that actually matters.",
    get: ['Custom AI agent development', 'Call automation & IVR systems', 'Workflow & process automation', 'CRM & tool integrations', 'Lead qualification bots', 'Ongoing tuning & optimisation'],
    why: "We don't sell generic automation tools — we engineer solutions built specifically around your workflows. The result is systems that actually fit, not systems you have to work around.",
    chip: 'Lifetime maintenance included',
    img: '/images/ai-automation.png'
  },
  {
    id: '07',
    title: 'Video & Animation',
    tagline: 'Stories told in motion — with impact that lasts',
    desc: "In a world of scrolling thumbs, video stops people. We produce high-quality video content and animations that communicate your brand, product, or message in a way that text and images simply can't. Whether it's a brand film, explainer video, or social reel — we make you impossible to ignore.",
    get: ['Brand & corporate videos', 'Explainer & product demo animations', 'Social media reels & short-form content', 'Motion graphics & visual effects', 'Script writing & storyboarding', 'Multi-format delivery'],
    why: "Our video team handles everything from concept to final cut. No outsourcing, no delays — just polished, purposeful content that represents your brand at its best.",
    img: '/images/video.png'
  },
  {
    id: '08',
    title: 'Copywriting & Content',
    tagline: 'Words that connect, convert, and leave a mark',
    desc: "The best-designed website falls flat without the right words. We write copy and content that speaks directly to your audience — clear, compelling, and built to drive action. From website pages and landing pages to blogs and email campaigns, every word earns its place.",
    get: ['Website & landing page copy', 'Blog posts & long-form content', 'Email marketing sequences', 'Ad copy & campaign messaging', 'Product descriptions', 'Brand voice & tone guidelines'],
    why: "We write with strategy, not just style. Every piece of content we produce is built around your audience's psychology and your business's conversion goals.",
    img: '/images/web-dev.png'
  },
  {
    id: '09',
    title: 'Social Media Management',
    tagline: 'A consistent, compelling presence — without the overwhelm',
    desc: "Showing up consistently on social media is one of the most powerful things a brand can do — and one of the hardest to maintain. We handle your entire social presence: strategy, content creation, scheduling, and community engagement. You stay focused on your business while we grow your audience.",
    get: ['Monthly content calendar', 'Platform-specific content creation', 'Graphics, captions & hashtag strategy', 'Scheduling & publishing', 'Community management & replies', 'Monthly performance reports'],
    why: "We treat your social channels like they're our own brand. That means consistency, creativity, and content that actually resonates — not just filler posts to meet a quota.",
    img: '/images/social-media.png'
  },
  {
    id: '10',
    title: 'Poster & Advertisement Design',
    tagline: 'Visuals that stop the scroll and spark action',
    desc: "Whether it's a digital ad, a printed poster, a billboard, or a promotional banner — the design either commands attention or gets ignored. Our designers create visually striking advertising material that communicates your message instantly and drives the response you're looking for.",
    get: ['Digital & print ad creatives', 'Event & promotional posters', 'Social media ad banners', 'Flyers & brochures', 'Billboard & outdoor advertising', 'All formats & sizes delivered'],
    why: "Our designers understand that good advertising design is one part art, one part psychology. We make visuals that are beautiful and strategically built to drive action.",
    img: '/images/branding.png'
  },
  {
    id: '11',
    title: 'Custom & Bespoke Digital Solutions',
    tagline: 'Wait — need something not listed here?',
    desc: "Don't see exactly what you need? We love a challenge. Whether it's a niche technical requirement, an unconventional project, or something entirely new — our team is built to problem-solve. Bring us your idea and we'll tell you honestly how we can help.",
    isCustom: true
  }
];

export default servicesData;
