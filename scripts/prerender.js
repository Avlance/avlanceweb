import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, '..', p)

// Wait for the dynamic import of the compiled server entry
const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import(pathToFileURL(toAbsolute('dist-server/entry-server.js')).href)

const routes = [
  '/', 
  '/about', 
  '/services', 
  '/work', 
  '/contact', 
  '/privacy-policy', 
  '/terms-of-service'
]

for (const url of routes) {
  console.log(`Pre-rendering ${url}...`)
  
  const { html, helmet } = render(url)
  
  // Extract helmet data or default to empty string if missing
  const helmetTitle = helmet && helmet.title ? helmet.title.toString() : '';
  const helmetMeta = helmet && helmet.meta ? helmet.meta.toString() : '';
  const helmetLink = helmet && helmet.link ? helmet.link.toString() : '';
  
  const headTags = `${helmetTitle}\n${helmetMeta}\n${helmetLink}`
  
  // Replace the injection points
  let htmlWithApp = template.replace(`<!--app-head-->`, headTags)
  htmlWithApp = htmlWithApp.replace(`<!--app-html-->`, html)

  // Determine file path
  const filePath = `dist${url === '/' ? '/index.html' : `${url}/index.html`}`
  const absolutePath = toAbsolute(filePath)
  
  // Ensure directory exists and write file
  fs.mkdirSync(path.dirname(absolutePath), { recursive: true })
  fs.writeFileSync(absolutePath, htmlWithApp)
  
  console.log(`Saved ${filePath}`)
}

console.log('Pre-rendering complete.')

// Clean up temporary server bundle
fs.rmSync(toAbsolute('dist-server'), { recursive: true, force: true })
