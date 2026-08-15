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

const LANGUAGE_DEFS = [
  { code: 'en', name: 'English', localName: 'English', dir: 'ltr' },
  {
    code: 'pt-br',
    name: 'Portuguese (Brazilian)',
    localName: 'Português',
    dir: 'ltr',
  },
  { code: 'zh', name: 'Chinese Simplified', localName: '简体中文', dir: 'ltr' },
  { code: 'de', name: 'German', localName: 'Deutsch', dir: 'ltr' },
  { code: 'es', name: 'Spanish', localName: 'Español', dir: 'ltr' },
  { code: 'fr', name: 'French', localName: 'Français', dir: 'ltr' },
  { code: 'it', name: 'Italian', localName: 'Italiano', dir: 'ltr' },
  { code: 'ja', name: 'Japanese', localName: '日本語', dir: 'ltr' },
  { code: 'tr', name: 'Turkish', localName: 'Türkçe', dir: 'ltr' },
  { code: 'uk', name: 'Ukrainian', localName: 'Українська', dir: 'ltr' },
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

// Extract the language from a localized URL path. Two shapes carry a language:
//   /lessons/<code>/<slug>[/content]
//   /glossary/<code>
// Returns a valid non-en registry code, else 'en'. Handles multi-char codes
// ('pt-br') and never mistakes a lesson slug for a language.
// Routes where the URL itself carries the language, and is therefore the
// single source of truth for it: a lesson page and the glossary. Everywhere
// else there is no localized URL to express a language, so the reader's stored
// preference applies instead. Keeping these two cases apart is what stops the
// UI rendering French chrome around an English lesson served from an English
// URL, and what makes each URL deterministic for crawlers.
// Sibling pages under /lessons that are NOT a lesson: they have no localized
// URL, so they must fall back to the reader's stored preference like any other
// page. Treating /lessons/handbook as a lesson slug forced it to English and
// dropped the language on every visit.
const RESERVED_LESSON_ROUTES = new Set(['handbook', 'preview'])

export const isLocalizablePath = (pathname: string): boolean => {
  if (!pathname) return false
  const segments = pathname.split(/[?#]/)[0].split('/').filter(Boolean)
  if (segments[0] === 'glossary') return true
  // /lessons/<slug> and /lessons/<lang>/<slug>, but not the /lessons index and
  // not the sibling listing pages
  return (
    segments[0] === 'lessons' &&
    segments.length > 1 &&
    !RESERVED_LESSON_ROUTES.has(segments[1])
  )
}

export const parseLangFromPath = (pathname: string): LanguageCode => {
  if (!pathname) return 'en'
  const segments = pathname.split(/[?#]/)[0].split('/').filter(Boolean)
  const candidate =
    segments[0] === 'lessons' && segments.length > 2
      ? segments[1]
      : segments[0] === 'glossary' && segments.length > 1
      ? segments[1]
      : undefined
  if (candidate && isLanguage(candidate) && candidate !== 'en') return candidate
  return 'en'
}
