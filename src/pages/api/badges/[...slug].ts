/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ALCHEMY_KEY_BACKEND } from 'constants/index'
import { BADGE_ADDRESS, BADGE_IDS, BADGE_API } from 'constants/badges'
import badges from 'data/badges.json'


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

async function getBadgeTokensIds(address: string): Promise<number[]> {
  try {
    const badges = await axios.get(
      `${BADGE_API}${ALCHEMY_KEY_BACKEND}/getNFTsForOwner?owner=${address}&contractAddresses[]=${BADGE_ADDRESS}&withMetadata=false&pageSize=100`
    )
    console.log(badges.data)
    const badgeTokenIds = badges.data.ownedNfts
      .map((token) =>
        BADGE_IDS.includes(parseInt(token.tokenId))
          ? parseInt(token.tokenId)
          : null
      )
      .filter((tokenId) => tokenId)
    console.log(badgeTokenIds)
    return badgeTokenIds
  } catch (error) {
    console.error(error)
    return []
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  let {
    slug: [address],
  } = req.query
  address = address.toLowerCase()
  // console.log('address', address)

  if (!address) return res.status(400).json({ error: 'Wrong params' })

  const oldBadgeTokenIds = address in badges ? badges[address] : []
  const badgeTokenIds = [
    ...(await getBadgeTokensIds(address)),
    ...oldBadgeTokenIds
  ]

  const kudosTokenIds = address in badges ? badges[address].map(token => BADGE_TO_KUDOS_IDS[token.toString()]).filter(token => token) : []

  return res.status(200).json({ badgeTokenIds: [...new Set(badgeTokenIds)], kudosTokenIds })
}
