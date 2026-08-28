// Single source of truth for supported languages.
// Every language-related constant (LanguageType, LanguageDescription, i18next
// resources/supportedLngs, selectors, validators) must derive from this file.
// Adding a language = adding one entry here + its translation/ dirs.

export interface LanguageDef {
  code: string
  name: string // English name
  localName: string // native-script name (shown in selectors)
  dir: 'ltr' | 'rtl'
}

// Rollout history and the traps each wave surfaced. Kept above the array so the
// array itself stays a plain, alphabetically sorted declaration.
//
// Order here is alphabetical by ENGLISH name and carries no meaning: every
// consumer sorts for itself (`constants/index.ts` and `LanguageSelector` both
// sort by endonym, the W3C/Wikipedia convention), and the rest look up by code.
//
// Waves ran 3 languages at a time, 11 agents each (see CLAUDE.md "Running a
// language wave with parallel agents"):
//   wave 1  fr pilot + the 9 legacy glossaries converted to English-keyed
//   wave 2  hi id vi      wave 3  ru ko pl
//   wave 4  cs sw bn      wave 5  mr ta te
//   wave 6  nl th tl (first wave with NO vendored ETHGlossary data — upstream
//           has none for these three, so the style-guide pins carry all the
//           terminology authority)
//   zh-tw   derived from zh by convert-zh-tw.js, not a wave (2026-08-22)
//
// Script traps worth remembering:
//   - hi, bn, mr, ta, te, ja, zh, ko all slugify to nothing, so /content
//     heading anchors fall back to `section-N`. Expected, not a bug.
//   - `mr` shares Devanagari with `hi` but NOT its encoding rules. Hindi
//     nuktas are composition exclusions so NFC repairs them; Marathi has three
//     ambiguous spellings that survive NFC UNEQUAL - the vendored mr.json
//     already spells "app" three ways. A backticked term whose spelling
//     differs from its glossary key is a dead tooltip that renders perfectly,
//     so `normalizeKeyword` cannot save it. The style guide pins one spelling.
//     Marathi also ends sentences with `.`, not the danda hi/bn use.
//   - `ta`/`te`/`bn`/`tr` agglutinate: a case suffix inside backticks is a
//     dead tooltip. Suffix goes outside, or the clause gets rephrased.
//   - `ta` has the worst vendored ETHGlossary data of any language: purist
//     coinages no Tamil speaker uses, and `gas` rendered as combustible fuel
//     gas. Its style guide overrides the vendored data constantly.
//   - `tr` dotted-I folds to i + U+0307, which never equals a glossary `i`.
//     Handled by `normalizeKeyword` below.
//
// Still absent by design: `am` (REACH track, LTR, unblocked) and `fa` (held
// pending a sanctions decision).
//
// Ranking on analytics alone is a trap: a language shows little traffic partly
// BECAUSE there is nothing to read in it, so measured readers optimize
// retention and quietly foreclose acquisition. See docs/language-roadmap.md
// (which deliberately carries no figures, since traffic and index positions
// move and a pasted snapshot goes stale).
const LANGUAGE_DEFS = [
  { code: 'ar', name: 'Arabic', localName: 'العربية', dir: 'rtl' },
  { code: 'bn', name: 'Bengali', localName: 'বাংলা', dir: 'ltr' },
  { code: 'zh', name: 'Chinese Simplified', localName: '简体中文', dir: 'ltr' },
  {
    code: 'zh-tw',
    name: 'Chinese Traditional',
    localName: '繁體中文',
    dir: 'ltr',
  },
  { code: 'cs', name: 'Czech', localName: 'Čeština', dir: 'ltr' },
  { code: 'nl', name: 'Dutch', localName: 'Nederlands', dir: 'ltr' },
  { code: 'en', name: 'English', localName: 'English', dir: 'ltr' },
  { code: 'tl', name: 'Filipino', localName: 'Filipino', dir: 'ltr' },
  { code: 'fr', name: 'French', localName: 'Français', dir: 'ltr' },
  { code: 'de', name: 'German', localName: 'Deutsch', dir: 'ltr' },
  { code: 'hi', name: 'Hindi', localName: 'हिन्दी', dir: 'ltr' },
  { code: 'id', name: 'Indonesian', localName: 'Bahasa Indonesia', dir: 'ltr' },
  { code: 'it', name: 'Italian', localName: 'Italiano', dir: 'ltr' },
  { code: 'ja', name: 'Japanese', localName: '日本語', dir: 'ltr' },
  { code: 'ko', name: 'Korean', localName: '한국어', dir: 'ltr' },
  { code: 'mr', name: 'Marathi', localName: 'मराठी', dir: 'ltr' },
  { code: 'pl', name: 'Polish', localName: 'Polski', dir: 'ltr' },
  {
    code: 'pt-br',
    name: 'Portuguese (Brazilian)',
    localName: 'Português',
    dir: 'ltr',
  },
  { code: 'ru', name: 'Russian', localName: 'Русский', dir: 'ltr' },
  { code: 'es', name: 'Spanish', localName: 'Español', dir: 'ltr' },
  { code: 'sw', name: 'Swahili', localName: 'Kiswahili', dir: 'ltr' },
  { code: 'ta', name: 'Tamil', localName: 'தமிழ்', dir: 'ltr' },
  { code: 'te', name: 'Telugu', localName: 'తెలుగు', dir: 'ltr' },
  { code: 'th', name: 'Thai', localName: 'ไทย', dir: 'ltr' },
  { code: 'tr', name: 'Turkish', localName: 'Türkçe', dir: 'ltr' },
  { code: 'uk', name: 'Ukrainian', localName: 'Українська', dir: 'ltr' },
  { code: 'ur', name: 'Urdu', localName: 'اردو', dir: 'rtl' },
  { code: 'vi', name: 'Vietnamese', localName: 'Tiếng Việt', dir: 'ltr' },
] as const

// 'en' | 'pt-br' | 'zh' | ... — derived from the registry
export type LanguageCode = (typeof LANGUAGE_DEFS)[number]['code']

export const LANGUAGES: readonly LanguageDef[] = LANGUAGE_DEFS

export const LANGUAGE_CODES: LanguageCode[] = LANGUAGE_DEFS.map((l) => l.code)

export const isLanguage = (code: unknown): code is LanguageCode =>
  typeof code === 'string' && (LANGUAGE_CODES as string[]).includes(code)

// Pre-ISO codes used historically (URLs, localStorage, Crowdin dirs).
export const LEGACY_CODE_MAP: { [legacy: string]: LanguageCode } = {
  br: 'pt-br',
  cn: 'zh',
  jp: 'ja',
  ua: 'uk',
}

// Normalize any language identifier (legacy code, browser tag like 'pt-BR' /
// 'zh-CN' / 'ja-JP', stored value) to a registry code; unknown -> 'en'.
export const normalizeLangCode = (code?: string | null): LanguageCode => {
  if (!code || typeof code !== 'string') return 'en'
  const lower = code.toLowerCase()
  if (isLanguage(lower)) return lower
  if (lower in LEGACY_CODE_MAP) return LEGACY_CODE_MAP[lower]
  // regional variant of a supported base language: zh-cn/zh-tw -> zh, ja-jp -> ja
  const base = lower.split('-')[0]
  if (isLanguage(base)) return base
  // base language whose only supported form is regional: pt -> pt-br
  const regional = LANGUAGE_CODES.find((c) => c.startsWith(`${base}-`))
  if (regional) return regional
  return 'en'
}

// Pages that must never carry a locale prefix: personal dashboards (explorer)
// and English-only Notion content (/faq, /about, ... are vercel.json rewrites
// onto /notion/<slug>). Three layers enforce it, keep them in sync:
//   - InternalLink pins locale="en" on links to these paths;
//   - AppContext applies the reader's STORED preference for UI strings there
//     (old pre-locale-URL behavior) instead of URL-swapping;
//   - next.config.mjs 308s any locale-prefixed request back to the bare path.
export const NON_LOCALIZED_PATHS = [
  'explorer',
  'notion',
  'faq',
  'about',
  'disclaimer',
  'privacy-policy',
  'terms-of-service',
]

export const isNonLocalizedPath = (path: string): boolean => {
  const first = path.split(/[?#]/)[0].split('/').filter(Boolean)[0]
  return !!first && NON_LOCALIZED_PATHS.includes(first)
}

// Absolute path for a locale under the site-wide /<lang>/ URL scheme:
//   localePath('fr', '/lessons/x') -> '/fr/lessons/x'
//   localePath('en', '/lessons/x') -> '/lessons/x'   (English is un-prefixed)
//   localePath('fr', '/')          -> '/fr'
// Only needed when building a URL as a STRING (plain <a> hrefs, sitemap, OG,
// hreflang). next/link and router.push carry the locale via their `locale`
// option instead and must not be given a pre-prefixed path.
export const localePath = (lang: string, path: string): string => {
  const code = normalizeLangCode(lang)
  if (code === 'en') return path
  return path === '/' ? `/${code}` : `/${code}${path}`
}

// localStorage key holding the reader's CHOSEN language. Distinct from
// i18next's own `i18nextLng` cache, which tracks whatever is merely active.
//
// The value is JSON-encoded, because LanguageSelector reads it through
// usehooks-ts `useLocalStorage`, which JSON.parses whatever it finds. Writing a
// bare "es" here makes that hook throw on the next render, so always go through
// the two helpers below rather than touching localStorage directly.
export const PREFERRED_LANGUAGE_KEY = 'default-language'

export const readPreferredLanguage = (): LanguageCode | null => {
  if (typeof window === 'undefined') return null
  const raw = window.localStorage.getItem(PREFERRED_LANGUAGE_KEY)
  if (!raw) return null
  try {
    const value = JSON.parse(raw)
    return typeof value === 'string' && isLanguage(value) ? value : null
  } catch {
    // tolerate a bare (non-JSON) value so a browser that already stored one
    // keeps working; the next write below repairs the format
    return isLanguage(raw) ? raw : null
  }
}

export const writePreferredLanguage = (lang: string): void => {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(PREFERRED_LANGUAGE_KEY, JSON.stringify(lang))
}

// Keep <html lang> and <html dir> in sync with the active language. This is
// the ONLY place that may write these attributes. It used to live in a
// LanguageSelector effect, but the selector is mounted by Nav and Lesson.tsx
// hides Nav on every non-QUEST slide — so the lesson slideshow, the surface
// RTL matters most for, never got a direction. AppContext (which sees every
// route change) and Head (for the nolayout /content pages, which mount no
// AppProvider) call this instead.
export const applyDocumentLanguage = (lang: string): void => {
  if (typeof document === 'undefined') return
  const code = normalizeLangCode(lang)
  const def = LANGUAGES.find((l) => l.code === code)
  document.documentElement.lang = code
  document.documentElement.dir = def?.dir || 'ltr'
}

export const isRtlLang = (lang?: string | null): boolean =>
  LANGUAGES.find((l) => l.code === normalizeLangCode(lang))?.dir === 'rtl'

// Runtime direction check for behavior that CSS logical properties can't
// express (keyboard hotkey semantics, popper placements). Reads the attribute
// applyDocumentLanguage maintains, so it is always in sync with the UI and
// safe to call at event time. Client-only code paths only.
export const isRtlDocument = (): boolean =>
  typeof document !== 'undefined' && document.documentElement.dir === 'rtl'

// Glossary lookups are case-folded, and case folding is not script-neutral.
// JS lowercases Turkish İ (U+0130) to "i" + U+0307 (COMBINING DOT ABOVE), a
// two-codepoint sequence that can never equal the single "i" in a glossary
// key. The effect is that ANY Turkish term backticked at the start of a
// sentence or list item ("`İşlemler` ...") is a dead tooltip, which is why the
// Turkish wave had to reword clauses to keep such terms mid-sentence.
// Stripping the combining dot after folding makes both sides comparable.
// Keep in sync with `normalizeKeyword` in content-lib.js, which the content
// validators use to reach the same verdict offline.
// Unicode normalization matters as much as case folding. Vietnamese "ví tiền
// mã hóa" is 14 code points in NFC and 19 in NFD; the two render identically
// and never compare equal, so an NFD backticked term is a dead tooltip against
// an NFC glossary key with nothing visible to debug. NFC first, then fold.
export const normalizeKeyword = (s: string): string =>
  s.normalize('NFC').toLowerCase().replace(/̇/g, '')
