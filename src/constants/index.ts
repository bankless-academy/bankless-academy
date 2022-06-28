import { MetaData } from 'components/Head'
import LESSONS from './lessons'

export const PROJECT_NAME = 'humanDAO Academy'

export const IS_WHITE_LABEL = true

export const DOMAIN_PROD = 'humandao.banklessacademy.com'

export const DOMAIN_URL =
  process.env.VERCEL_URL && process.env.VERCEL_ENV !== 'production'
    ? `https://${process.env.VERCEL_URL}`
    : `https://${DOMAIN_PROD}`

export const DEFAULT_METADATA: MetaData = {
  title: PROJECT_NAME,
  description: 'Improve lives through crypto',
  image: `${DOMAIN_URL}/humanDAO/humanDAO.png`,
}

export const FAVICON = '/humanDAO/favicon.png'

export const LOGO = '/humanDAO/HDAO-white.svg'
export const LOGO_SMALL = '/humanDAO/HDAO-white.svg'

export const HOMEPAGE_BACKGROUND = '/humanDAO/homepage_background.jpg'

export const UMAMI_PROD = 'a50ccb31-0534-407f-aebe-312bd64b2689'

export const TOKEN_ADDRESS = {
  1: '0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198',
  5: '0xab8b6fFA66E1f2CD8938f1df14104600367de257',
}

export const MERKLE_DISTRIBUTOR_ADDRESS = {
  1: [
    '0x9D1f1847582261bE41F5a54e8b60CAD21400C74f',
    '0xb9fce340e39e6fdfc641564922c1ef2716f70f04',
  ],
  5: [
    '0x2abF2d32aCF29551eCa2097BE2E49e3249c6E08e',
    '0xEaf539042bcFF43d8340eb5673A9ce726fFb498A',
  ],
}

export const DefaultProviderName = 'DEFAULT'

export const INFURA_ID = '18533a1dfcd146b8994f38b8e6af372c'

export const POAP_EVENT_IDS: string[] = LESSONS.filter(
  (lesson) => lesson.poapEventId
).map((lesson) => lesson.poapEventId?.toString())

export const OLD_POAP_EVENT_IDS: string[] = ['6454', '6455', '16394', '21670']

export const POAP_QUESTS = {}
LESSONS.filter((lesson) => lesson.poapEventId && lesson.quest).map((lesson) => {
  POAP_QUESTS[lesson.poapEventId.toString()] = lesson.quest
})

export const QUESTS: string[] = LESSONS.filter((lesson) => lesson.quest).map(
  (lesson) => lesson.quest
)

export const POAP_EMAIL_CONTACT = 'poap@banklessacademy.com'

export const GENERIC_ERROR_MESSAGE = `Something went wrong ... please contact ${POAP_EMAIL_CONTACT}`
