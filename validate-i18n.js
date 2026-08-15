/* eslint-disable no-console */
// i18n validation. Complements validate-content.js (which owns lesson md and
// the glossary); this one owns the UI string layer.
//
// Why this exists: untranslated UI kept shipping because English strings hide
// in three different shapes, and a regex written for one misses the others:
//
//   1. a bare JSX text node          <Text>Connect Wallet</Text>
//   2. the SAME node wrapped by prettier across several lines
//   3. a string literal inside a JSX expression   {level || "Explorer's Handbook"}
//
// The /lessons headers were shape 3, the /explore disclaimer shape 2, the
// lesson-card "Done" badge shape 3 again. Each was found by hand, after
// shipping. This checks all three on every build.
//
// Run: `yarn validate-i18n` (also runs as part of `yarn build`).
import fs from 'fs'
import path from 'path'

const errors = []
const warnings = []
const untranslated = []

const NS_FILES = {
  common: 'translation/website/en/common.json',
  quests: 'translation/website/en/quests.json',
  homepage: 'translation/website/en/homepage.json',
}
const load = (p) => JSON.parse(fs.readFileSync(p, 'utf8'))
const en = Object.fromEntries(
  Object.entries(NS_FILES).map(([ns, p]) => [ns, load(p)])
)

// Pages and components deliberately out of the translation scope (internal
// tools, English-only campaigns, social share text, Notion-backed pages).
const OUT_OF_SCOPE =
  /leaderboard|CryptoArchetypeQuiz|onchain-summer|notion|whitelabel|debug|demo|MintSmartNFT|Icons\.tsx|frame-og|\/api\/|pages\/og\.|preview\.tsx/i

// Strings that are legitimately English wherever they appear: brand and
// product names, tickers, and UI labels of third-party apps the reader must
// click verbatim. Anything not listed here must go through t().
const ALLOWED = new Set([
  'Bankless Academy',
  'Bankless Academy is a',
  'Human Passport',
  'De University of Ethereum',
  'College DAO',
  'Explorer Profile',
  'Onchain Certifications',
  'Base network',
  'Optimism network',
  'Ethereum Showcase',
])
const allowed = (t) =>
  ALLOWED.has(t) ||
  // pure brand/ticker/acronym runs, e.g. "USDC ETH", "BanklessDAO"
  /^[A-Z0-9][A-Za-z0-9.&/'-]*(\s[A-Z0-9][A-Za-z0-9.&/'-]*)*$/.test(t) === false
    ? ALLOWED.has(t)
    : true

const files = []
const walk = (d) => {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name)
    if (f.isDirectory()) walk(p)
    else if (/\.tsx$/.test(f.name)) files.push(p)
  }
}
for (const d of ['src/components', 'src/pages', 'src/layout']) walk(d)

// ---------------------------------------------------------------------------
// 1. every t('...') call site must resolve to a key in the English namespace
// ---------------------------------------------------------------------------
for (const f of files) {
  const s = fs.readFileSync(f, 'utf8')
  const m = s.match(
    /useTranslation\(\s*['"]([a-z]+)['"](?:\s*,\s*\{\s*keyPrefix:\s*['"]([^'"]+)['"])?/
  )
  const ns = m ? m[1] : 'common'
  const prefix = m && m[2] ? m[2] : null
  if (!en[ns]) continue
  const bag = prefix ? en[ns][prefix] || {} : en[ns]
  for (const g of s.matchAll(
    /[^a-zA-Z0-9_]t\(\s*(['"`])((?:\\.|(?!\1)[^\\])*?)\1/g
  )) {
    const key = g[2].replace(/\\'/g, "'").replace(/\\"/g, '"')
    if (!key.trim() || key.includes('${')) continue
    if (!Object.prototype.hasOwnProperty.call(bag, key))
      errors.push(
        `${f}: t(${JSON.stringify(key)}) has no key in ${ns}${prefix ? `.${prefix}` : ''} — add it to ${NS_FILES[ns]}`
      )
  }
}

// ---------------------------------------------------------------------------
// 2. user-facing English that never reaches t(), in all three shapes
// ---------------------------------------------------------------------------
// The scanner reads source text, so it occasionally catches a fragment of code
// rather than copy — a leading quote makes `') const sectionTitle = ...` look
// like a sentence. Reject anything with code punctuation or keywords in it.
const looksLikeCode = (t) =>
  /=>|\bconst\b|\blet\b|\bvar\b|\bfunction\b|\breturn\b|\.(replace|map|filter|split|join|match)\(|[{};]|\$\{|\)\s*\.|\s=\s/.test(
    t
  )

const looksUserFacing = (t) =>
  !looksLikeCode(t) &&
  t.length >= 12 &&
  // a capital, a quote, or an emoji lead-in ("👉 Get Zerion wallet here"
  // slipped past an earlier capital-letter-only rule)
  /^[A-Z“"']|^\p{Extended_Pictographic}/u.test(t) &&
  /\s/.test(t) &&
  /[a-z]{3}/.test(t) &&
  !/https?:|^0x|\{\{|^[A-Z0-9_\-.]+$/.test(t)

for (const f of files) {
  if (OUT_OF_SCOPE.test(f)) continue
  const s = fs.readFileSync(f, 'utf8')
  const hits = new Set()

  // shapes 1 + 2: text between a tag close and the next tag open. Newlines are
  // allowed and collapsed, which is what makes prettier-wrapped copy visible.
  for (const m of s.matchAll(/>([^<>{}]+)</g)) {
    const txt = m[1].replace(/\s+/g, ' ').trim()
    if (looksUserFacing(txt) && !allowed(txt)) hits.add(txt)
  }

  // shape 3: a string/template literal inside a JSX expression container that
  // is not already an argument to t()
  for (const m of s.matchAll(
    /\{[^{}]{0,140}?(['"`])([^'"`\n]{12,120})\1[^{}]{0,140}?\}/g
  )) {
    const txt = m[2].trim()
    const ctx = m[0]
    if (!looksUserFacing(txt) || allowed(txt)) continue
    if (/\bt\(\s*['"`]/.test(ctx)) continue
    if (
      /(className|css|src=|href=|alt=|\bid=|key=|data-|aria-|ns:|keyPrefix|import|require|console\.|\.error|\.warn|\.log|Sentry|Mixpanel|throw )/.test(
        ctx
      )
    )
      continue
    hits.add(txt)
  }

  for (const h of hits)
    untranslated.push(
      `${f}: untranslated user-facing string ${JSON.stringify(h.slice(0, 100))} — wrap it in t(), or add it to ALLOWED if it is a brand name`
    )
}

// Ratchet, not a wall. This backlog predates the check, so failing the build on
// all of it would just get the whole check disabled. Instead the baseline is a
// committed LIST: any string not on it fails, and strings that disappear are
// reported so the list can shrink. Comparing identities rather than a count
// matters — a count moves by a couple when unrelated formatting shifts the
// regex window, which produced a false failure the first time this ran.
const BASELINE_FILE = 'i18n-untranslated-baseline.json'
const baseline = fs.existsSync(BASELINE_FILE)
  ? new Set(JSON.parse(fs.readFileSync(BASELINE_FILE, 'utf8')))
  : null
if (!baseline) {
  fs.writeFileSync(
    BASELINE_FILE,
    `${JSON.stringify(untranslated.sort(), null, 2)}\n`
  )
  warnings.push(
    `wrote ${BASELINE_FILE} with ${untranslated.length} pre-existing untranslated strings; commit it, then any NEW one fails the build`
  )
} else {
  const added = untranslated.filter((u) => !baseline.has(u))
  const fixed = [...baseline].filter((b) => !untranslated.includes(b))
  for (const a of added)
    errors.push(`NEW untranslated user-facing string. ${a}`)
  if (fixed.length)
    warnings.push(
      `${fixed.length} untranslated string(s) fixed since the baseline — regenerate ${BASELINE_FILE} (delete it and re-run) to lock the win in`
    )
  if (!added.length)
    warnings.push(
      `${untranslated.length} known untranslated user-facing string(s) (see ${BASELINE_FILE}); no new ones`
    )
}

// ---------------------------------------------------------------------------
// 2b. i18next.t() with a keyPrefix silently drops it
//
// `i18next.t` is bound directly to Translator.translate, which never reads
// `keyPrefix`; only getFixedT(lng, ns, keyPrefix) applies one. Passing it to
// i18next.t looks correct, type-checks, and returns the raw key at runtime —
// the whole ConnectFirst quest flow rendered in English in every language
// because of this one line.
const stripComments = (src) =>
  src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '')
for (const f of [...files, 'src/constants/animations.ts']) {
  if (!fs.existsSync(f)) continue
  const s = stripComments(fs.readFileSync(f, 'utf8'))
  for (const m of s.matchAll(/i18next\.t\(([\s\S]{0,200}?)\)/g))
    if (/keyPrefix/.test(m[1]))
      errors.push(
        `${f}: i18next.t(..., { keyPrefix }) silently ignores keyPrefix — use i18next.getFixedT(null, ns, keyPrefix)(key) instead`
      )
}

// ---------------------------------------------------------------------------
// 2c. every translation file on disk must be registered in translation.ts
//
// i18next resources are static imports, so a namespace that is not listed there
// simply does not exist at runtime: the file can be complete and perfectly
// translated while the page silently renders English. That is exactly what
// happened to the Spanish homepage — 37/37 keys on disk, import commented out,
// no error anywhere. Nothing else in the build would have caught it.
{
  const init = fs.readFileSync('src/utils/translation.ts', 'utf8')
  const resources = init.slice(
    init.indexOf('resources: {'),
    init.indexOf('defaultNS,')
  )
  const registered = {}
  for (const m of resources.matchAll(/'?([a-z-]+)'?:\s*\{([^}]*)\}/g)) {
    const lang = m[1]
    if (lang === 'resources') continue
    registered[lang] = new Set(
      [...m[2].matchAll(/^\s*(?!\/\/)\s*([a-z]+):/gm)].map((x) => x[1])
    )
  }
  for (const lang of fs.readdirSync('translation/website')) {
    if (!fs.statSync(`translation/website/${lang}`).isDirectory()) continue
    if (lang === 'en') continue // English falls through to the key by design
    for (const f of fs.readdirSync(`translation/website/${lang}`)) {
      if (!f.endsWith('.json')) continue
      const ns = f.replace(/\.json$/, '')
      const count = Object.keys(
        JSON.parse(fs.readFileSync(`translation/website/${lang}/${f}`, 'utf8'))
      ).length
      if (!count) continue // an intentionally empty placeholder
      if (!registered[lang])
        warnings.push(
          `${lang} has translation files but no resources entry in src/utils/translation.ts`
        )
      else if (!registered[lang].has(ns))
        errors.push(
          `translation/website/${lang}/${f} has ${count} keys but "${ns}" is not registered for "${lang}" in src/utils/translation.ts — the app will silently render English`
        )
    }
  }
}

// ---------------------------------------------------------------------------
// 3. per-language parity: coverage, interpolation placeholders, HTML tags
// ---------------------------------------------------------------------------
const flat = (o, p = '') =>
  Object.entries(o).flatMap(([k, v]) =>
    typeof v === 'object' && v ? flat(v, `${p}${k} > `) : [[p + k, v]]
  )
const langs = fs
  .readdirSync('translation/website')
  .filter((l) => l !== 'en' && fs.statSync(`translation/website/${l}`).isDirectory())

for (const lang of langs) {
  for (const ns of Object.keys(NS_FILES)) {
    const p = `translation/website/${lang}/${ns}.json`
    if (!fs.existsSync(p)) continue
    const enFlat = Object.fromEntries(flat(en[ns]))
    const trFlat = Object.fromEntries(flat(load(p)))
    const missing = Object.keys(enFlat).filter((k) => !(k in trFlat))
    // A language lands one wave at a time, so partial coverage is expected and
    // falls back to English at runtime: report it, never fail on it.
    if (missing.length)
      warnings.push(
        `${lang}/${ns}.json: ${missing.length} of ${Object.keys(enFlat).length} keys not translated yet`
      )
    const extra = Object.keys(trFlat).filter((k) => !(k in enFlat))
    if (extra.length)
      warnings.push(
        `${lang}/${ns}.json: ${extra.length} key(s) no longer in the English source (dead weight): ${extra.slice(0, 3).map((k) => JSON.stringify(k.slice(0, 40))).join(', ')}`
      )
    // These two ARE hard errors: a dropped {{placeholder}} renders a literal
    // brace to the reader, and a dropped tag breaks the markup.
    for (const k of Object.keys(trFlat)) {
      if (!(k in enFlat)) continue
      const sig = (v, re) => (String(v).match(re) || []).sort().join()
      if (sig(enFlat[k], /{{[^}]+}}/g) !== sig(trFlat[k], /{{[^}]+}}/g))
        errors.push(
          `${lang}/${ns}.json: interpolation placeholders differ from English for ${JSON.stringify(k.slice(0, 60))}`
        )
      if (sig(enFlat[k], /<[^>]+>/g) !== sig(trFlat[k], /<[^>]+>/g))
        errors.push(
          `${lang}/${ns}.json: HTML tags differ from English for ${JSON.stringify(k.slice(0, 60))}`
        )
    }
  }
}

// ---------------------------------------------------------------------------
// 4. translations that outgrow their slot
//
// Layout breaks when a translation is much longer than the English it replaces
// and the slot is fixed: "Connect Wallet" (14 chars) became "Connecter un
// portefeuille" (25) and overflowed the 230px sidebar rail. Short English
// strings are the risky ones — they are the buttons, tags and nav labels that
// live in fixed-width furniture. Long strings are prose and simply reflow.
const SHORT_EN = 30 // chars: below this an English string is probably a control
const GROWTH = 1.6 // flag a translation more than 60% longer than its English
for (const lang of langs) {
  const worst = []
  for (const ns of Object.keys(NS_FILES)) {
    const p = `translation/website/${lang}/${ns}.json`
    if (!fs.existsSync(p)) continue
    const enFlat = Object.fromEntries(flat(en[ns]))
    const trFlat = Object.fromEntries(flat(load(p)))
    for (const [k, v] of Object.entries(trFlat)) {
      const source = enFlat[k]
      if (typeof source !== 'string' || typeof v !== 'string') continue
      if (source.length > SHORT_EN || source.length < 4) continue
      if (v.length < source.length * GROWTH) continue
      worst.push({ ns, k, source, v, ratio: v.length / source.length })
    }
  }
  worst.sort((a, b) => b.ratio - a.ratio)
  if (worst.length)
    warnings.push(
      `${lang}: ${worst.length} short label(s) grew >${Math.round((GROWTH - 1) * 100)}% in translation and may overflow a fixed-width slot. Worst: ` +
        worst
          .slice(0, 5)
          .map(
            (w) =>
              `${JSON.stringify(w.source)} -> ${JSON.stringify(w.v)} (+${Math.round((w.ratio - 1) * 100)}%)`
          )
          .join('; ')
    )
}

if (warnings.length) {
  console.warn(`i18n validation warnings (${warnings.length}):`)
  for (const w of warnings) console.warn(`  ! ${w}`)
}
if (errors.length) {
  console.error(
    `i18n validation FAILED (${errors.length} error${errors.length > 1 ? 's' : ''}):`
  )
  for (const e of errors) console.error(`  - ${e}`)
  process.exit(1)
}
console.log(
  `i18n validation passed (${files.length} components, ${langs.length} languages)`
)
