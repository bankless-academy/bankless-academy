import { MetaData } from 'components/Head'
import { WHITELABEL } from 'constants/whitelabel'
import DEFAULT_LESSONS from 'constants/lessons'
import WHITELABEL_LESSONS from 'constants/whitelabel_lessons'
import DEFAULT_KEYWORDS from '../../translation/keywords/en/keywords.json'
import WHITELABEL_KEYWORDS from '../../whitelabel-keywords.json'
import { LanguageDescriptionType } from 'entities/lesson'

export const IS_WHITELABEL = !!WHITELABEL?.project_name

export const LESSONS = IS_WHITELABEL ? WHITELABEL_LESSONS : DEFAULT_LESSONS

export const PROJECT_NAME = WHITELABEL?.project_name || 'Bankless Academy'

export const PROJECT_DESCRIPTION = 'Level up your knowledge of Web3 and DeFi'

export const DOMAIN_PROD = WHITELABEL?.domain_prod || 'app.banklessacademy.com'

export const IS_PROD = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'

export const DOMAIN_URL =
  process.env.NODE_ENV === 'development' ? `http://localhost:3000` :
    process.env.NEXT_PUBLIC_VERCEL_URL && process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production'
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : `https://${DOMAIN_PROD}`

export const DOMAIN_URL_ = DOMAIN_URL?.replace(
  'http://localhost:3000',
  'https://ba.krux.dev'
)

export const imageMeta = WHITELABEL?.default_metadata_image || '/images/bankless_academy_v3.jpg'

export const DEFAULT_METADATA: MetaData = {
  title: PROJECT_NAME,
  description:
    WHITELABEL?.default_metadata_description || PROJECT_DESCRIPTION,
  image: imageMeta,
}

export const FAVICON = WHITELABEL?.favicon || '/favicon.png'

export const APPLE_TOUCH_ICON =
  WHITELABEL?.apple_touch_icon || WHITELABEL?.favicon || '/app-icon.png'
export const APPLE_TOUCH_STARTUP_IMAGE =
  WHITELABEL?.homepage_background || '/apple-touch-startup-image.jpg'

export const LOGO = WHITELABEL?.logo || '/images/BanklessAcademy.svg'
export const LOGO_SMALL =
  WHITELABEL?.logo_small || '/images/BanklessAcademy_Logo.svg'

export const HOMEPAGE_BACKGROUND =
  WHITELABEL?.homepage_background || '/images/homepage_background_v4.jpg'

export const UMAMI_PROD =
  WHITELABEL?.umami_prod || '62d1cf48-425d-4658-9b86-3eea78ac9714'

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

export const INFURA_KEY =
  process.env.INFURA_KEY || 'cb578d660f614bbcb41b3c03553ff6f2'

export const ALCHEMY_KEY = process.env.NEXT_PUBLIC_ALCHEMY_KEY

export const ALCHEMY_KEY_BACKEND = process.env.ALCHEMY_KEY

export const QUESTS: string[] = LESSONS.filter((lesson) => lesson.quest).map(
  (lesson) => lesson.quest
)

export const NOTION_IDS: string[] = LESSONS.filter(
  (lesson) => !lesson.isArticle
).map((lesson) => lesson.notionId)

export const EMAIL_CONTACT = 'support@banklessacademy.com'

export const GENERIC_ERROR_MESSAGE = `Something went wrong... please contact ${EMAIL_CONTACT}`

export const TWITTER_ACCOUNT = WHITELABEL?.twitter_account || `BanklessAcademy`

export const NOTION_PAGES = WHITELABEL?.notion_pages || {
  faq: '8fe3275ffbe74e598cb4574d0207a185',
  disclaimer: '360b86a86d50421ba3bc7f55607f064a',
  'privacy-policy': '0c0a262eb63243db97ed235c4512518f',
}

export const MIRROR_WHITELISTED_ACCOUNTS = [
  'banklessacademy.eth',
  'didierkrux.eth',
  'tetranome.eth',
  'ispeaknerd.eth',
  'ornellaweb3.eth',
  'hirokennelly.eth',
]

export const MIRROR_ARTICLE_ADDRESSES = LESSONS.filter(
  (lesson) => lesson.mirrorNFTAddress
).map((lesson) => lesson.mirrorNFTAddress)

export const COLLECTIBLE_DETAILS = {}
LESSONS.filter(
  (lesson) => lesson.collectibleId
).map((lesson) => COLLECTIBLE_DETAILS[lesson.collectibleId] = {
  englishName: lesson.englishName,
  codeName: lesson.collectibleId.startsWith('H') ? lesson.collectibleId.replace('H', 'HANDBOOK') : lesson.collectibleId.replace('D', 'DATADISK')
})

export const COLLECTIBLE_ADDRESSES = LESSONS.filter(
  (lesson) => lesson.lessonCollectibleTokenAddress
).map((lesson) => lesson.lessonCollectibleTokenAddress)


export const MAX_COLLECTIBLES = Object.keys(COLLECTIBLE_DETAILS).reduce((previousValue, currentValue) => previousValue + (currentValue.startsWith('D') ? 3 * 2 : 1), 0)

export const ACTIVATE_MIXPANEL = !!process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_ID

export const KEYWORDS =
  IS_WHITELABEL && Object.keys(WHITELABEL_KEYWORDS).length
    ? WHITELABEL_KEYWORDS
    : DEFAULT_KEYWORDS

export const SIWE_ENABLED =
  process.env.NEXT_PUBLIC_SIWE_ENABLED === 'true' || false

export const TOKEN_GATING_ENABLED =
  process.env.NEXT_PUBLIC_TOKEN_GATING_ENABLED === 'true' || false

export const MD_ENABLED = process.env.NEXT_PUBLIC_MD_ENABLED === 'true' || false

export const DISCLAIMER_ENABLED =
  process.env.NEXT_PUBLIC_DISCLAIMER_ENABLED === 'true' || false

export const WALLET_SIGNATURE_MESSAGE = 'Signing a message with my wallet to prove I own it so I can claim the lesson badge.'

export const POTION_API = 'https://potion.banklessacademy.com'

export const IS_WALLET_DISABLED = false

export const DEFAULT_AVATAR = 'https://app.banklessacademy.com/images/explorer_avatar.png'

export const DEFAULT_ENS = 'web3explorer.eth'

export const NB_DATADISK_MAX = 2

export const LanguageDescription: LanguageDescriptionType = Object.fromEntries(
  Object.entries({
    en: 'English',
    br: 'Português (BR)',
    cn: '简体中文',
    de: 'Deutsch',
    es: 'Español',
    fr: 'Français',
    it: 'Italiano',
    jp: '英語',
    tr: 'Türkçe',
    ua: 'Українська',
  }).sort((a, b) => a[1].localeCompare(b[1]))
)
