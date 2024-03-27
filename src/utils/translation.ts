import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// EN = English
import common from '../../translation/website/en/common.json'
import homepage from '../../translation/website/en/homepage.json'
import quests from '../../translation/website/en/quests.json'
import keywords from '../../translation/keywords/en/keywords.json'

// BR = Brazilian Portuguese
import commonBR from '../../translation/website/br/common.json'
// import homepageBR from '../../translation/website/br/homepage.json'
import questsBR from '../../translation/website/br/quests.json'
import keywordsBR from '../../translation/keywords/br/keywords.json'
import lessonBR from '../../translation/website/br/lesson.json'

// CN = Chinese Simplified
import commonCN from '../../translation/website/cn/common.json'
// import homepageCN from '../../translation/website/cn/homepage.json'
import questsCN from '../../translation/website/cn/quests.json'
import keywordsCN from '../../translation/keywords/cn/keywords.json'
import lessonCN from '../../translation/website/cn/lesson.json'

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

// JP = Japanese
import commonJP from '../../translation/website/jp/common.json'
// import homepageJP from '../../translation/website/jp/homepage.json'
import questsJP from '../../translation/website/jp/quests.json'
import keywordsJP from '../../translation/keywords/jp/keywords.json'
import lessonJP from '../../translation/website/jp/lesson.json'

// TR = Turkish
import commonTR from '../../translation/website/tr/common.json'
// import homepageTR from '../../translation/website/tr/homepage.json'
import questsTR from '../../translation/website/tr/quests.json'
import keywordsTR from '../../translation/keywords/tr/keywords.json'
import lessonTR from '../../translation/website/tr/lesson.json'

// UA = Ukrainian
import commonUA from '../../translation/website/ua/common.json'
// import homepageUA from '../../translation/website/ua/homepage.json'
import questsUA from '../../translation/website/ua/quests.json'
import keywordsUA from '../../translation/keywords/ua/keywords.json'
import lessonUA from '../../translation/website/ua/lesson.json'

export const defaultNS = 'common'

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    resources: {
      en: {
        common,
        homepage,
        quests,
        keywords,
      },
      br: {
        common: commonBR,
        // homepage: homepageBR,
        quests: questsBR,
        keywords: keywordsBR,
        lesson: lessonBR,
      },
      cn: {
        common: commonCN,
        // homepage: homepageCN,
        quests: questsCN,
        keywords: keywordsCN,
        lesson: lessonCN,
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
      jp: {
        common: commonJP,
        // homepage: homepageJP,
        quests: questsJP,
        keywords: keywordsJP,
        lesson: lessonJP,
      },
      tr: {
        common: commonTR,
        // homepage: homepageTR,
        quests: questsTR,
        keywords: keywordsTR,
        lesson: lessonTR,
      },
      ua: {
        common: commonUA,
        // homepage: homepageUA,
        quests: questsUA,
        keywords: keywordsUA,
        lesson: lessonUA,
      }
    },
    defaultNS,
  })
