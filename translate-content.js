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
//
// Requires ANTHROPIC_API_KEY in .env.
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'
import 'dotenv/config'

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

const verify = (en, tr) => {
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
        `the [x] must stay on option ${enPos + 1} (found it on option ${trPos + 1}). Never move the correct answer.`
      )
  }
  const enFb = feedback(en).length
  const trFb = feedback(tr).length
  if (enFb !== trFb)
    problems.push(`expected ${enFb} "> ℹ️ " feedback line(s), found ${trFb}`)
  if (details(en) !== details(tr))
    problems.push(`<details>/<summary> tags must be preserved exactly`)
  if (!/^# /.test(tr))
    problems.push(`the section must start with the "# " heading line`)
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

const terminologyFor = (text, keywords, ethGlossary, scriptRules) => {
  const rows = []
  const seen = new Set()
  for (const m of text.matchAll(/`([^`\n]+)`/g)) {
    const term = m[1]
    const key = term.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    const singular = key.endsWith('s') ? key.slice(0, -1) : key
    const rule = scriptRules[key] || scriptRules[singular]
    rows.push({
      term,
      // a Latin-only term keeps its English form regardless of the glossary
      canonical: rule ? undefined : ethGlossary[key] || ethGlossary[singular],
      keepLatin: !!rule,
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
  const terms = terminologyFor(en, ctx.keywords, ctx.ethGlossary, ctx.scriptRules)
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
    const out = unfence(text)
    const problems = verify(en, out)
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
    model,
    apiKey,
    keywords,
    ethGlossary,
    scriptRules,
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
    title = text.match(/^TITLE:\s*(.+)$/m)?.[1]?.trim()
    description = text.match(/^DESCRIPTION:\s*(.+)$/m)?.[1]?.trim()
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
// main
// ---------------------------------------------------------------------------

const main = async () => {
  const args = parseArgs()
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey && !args.dryRun)
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
  const state = fs.existsSync(STATE_FILE)
    ? JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'))
    : {}

  const slugs = args.all
    ? Object.keys(meta).filter((s) => meta[s].publicationStatus !== 'deprecated')
    : args.slugs
  for (const slug of slugs) {
    if (!meta[slug]) throw new Error(`unknown lesson slug: ${slug}`)
  }

  console.log(
    `translate-content -> ${langDef.name} (${langDef.code}), model ${args.model}` +
      `${args.force ? ', force' : ''}${args.dryRun ? ', dry run' : ''}`
  )
  console.log(
    `  glossary: ${Object.keys(ethGlossary).length} ETHGlossary terms, ` +
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
