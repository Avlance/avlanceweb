import fs from 'node:fs'
import { pages, siteUrl } from '../src/data/site.js'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, '..', p)

// Wait for the dynamic import of the compiled server entry
const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import(pathToFileURL(toAbsolute('dist-server/entry-server.js')).href)

const routes = [...pages.map(page => page.path), '/404.html']

for (const url of routes) {
  console.log(`Pre-rendering ${url}...`)
  
  const { html } = render(url)

  // Helmet 3 uses React 19 native metadata rather than helmetContext.helmet.
  // Rendering a root fragment hoists these tags to the fragment's start, not
  // into our HTML template's head. Move them before inserting the app body.
  const headTags = [];
  const appHtml = html.replace(/<title\b[^>]*>[\s\S]*?<\/title>|<(?:meta|link)\b[^>]*\/>/g, tag => {
    headTags.push(tag);
    return '';
  });
  
  // Replace the injection points
  let htmlWithApp = template.replace(`<!--app-head-->`, headTags.join('\n'))
  htmlWithApp = htmlWithApp.replace(`<!--app-html-->`, appHtml)

  // Determine file path
  const filePath = url === '/404.html' ? 'dist/404.html' : `dist${url}index.html`
  const absolutePath = toAbsolute(filePath)
  
  // Ensure directory exists and write file
  fs.mkdirSync(path.dirname(absolutePath), { recursive: true })
  fs.writeFileSync(absolutePath, htmlWithApp)
  
  console.log(`Saved ${filePath}`)
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(page => `  <url><loc>${siteUrl}${page.path}</loc></url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync(toAbsolute('dist/sitemap.xml'), sitemap);
console.log('Pre-rendering and sitemap generation complete.')

// Clean up temporary server bundle
fs.rmSync(toAbsolute('dist-server'), { recursive: true, force: true })
