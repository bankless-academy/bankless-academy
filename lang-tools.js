/* eslint-disable no-console */
// Per-language wave helpers. The Spanish run needed all three of these done by
// hand; scripting them removes the steps where mistakes actually happened.
//
//   node lang-tools.js pins <lang>      candidate ```terms``` pins from ETHGlossary
//   node lang-tools.js merge <lang>     merge glossary halves + report conflicts
//   node lang-tools.js register <lang>  register every verified lesson, run gates
import fs from 'fs'
import { execSync } from 'child_process'
import { parseStylePins, normalizeKeyword } from './content-lib.js'

// Glossary halves are drafted outside the repo (one file per agent) and merged
// here; point SCRATCH at wherever those drafts live.
const SCRATCH = process.env.TRANSLATION_SCRATCH || '.translation-drafts'

const [cmd, lang] = process.argv.slice(2)
if (!cmd || !lang) {
  console.error('usage: lang-tools.mjs <pins|merge|register> <lang>')
  process.exit(1)
}
const read = (p) => JSON.parse(fs.readFileSync(p, 'utf8'))
const enKw = read('translation/keywords/en/keywords.json')

// ---------------------------------------------------------------------------
// pins: seed the style guide's ```terms``` block from the vendored ETHGlossary
//
// The Spanish halves diverged (`mint` -> acuñar vs mintear, `bridge` vs puente)
// because the pins covered ~60 terms and the rest was each agent's judgment.
// Seeding every term that appears in more than one lesson removes the guesswork
// from exactly the terms where a conflict is most visible.
// ---------------------------------------------------------------------------
if (cmd === 'pins') {
  // Some languages have no vendored ETHGlossary data (nl/th/tl/am are absent
  // upstream too). The ranked term list is still the point of this command —
  // it just prints with no suggestions, and every translation call is the
  // style-guide author's.
  const egPath = `translation/ethglossary/${lang}.json`
  const eg = fs.existsSync(egPath) ? read(egPath).terms : {}
  // how often each glossary term is backticked across the English lessons
  const freq = {}
  for (const f of fs.readdirSync('translation/lesson/en')) {
    const md = fs
      .readFileSync(`translation/lesson/en/${f}`, 'utf8')
      .replace(/```[\s\S]*?```/g, '')
    for (const m of md.matchAll(/`([^`\n]+)`/g)) {
      const k = m[1].toLowerCase()
      const key = enKw[k] ? k : enKw[k.replace(/s$/, '')] ? k.replace(/s$/, '') : null
      if (key) freq[key] = (freq[key] || 0) + 1
    }
  }
  const rows = Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .map(([k, n]) => {
      const e = eg[k]
      // CITATION form (`term`), not `contexts.prose.term`. A pin seeds the
      // glossary's `keyword`, which is the display form a lesson backticks and
      // the runtime index matches on — it has to be the dictionary form, with
      // inflections living in `keyword_forms`. ETHGlossary's prose form is the
      // word as it appears mid-sentence, which for an inflecting language is
      // case-marked and for Korean carries an agglutinated particle:
      // `블록체인은` (blockchain + topic particle), `개인 키를` (private key +
      // object particle). Pinning those makes a tooltip that can never resolve.
      // Divergence is not marginal — prose differs from citation in 77% of ko
      // entries, 54% of ru, 52% of uk, 49% of pl (vs 5-9% for fr/ja/hi/vi,
      // which is why it went unnoticed through the earlier waves).
      const t = e?.term || e?.contexts?.prose?.term || ''
      const latin = e?.scriptRule === 'keep_latin' || e?.scriptRule === 'always_latin'
      return { key: k, n, suggested: latin ? k : t, latin, hasEG: !!e }
    })
  console.log(`# candidate pins for ${lang} (term, lessons using it, ETHGlossary suggestion)`)
  console.log('# REVIEW EVERY LINE: ETHGlossary prefers formally-correct terms that')
  console.log('# native crypto speakers often do not use. `x = x` keeps English.\n')
  console.log('```terms')
  for (const r of rows)
    console.log(
      `${r.key} = ${r.suggested || r.key}${r.hasEG ? '' : '   # not in ETHGlossary'}${r.latin ? '   # keep_latin' : ''}   # x${r.n}`
    )
  console.log('```')
  console.log(`\n# ${rows.length} backticked terms across the 19 lessons`)
}

// ---------------------------------------------------------------------------
// merge: combine the two glossary halves and surface every disagreement
// ---------------------------------------------------------------------------
if (cmd === 'merge') {
  const half = (n) => {
    const f = `${SCRATCH}/${lang}-keywords-part${n}.json`
    if (!fs.existsSync(f)) {
      console.error(
        `missing ${f}\n(set TRANSLATION_SCRATCH if the drafts live elsewhere; half ${n} may still be in progress)`
      )
      process.exit(1)
    }
    try {
      return read(f)
    } catch (e) {
      console.error(`${f} is not valid JSON: ${e.message}`)
      process.exit(1)
    }
  }
  const p1 = half(1)
  const p2 = half(2)
  const overlap = Object.keys(p1).filter((k) => k in p2)
  if (overlap.length) {
    console.error('halves overlap:', overlap.join(', '))
    process.exit(1)
  }
  const out = {}
  const missing = []
  for (const k of Object.keys(enKw)) {
    const e = p1[k] || p2[k]
    if (!e) missing.push(k)
    else out[k] = e
  }
  if (missing.length) {
    console.error(`${missing.length} entries missing:`, missing.slice(0, 20).join(', '))
    process.exit(1)
  }

  const problems = []
  for (const [k, e] of Object.entries(out)) {
    if (!e.keyword || !e.definition) problems.push(`${k}: empty keyword/definition`)
    if (!!e.keyword_plural !== !!enKw[k].keyword_plural)
      problems.push(`${k}: plural presence differs from English`)
    if (e.definition === enKw[k].definition)
      problems.push(`${k}: definition is still the English text`)
    if (JSON.stringify(e).includes('—')) problems.push(`${k}: contains an em dash`)
  }
  // the same Spanish word claimed by two different English keys is usually a
  // divergence between halves, not a real synonym
  // Compared with `normalizeKeyword`, NOT a bare `.toLowerCase()` — the same
  // folding `validate-content.js` and the runtime tooltip index use. Plain
  // lowercasing leaves Unicode normalization alone, so two forms that render
  // identically but differ in composition never compare equal: this reported
  // `pins "X" but entry reads "X"` with two visually identical strings, and a
  // collision between two spellings of one word went unseen. Not hypothetical
  // — the vendored `ethglossary/bn.json` is not NFC (য়/ড়/ঢ় have both a
  // precomposed codepoint and a base+nukta form, and it mixes them). Turkish
  // dotted İ folds wrong the same way. Keep this in step with
  // `validate-content.js`: two tools that exist to prevent drift must not
  // disagree about what "the same string" means.
  const byForm = {}
  for (const [k, e] of Object.entries(out))
    for (const f of [e.keyword, e.keyword_plural, ...(e.keyword_forms || [])].filter(Boolean))
      (byForm[normalizeKeyword(f)] ||= []).push(k)
  const collisions = Object.entries(byForm).filter(([, ks]) => new Set(ks).size > 1)

  // style-guide pins must be honoured
  const stylePath = `translation/style/${lang}.md`
  if (fs.existsSync(stylePath)) {
    for (const [english, pinned] of parseStylePins(
      fs.readFileSync(stylePath, 'utf8')
    )) {
      const key = normalizeKeyword(english)
      const e = out[key]
      if (!e) continue
      const forms = [e.keyword, e.keyword_plural, ...(e.keyword_forms || [])]
        .filter(Boolean)
        .map((f) => normalizeKeyword(f))
      if (!forms.includes(normalizeKeyword(pinned)))
        problems.push(`${key}: style guide pins "${pinned}" but entry reads "${e.keyword}"`)
    }
  }

  // A brand-new language has no translation/keywords/<lang>/ yet, and this is
  // the step that first creates its glossary — so `merge` crashed with ENOENT
  // on exactly the languages it exists to onboard.
  fs.mkdirSync(`translation/keywords/${lang}`, { recursive: true })
  fs.writeFileSync(
    `translation/keywords/${lang}/keywords.json`,
    `${JSON.stringify(out, null, 2)}\n`
  )
  console.log(`merged ${Object.keys(out).length} entries -> translation/keywords/${lang}/keywords.json`)
  if (collisions.length) {
    console.log(`\n${collisions.length} display-form collision(s) (check these are en singular/plural pairs, not a divergence):`)
    for (const [f, ks] of collisions.slice(0, 20))
      console.log(`  ${JSON.stringify(f)} <- ${[...new Set(ks)].join(', ')}`)
  }
  if (problems.length) {
    console.log(`\n${problems.length} problem(s) to resolve:`)
    for (const p of problems) console.log(`  - ${p}`)
    process.exit(1)
  }
  console.log('\nno problems')
}

// ---------------------------------------------------------------------------
// register: languages[] for every verified file, then the gates
// ---------------------------------------------------------------------------
if (cmd === 'register') {
  const p = 'src/constants/lesson-meta.json'
  const meta = read(p)
  let reg = 0
  let cleared = 0
  const missing = []
  for (const [slug, v] of Object.entries(meta)) {
    if (v.publicationStatus !== 'publish') continue
    if (!fs.existsSync(`translation/lesson/${lang}/${slug}.md`)) {
      missing.push(slug)
      continue
    }
    v.languages ||= []
    if (!v.languages.includes(lang)) {
      v.languages.push(lang)
      reg++
    }
    if (v.staleTranslations?.languages?.includes(lang)) {
      v.staleTranslations.languages = v.staleTranslations.languages.filter((l) => l !== lang)
      cleared++
      if (!v.staleTranslations.languages.length) delete v.staleTranslations
    }
  }
  fs.writeFileSync(p, `${JSON.stringify(meta, null, 2)}\n`)
  console.log(`registered ${reg}, cleared ${cleared} from staleTranslations`)
  if (missing.length) console.log(`no file yet for: ${missing.join(', ')}`)
  for (const c of [
    `node translate-content.js --verify-only --lang ${lang} --all`,
    'node build-content.js',
    'node validate-content.js',
    'node validate-i18n.js',
    'node test-content.js',
  ]) {
    console.log(`\n$ ${c}`)
    try {
      console.log(execSync(c, { encoding: 'utf8' }).trim().split('\n').slice(-6).join('\n'))
    } catch (e) {
      console.log((e.stdout || '') + (e.stderr || ''))
      process.exit(1)
    }
  }
}
