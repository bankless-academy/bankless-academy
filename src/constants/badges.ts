import { LESSONS } from 'constants/index'
// import { WHITELABEL } from 'constants/whitelabel'

export const BADGE_ADDRESS = '0xa0656F29Efd33b5d6729C467096f07C1643B275A'

const badgeIds = LESSONS.filter((lesson) => lesson.badgeId).map(
  (lesson) => lesson.badgeId
)

export const BADGE_IDS: number[] = badgeIds.filter(
  (item, index) => badgeIds.indexOf(item) === index
)

export const BADGE_ENV: 'dev' | 'prod' = process.env.NEXT_PUBLIC_BADGE_ENV === 'prod' ? 'prod' : 'dev' || 'dev'

export const IS_BADGE_PROD = BADGE_ENV === 'prod'

export const BADGE_EXPLORER = BADGE_ENV
  ? 'https://mumbai.polygonscan.com/'
  : 'https://polygonscan.com/'

export const BADGE_OPENSEA_URL = IS_BADGE_PROD
  ? `https://opensea.io/assets/matic/${BADGE_ADDRESS}/`
  : `https://testnets.opensea.io/assets/mumbai/${BADGE_ADDRESS}/`

export const BADGE_CHAIN_ID = IS_BADGE_PROD ? 137 : 80001

export const BADGE_MINTER =
  // WHITELABEL.mintkudos_community_admin ||
  // banklessacademy.polygon
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
