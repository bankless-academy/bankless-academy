import { MetaData } from 'components/Head'
import LESSONS from './lessons'

export const PROJECT_NAME = 'Bankless Academy'

export const DOMAIN =
  process.env.VERCEL_URL && process.env.VERCEL_ENV !== 'production'
    ? `https://${process.env.VERCEL_URL}`
    : 'https://app.banklessacademy.com'

export const DEFAULT_METADATA: MetaData = {
  title: PROJECT_NAME,
  description: 'Level up your knowledge of Web3 and DeFi',
  image: `${DOMAIN}/images/bankless_academy_v2.jpg`,
}

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

export const POAP_EVENT_IDS: string[] = LESSONS.map((lesson) =>
  lesson.poapEventId.toString()
)

export const LESSON_SLUGS: string[] = LESSONS.map((lesson) => lesson.slug)
