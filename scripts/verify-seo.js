import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pages, normalizePath, siteUrl } from '../src/data/site.js';

const read = file => fs.readFileSync(path.join('dist', file), 'utf8');
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'g'))].map(match => match[0]);
const attr = (tag, name) => tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];
const meta = (html, name) => tags(html, 'meta').filter(tag => attr(tag, 'name') === name || attr(tag, 'property') === name);
const documents = new Map(pages.map(page => [page.path, read(`${page.path.slice(1)}index.html`)]));
const titles = new Set();
const descriptions = new Set();
let links = 0;

for (const page of pages) {
  const html = documents.get(page.path);
  const canonical = `${siteUrl}${page.path}`;
  const head = html.match(/<head>([\s\S]*?)<\/head>/)[1];
  assert.equal(tags(head, 'title').length, 1, 'title must be in initial HTML head');
  assert.equal(meta(head, 'description').length, 1, 'description must be in initial HTML head');
  assert(tags(head, 'link').some(tag => attr(tag, 'rel') === 'canonical'), 'canonical must be in initial HTML head');
  assert.equal(tags(html, 'title').length, 1, `${page.path}: one title`);
  const title = html.match(/<title[^>]*>(.*?)<\/title>/s)[1];
  assert(!titles.has(title), 'unique titles'); titles.add(title);
  assert.equal(meta(html, 'description').length, 1);
  const description = attr(meta(html, 'description')[0], 'content');
  assert(description && !descriptions.has(description), 'unique descriptions'); descriptions.add(description);
  assert.equal(tags(html, 'h1').length, 1, `${page.path}: one H1`);
  const canonicals = tags(html, 'link').filter(tag => attr(tag, 'rel') === 'canonical');
  assert.equal(canonicals.length, 1);
  assert.equal(attr(canonicals[0], 'href'), canonical);
  assert.equal(meta(html, 'robots').length, 1);
  assert(!/noindex|nofollow|none/.test(attr(meta(html, 'robots')[0], 'content')));
  for (const key of ['og:title', 'og:description', 'og:image', 'twitter:title', 'twitter:description', 'twitter:image']) {
    assert.equal(meta(html, key).length, 1, `${page.path}: ${key}`);
  }
  assert.equal(attr(meta(html, 'og:url')[0], 'content'), canonical);
  const graphs = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].map(match => JSON.parse(match[1]));
  const entities = graphs.flatMap(graph => graph['@graph'] || [graph]);
  assert.equal(entities.filter(entity => entity['@type'] === 'Organization').length, 1);
  assert.equal(entities.filter(entity => entity['@type'] === 'WebSite').length, 1);
  for (const tag of tags(html, 'a')) {
    const href = attr(tag, 'href');
    if (!href?.startsWith('/')) continue;
    const url = new URL(href, siteUrl);
    assert.equal(url.pathname, normalizePath(url.pathname), `noncanonical link: ${href}`);
    assert(documents.has(url.pathname), `broken internal link: ${href}`);
    if (url.hash) assert(documents.get(url.pathname).includes(`id="${url.hash.slice(1)}"`), `broken fragment: ${href}`);
    links++;
  }
  for (const tag of tags(html, 'img')) {
    assert.notEqual(attr(tag, 'alt'), undefined, 'image alt present');
    const src = attr(tag, 'src');
    if (src?.startsWith('/')) assert(fs.existsSync(path.join('dist', src)), `missing image: ${src}`);
  }
  assert(!/<a\b[^>]*>\s*<button\b/.test(html), 'no nested button links');
}
const urls = [...read('sitemap.xml').matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.deepEqual(urls, pages.map(page => `${siteUrl}${page.path}`));
assert(!read('sitemap.xml').includes('<lastmod>'), 'do not invent modification dates');
assert(read('robots.txt').includes(`Sitemap: ${siteUrl}/sitemap.xml`));
assert(!/Disallow:\s*\//i.test(read('robots.txt')));
const missing = read('404.html');
assert.equal(attr(meta(missing, 'robots')[0], 'content'), 'noindex, follow');
assert(!tags(missing, 'link').some(tag => attr(tag, 'rel') === 'canonical'));
assert(missing.includes('Page not found'));
for (const page of pages) {
  assert.equal(normalizePath(page.path.slice(0, -1) || '/'), page.path);
  assert.equal(normalizePath(`${page.path}?utm_source=test#fragment`), page.path);
}
console.log(`SEO verification passed: ${pages.length} indexable pages, ${links} internal links, sitemap, JSON-LD, images and noindex 404.`);
