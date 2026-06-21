import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEO({ title, description, keywords, canonical, ogImage }) {
  const location = useLocation();
  const defaultTitle = 'Avlance';
  const defaultDesc = 'A elite freelance technical agency delivering custom web applications, mobile apps, and intelligent workflow automation. Built fast, built right, and supported for life.';
  
  useEffect(() => {
    // 1. Update Title
    document.title = title ? `${title} — Avlance` : defaultTitle;

    // 2. Helper to set meta tags
    const updateMetaTag = (nameAttr, propertyAttr, value) => {
      if (!value) return;
      
      let selector = '';
      if (nameAttr) {
        selector = `meta[name="${nameAttr}"]`;
      } else if (propertyAttr) {
        selector = `meta[property="${propertyAttr}"]`;
      }

      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        if (nameAttr) tag.setAttribute('name', nameAttr);
        if (propertyAttr) tag.setAttribute('property', propertyAttr);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', value);
    };

    // Update Meta Description
    updateMetaTag('description', null, description || defaultDesc);
    updateMetaTag(null, 'og:description', description || defaultDesc);
    updateMetaTag(null, 'twitter:description', description || defaultDesc);

    // Update Keywords
    if (keywords) {
      updateMetaTag('keywords', null, keywords);
    }

    // Update Titles for OG/Twitter
    const finalTitle = title ? `${title} — Avlance` : defaultTitle;
    updateMetaTag(null, 'og:title', finalTitle);
    updateMetaTag(null, 'twitter:title', finalTitle);

    // Update OG Image
    if (ogImage) {
      updateMetaTag(null, 'og:image', ogImage);
      updateMetaTag(null, 'twitter:image', ogImage);
    }

    // Update Canonical URL
    const finalCanonical = canonical || `https://avlance.studio${location.pathname}`;
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', finalCanonical);

    // Update Open Graph URL
    updateMetaTag(null, 'og:url', finalCanonical);

  }, [title, description, keywords, canonical, ogImage, location.pathname]);

  return null;
}
