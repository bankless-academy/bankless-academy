/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { mainnet } from 'viem/chains'
import { createPublicClient, http } from 'viem'

import kudosBadges from 'data/badges.json'
import { ALCHEMY_KEY_BACKEND } from 'constants/index'
import { BADGE_ADDRESS, BADGE_IDS, BADGE_API } from 'constants/badges'
import { TABLE, TABLES, db } from 'utils/db'

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
  const {
    slug: [address],
  } = req.query
  const addressLowerCase = address.toLowerCase()
  // console.log('address', address)

  if (!address || !address.startsWith('0x')) return res.status(400).json({ error: 'Wrong params' })

  const [userExist] = await db(TABLES.users)
    .select(
      'id',
      'ens_name',
      'ens_avatar',
      'donations'
    )
    .whereILike('address', address)
  console.log('user', userExist)
  if (!userExist) res.status(200).json({ error: 'user not found' })

  const oldBadgeTokenIds = addressLowerCase in kudosBadges ? kudosBadges[addressLowerCase] : []
  console.log(oldBadgeTokenIds)
  const badgeTokenIds = [
    ...(await getBadgeTokensIds(address)),
    ...oldBadgeTokenIds
  ]

  const kudosTokenIds = addressLowerCase in kudosBadges ? kudosBadges[addressLowerCase].map(token => BADGE_TO_KUDOS_IDS[token.toString()]).filter(token => token) : []
  console.log(kudosTokenIds)

  const transport = http(`https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY_BACKEND}`)
  const client = createPublicClient({
    chain: mainnet,
    transport,
  })

  const ensName = await client.getEnsName({ address: address as `0x${string}` })
  // console.log(ensName)

  const DEFAULT_AVATAR = 'https://app.banklessacademy.com/images/default_avatar.png'

  const avatar = ensName ? await client.getEnsAvatar({ name: ensName }) : DEFAULT_AVATAR

  if (
    (ensName && userExist.ens_name !== ensName) ||
    (avatar && userExist.ens_avatar !== avatar)
  ) {
    // update ens_name + ens_avatar in user DB
    console.log('update ENS details')
    await db(TABLES.users)
      .where(TABLE.users.id, userExist.id)
      .update({ ens_name: ensName, ens_avatar: avatar?.length < 255 && avatar !== DEFAULT_AVATAR ? avatar : null })
  }

  return res.status(200).json({ badgeTokenIds: [...new Set(badgeTokenIds)], kudosTokenIds, ensName, avatar: avatar || DEFAULT_AVATAR, donations: userExist.donations })
}
