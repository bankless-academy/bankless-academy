import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { LANGUAGE_CODES, normalizeLangCode } from 'constants/languages'

// EN = English
import common from '../../translation/website/en/common.json'
import homepage from '../../translation/website/en/homepage.json'
import quests from '../../translation/website/en/quests.json'
import keywords from '../../translation/keywords/en/keywords.json'











// Everything except English is loaded on demand.
//
// These were 46 static imports, so every visitor downloaded all ten languages:
// 1.2MB of translation JSON to read one of them. English stays static because
// it is the fallback and must always be present synchronously; the rest are
// per-namespace dynamic imports, so a French reader fetches French only.
//
// Keep this map EXPLICIT (one line per namespace, no template-literal paths).
// validate-i18n.js parses it to prove that every file on disk is actually
// reachable at runtime — the check that caught a complete es/homepage.json
// rendering English because its import was commented out.
type NamespaceLoader = () => Promise<{ default: Record<string, unknown> }>
export const LAZY_RESOURCES: { [lang: string]: { [ns: string]: NamespaceLoader } } = {
  'pt-br': {
    common: () => import('../../translation/website/pt-br/common.json'),
    homepage: () => import('../../translation/website/pt-br/homepage.json'),
    quests: () => import('../../translation/website/pt-br/quests.json'),
    keywords: () => import('../../translation/keywords/pt-br/keywords.json'),
    lesson: () => import('../../translation/website/pt-br/lesson.json'),
  },
  zh: {
    common: () => import('../../translation/website/zh/common.json'),
    homepage: () => import('../../translation/website/zh/homepage.json'),
    quests: () => import('../../translation/website/zh/quests.json'),
    keywords: () => import('../../translation/keywords/zh/keywords.json'),
    lesson: () => import('../../translation/website/zh/lesson.json'),
  },
  de: {
    common: () => import('../../translation/website/de/common.json'),
    homepage: () => import('../../translation/website/de/homepage.json'),
    quests: () => import('../../translation/website/de/quests.json'),
    keywords: () => import('../../translation/keywords/de/keywords.json'),
    lesson: () => import('../../translation/website/de/lesson.json'),
  },
  es: {
    common: () => import('../../translation/website/es/common.json'),
    homepage: () => import('../../translation/website/es/homepage.json'),
    quests: () => import('../../translation/website/es/quests.json'),
    keywords: () => import('../../translation/keywords/es/keywords.json'),
    lesson: () => import('../../translation/website/es/lesson.json'),
  },
  fr: {
    common: () => import('../../translation/website/fr/common.json'),
    homepage: () => import('../../translation/website/fr/homepage.json'),
    quests: () => import('../../translation/website/fr/quests.json'),
    keywords: () => import('../../translation/keywords/fr/keywords.json'),
    lesson: () => import('../../translation/website/fr/lesson.json'),
  },
  it: {
    common: () => import('../../translation/website/it/common.json'),
    homepage: () => import('../../translation/website/it/homepage.json'),
    quests: () => import('../../translation/website/it/quests.json'),
    keywords: () => import('../../translation/keywords/it/keywords.json'),
    lesson: () => import('../../translation/website/it/lesson.json'),
  },
  ja: {
    common: () => import('../../translation/website/ja/common.json'),
    homepage: () => import('../../translation/website/ja/homepage.json'),
    quests: () => import('../../translation/website/ja/quests.json'),
    keywords: () => import('../../translation/keywords/ja/keywords.json'),
    lesson: () => import('../../translation/website/ja/lesson.json'),
  },
  tr: {
    common: () => import('../../translation/website/tr/common.json'),
    homepage: () => import('../../translation/website/tr/homepage.json'),
    quests: () => import('../../translation/website/tr/quests.json'),
    keywords: () => import('../../translation/keywords/tr/keywords.json'),
    lesson: () => import('../../translation/website/tr/lesson.json'),
  },
  uk: {
    common: () => import('../../translation/website/uk/common.json'),
    homepage: () => import('../../translation/website/uk/homepage.json'),
    quests: () => import('../../translation/website/uk/quests.json'),
    keywords: () => import('../../translation/keywords/uk/keywords.json'),
    lesson: () => import('../../translation/website/uk/lesson.json'),
  },
  hi: {
    common: () => import('../../translation/website/hi/common.json'),
    homepage: () => import('../../translation/website/hi/homepage.json'),
    quests: () => import('../../translation/website/hi/quests.json'),
    keywords: () => import('../../translation/keywords/hi/keywords.json'),
    lesson: () => import('../../translation/website/hi/lesson.json'),
  },
  id: {
    common: () => import('../../translation/website/id/common.json'),
    homepage: () => import('../../translation/website/id/homepage.json'),
    quests: () => import('../../translation/website/id/quests.json'),
    keywords: () => import('../../translation/keywords/id/keywords.json'),
    lesson: () => import('../../translation/website/id/lesson.json'),
  },
  vi: {
    common: () => import('../../translation/website/vi/common.json'),
    homepage: () => import('../../translation/website/vi/homepage.json'),
    quests: () => import('../../translation/website/vi/quests.json'),
    keywords: () => import('../../translation/keywords/vi/keywords.json'),
    lesson: () => import('../../translation/website/vi/lesson.json'),
  },
  ru: {
    common: () => import('../../translation/website/ru/common.json'),
    homepage: () => import('../../translation/website/ru/homepage.json'),
    quests: () => import('../../translation/website/ru/quests.json'),
    keywords: () => import('../../translation/keywords/ru/keywords.json'),
    lesson: () => import('../../translation/website/ru/lesson.json'),
  },
  ko: {
    common: () => import('../../translation/website/ko/common.json'),
    homepage: () => import('../../translation/website/ko/homepage.json'),
    quests: () => import('../../translation/website/ko/quests.json'),
    keywords: () => import('../../translation/keywords/ko/keywords.json'),
    lesson: () => import('../../translation/website/ko/lesson.json'),
  },
  pl: {
    common: () => import('../../translation/website/pl/common.json'),
    homepage: () => import('../../translation/website/pl/homepage.json'),
    quests: () => import('../../translation/website/pl/quests.json'),
    keywords: () => import('../../translation/keywords/pl/keywords.json'),
    lesson: () => import('../../translation/website/pl/lesson.json'),
  },
  cs: {
    common: () => import('../../translation/website/cs/common.json'),
    homepage: () => import('../../translation/website/cs/homepage.json'),
    quests: () => import('../../translation/website/cs/quests.json'),
    keywords: () => import('../../translation/keywords/cs/keywords.json'),
    lesson: () => import('../../translation/website/cs/lesson.json'),
  },
  sw: {
    common: () => import('../../translation/website/sw/common.json'),
    homepage: () => import('../../translation/website/sw/homepage.json'),
    quests: () => import('../../translation/website/sw/quests.json'),
    keywords: () => import('../../translation/keywords/sw/keywords.json'),
    lesson: () => import('../../translation/website/sw/lesson.json'),
  },
  bn: {
    common: () => import('../../translation/website/bn/common.json'),
    homepage: () => import('../../translation/website/bn/homepage.json'),
    quests: () => import('../../translation/website/bn/quests.json'),
    keywords: () => import('../../translation/keywords/bn/keywords.json'),
    lesson: () => import('../../translation/website/bn/lesson.json'),
  },
  mr: {
    common: () => import('../../translation/website/mr/common.json'),
    homepage: () => import('../../translation/website/mr/homepage.json'),
    quests: () => import('../../translation/website/mr/quests.json'),
    keywords: () => import('../../translation/keywords/mr/keywords.json'),
    lesson: () => import('../../translation/website/mr/lesson.json'),
  },
  ta: {
    common: () => import('../../translation/website/ta/common.json'),
    homepage: () => import('../../translation/website/ta/homepage.json'),
    quests: () => import('../../translation/website/ta/quests.json'),
    keywords: () => import('../../translation/keywords/ta/keywords.json'),
    lesson: () => import('../../translation/website/ta/lesson.json'),
  },
  te: {
    common: () => import('../../translation/website/te/common.json'),
    homepage: () => import('../../translation/website/te/homepage.json'),
    quests: () => import('../../translation/website/te/quests.json'),
    keywords: () => import('../../translation/keywords/te/keywords.json'),
    lesson: () => import('../../translation/website/te/lesson.json'),
  },
}

const loaded = new Set<string>(['en'])

/**
 * Fetch a language's namespaces and register them with i18next.
 *
 * Await this BEFORE i18next.changeLanguage(), otherwise the UI renders English
 * for a frame while the chunk arrives. Idempotent and safe to call repeatedly.
 */
export const loadLanguage = async (lng: string): Promise<void> => {
  const lang = normalizeLangCode(lng)
  if (loaded.has(lang) || !LAZY_RESOURCES[lang]) return
  const entries = Object.entries(LAZY_RESOURCES[lang])
  const mods = await Promise.all(entries.map(([, load]) => load()))
  entries.forEach(([ns], i) => {
    // `true, true` = deep merge, overwrite: re-registering is harmless.
    i18next.addResourceBundle(lang, ns, mods[i].default, true, true)
  })
  loaded.add(lang)

  // addResourceBundle does not notify anyone. If this IS the active language
  // (the usual case on a reload, where the detector set it before the chunk
  // existed), mounted components are still showing English and nothing would
  // ever re-render them. Emitting languageChanged is what react-i18next's
  // useTranslation subscribes to.
  if (normalizeLangCode(i18next.language) === lang)
    i18next.emit('languageChanged', lang)
}

export const defaultNS = 'common'

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: [...LANGUAGE_CODES],
    lowerCaseLng: true,
    debug: false,
    // Our keys ARE the English sentences, so many of them end in ':'. i18next
    // reads that as a namespace prefix by default, so `t('Answer selected:')`
    // resolved to an EMPTY string and the line silently disappeared from the
    // UI. Namespaces are always passed explicitly here, so the separator has
    // no job to do. (keySeparator stays on: keyPrefix joins with '.' whatever
    // we set, and i18next's deepFind already resolves keys containing dots.)
    nsSeparator: false,
    detection: {
      // Map whatever the browser/localStorage reports onto a registry code:
      // pt-BR -> pt-br, zh-CN/zh-TW -> zh, ja-JP -> ja, and legacy stored
      // codes (br/cn/jp/ua) -> their ISO replacements.
      convertDetectedLanguage: (lng: string) => normalizeLangCode(lng),
    },
    resources: {
      // English only — see LAZY_RESOURCES above for the other nine.
      en: {
        common,
        homepage,
        quests,
        keywords,
      },
    },
    defaultNS,
  })

// The detector resolves a stored/browser language during init, but resources
// are lazy now — so on every reload in a non-English language i18next was
// "in French" with no French bundle, silently rendering English while the
// selector correctly reported French. Kick off that load immediately.
void loadLanguage(i18next.language)
