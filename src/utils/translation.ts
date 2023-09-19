import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// EN
import common from '../../translation/website/en/common.json'
import homepage from '../../translation/website/en/homepage.json'
import quests from '../../translation/website/en/quests.json'
import keywords from '../../translation/keywords/en/keywords.json'

// FR
import commonFR from '../../translation/website/fr/common.json'
import homepageFR from '../../translation/website/fr/homepage.json'
import questsFR from '../../translation/website/fr/quests.json'
import keywordsFR from '../../translation/keywords/fr/keywords.json'
import lessonFR from '../../translation/website/fr/lesson.json'

// ES
import commonES from '../../translation/website/es/common.json'
// import homepageES from '../../translation/website/es/homepage.json'
import questsES from '../../translation/website/es/quests.json'
import keywordsES from '../../translation/keywords/es/keywords.json'
import lessonES from '../../translation/website/es/lesson.json'

// DE
import commonDE from '../../translation/website/de/common.json'
// import homepageDE from '../../translation/website/de/homepage.json'
import questsDE from '../../translation/website/de/quests.json'
import keywordsDE from '../../translation/keywords/de/keywords.json'
import lessonDE from '../../translation/website/de/lesson.json'

// CN
import commonCN from '../../translation/website/cn/common.json'
// import homepageCN from '../../translation/website/cn/homepage.json'
import questsCN from '../../translation/website/cn/quests.json'
import keywordsCN from '../../translation/keywords/cn/keywords.json'
import lessonCN from '../../translation/website/cn/lesson.json'

// JP
import commonJP from '../../translation/website/jp/common.json'
// import homepageJP from '../../translation/website/jp/homepage.json'
import questsJP from '../../translation/website/jp/quests.json'
import keywordsJP from '../../translation/keywords/jp/keywords.json'
import lessonJP from '../../translation/website/jp/lesson.json'

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
        lesson: lessonFR,
      },
      es: {
        common: commonES,
        // homepage: homepageES,
        quests: questsES,
        keywords: keywordsES,
        lesson: lessonES,
      },
      de: {
        common: commonDE,
        // homepage: homepageDE,
        quests: questsDE,
        keywords: keywordsDE,
        lesson: lessonDE,
      },
      cn: {
        common: commonCN,
        // homepage: homepageCN,
        quests: questsCN,
        keywords: keywordsCN,
        lesson: lessonCN,
      },
      jp: {
        common: commonJP,
        // homepage: homepageJP,
        quests: questsJP,
        keywords: keywordsJP,
        lesson: lessonJP,
      }
    },
    defaultNS,
  })
