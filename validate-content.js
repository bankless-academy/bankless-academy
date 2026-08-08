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

// glossary keys (lowercase) for backticked-term validation; matches the
// runtime lookup in Lesson.tsx/Article.tsx: exact key, else trailing-s singular
const keywordKeys = new Set(
  Object.keys(
    JSON.parse(fs.readFileSync('translation/keywords/en/keywords.json', 'utf8'))
  ).map((k) => k.toLowerCase())
)
const resolvesToKeyword = (term) => {
  const t = term.toLowerCase()
  return (
    keywordKeys.has(t) || (t.endsWith('s') && keywordKeys.has(t.slice(0, -1)))
  )
}

const files = fs.readdirSync(EN_DIR).filter((f) => f.endsWith('.md'))
const fileSlugs = new Set(files.map((f) => f.replace(/\.md$/, '')))

// translation files on disk must match each lesson's languages[] registration
const langDirs = fs
  .readdirSync('translation/lesson')
  .filter((d) => d !== 'en' && fs.statSync(path.join('translation/lesson', d)).isDirectory())
for (const [slug, m] of Object.entries(meta)) {
  const listed = new Set(m.languages || [])
  for (const lang of langDirs) {
    const exists = fs.existsSync(`translation/lesson/${lang}/${slug}.md`)
    if (exists && !listed.has(lang))
      errors.push(`${slug}: translation file exists for "${lang}" but the language is not listed in lesson-meta.json`)
    if (!exists && listed.has(lang))
      errors.push(`${slug}: language "${lang}" is listed in lesson-meta.json but translation/lesson/${lang}/${slug}.md is missing`)
  }
}

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

  // LEARN slides must fit the fixed-height desktop lesson UI (rule 2/14).
  // Estimated rendered lines: image slides have a ~58-char text column,
  // imageless slides ~116; <details> render collapsed. Threshold calibrated
  // against a known-overflowing slide (~26 est. lines).
  const MAX_SLIDE_LINES = 22
  if (meta[slug]?.slideMeta && slugs.has(slug) && meta[slug].publicationStatus !== 'deprecated') {
    const stripped = md.replace(/```[\s\S]*?```/g, '')
    for (const section of stripped.split(/^# /m).slice(1)) {
      const [title] = section.split('\n')
      if (/Knowledge Check/i.test(title)) continue
      let text = section.replace(title, '')
      const hasImage = /!\[\]\([^)]*\)/.test(text)
      const cpl = hasImage ? 58 : 116
      text = text
        .replace(/<details>[\s\S]*?<\/details>/g, (m) =>
          (m.match(/<summary>/g) || []).map(() => '~S~').join('\n\n')
        )
        .replace(/!\[\]\([^)]*\)/g, '')
        .trim()
      let lines = 0
      for (const block of text.split(/\n\s*\n/).filter(Boolean)) {
        for (const ln of block.split('\n')) {
          const t = ln.trim()
          if (!t) continue
          lines += t === '---' || t === '~S~' ? 1.2 : Math.ceil(t.length / cpl)
        }
        lines += 0.6
      }
      if (lines > MAX_SLIDE_LINES)
        err(`slide "${title.trim()}" likely overflows the UI (~${Math.round(lines)} est. lines, max ${MAX_SLIDE_LINES}) — trim the text`)
    }
  }

  // every backticked `term` must resolve to a glossary keyword (rule 9);
  // fenced code blocks (the ASCII banner) are excluded
  const prose = md.replace(/```[\s\S]*?```/g, '')
  const seen = new Set()
  for (const m of prose.matchAll(/`([^`\n]+)`/g)) {
    const term = m[1]
    if (seen.has(term)) continue
    seen.add(term)
    if (!resolvesToKeyword(term)) err(`backticked term without glossary entry: \`${term}\``)
  }
}

if (errors.length) {
  console.error(`content validation FAILED (${errors.length} error${errors.length > 1 ? 's' : ''}):`)
  for (const e of errors) console.error(`  - ${e}`)
  process.exit(1)
}
console.log(`content validation passed (${files.length} lessons)`)
