/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import { mainnet } from 'viem/chains'
import { createPublicClient, http } from 'viem'

import { ALCHEMY_KEY_BACKEND } from 'constants/index'
import { TABLE, TABLES, db } from 'utils/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const {
    slug: [address],
  } = req.query
  const addressLowerCase = address.toLowerCase()
  // console.log('address', address)

  if (!address || address.length !== 42 || address.endsWith('.eth')) return res.status(400).json({ error: 'Wrong params' })
  const transport = http(`https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY_BACKEND}`)
  const client = createPublicClient({
    chain: mainnet,
    transport,
  })

  const [userExist] = await db(TABLES.users)
    .select(
      TABLE.users.id,
      TABLE.users.ens_name,
      TABLE.users.ens_avatar,
      TABLE.users.donations,
      TABLE.users.gitcoin_stamps
    )
    .whereILike('address', addressLowerCase)
  // console.log('user', userExist)
  if (!userExist) res.status(200).json({ error: 'Profile not found.' })

  const ensName = await client.getEnsName({ address: addressLowerCase as `0x${string}` })
  // console.log(ensName)

  const DEFAULT_AVATAR = 'https://app.banklessacademy.com/images/explorer_avatar.png'

  const avatar = ensName ? await client.getEnsAvatar({ name: ensName }) : DEFAULT_AVATAR

  if (
    (ensName && userExist.ens_name !== ensName) ||
    (avatar && userExist.ens_avatar !== avatar)
  ) {
    // update ens_name + ens_avatar in user DB
    console.log('update ENS details', { ensName, avatar })
    await db(TABLES.users)
      .where(TABLE.users.id, userExist.id)
      .update({ ens_name: ensName, ens_avatar: avatar?.length < 255 && avatar !== DEFAULT_AVATAR ? avatar : null })
  }

  const data: any = {
    address: addressLowerCase,
    ensName,
    avatar: avatar || DEFAULT_AVATAR,
  }

  return res.status(200).json(data)
}
