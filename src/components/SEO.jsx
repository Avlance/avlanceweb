import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export default function SEO({ 
  title, 
  description, 
  keywords,
  canonical,
  ogImage = "https://avlance.studio/Logo.png"
}) {
  const location = useLocation();
  const defaultTitle = "Avlance | Built to scale, Built to Last";
  const defaultDesc = "AVLANCE is your all-in-one digital partner. From stunning websites and mobile apps to bold branding, smart automation, and AI-powered solutions — built fast, built right, maintained for life.";
  
  const finalTitle = title ? `${title} — Avlance` : defaultTitle;
  const finalDesc = description || defaultDesc;
  const finalCanonical = canonical || `https://avlance.studio${location.pathname}`;

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={finalCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="AVLANCE" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@avlance_studio" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
