import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// en
import common from '../../translation/website/en/common.json'
import homepage from '../../translation/website/en/homepage.json'
import quests from '../../translation/website/en/quests.json'
import keywords from '../../translation/keywords/en/keywords.json'


// fr
import commonFR from '../../translation/website/fr/common.json'
import homepageFR from '../../translation/website/fr/homepage.json'
import questsFR from '../../translation/website/fr/quests.json'
import keywordsFR from '../../translation/keywords/fr/keywords.json'

// es
import commonES from '../../translation/website/es/common.json'
// import homepageES from '../../translation/website/es/homepage.json'
import questsES from '../../translation/website/es/quests.json'
import keywordsES from '../../translation/keywords/es/keywords.json'

// de
// import commonDE from '../../translation/website/de/common.json'
// import homepageDE from '../../translation/website/de/homepage.json'
// import questsDE from '../../translation/website/de/quests.json'
// import keywordsDE from '../../translation/keywords/de/keywords.json'

export const defaultNS = 'common'

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        common,
        homepage,
        quests,
        keywords,
      },
      fr: {
        common: commonFR,
        homepage: homepageFR,
        quests: questsFR,
        keywords: keywordsFR,
      },
      es: {
        common: commonES,
        // homepage: homepageES,
        quests: questsES,
        keywords: keywordsES,
      },
      de: {
        // common: commonDE,
        // homepage: homepageDE,
        // quests: questsDE,
        // keywords: keywordsDE,
      }
    },
    defaultNS,
  })
