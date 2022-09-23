import { LESSONS } from 'constants/index'

export const KUDOS_IDS: number[] = LESSONS.filter(
  (lesson) => lesson.kudosId
).map((lesson) => lesson.kudosId)

export const MINTKUDOS_API = process.env.NEXT_PUBLIC_MINTKUDOS_API

export const IS_MINTKUDOS_SANDBOX =
  MINTKUDOS_API === 'https://sandbox-api.mintkudos.xyz'

export const MINTKUDOS_URL = IS_MINTKUDOS_SANDBOX
  ? 'https://sandbox.mintkudos.xyz/'
  : 'https://mintkudos.xyz/'

export const MINTKUDOS_EXPLORER = IS_MINTKUDOS_SANDBOX
  ? 'https://mumbai.polygonscan.com/'
  : 'https://polygonscan.com/'

export const MINTKUDOS_OPENSEA_URL = IS_MINTKUDOS_SANDBOX
  ? 'https://testnets.opensea.io/assets/mumbai/0xb876baf8f69cd35fb96a17a599b070fbdd18a6a1/'
  : 'https://opensea.io/assets/matic/0x60576a64851c5b42e8c57e3e4a5cf3cf4eeb2ed6/'

export const MINTKUDOS_RARIBLE_URL = IS_MINTKUDOS_SANDBOX
  ? 'https://testnet.rarible.com/token/polygon/0xb876baf8f69cd35fb96a17a599b070fbdd18a6a1:'
  : 'https://rarible.com/token/polygon/0x60576a64851c5b42e8c57e3e4a5cf3cf4eeb2ed6:'

export const MINTKUDOS_CHAIN_ID = IS_MINTKUDOS_SANDBOX ? 80001 : 137

export const MINTKUDOS_DOMAIN_INFO = {
  name: 'Kudos',
  // Mumbai | Polygon
  chainId: MINTKUDOS_CHAIN_ID,
  verifyingContract: IS_MINTKUDOS_SANDBOX
    ? '0xB876baF8F69cD35fb96A17a599b070FBdD18A6a1'
    : '0x60576A64851C5B42e8c57E3E4A5cF3CF4eEb2ED6',
}

export const MINTKUDOS_COMMUNITY_ID =
  process.env.NEXT_PUBLIC_MINTKUDOS_COMMUNITY_ID

// credentials.banklessacademy.eth
export const COMMUNITY_ADMIN = '0xe1887ff140bfa9d3b45d0b2077b7471124acd242'

export const ALLOWED_SIGNERS = [
  // didierkrux.eth
  '0xbd19a3f0a9cace18513a1e2863d648d13975cb30'.toLowerCase(),
  COMMUNITY_ADMIN.toLowerCase(),
]

export const MINTKUDOS_KEY = process.env.MINTKUDOS_KEY

const btoa = function (str) {
  return Buffer.from(str).toString('base64')
}

export const MINTKUDOS_ENCODED_STRING = btoa(
  MINTKUDOS_COMMUNITY_ID + ':' + MINTKUDOS_KEY
)
