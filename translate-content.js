/* eslint-disable no-console */
// AI translation of lesson content: English md -> translation/lesson/<lang>/<slug>.md
//
//   inputs:  translation/lesson/en/<slug>.md      (canonical source)
//            src/constants/lesson-meta.json       (slideMeta, languages[])
//            translation/keywords/en/keywords.json (glossary terms)
//            translation/ethglossary/<lang>.json  (canonical term translations)
//            translation/style/<lang>.md          (per-language style prompt)
//   outputs: translation/lesson/<lang>/<slug>.md
//            translation/.translate-state.json    (per-section hashes)
//
// Translation is per SECTION (= per slide) and hash-gated: a section whose
// English text is unchanged since the last run is copied from the existing
// translation instead of being re-translated. That is what makes an English
// edit cost one slide, not one lesson.
//
// Every generated section is structurally verified against its English source
// (image URLs, quiz option count, `[x]` position, feedback count, link URLs)
// before it is written. A section that fails verification is retried with the
// problems fed back; if it still fails, the lesson is left untouched.
//
// Usage:
//   node translate-content.js --lang fr --slug bitcoin-basics
//   node translate-content.js --lang fr --all
//   node translate-content.js --lang fr --slug bitcoin-basics --dry-run
//   node translate-content.js --lang fr --all --force        # ignore hashes
//   node translate-content.js --lang fr --keywords            # rebuild the glossary
//
// Requires ANTHROPIC_API_KEY in .env.
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'
import 'dotenv/config'
import {
  MAX_SLIDE_LINES,
  estimateSlideLines,
  applyTypography,
} from './content-lib.js'

const EN_DIR = 'translation/lesson/en'
const LESSON_DIR = 'translation/lesson'
const STATE_FILE = 'translation/.translate-state.json'
const STYLE_DIR = 'translation/style'
const ETHGLOSSARY_DIR = 'translation/ethglossary'
const META_FILE = 'src/constants/lesson-meta.json'
const REGISTRY_FILE = 'src/constants/languages.ts'

const API_URL = 'https://api.anthropic.com/v1/messages'
const DEFAULT_MODEL = 'claude-sonnet-5'
const MAX_ATTEMPTS = 3
const CONCURRENCY = 4

// the `---` fence that separates the frontmatter + ASCII banner from the slides
const SPLIT = '```\n\n---'

// ---------------------------------------------------------------------------
// cli
// ---------------------------------------------------------------------------

const parseArgs = () => {
  const out = { slugs: [], model: DEFAULT_MODEL }
  const argv = process.argv.slice(2)
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--lang') out.lang = argv[++i]
    else if (a === '--slug') out.slugs.push(argv[++i])
    else if (a === '--model') out.model = argv[++i]
    else if (a === '--all') out.all = true
    else if (a === '--force') out.force = true
    else if (a === '--dry-run') out.dryRun = true
    else if (a === '--verify-only') out.verifyOnly = true
    else if (a === '--terms') out.terms = true
    else if (a === '--keywords') out.keywords = true
    else throw new Error(`unknown argument: ${a}`)
  }
  if (!out.lang) throw new Error('--lang is required')
  if (!out.all && !out.slugs.length)
    throw new Error('pass --slug <slug> (repeatable) or --all')
  return out
}

// ---------------------------------------------------------------------------
// language registry (parsed out of the TS file so it stays the only source)
// ---------------------------------------------------------------------------

const loadLanguages = () => {
  const src = fs.readFileSync(REGISTRY_FILE, 'utf8')
  const m = src.match(/const LANGUAGE_DEFS = \[([\s\S]*?)\] as const/)
  if (!m) throw new Error(`could not parse LANGUAGE_DEFS out of ${REGISTRY_FILE}`)
  const json = `[${m[1]}]`
    .replace(/(\w+):/g, '"$1":') // quote keys
    .replace(/'/g, '"')
    .replace(/,(\s*[}\]])/g, '$1') // trailing commas
  return JSON.parse(json)
}

// ---------------------------------------------------------------------------
// markdown parsing
// ---------------------------------------------------------------------------

const sha = (s) => crypto.createHash('sha256').update(s).digest('hex').slice(0, 16)

// Split the lesson body into translation units, keeping each unit's raw text
// (heading line included) so reassembly is lossless.
//   LESSON   -> one unit per slide, split on `# `
//   HANDBOOK -> one unit per `## ` section (articles have no `# ` headings),
//               plus any preamble before the first heading
const splitUnits = (body, isArticle) => {
  const lines = body.split('\n')
  const isHeading = (l) => (isArticle ? /^#{1,2} \S/.test(l) : /^# \S/.test(l))
  const units = []
  let current = null
  for (const line of lines) {
    if (isHeading(line)) {
      if (current !== null) units.push(current)
      current = line
      continue
    }
    if (current === null) current = line // preamble before the first heading
    else current += `\n${line}`
  }
  if (current !== null) units.push(current)
  return units.map((u) => u.replace(/^\n+|\n+$/g, '')).filter(Boolean)
}

const parseMd = (md, isArticle) => {
  const [head, body] = md.split(SPLIT)
  if (body === undefined) throw new Error('missing the ``` + --- separator')
  // frontmatter sits between the first two `---` lines
  const fm = head.match(/^---\n([\s\S]*?)\n---\n/)
  if (!fm) throw new Error('missing frontmatter')
  const frontmatter = []
  for (const line of fm[1].split('\n')) {
    const i = line.indexOf(':')
    if (i === -1) continue
    // keep the raw value: an empty `WRITERS:` must stay empty, not gain a space
    frontmatter.push([line.slice(0, i), line.slice(i + 1).replace(/^ /, '')])
  }
  return {
    frontmatter,
    banner: head.slice(fm[0].length),
    // lessons open with a blank line after the fence, articles do not
    gap: body.match(/^\n*/)[0] || '\n',
    units: splitUnits(body, isArticle),
  }
}

// first line of a unit, without its `#`/`##` marker — used for logs and outlines
const unitTitle = (u) => u.split('\n')[0].replace(/^#{1,2} /, '').trim()

const renderMd = ({ frontmatter, banner, gap, units }) =>
  `---\n${frontmatter.map(([k, v]) => `${k}:${v ? ` ${v}` : ''}`).join('\n')}\n---\n` +
  `${banner}${SPLIT}${gap}${units.map((u) => u.trim()).join('\n\n')}\n`

// ---------------------------------------------------------------------------
// structural verification — the contract a translation must not break
// ---------------------------------------------------------------------------

const images = (s) => s.match(/!\[\]\([^)]*\)/g) || []
const links = (s) => (s.match(/\]\((https?:\/\/[^)]+)\)/g) || []).sort()
const options = (s) => s.split('\n').filter((l) => /^- \[[ x]\] /.test(l))
const feedback = (s) => s.split('\n').filter((l) => l.trim().startsWith('> '))
const details = (s) => (s.match(/<\/?(details|summary)>/g) || []).length

const verify = (en, tr, isArticle) => {
  const problems = []
  const enImg = images(en)
  const trImg = images(tr)
  if (enImg.join('|') !== trImg.join('|'))
    problems.push(
      `image references must be copied verbatim and in the same order. Expected ${enImg.length}: ${enImg.join(' ') || '(none)'}`
    )
  const enLink = links(en)
  const trLink = links(tr)
  if (enLink.join('|') !== trLink.join('|'))
    problems.push(
      `link URLs must be identical to the English source. Expected: ${enLink.join(' ') || '(none)'}`
    )
  const enOpt = options(en)
  const trOpt = options(tr)
  if (enOpt.length !== trOpt.length)
    problems.push(
      `expected exactly ${enOpt.length} quiz option line(s) starting with "- [ ] " or "- [x] ", found ${trOpt.length}`
    )
  else if (enOpt.length) {
    const enPos = enOpt.findIndex((o) => o.startsWith('- [x] '))
    const trPos = trOpt.findIndex((o) => o.startsWith('- [x] '))
    if (enPos !== trPos)
      problems.push(
        trPos === -1
          ? `no "- [x] " option: option ${enPos + 1} is the correct one and must keep its [x]`
          : `the [x] must stay on option ${enPos + 1} (found it on option ${trPos + 1}). Never move the correct answer.`
      )
  }
  const enFb = feedback(en).length
  const trFb = feedback(tr).length
  if (enFb !== trFb)
    problems.push(`expected ${enFb} "> ℹ️ " feedback line(s), found ${trFb}`)
  if (details(en) !== details(tr))
    problems.push(`<details>/<summary> tags must be preserved exactly`)
  // heading level must match: lessons use `# `, articles `## `/`### `, and an
  // article's preamble has no heading at all
  const marker = (x) => (x.match(/^#{1,6} /) || [''])[0]
  if (marker(en) !== marker(tr))
    problems.push(
      marker(en)
        ? `the section must start with "${marker(en)}" like the English source`
        : `the section must not start with a heading (the English source has none)`
    )
  // Slides are fixed-height: a translation that runs longer than English gets
  // cut off. Only enforced on prose slides (quizzes lay out differently) and
  // only when the translation is both over the ceiling and longer than English.
  if (!enOpt.length && !isArticle) {
    const enLines = estimateSlideLines(en)
    const trLines = estimateSlideLines(tr)
    if (trLines > MAX_SLIDE_LINES && trLines > enLines)
      problems.push(
        `too long for the slide: ~${Math.round(trLines)} estimated rendered lines (English is ~${Math.round(enLines)}, the limit is ${MAX_SLIDE_LINES}). Say the same thing more concisely; do not drop information.`
      )
  }
  return problems
}

// ---------------------------------------------------------------------------
// terminology: glossary terms in this section + their canonical translations
// ---------------------------------------------------------------------------

const loadEthGlossary = (lang) => {
  const p = path.join(ETHGLOSSARY_DIR, `${lang}.json`)
  if (!fs.existsSync(p)) return {}
  const { terms } = JSON.parse(fs.readFileSync(p, 'utf8'))
  const out = {}
  for (const [k, v] of Object.entries(terms || {})) {
    const t = v?.contexts?.prose?.term || v?.term
    if (t) out[k.toLowerCase()] = t
  }
  return out
}

// ETHGlossary marks terms that must not be translated into another script
// (`keep_latin` / `always_latin`, e.g. Uniswap, API, KZG, APY).
const loadScriptRules = () => {
  const p = path.join(ETHGLOSSARY_DIR, 'style-guide.json')
  if (!fs.existsSync(p)) return {}
  const { terms } = JSON.parse(fs.readFileSync(p, 'utf8'))
  const out = {}
  for (const t of terms || []) {
    if (t.scriptRule && t.scriptRule !== 'translate')
      out[t.term.toLowerCase()] = t.scriptRule
  }
  return out
}

// A language's style guide may override ETHGlossary for terms where the
// formally-correct translation is not what speakers actually use (French says
// "blockchain", not ETHGlossary's "chaîne de blocs"). Declared in
// translation/style/<lang>.md as a ```terms fenced block of `english = target`
// lines; `english = english` pins a term to its English form.
const parseTermOverrides = (style) => {
  const out = {}
  for (const m of style.matchAll(/```terms\n([\s\S]*?)```/g)) {
    for (const line of m[1].split('\n')) {
      const t = line.trim()
      if (!t || t.startsWith('#')) continue
      const i = t.indexOf('=')
      if (i === -1) continue
      out[t.slice(0, i).trim().toLowerCase()] = t.slice(i + 1).trim()
    }
  }
  return out
}

const terminologyFor = (text, keywords, ethGlossary, scriptRules, overrides = {}) => {
  const rows = []
  const seen = new Set()
  for (const m of text.matchAll(/`([^`\n]+)`/g)) {
    const term = m[1]
    const key = term.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    const singular = key.endsWith('s') ? key.slice(0, -1) : key
    const rule = scriptRules[key] || scriptRules[singular]
    const override = overrides[key] ?? overrides[singular]
    rows.push({
      term,
      // style-guide override wins, then ETHGlossary; a Latin-only term keeps
      // its English form regardless
      canonical: override ?? (rule ? undefined : ethGlossary[key] || ethGlossary[singular]),
      keepLatin: !!rule && override === undefined,
      definition: (keywords[key] || keywords[singular])?.definition,
    })
  }
  return rows
}

// ---------------------------------------------------------------------------
// prompting
// ---------------------------------------------------------------------------

const systemPrompt = (langDef, style) => `You translate lesson content for Bankless Academy, a beginner-focused web3 education platform, from English into ${langDef.name} (${langDef.localName}).

The reader is new to crypto. Keep the register plain, warm and direct: short sentences, everyday words, one idea at a time. Explain rather than impress.

HARD RULES — a violation makes the output unusable:
1. Output ONLY the translated markdown section. No preamble, no explanation, no code fences around it.
2. Keep the exact markdown structure: the "# " heading line, paragraph breaks, list markers, bold/italic markers, blockquotes.
3. Copy every image reference — ![](...) — verbatim, in the same position. Never translate, reorder or drop a URL.
4. Copy every link URL verbatim. Translate only the link text.
5. Quiz options are lines starting with "- [ ] " or "- [x] ". Keep the same number of options, in the same order, and keep the "[x]" on the SAME option. Learners have their answer number saved, so moving it breaks them.
6. Lines starting with "> ℹ️ " are per-option feedback. Keep one per option, in the same order.
7. Keep \`backticks\` around glossary terms — translate the term inside them, keep the backticks. These render as tooltips.
8. Do not add, remove or merge paragraphs. Keep the translation close to the English length; this UI has fixed-height slides and overflowing text is cut off.
9. Never use em dashes (—). Use a comma, colon, parentheses or a separate sentence.
10. Keep proper nouns, product names and ticker symbols in their original form (Bitcoin, Ethereum, Uniswap, ETH). Established crypto terms that the lesson itself teaches (HODL, gas, staking) stay as they are commonly written in ${langDef.name}.

${style ? `STYLE GUIDE FOR ${langDef.name.toUpperCase()}:\n${style}` : ''}`

const userPrompt = ({ lessonTitle, lessonDescription, outline, section, terms }) => {
  const termTable = terms.length
    ? terms
        .map((t) => {
          const bits = [`\`${t.term}\``]
          if (t.keepLatin) bits.push('-> keep in Latin script, do not translate')
          else if (t.canonical) bits.push(`-> use "${t.canonical}"`)
          if (t.definition) bits.push(`(means: ${t.definition})`)
          return `- ${bits.join(' ')}`
        })
        .join('\n')
    : '(no glossary terms in this section)'
  return `Lesson: "${lessonTitle}"
${lessonDescription ? `Lesson description: ${lessonDescription}\n` : ''}
Slides in this lesson, for context:
${outline}

TERMINOLOGY — use these translations for the backticked terms so the glossary stays consistent across lessons:
${termTable}

Translate the following section. Output only the translated markdown.

---
${section}
---`
}

// ---------------------------------------------------------------------------
// api
// ---------------------------------------------------------------------------

const callClaude = async ({ model, system, user, apiKey }) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model,
      max_tokens: 4096,
      temperature: 0.2,
      system,
      messages: [{ role: 'user', content: user }],
    }),
  })
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Anthropic API ${res.status}: ${body.slice(0, 400)}`)
  }
  const data = await res.json()
  const text = (data.content || [])
    .filter((c) => c.type === 'text')
    .map((c) => c.text)
    .join('')
    .trim()
  if (!text) throw new Error('empty response from the API')
  return { text, usage: data.usage }
}

// strip a stray code fence if the model wrapped the whole section in one
const unfence = (s) => {
  const m = s.match(/^```(?:markdown|md)?\n([\s\S]*)\n```$/)
  return m ? m[1] : s
}

// ---------------------------------------------------------------------------
// per-section translation with verification + retry
// ---------------------------------------------------------------------------

const translateSection = async (ctx, en) => {
  const terms = terminologyFor(
    en,
    ctx.keywords,
    ctx.ethGlossary,
    ctx.scriptRules,
    ctx.overrides
  )
  const base = userPrompt({ ...ctx, section: en, terms })
  let user = base
  let lastProblems = []
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const { text, usage } = await callClaude({
      model: ctx.model,
      system: ctx.system,
      user,
      apiKey: ctx.apiKey,
    })
    ctx.tokens.in += usage?.input_tokens || 0
    ctx.tokens.out += usage?.output_tokens || 0
    const out = applyTypography(unfence(text), ctx.lang)
    const problems = verify(en, out, ctx.isArticle)
    if (!problems.length) return { text: out, attempts: attempt }
    lastProblems = problems
    console.warn(
      `\n      retry ${attempt}/${MAX_ATTEMPTS - 1} "${unitTitle(en)}": ${problems[0]}`
    )
    user = `${base}

Your previous attempt broke the structural contract:
${problems.map((p) => `- ${p}`).join('\n')}

Here is what you produced:
---
${out}
---

Produce the section again, fixing those problems and keeping the translation quality. Output only the translated markdown.`
  }
  throw new Error(
    `"${unitTitle(en)}" failed verification after ${MAX_ATTEMPTS} attempts:\n${lastProblems
      .map((p) => `        - ${p}`)
      .join('\n')}`
  )
}

// small concurrency pool that preserves input order
const mapPool = async (items, limit, fn) => {
  const out = new Array(items.length)
  let next = 0
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    for (;;) {
      const i = next++
      if (i >= items.length) return
      out[i] = await fn(items[i], i)
    }
  })
  await Promise.all(workers)
  return out
}

// ---------------------------------------------------------------------------
// lesson translation
// ---------------------------------------------------------------------------

const translateLesson = async ({
  slug,
  langDef,
  meta,
  keywords,
  ethGlossary,
  scriptRules,
  overrides,
  style,
  model,
  apiKey,
  force,
  dryRun,
  state,
}) => {
  const lang = langDef.code
  const isArticle = !meta[slug].slideMeta
  const enMd = fs.readFileSync(path.join(EN_DIR, `${slug}.md`), 'utf8')
  const en = parseMd(enMd, isArticle)
  const outPath = path.join(LESSON_DIR, lang, `${slug}.md`)

  // reuse unchanged units from the existing translation
  const prevState = state[lang]?.[slug]
  let prev = null
  if (!force && prevState && fs.existsSync(outPath)) {
    try {
      prev = parseMd(fs.readFileSync(outPath, 'utf8'), isArticle)
    } catch {
      prev = null // unparseable existing file: retranslate everything
    }
  }
  const hashes = en.units.map((u) => sha(u))
  // a unit is reusable only if the whole unit list still lines up, so a slide
  // inserted upstream can never shift translations onto the wrong slide
  const aligned =
    prev &&
    prevState?.sections?.length === en.units.length &&
    prev.units.length === en.units.length
  const todo = en.units
    .map((u, i) => ({ u, i }))
    .filter(({ i }) => !(aligned && prevState.sections[i] === hashes[i]))

  const fmHash = sha(
    JSON.stringify([
      en.frontmatter.find(([k]) => k === 'TITLE')?.[1],
      en.frontmatter.find(([k]) => k === 'DESCRIPTION')?.[1],
    ])
  )
  const fmStale = force || !prev || prevState?.frontmatter !== fmHash

  const label = isArticle ? 'article section' : 'slide'
  console.log(
    `  ${lang}/${slug}: ${todo.length}/${en.units.length} ${label}s to translate` +
      (fmStale ? ' + title/description' : '') +
      (!todo.length && !fmStale ? ' — up to date' : '')
  )
  if (!todo.length && !fmStale) return { skipped: true }
  if (dryRun) return { dryRun: true }

  const ctx = {
    lang,
    isArticle,
    model,
    apiKey,
    keywords,
    ethGlossary,
    scriptRules,
    overrides,
    system: systemPrompt(langDef, style),
    lessonTitle: en.frontmatter.find(([k]) => k === 'TITLE')?.[1] || slug,
    lessonDescription: en.frontmatter.find(([k]) => k === 'DESCRIPTION')?.[1] || '',
    outline: en.units.map((u, i) => `${i + 1}. ${unitTitle(u)}`).join('\n'),
    tokens: { in: 0, out: 0 },
  }

  // title + description travel together so they stay consistent
  let title = prev?.frontmatter.find(([k]) => k === 'TITLE')?.[1]
  let description = prev?.frontmatter.find(([k]) => k === 'DESCRIPTION')?.[1]
  if (fmStale) {
    const { text, usage } = await callClaude({
      model,
      apiKey,
      system: ctx.system,
      user: `Translate this lesson title and description into ${langDef.name}.
Keep the title short (it is displayed on a card) and the description to one sentence.
Reply with exactly two lines and nothing else:
TITLE: <translation>
DESCRIPTION: <translation>

TITLE: ${ctx.lessonTitle}
DESCRIPTION: ${ctx.lessonDescription}`,
    })
    ctx.tokens.in += usage?.input_tokens || 0
    ctx.tokens.out += usage?.output_tokens || 0
    title = applyTypography(text.match(/^TITLE:\s*(.+)$/m)?.[1]?.trim(), lang)
    description = applyTypography(
      text.match(/^DESCRIPTION:\s*(.+)$/m)?.[1]?.trim(),
      lang
    )
    if (!title || !description)
      throw new Error(`could not parse the translated title/description:\n${text}`)
  }

  const translated = await mapPool(todo, CONCURRENCY, async ({ u }) => {
    const r = await translateSection(ctx, u)
    process.stdout.write('.')
    return r
  })
  if (todo.length) process.stdout.write('\n')

  // assemble: reused units + freshly translated ones, in source order
  const outUnits = en.units.map((u, i) => {
    const hit = todo.findIndex((t) => t.i === i)
    return hit !== -1 ? translated[hit].text.trim() : prev.units[i].trim()
  })

  const frontmatter = en.frontmatter.map(([k, v]) => {
    if (k === 'TITLE') return [k, title]
    if (k === 'DESCRIPTION') return [k, description]
    if (k === 'LANGUAGE') return [k, langDef.localName]
    if (k === 'TRANSLATORS') return [k, 'Claude (Anthropic AI)']
    return [k, v]
  })

  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(
    outPath,
    renderMd({ frontmatter, banner: en.banner, gap: en.gap, units: outUnits })
  )

  // keep the translated glossary in step with the terms this lesson uses
  const allTerms = new Map()
  for (const u of en.units)
    for (const t of terminologyFor(u, keywords, ethGlossary, scriptRules, overrides))
      if (!allTerms.has(t.term.toLowerCase())) allTerms.set(t.term.toLowerCase(), t)
  const kw = await syncKeywords({
    terms: [...allTerms.values()],
    langDef,
    keywords,
    model,
    apiKey,
    tokens: ctx.tokens,
  })
  if (kw.added) console.log(`      +${kw.added} glossary entr(ies) -> ${kw.path}`)

  const dead = deadTooltips(fs.readFileSync(outPath, 'utf8'), lang)
  if (dead.length)
    console.warn(
      `      ${dead.length} term(s) with no ${lang} glossary entry (dead tooltips): ${dead.join(', ')}`
    )

  state[lang] = state[lang] || {}
  state[lang][slug] = {
    frontmatter: fmHash,
    sections: hashes,
    model,
    translatedAt: new Date().toISOString(),
  }

  return { written: outPath, tokens: ctx.tokens, sections: todo.length }
}

// ---------------------------------------------------------------------------
// glossary sync
// ---------------------------------------------------------------------------

// Tooltips in a translated lesson resolve through translation/keywords/<lang>/
// keywords.json, keyed by the TRANSLATED term (Lesson.tsx lowercases whatever
// sits between the backticks and looks it up in the `keywords` i18next
// namespace). So translating a lesson without adding its terms to that file
// leaves every new term as a dead tooltip. This keeps the two in step.
const syncKeywords = async ({ terms, langDef, keywords, model, apiKey, tokens }) => {
  const p = path.join('translation/keywords', langDef.code, 'keywords.json')
  const existing = fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : {}
  // Keyed by the ENGLISH term: a stable id the pipeline can diff against, so
  // coverage is answerable and a changed translation never orphans an entry.
  // The translated term lives in `keyword`, which the app indexes back to this
  // key at runtime (see the keyword index in Lesson.tsx).
  const missing = terms.filter(
    (t) => t.canonical && !(t.term.toLowerCase() in existing)
  )
  if (!missing.length) return { added: 0 }

  // one call for the whole batch: definitions are short and share context
  const list = missing
    .map((t, i) => `${i + 1}. ${t.canonical} — ${t.definition || keywords[t.term.toLowerCase()]?.definition || t.term}`)
    .join('\n')
  const { text, usage } = await callClaude({
    model,
    apiKey,
    system: `You translate short glossary definitions for a beginner web3 course into ${langDef.name}. One plain sentence each, no jargon, no em dashes.`,
    user: `Translate each definition into ${langDef.name}. Keep the numbering and reply with one line per entry in exactly this form, nothing else:

<number>. <translated definition>

${list}`,
  })
  tokens.in += usage?.input_tokens || 0
  tokens.out += usage?.output_tokens || 0

  let added = 0
  for (const line of text.split('\n')) {
    const m = line.match(/^\s*(\d+)\.\s*(.+)$/)
    if (!m) continue
    const t = missing[Number(m[1]) - 1]
    if (!t) continue
    existing[t.term.toLowerCase()] = {
      keyword: t.canonical,
      definition: m[2].trim(),
    }
    added++
  }
  if (added) {
    fs.mkdirSync(path.dirname(p), { recursive: true })
    // keep the file sorted so diffs stay readable across runs
    const sorted = Object.fromEntries(
      Object.entries(existing).sort(([a], [b]) => a.localeCompare(b))
    )
    fs.writeFileSync(p, `${JSON.stringify(sorted, null, 2)}\n`)
  }
  return { added, path: p }
}

// Backticked terms in a translated lesson that have no entry in that language's
// keywords file: each one renders as a dead tooltip.
const deadTooltips = (md, lang) => {
  const p = path.join('translation/keywords', lang, 'keywords.json')
  if (!fs.existsSync(p)) return []
  // same reverse index as the app: display term (or plural) -> English key
  const bundle = JSON.parse(fs.readFileSync(p, 'utf8'))
  const keys = new Set()
  for (const [englishKey, entry] of Object.entries(bundle))
    for (const form of [
      englishKey,
      entry?.keyword,
      entry?.keyword_plural,
      ...(entry?.keyword_forms || []),
    ])
      if (typeof form === 'string' && form) keys.add(form.toLowerCase())
  const prose = md.replace(/```[\s\S]*?```/g, '')
  const seen = new Set()
  const out = []
  for (const m of prose.matchAll(/`([^`\n]+)`/g)) {
    const t = m[1].toLowerCase()
    if (seen.has(t)) continue
    seen.add(t)
    if (!keys.has(t) && !(t.endsWith('s') && keys.has(t.slice(0, -1)))) out.push(m[1])
  }
  return out
}

// Rebuild a language's glossary from scratch off the English source: every
// term translated fresh, keyed by the English term, and the previous file
// REPLACED rather than merged. Merging is what let stale Crowdin-era entries
// survive (roughly half of each pre-pipeline file still holds the English
// definition), and the goal is that nothing carries over from the past.
const rebuildKeywords = async ({
  langDef,
  keywords,
  ethGlossary,
  scriptRules,
  overrides,
  model,
  apiKey,
}) => {
  const p = path.join('translation/keywords', langDef.code, 'keywords.json')
  const entries = Object.entries(keywords)
  console.log(
    `${langDef.name}: rebuilding ${entries.length} glossary entries from scratch` +
      (fs.existsSync(p) ? ` (replacing ${p})` : '')
  )

  const tokens = { in: 0, out: 0 }
  const BATCH = 20
  const out = {}
  for (let i = 0; i < entries.length; i += BATCH) {
    const batch = entries.slice(i, i + BATCH)
    // pin the term itself where we have a canonical translation for it
    const pinned = batch.map(([k]) => {
      const rule = scriptRules[k]
      const override = overrides[k]
      return override ?? (rule ? k : ethGlossary[k]) ?? null
    })
    const { text, usage } = await callClaude({
      model,
      apiKey,
      system: `You translate glossary entries for a beginner web3 course into ${langDef.name}. Keep definitions to one plain sentence, no jargon, no em dashes.`,
      user: `For each entry, give the ${langDef.name} term and its translated definition.
Reply with one line per entry in exactly this form, nothing else:

<number>. <translated term> | <translated plural form of the term> :: <translated definition>

The plural matters: in many languages the whole phrase inflects, so a naive
"add an s" fallback fails and the glossary tooltip goes dead. If the language
has no distinct plural, repeat the term.

${batch
  .map(
    ([k, v], n) =>
      `${n + 1}. ${v.keyword || k}${pinned[n] ? ` (use the term "${pinned[n]}")` : ''} :: ${v.definition}`
  )
  .join('\n')}`,
    })
    tokens.in += usage?.input_tokens || 0
    tokens.out += usage?.output_tokens || 0
    for (const line of text.split('\n')) {
      const m = line.match(/^\s*(\d+)\.\s*(.+?)\s*::\s*(.+)$/)
      if (!m) continue
      const entry = batch[Number(m[1]) - 1]
      if (!entry) continue
      const [term, plural] = m[2].split('|').map((x) => x.trim())
      out[entry[0]] = {
        keyword: applyTypography(term, langDef.code),
        ...(plural && plural !== term
          ? { keyword_plural: applyTypography(plural, langDef.code) }
          : {}),
        definition: applyTypography(m[3].trim(), langDef.code),
      }
    }
    process.stdout.write(`  ${Math.min(i + BATCH, entries.length)}/${entries.length}\r`)
  }

  const missing = entries.filter(([k]) => !(k in out)).map(([k]) => k)
  if (missing.length)
    console.warn(`\n  ${missing.length} entr(ies) came back unparseable: ${missing.slice(0, 5).join(', ')}`)

  fs.mkdirSync(path.dirname(p), { recursive: true })
  fs.writeFileSync(p, `${JSON.stringify(out, null, 2)}\n`)
  console.log(
    `\nwrote ${Object.keys(out).length} entries -> ${p} (${tokens.in} in / ${tokens.out} out tokens)`
  )
}

// ---------------------------------------------------------------------------
// offline commands (no API key needed)
// ---------------------------------------------------------------------------

// Re-check an existing translation against its English source with the exact
// same per-unit contract the generator enforces. Use it on any translation the
// generator did not produce (hand-written, contributed, or model-authored
// outside this script).
const verifyOnly = ({ slugs, meta, langDef }) => {
  const lang = langDef.code
  let checked = 0
  const failures = []
  for (const slug of slugs) {
    const p = path.join(LESSON_DIR, lang, `${slug}.md`)
    if (!fs.existsSync(p)) {
      console.log(`  ${lang}/${slug}: no translation file, skipped`)
      continue
    }
    const isArticle = !meta[slug].slideMeta
    const en = parseMd(fs.readFileSync(path.join(EN_DIR, `${slug}.md`), 'utf8'), isArticle)
    let tr
    try {
      tr = parseMd(fs.readFileSync(p, 'utf8'), isArticle)
    } catch (e) {
      failures.push(`${lang}/${slug}: unparseable — ${e.message}`)
      continue
    }
    if (tr.units.length !== en.units.length) {
      failures.push(
        `${lang}/${slug}: ${tr.units.length} units but English has ${en.units.length}`
      )
      continue
    }
    let bad = 0
    en.units.forEach((u, i) => {
      for (const problem of verify(u, tr.units[i], isArticle)) {
        failures.push(`${lang}/${slug} [${i + 1}] "${unitTitle(u)}": ${problem}`)
        bad++
      }
    })
    const dead = deadTooltips(fs.readFileSync(p, 'utf8'), lang)
    checked++
    console.log(
      `  ${lang}/${slug}: ${en.units.length} units, ${bad ? `${bad} problem(s)` : 'OK'}` +
        (dead.length ? `, ${dead.length} dead tooltip(s): ${dead.join(', ')}` : '')
    )
  }
  if (failures.length) {
    console.error(`\n${failures.length} problem(s):`)
    for (const f of failures) console.error(`  - ${f}`)
    process.exit(1)
  }
  console.log(`\n${checked} translation(s) match the English structure.`)
}

// Print the terminology table the generator would inject, per unit.
const dumpTerms = ({ slugs, meta, keywords, ethGlossary, scriptRules, overrides, langDef }) => {
  for (const slug of slugs) {
    const isArticle = !meta[slug].slideMeta
    const en = parseMd(fs.readFileSync(path.join(EN_DIR, `${slug}.md`), 'utf8'), isArticle)
    const all = new Map()
    en.units.forEach((u) => {
      for (const t of terminologyFor(u, keywords, ethGlossary, scriptRules, overrides))
        if (!all.has(t.term.toLowerCase())) all.set(t.term.toLowerCase(), t)
    })
    console.log(`\n${slug} — ${all.size} glossary term(s) for ${langDef.name}:`)
    for (const t of all.values())
      console.log(
        `  \`${t.term}\` -> ${t.keepLatin ? '(keep Latin script)' : t.canonical || '(no ETHGlossary entry)'}`
      )
  }
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------

const main = async () => {
  const args = parseArgs()
  const apiKey = process.env.ANTHROPIC_API_KEY
  const offline = args.dryRun || args.verifyOnly || args.terms
  if (!apiKey && !offline)
    throw new Error('ANTHROPIC_API_KEY is not set (add it to .env)')

  const languages = loadLanguages()
  const langDef = languages.find((l) => l.code === args.lang)
  if (!langDef) throw new Error(`unknown language "${args.lang}" (not in the registry)`)
  if (langDef.code === 'en') throw new Error('en is the source language')

  const meta = JSON.parse(fs.readFileSync(META_FILE, 'utf8'))
  const keywords = JSON.parse(
    fs.readFileSync('translation/keywords/en/keywords.json', 'utf8')
  )
  const ethGlossary = loadEthGlossary(langDef.code)
  const scriptRules = loadScriptRules()
  const stylePath = path.join(STYLE_DIR, `${langDef.code}.md`)
  const style = fs.existsSync(stylePath) ? fs.readFileSync(stylePath, 'utf8').trim() : ''
  const overrides = parseTermOverrides(style)
  const state = fs.existsSync(STATE_FILE)
    ? JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'))
    : {}

  const slugs = args.all
    ? Object.keys(meta).filter((s) => meta[s].publicationStatus !== 'deprecated')
    : args.slugs
  for (const slug of slugs) {
    if (!meta[slug]) throw new Error(`unknown lesson slug: ${slug}`)
  }

  if (args.verifyOnly) return verifyOnly({ slugs, meta, langDef })
  if (args.keywords)
    return rebuildKeywords({
      langDef,
      keywords,
      ethGlossary,
      scriptRules,
      overrides,
      model: args.model,
      apiKey,
    })
  if (args.terms)
    return dumpTerms({
      slugs,
      meta,
      keywords,
      ethGlossary,
      scriptRules,
      overrides,
      langDef,
    })

  console.log(
    `translate-content -> ${langDef.name} (${langDef.code}), model ${args.model}` +
      `${args.force ? ', force' : ''}${args.dryRun ? ', dry run' : ''}`
  )
  console.log(
    `  glossary: ${Object.keys(ethGlossary).length} ETHGlossary terms, ` +
      `${Object.keys(overrides).length} style overrides, ` +
      `style guide: ${style ? stylePath : 'none'}`
  )

  const totals = { in: 0, out: 0, lessons: 0, sections: 0 }
  const failures = []
  for (const slug of slugs) {
    try {
      const r = await translateLesson({
        slug,
        langDef,
        meta,
        keywords,
        ethGlossary,
        scriptRules,
        overrides,
        style,
        model: args.model,
        apiKey,
        force: args.force,
        dryRun: args.dryRun,
        state,
      })
      if (r.written) {
        totals.in += r.tokens.in
        totals.out += r.tokens.out
        totals.lessons++
        totals.sections += r.sections
        console.log(`      wrote ${r.written}`)
      }
    } catch (e) {
      failures.push(`${slug}: ${e.message}`)
      console.error(`  FAILED ${langDef.code}/${slug}: ${e.message}`)
    }
  }

  if (!args.dryRun && totals.lessons) {
    fs.writeFileSync(STATE_FILE, `${JSON.stringify(state, null, 2)}\n`)
    console.log(`\nupdated ${STATE_FILE}`)
  }

  console.log(
    `\n${totals.lessons} lesson(s), ${totals.sections} section(s) translated` +
      (totals.in ? ` — ${totals.in} in / ${totals.out} out tokens` : '')
  )
  if (failures.length) {
    console.error(`\n${failures.length} lesson(s) failed:`)
    for (const f of failures) console.error(`  - ${f}`)
    process.exit(1)
  }
  console.log(
    'Next: register the language in lesson-meta.json languages[] (if new), then run `yarn validate-content`.'
  )
}

main().catch((e) => {
  console.error(e.message)
  process.exit(1)
})
