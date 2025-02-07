import { LESSONS } from 'constants/index'
import { base } from 'viem/chains'
// import { WHITELABEL } from 'constants/whitelabel'

const badgeIds = LESSONS.filter((lesson) => lesson.badgeId).map(
  (lesson) => lesson.badgeId
)

export const badgePublishedIds = LESSONS.filter((lesson) => lesson.badgeId && lesson.publicationStatus === 'publish').map(
  (lesson) => lesson.badgeId
)

export const MAX_BADGES = badgePublishedIds?.length

export const BADGE_IDS: number[] = badgeIds.filter(
  (item, index) => badgeIds.indexOf(item) === index
)

export const BADGE_ENV: 'dev' | 'prod' = process.env.NEXT_PUBLIC_BADGE_ENV === 'prod' ? 'prod' : 'dev' || 'dev'

// export const IS_BADGE_PROD = BADGE_ENV === 'prod'
export const IS_BADGE_PROD = true

export const BADGE_ADDRESS = IS_BADGE_PROD ? '0x3436d8af0b617DeEF5AADBaFC56f293e102DD886' : '0xa0656F29Efd33b5d6729C467096f07C1643B275A'

export const BADGE_EXPLORER = 'https://basescan.org/'

export const BASE_BADGE_CONTRACT_ADDRESS = '0xfc902e91affd9dd02df4c1e57dac7b096512f286'

export const BADGE_OPENSEA_URL = `https://opensea.io/assets/base/${BASE_BADGE_CONTRACT_ADDRESS}/`

export const BADGE_CHAIN_ID = base.id

export const BADGE_MINTER = IS_BADGE_PROD ?
  // banklessacademy.polygon
  '0x472A74C4F7e281e590Bed861daa66721A6ACADBC' :
  '0x03ab46a7E99279a4b7931626338244DD8236F0Ac'

export const BADGES_ALLOWED_SIGNERS = [
  // didierkrux.eth
  '0xbd19a3f0a9cace18513a1e2863d648d13975cb30'.toLowerCase(),
  '0xda1d8a345Fc6934Da60E81b392F485cbfd350eaE'.toLowerCase(),
  '0xB30dD1198Feed1e22EC969f61EEd04cB75937adf'.toLowerCase(),
  '0xb749A586080436e616f097f193Ba9CB6A25E7Ea6'.toLowerCase(),
  BADGE_MINTER.toLowerCase(),
]

export const BADGE_API = IS_BADGE_PROD
  ? `https://polygon-mainnet.g.alchemy.com/nft/v3/`
  : `https://polygon-mumbai.g.alchemy.com/nft/v3/`

export const BADGE_TO_KUDOS_IDS = {
  '1': '2561',
  '2': '2562',
  '3': '2563',
  '5': '2565',
  '6': '2608',
  '7': '14611',
  '8': '14886',
  '9': '15463'
}

// DEV: local indexer
const isLocalIndexer = false

export const INDEXER_URL = isLocalIndexer ? 'http://localhost:8080/v1/graphql' : 'https://indexer.banklessacademy.com/v1/graphql'
