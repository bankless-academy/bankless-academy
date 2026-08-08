import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { LANGUAGE_CODES, normalizeLangCode } from 'constants/languages'

// EN = English
import common from '../../translation/website/en/common.json'
import homepage from '../../translation/website/en/homepage.json'
import quests from '../../translation/website/en/quests.json'
import keywords from '../../translation/keywords/en/keywords.json'

// PT-BR = Brazilian Portuguese
import commonPTBR from '../../translation/website/pt-br/common.json'
// import homepagePTBR from '../../translation/website/pt-br/homepage.json'
import questsPTBR from '../../translation/website/pt-br/quests.json'
import keywordsPTBR from '../../translation/keywords/pt-br/keywords.json'
import lessonPTBR from '../../translation/website/pt-br/lesson.json'

// ZH = Chinese Simplified
import commonZH from '../../translation/website/zh/common.json'
// import homepageZH from '../../translation/website/zh/homepage.json'
import questsZH from '../../translation/website/zh/quests.json'
import keywordsZH from '../../translation/keywords/zh/keywords.json'
import lessonZH from '../../translation/website/zh/lesson.json'

// DE = German
import commonDE from '../../translation/website/de/common.json'
// import homepageDE from '../../translation/website/de/homepage.json'
import questsDE from '../../translation/website/de/quests.json'
import keywordsDE from '../../translation/keywords/de/keywords.json'
import lessonDE from '../../translation/website/de/lesson.json'

// ES = Spanish
import commonES from '../../translation/website/es/common.json'
// import homepageES from '../../translation/website/es/homepage.json'
import questsES from '../../translation/website/es/quests.json'
import keywordsES from '../../translation/keywords/es/keywords.json'
import lessonES from '../../translation/website/es/lesson.json'

// FR = French
import commonFR from '../../translation/website/fr/common.json'
import homepageFR from '../../translation/website/fr/homepage.json'
import questsFR from '../../translation/website/fr/quests.json'
import keywordsFR from '../../translation/keywords/fr/keywords.json'
import lessonFR from '../../translation/website/fr/lesson.json'

// IT = Italian
import commonIT from '../../translation/website/it/common.json'
// import homepageIT from '../../translation/website/it/homepage.json'
import questsIT from '../../translation/website/it/quests.json'
import keywordsIT from '../../translation/keywords/it/keywords.json'
import lessonIT from '../../translation/website/it/lesson.json'

// JA = Japanese
import commonJA from '../../translation/website/ja/common.json'
// import homepageJA from '../../translation/website/ja/homepage.json'
import questsJA from '../../translation/website/ja/quests.json'
import keywordsJA from '../../translation/keywords/ja/keywords.json'
import lessonJA from '../../translation/website/ja/lesson.json'

// TR = Turkish
import commonTR from '../../translation/website/tr/common.json'
// import homepageTR from '../../translation/website/tr/homepage.json'
import questsTR from '../../translation/website/tr/quests.json'
import keywordsTR from '../../translation/keywords/tr/keywords.json'
import lessonTR from '../../translation/website/tr/lesson.json'

// UK = Ukrainian
import commonUK from '../../translation/website/uk/common.json'
// import homepageUK from '../../translation/website/uk/homepage.json'
import questsUK from '../../translation/website/uk/quests.json'
import keywordsUK from '../../translation/keywords/uk/keywords.json'
import lessonUK from '../../translation/website/uk/lesson.json'

export const defaultNS = 'common'

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: [...LANGUAGE_CODES],
    lowerCaseLng: true,
    debug: false,
    detection: {
      // Map whatever the browser/localStorage reports onto a registry code:
      // pt-BR -> pt-br, zh-CN/zh-TW -> zh, ja-JP -> ja, and legacy stored
      // codes (br/cn/jp/ua) -> their ISO replacements.
      convertDetectedLanguage: (lng: string) => normalizeLangCode(lng),
    },
    resources: {
      en: {
        common,
        homepage,
        quests,
        keywords,
      },
      'pt-br': {
        common: commonPTBR,
        // homepage: homepagePTBR,
        quests: questsPTBR,
        keywords: keywordsPTBR,
        lesson: lessonPTBR,
      },
      zh: {
        common: commonZH,
        // homepage: homepageZH,
        quests: questsZH,
        keywords: keywordsZH,
        lesson: lessonZH,
      },
      de: {
        common: commonDE,
        // homepage: homepageDE,
        quests: questsDE,
        keywords: keywordsDE,
        lesson: lessonDE,
      },
      es: {
        common: commonES,
        // homepage: homepageES,
        quests: questsES,
        keywords: keywordsES,
        lesson: lessonES,
      },
      fr: {
        common: commonFR,
        homepage: homepageFR,
        quests: questsFR,
        keywords: keywordsFR,
        lesson: lessonFR,
      },
      it: {
        common: commonIT,
        // homepage: homepageIT,
        quests: questsIT,
        keywords: keywordsIT,
        lesson: lessonIT,
      },
      ja: {
        common: commonJA,
        // homepage: homepageJA,
        quests: questsJA,
        keywords: keywordsJA,
        lesson: lessonJA,
      },
      tr: {
        common: commonTR,
        // homepage: homepageTR,
        quests: questsTR,
        keywords: keywordsTR,
        lesson: lessonTR,
      },
      uk: {
        common: commonUK,
        // homepage: homepageUK,
        quests: questsUK,
        keywords: keywordsUK,
        lesson: lessonUK,
      },
    },
    defaultNS,
  })
