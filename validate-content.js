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
// non-fatal: reported at the end but never fails the build
const warnings = []

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
  // deliberately unregistered: file kept in git for the translation pass to
  // diff against, but not served (see `staleTranslations.reason`)
  const stale = new Set(m.staleTranslations?.languages || [])
  for (const l of stale) {
    if (listed.has(l))
      errors.push(`${slug}: "${l}" is in both languages[] and staleTranslations`)
    if (!fs.existsSync(`translation/lesson/${l}/${slug}.md`))
      errors.push(`${slug}: "${l}" marked stale but translation/lesson/${l}/${slug}.md does not exist`)
  }
  if (m.staleTranslations && !m.staleTranslations.reason)
    errors.push(`${slug}: staleTranslations needs a "reason"`)
  for (const lang of langDirs) {
    const exists = fs.existsSync(`translation/lesson/${lang}/${slug}.md`)
    if (exists && !listed.has(lang) && !stale.has(lang))
      errors.push(`${slug}: translation file exists for "${lang}" but the language is neither listed in languages[] nor marked in staleTranslations`)
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

// ---------------------------------------------------------------------------
// translated lessons: must stay structurally identical to the English source
//
// `processMD` (src/pages/lessons/[...slug].tsx) overwrites a translated
// lesson's question/answers/feedback text but keeps `rightAnswerNumber` from
// the compiled English lesson. So an option that was dropped, added or
// reordered in translation silently grades learners against options that are
// not on screen. Section drift is just as bad: too few `#` sections makes
// processMD throw, and getStaticProps swallows it and serves English instead.
// Only registered translations are checked; `staleTranslations` are exempt.
const SPLIT = '```\n\n---'
const bodyOf = (md) => md.split(SPLIT)[1] || ''
const sectionsOf = (body) => body.split(/^# /m).slice(1)
const optionsOf = (section) =>
  section.split('\n').filter((l) => /^- \[[ x]\] /.test(l))

for (const [slug, m] of Object.entries(meta)) {
  const langs = m.languages || []
  if (!langs.length) continue
  const enPath = path.join(EN_DIR, `${slug}.md`)
  if (!fs.existsSync(enPath)) continue
  const enBody = bodyOf(fs.readFileSync(enPath, 'utf8'))
  const enSections = sectionsOf(enBody)
  const enQuizzes = enSections.filter((s) => optionsOf(s).length > 0)
  const expectedSections = (m.slideMeta || []).filter((s) => s.type !== 'QUEST').length

  for (const lang of langs) {
    const p = `translation/lesson/${lang}/${slug}.md`
    if (!fs.existsSync(p)) continue // already reported above
    const md = fs.readFileSync(p, 'utf8')
    const err = (msg) => errors.push(`${lang}/${slug}: ${msg}`)

    if (!/^TITLE: .+/m.test(md)) err('missing TITLE in frontmatter')
    if (!/^DESCRIPTION: .+/m.test(md)) err('missing DESCRIPTION in frontmatter')

    const body = bodyOf(md)
    if (!body.trim()) {
      err('no content section (missing the ``` + --- separator?)')
      continue
    }
    if (m.isArticle) continue

    const sections = sectionsOf(body)
    if (sections.length !== expectedSections) {
      err(`${sections.length} sections but the lesson has ${expectedSections} non-QUEST slides — processMD would fall back to English`)
      continue
    }

    const quizzes = sections.filter((s) => optionsOf(s).length > 0)
    if (quizzes.length !== enQuizzes.length) {
      err(`${quizzes.length} quizzes but English has ${enQuizzes.length}`)
      continue
    }
    quizzes.forEach((section, i) => {
      const en = optionsOf(enQuizzes[i])
      const tr = optionsOf(section)
      if (tr.length !== en.length) {
        err(`quiz ${i + 1}: ${tr.length} options but English has ${en.length} — the English answer key would point at a missing option`)
        return
      }
      // `[x]` is optional in translations (older files predate the convention),
      // but when present it must sit on the same index as English
      const enPos = en.findIndex((o) => o.startsWith('- [x] '))
      const trPos = tr.findIndex((o) => o.startsWith('- [x] '))
      if (trPos !== -1 && trPos !== enPos)
        err(`quiz ${i + 1}: correct answer marked at option ${trPos + 1} but English has it at ${enPos + 1}`)
    })

    // Images: a translation may point at its own localized asset (same slide,
    // different content hash — the text is baked into the SVG), so compare the
    // hash-stripped stem rather than the exact URL.
    const stems = (s) =>
      (s.match(/https:\/\/app\.banklessacademy\.com\/images\/[^\s)"']+/g) || [])
        .map((u) => u.replace(/-[0-9a-f]{6,}(\.[a-z0-9]+)$/i, '$1'))
    const enStems = stems(enBody)
    const trStems = stems(body)
    for (const u of new Set(enStems.filter((u) => !trStems.includes(u))))
      err(`image dropped in translation: ${u}`)
    for (const u of new Set(trStems.filter((u) => !enStems.includes(u))))
      err(`image not present in the English source: ${u}`)

    // Internal cross-links should survive translation, but a missing one only
    // costs a link (the lesson still renders correctly), so it warns instead of
    // failing the build — older translations predate links added in the rewrite.
    const links = (s) =>
      (s.match(/app\.banklessacademy\.com\/lessons\/[a-z0-9.-]+[a-z0-9]/g) || [])
    const enLinks = links(enBody)
    const trLinks = links(body)
    for (const u of new Set(enLinks.filter((u) => !trLinks.includes(u))))
      warnings.push(`${lang}/${slug}: lesson link dropped in translation: /${u.split('/').slice(1).join('/')}`)
  }
}

if (warnings.length) {
  console.warn(`content validation warnings (${warnings.length}):`)
  for (const w of warnings) console.warn(`  ! ${w}`)
}
if (errors.length) {
  console.error(`content validation FAILED (${errors.length} error${errors.length > 1 ? 's' : ''}):`)
  for (const e of errors) console.error(`  - ${e}`)
  process.exit(1)
}
console.log(`content validation passed (${files.length} lessons)`)
