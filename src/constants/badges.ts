import { BADGE_ADDRESS, LESSONS } from 'constants/index'
import { WHITELABEL } from 'constants/whitelabel'

const badgeIds = LESSONS.filter((lesson) => lesson.badgeId).map(
  (lesson) => lesson.badgeId
)

export const BADGE_IDS: number[] = badgeIds.filter(
  (item, index) => badgeIds.indexOf(item) === index
)

export const MINTKUDOS_API = process.env.NEXT_PUBLIC_MINTKUDOS_API

export const IS_MINTKUDOS_SANDBOX =
  MINTKUDOS_API === 'https://sandbox-api.mintkudos.xyz'

export const MINTKUDOS_URL = IS_MINTKUDOS_SANDBOX
  ? 'https://sandbox.mintkudos.xyz/'
  : 'https://mintkudos.xyz/'

export const MINTKUDOS_EXPLORER = IS_MINTKUDOS_SANDBOX
  ? 'https://mumbai.polygonscan.com/'
  : 'https://polygonscan.com/'

export const BADGE_OPENSEA_URL = IS_MINTKUDOS_SANDBOX
  ? `https://testnets.opensea.io/assets/mumbai/${BADGE_ADDRESS}/`
  // TODO: roll back to mainnet when shipping to prod
  : `https://testnets.opensea.io/assets/mumbai/${BADGE_ADDRESS}/`

export const MINTKUDOS_CHAIN_ID = IS_MINTKUDOS_SANDBOX ? 80001 : 137

export const BADGE_DOMAIN_INFO: {
  name: string
  chainId: number
  verifyingContract: `0x${string}`
} = {
  name: 'Kudos',
  // Mumbai | Polygon
  chainId: MINTKUDOS_CHAIN_ID,
  verifyingContract: IS_MINTKUDOS_SANDBOX
    ? '0xB876baF8F69cD35fb96A17a599b070FBdD18A6a1'
    : '0x60576A64851C5B42e8c57E3E4A5cF3CF4eEb2ED6',
}

export const MINTKUDOS_COMMUNITY_ID =
  process.env.NEXT_PUBLIC_MINTKUDOS_COMMUNITY_ID

export const MINTKUDOS_COMMUNITY_ADMIN =
  WHITELABEL.mintkudos_community_admin ||
  // credentials.banklessacademy.eth
  '0xe1887ff140bfa9d3b45d0b2077b7471124acd242'

export const BADGES_ALLOWED_SIGNERS = [
  // didierkrux.eth
  '0xbd19a3f0a9cace18513a1e2863d648d13975cb30'.toLowerCase(),
  '0xda1d8a345Fc6934Da60E81b392F485cbfd350eaE'.toLowerCase(),
  MINTKUDOS_COMMUNITY_ADMIN.toLowerCase(),
]

export const MINTKUDOS_KEY = process.env.MINTKUDOS_KEY

const btoa = function (str) {
  return Buffer.from(str).toString('base64')
}

export const MINTKUDOS_ENCODED_STRING = btoa(
  MINTKUDOS_COMMUNITY_ID + ':' + MINTKUDOS_KEY
)
