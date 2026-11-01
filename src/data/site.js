export const siteUrl = 'https://avlance.studio';

// Shared by React routes, metadata, prerendering and sitemap generation.
export const pages = [
  { path: '/', view: 'Home', title: 'Web Development, Branding & AI Automation', description: 'AVLANCE builds websites, mobile apps, brand identities and AI automation. Explore our digital services and discuss your project with our independent studio.' },
  { path: '/services/', view: 'Services', title: 'Web, App, Branding & Automation Services', description: 'Explore AVLANCE services: web design, mobile apps, ERP, branding, SEO and AI automation. See deliverables and find the right solution for your business.' },
  { path: '/work/', view: 'Work', title: 'Web Design & Development Portfolio', description: 'Explore AVLANCE’s web design and development work, including the Universal Interio website, its design gallery, cost estimator and consultation booking flow.' },
  { path: '/about/', view: 'About', title: 'About Our Independent Digital Studio', description: 'Meet AVLANCE, an independent digital studio for web development, design and digital strategy. Learn about our direct collaboration and lifetime support.' },
  { path: '/contact/', view: 'Contact', title: 'Contact Us to Discuss Your Digital Project', description: 'Discuss your website, app, branding or automation project with AVLANCE. Send an enquiry, email our studio or contact us by phone and WhatsApp.' },
  { path: '/privacy-policy/', view: 'PrivacyPolicy', title: 'Privacy Policy', description: 'Read how AVLANCE collects, uses and protects personal information, handles cookies and data sharing, and responds to requests about your privacy rights.' },
  { path: '/terms-of-service/', view: 'TermsOfService', title: 'Terms of Service', description: 'Read AVLANCE’s terms for digital services, including project payments, intellectual property, confidentiality, warranties and contact information.' },
];

export function normalizePath(pathname) {
  const path = pathname.split(/[?#]/)[0].replace(/\/+$/, '');
  return path ? `${path}/` : '/';
}

export const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'AVLANCE',
      url: `${siteUrl}/`,
      logo: `${siteUrl}/Logo.webp`,
      sameAs: [
        'https://www.linkedin.com/company/avlance-studio',
        'https://www.instagram.com/avlance',
        'https://x.com/avlance_studio',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'AVLANCE',
      url: `${siteUrl}/`,
      publisher: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'en',
    },
  ],
};
