# AVLANCE technical SEO audit — 1 November 2026

Changes are local and ready for review. Nothing was committed, pushed, submitted to search engines or deployed. DNS, credentials, form submission configuration and verification tokens were not changed. Pre-existing untracked files were left alone.

## Audit evidence and decisions

| Area | Verified baseline | Resolution |
| --- | --- | --- |
| Architecture | React 19, Vite 8, React Router 7, Tailwind 4, Helmet 3. Build creates client assets, a temporary SSR bundle, then seven static HTML documents. No tracked deployment configuration or CI workflow; public responses are served through Cloudflare and match Pages directory routing. | Retained the stack and prerendering. Added no dependencies. Confirm hosting is Cloudflare Pages and publish directory is `dist` before deployment. |
| Initial metadata | Every view already supplied a title/description through SEO.jsx. However, installed Helmet 3 uses React 19 native metadata and does not populate `helmetContext.helmet`. Baseline `dist/services/index.html` had an empty head injection and title/meta/canonical inside `#root` in the body. | Move React's rendered title/meta/link tags into the template head during prerendering. Tests require metadata in the initial head. |
| Canonicals | Live GET/HEAD checks: `/services` → 308 `/services/`; `/services/index.html` → 308 `/services/`. About, Work, Contact, Privacy and Terms also redirect from slashless to trailing slash. Baseline canonical/sitemap/internal links used slashless URLs. | Prefer the existing HTTPS, apex-host, trailing-slash URLs. Shared page registry drives React routing, metadata, prerendering and sitemap. Normalize client canonical paths and active navigation. No reverse slash redirects or URL migration at the host. |
| Duplicate host | `https://www.avlance.studio/` returned 200. `http://avlance.studio/` returned 301 to HTTPS. | Canonicals continue to use the apex host. A permanent www-to-apex host redirect remains a hosting follow-up; do not add an unsupported domain rule to Pages `_redirects`. |
| Missing routes | Live `/seo-missing-page-check` returned 200; source had no catch-all route and no top-level 404 output. | Added a catch-all view and generated `dist/404.html` with `noindex, follow`, no canonical, and a home link. On Pages, this enables native HTTP 404 handling. Verify status on the actual host after deployment. |
| Sitemap / robots | Seven URLs in a manually maintained sitemap, all slashless except home, with identical `2026-08-26` lastmod values. robots.txt allows crawling and points to the correct sitemap URL. | Generate `dist/sitemap.xml` from the page registry on each build. Removed source `public/sitemap.xml` to prevent drift. Omitted unverifiable modification dates, priority and changefreq. robots.txt is unchanged. |
| Structured data | Organization appeared in index.html and again on Home with different social-link lists. No WebSite entity. Contact's FAQPage matched its questions. | One Organization/WebSite graph with stable IDs, based only on existing site name, logo, URL and footer profiles. Kept FAQ content; removed the comment implying guaranteed Google rich results. No address, ratings, testimonials or new business claims. |
| Headings / content | All seven pages already had one visible H1 and substantial service descriptions. Some subsections skipped from H2 to H4; home promise headings started at H3. | Preserved all H1 copy and styling. Corrected levels while keeping classes and text. Existing service descriptions and deliverable lists remain intact; no keyword stuffing or new service pages. |
| Internal navigation | Header/footer linked all primary pages. Work already linked Services and Contact; Services linked Contact. Every home service chip went to the top of Services. | Home chips now link to the corresponding service section, with anchor scrolling and fixed-header clearance. Added an inline link from existing Services introduction text to Work. All internal page links use the canonical slash format. |
| Social metadata | OG/Twitter tags already existed and Logo.png is reachable (HTTP 200). | Unique, concise title/descriptions for all seven pages; consistent AVLANCE casing, canonical OG URLs and descriptive image-alt metadata. Retained the actual brand image. |
| Accessibility | CTA buttons nested inside links; unlabeled mobile toggle and service combobox; missing selected/expanded states; repeated decorative service-image alt text. | Removed nested interactive controls while retaining CTA classes. Added navigation, combobox, FAQ and filter states/names. Portfolio alt text describes the website; decorative backgrounds have empty alt. Corrected heading levels. |
| Hydration / no-JS | Server omitted preloader while first browser render included it. FadeIn output stayed invisible without JavaScript. | Hydration-consistent preloader initialization; existing 5-second reveal and 1.6-second exit remain. No-JS fallback reveals prerendered content. Reduced-motion subscription avoids synchronous effect updates; menu state resets on navigation without changing its animation. |
| Assets / performance | Portfolio PNG: 3,118,821 bytes, 1572×4096. Service PNGs are large but already lazy-loaded. Fonts use preconnect and display=swap. | Portfolio lossless WebP: 2,140,238 bytes, saving 978,583 bytes (31.4%). Decoded RGBA pixels match exactly. Original PNG retained. Trial lossless conversion enlarged service images, so they remain unchanged. Async decoding added. |

Cloudflare behavior is documented in [Serving Pages](https://developers.cloudflare.com/pages/configuration/serving-pages/) and [Redirects](https://developers.cloudflare.com/pages/configuration/redirects/). Canonical alignment follows [Google's canonicalization guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls). A canonical is a preference, not an indexing guarantee.

## Files changed

Modified:

- `eslint.config.js` — ignore generated server output and git-ignored local review artifacts.
- `index.html` — remove duplicate Organization/default robots; preserve verification; add no-JS reveal fallback.
- `package.json` — add `test:seo` command.
- `scripts/prerender.js` — native metadata head extraction, shared routes, 404 and sitemap generation.
- `scripts/indexnow.cjs` — align the existing URL list with trailing-slash canonicals; script was not run.
- `src/App.jsx` — shared routes, canonical links, active navigation, anchor scrolling, 404 and hydration/accessibility fixes.
- `src/components/SEO.jsx` — shared metadata, robots, canonical/OG/Twitter and Organization/WebSite graph.
- `src/components/ButtonPrimary.jsx`, `src/components/ButtonGhost.jsx` — styled spans inside existing links instead of nested buttons.
- `src/components/CustomSelect.jsx` — accessible name, required/expanded/active-option states.
- `src/components/FadeIn.jsx` — reduced-motion subscription and no-JS reveal hook.
- `src/data/portfolio.js` — lossless WebP asset reference.
- `src/views/Home.jsx` — shared SEO, remove duplicate Organization, headings and service-anchor links.
- `src/views/Services.jsx` — shared SEO, service anchors, heading levels, decorative alt and Work link.
- `src/views/About.jsx` — shared SEO, heading levels and canonical links.
- `src/views/Work.jsx` — shared SEO, descriptive image alt, filter/link accessibility and unused-variable cleanup.
- `src/views/Contact.jsx` — shared SEO, heading levels and FAQ accessibility; submission handler untouched.
- `src/views/PrivacyPolicy.jsx`, `src/views/TermsOfService.jsx` — shared SEO; legal content unchanged.

Added:

- `src/data/site.js` — seven-page registry, normalization and factual entity graph.
- `src/views/NotFound.jsx` — missing-page view.
- `scripts/verify-seo.js` — generated-output regression checks.
- `public/images/universal-interio.webp` — lossless optimized screenshot.
- `SEO-AUDIT.md` — this report.

Deleted: `public/sitemap.xml`, replaced by automatically generated `dist/sitemap.xml`.

`seo-review.local/` contains ignored baseline output, screenshots and local browser verification tooling; it is not part of the commit. Existing unrelated untracked files are not part of this work.

## Validation

- `npm run lint`: passed, zero errors.
- `npm run build`: passed, seven indexable HTML documents plus 404 and sitemap generated. Non-blocking warning: Browserslist database is seven months old. Dependency updates were not mixed into this change.
- `npm run test:seo`: passed; seven unique titles/descriptions, one H1 and canonical per page, initial-head metadata, OG/Twitter coverage, valid JSON-LD, exactly one Organization/WebSite per page, no noindex on important pages, no broken internal page/fragment links or missing displayed image files, matching sitemap and robots, no nested button links, noindex only on 404. 177 internal links checked.
- No TypeScript/type-check command exists in this JavaScript project.
- `git diff --check`: passed.
- Headless Chromium: passed all seven pages at 1440px and 390px, client-side canonical updates, mobile navigation, service anchors, keyboard service selection, FAQ toggling, portfolio filtering, missing-page rendering, first-visit preloader completion and no-JavaScript content visibility. No page errors. No form submission was performed.
- Visual regression: captured 28 full-page baseline/current screenshots. All 14 before/after pairs have identical page dimensions. Mobile Home, About, Work, Contact and both legal pages are pixel-identical in the comparison metric. Remaining differences are small (at most 0.222% of pixels), including the corrected desktop active-navigation indicator and inline service link rasterization. Inspected rendered desktop Home, mobile Contact and the Services difference image; no layout redesign or unintended geometry change found.
- Visual comparison used identical offline font fallback and reduced motion for repeatability, with animations disabled for screenshot capture. Production font loading and motion still need a normal-browser check. The preloader was separately tested with normal motion. Local HTTP status testing used a static server implementing directory redirects and 404 fallback, not the Cloudflare edge; final hosting behavior remains a deployment check.

Outbound checks: Instagram and X returned 200; portfolio host redirects to www; WhatsApp redirects to its send endpoint. LinkedIn returned automated-client status 999, so it needs manual signed-out browser verification, not automatic removal. No email, phone, WhatsApp message or enquiry was sent.

## Remaining checks and post-deployment actions

1. Review this diff before committing. Publish using the existing build command and `dist` output only after your approval. Hosting settings are not versioned here. Check that all seven deep URLs still serve their prerendered documents; `dist/404.html` intentionally ends the catch-all 200 fallback for unknown URLs on Pages.
2. Configure a permanent **www → apex** redirect in the hosting account, preserving path/query. No DNS changes are needed for this audit and none were made. Recheck HTTP/HTTPS and www variants for loops and chains.
3. After deployment, verify every canonical trailing-slash URL returns 200, slashless/`index.html` aliases redirect to that URL, and a random missing route returns 404. Check actual response `X-Robots-Tag` headers as well as HTML robots. Local static tests cannot prove edge configuration.
4. In Search Console, keep existing ownership verification. Re-submit the same `/sitemap.xml` endpoint once the new file is live. Use URL Inspection → Test Live URL for `/services/`, `/contact/`, `/privacy-policy/` and Home; check rendered content, crawl permission, user-declared canonical and later Google's selected canonical. Request indexing once for the updated canonical versions if needed. Previous requests do not establish that the pages are now indexed.
5. Inspect the actual three URLs in the Search Console “Page with redirect” report. Slashless aliases being excluded is expected if their canonical destinations are indexable. Do not request indexing for redirect aliases or use URL removal to resolve normal canonicalization.
6. Validate Organization/WebSite with Schema Markup Validator and inspect sharing previews after deployment. FAQ markup does not promise a Google rich result. Recheck LinkedIn in a normal browser.
7. Measure production PageSpeed Insights/Core Web Vitals after deployment. This audit proves an image-byte reduction, not an LCP/INP/CLS gain. The 6.6-second first-visit preloader, Google Fonts stylesheet, animations and large service backgrounds were intentionally preserved; changing their UX or lossy image quality requires a separate decision.
8. Review the existing visible business claims (for example lifetime support and portfolio outcomes) internally for accuracy. They were not invented or expanded here. Dedicated service landing pages and further case studies require verified content and are outside this interface-preserving change.
9. Monitor indexing, canonical selection, impressions and query/page performance after recrawling. The supplied 8 clicks / 120 impressions / 6.7% CTR / 31.3 position / 5 indexed pages are baseline user-provided figures, not fresh Search Console measurements. No ranking or indexing outcome is guaranteed.
