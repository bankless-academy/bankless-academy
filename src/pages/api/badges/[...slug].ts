/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ALCHEMY_KEY_BACKEND, BADGE_ADDRESS } from 'constants/index'
import { BADGE_IDS } from 'constants/badges'
import badges from 'data/badges.json'

async function getBadgeTokensIds(address: string): Promise<number[]> {
  try {
    // TODO: switch to mainnet
    const badges = await axios.get(
      `https://polygon-mumbai.g.alchemy.com/nft/v3/${ALCHEMY_KEY_BACKEND}/getNFTsForOwner?owner=${address}&contractAddresses[]=${BADGE_ADDRESS}&withMetadata=false&pageSize=100`
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

  const kudosTokenIds = address in badges ? badges[address] : []
  const badgeTokenIds = [
    ...(await getBadgeTokensIds(address)),
    ...kudosTokenIds,
  ]

  return res.status(200).json({ badgeTokenIds: [...new Set(badgeTokenIds)] })
}
