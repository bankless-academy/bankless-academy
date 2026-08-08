/* eslint-disable no-console */
// Content validation for translation/lesson/en/*.md + lesson-meta.json.
// Complements build-content.js (which already hard-fails on structural
// mismatches): checks frontmatter, quiz shape, internal lesson links,
// local image existence, and leftover TODO markers.
// Run: `yarn validate-content` (also runs as part of `yarn build`).
import fs from 'fs'
import path from 'path'

const EN_DIR = 'translation/lesson/en'
const meta = JSON.parse(fs.readFileSync('src/constants/lesson-meta.json', 'utf8'))
const slugs = new Set(Object.keys(meta))
const errors = []

const files = fs.readdirSync(EN_DIR).filter((f) => f.endsWith('.md'))
const fileSlugs = new Set(files.map((f) => f.replace(/\.md$/, '')))

for (const slug of slugs) {
  if (!fileSlugs.has(slug)) errors.push(`${slug}: in lesson-meta.json but ${EN_DIR}/${slug}.md is missing`)
}

for (const file of files) {
  const slug = file.replace(/\.md$/, '')
  const md = fs.readFileSync(path.join(EN_DIR, file), 'utf8')
  const err = (msg) => errors.push(`${slug}: ${msg}`)

  if (!slugs.has(slug)) err('md file has no lesson-meta.json entry')
  if (!/^---\nTITLE: .+/m.test(md)) err('missing TITLE in frontmatter')
  if (!/^DESCRIPTION: .+/m.test(md)) err('missing DESCRIPTION in frontmatter')
  if (/\bTODO\b/.test(md)) err('contains a TODO marker')

  // quiz sections: >=2 options; exactly one [x] (none for POLL sections)
  const isPoll = new Set()
  const slideMeta = meta[slug]?.slideMeta
  if (slideMeta) {
    let n = 0
    for (const s of slideMeta) {
      if (s.type === 'QUIZ' || s.type === 'POLL') {
        n++
        if (s.type === 'POLL') isPoll.add(n)
      }
    }
  }
  const sections = md.split(/^# /m).slice(1)
  let quizIdx = 0
  for (const section of sections) {
    const [title] = section.split('\n')
    if (!/^(✅ )?Knowledge Check/i.test(title)) continue
    quizIdx++
    const options = section.match(/^- \[[ x]\] .+$/gm) || []
    const checked = options.filter((o) => o.startsWith('- [x] '))
    if (options.length < 2) err(`"${title.trim()}": only ${options.length} option(s)`)
    if (isPoll.has(quizIdx)) {
      if (checked.length > 0) err(`"${title.trim()}": POLL section must not have a checked option`)
    } else {
      if (checked.length !== 1) err(`"${title.trim()}": expected exactly one [x], found ${checked.length}`)
    }
  }

  // internal lesson links must point at existing slugs
  for (const m of md.matchAll(/app\.banklessacademy\.com\/lessons\/([a-z0-9.-]+[a-z0-9])/g)) {
    if (!slugs.has(m[1])) err(`broken internal lesson link: /lessons/${m[1]}`)
  }

  // local images must exist in public/
  for (const m of md.matchAll(/https:\/\/app\.banklessacademy\.com(\/images\/[^\s)"']+)/g)) {
    const rel = decodeURI(m[1].split('?')[0])
    if (!fs.existsSync(path.join('public', rel))) err(`missing image file: public${rel}`)
  }
}

if (errors.length) {
  console.error(`content validation FAILED (${errors.length} error${errors.length > 1 ? 's' : ''}):`)
  for (const e of errors) console.error(`  - ${e}`)
  process.exit(1)
}
console.log(`content validation passed (${files.length} lessons)`)
