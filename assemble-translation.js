// Assemble a translated lesson md from a translated body, reusing
// translate-content.js's own parser/renderer so the banner and spacing are exact.
import fs from 'fs'
const src = fs.readFileSync('translate-content.js', 'utf8')
const body = src
  .slice(src.indexOf('const SPLIT ='), src.indexOf('// ---------------------------------------------------------------------------\n// structural verification'))
  .replace(/^import .*$/gm, '')
const m = await import('data:text/javascript,' + encodeURIComponent(body + '\nexport { parseMd, renderMd, splitUnits }'))

const [slug, lang, bodyPath, title, description, localName] = process.argv.slice(2)
const meta = JSON.parse(fs.readFileSync('src/constants/lesson-meta.json', 'utf8'))
const isArticle = !meta[slug].slideMeta
const en = m.parseMd(fs.readFileSync(`translation/lesson/en/${slug}.md`, 'utf8'), isArticle)
const units = m.splitUnits(fs.readFileSync(bodyPath, 'utf8'), isArticle)

if (units.length !== en.units.length)
  throw new Error(`translated body has ${units.length} units, English has ${en.units.length}`)

const frontmatter = en.frontmatter.map(([k, v]) => {
  if (k === 'TITLE') return [k, title]
  if (k === 'DESCRIPTION') return [k, description]
  if (k === 'LANGUAGE') return [k, localName]
  if (k === 'TRANSLATORS') return [k, 'Claude (Anthropic AI)']
  return [k, v]
})
const out = `translation/lesson/${lang}/${slug}.md`
fs.writeFileSync(out, m.renderMd({ frontmatter, banner: en.banner, gap: en.gap, units }))
console.log(`wrote ${out} (${units.length} units)`)
