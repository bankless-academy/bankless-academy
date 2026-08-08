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

// Extract the language from a lesson URL path: /lessons/<code>/<slug>[/content]
// returns a valid non-en registry code, else 'en'. Handles multi-char codes
// ('pt-br') and never mistakes a lesson slug for a language.
export const parseLangFromPath = (pathname: string): LanguageCode => {
  if (!pathname) return 'en'
  const segments = pathname.split(/[?#]/)[0].split('/').filter(Boolean)
  if (
    segments[0] === 'lessons' &&
    segments.length > 2 &&
    isLanguage(segments[1]) &&
    segments[1] !== 'en'
  ) {
    return segments[1]
  }
  return 'en'
}
