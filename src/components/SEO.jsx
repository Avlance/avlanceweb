import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { normalizePath, pages, siteSchema, siteUrl } from '../data/site';

export default function SEO({ noindex = false }) {
  const { pathname } = useLocation();
  const page = pages.find(page => page.path === normalizePath(pathname));
  const title = `${page?.title || 'Page Not Found'} — AVLANCE`;
  const description = page?.description || 'This page could not be found. Explore AVLANCE’s services, portfolio or contact our studio.';
  const canonical = page && `${siteUrl}${page.path}`;
  const image = `${siteUrl}/Logo.png`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex || !page ? 'noindex, follow' : 'index, follow, max-image-preview:large'} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:type" content="website" />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="AVLANCE studio logo" />
      <meta property="og:site_name" content="AVLANCE" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@avlance_studio" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="AVLANCE studio logo" />
      <script type="application/ld+json">{JSON.stringify(siteSchema).replace(/</g, '\\u003c')}</script>
    </Helmet>
  );
}
