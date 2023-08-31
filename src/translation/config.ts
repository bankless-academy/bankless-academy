import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// en
import common from 'translation/en/common.json'
import homepage from 'translation/en/homepage.json'
import quests from 'translation/en/quests.json'

// fr
import commonFR from 'translation/fr/common.json'
import homepageFR from 'translation/fr/homepage.json'
import questsFR from 'translation/fr/quests.json'

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
      },
      fr: {
        common: commonFR,
        homepage: homepageFR,
        quests: questsFR,
      }
    },
    defaultNS,
  })
