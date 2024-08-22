/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { db, TABLE, TABLES, getUserId } from 'utils/db'
import {
  GENERIC_ERROR_MESSAGE, WALLET_SIGNATURE_MESSAGE_PROFILE,
} from 'constants/index'
import { verifySignature } from 'utils/index'
import { trackBE } from 'utils/mixpanel'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // check params + signature
  const { address, embed, signature, community } = req.body
  // console.log(req)
  if (!address)
    return res.status(400).json({ error: 'Wrong params' })


  console.log('address: ', address)
  console.log('signature: ', signature)

  // TODO: replace with https://docs.walletconnect.com/web3modal/nextjs/siwe

  if (!signature)
    return res.status(400).json({ error: 'Missing wallet signature' })

  if (!verifySignature(address, signature, WALLET_SIGNATURE_MESSAGE_PROFILE))
    return res.status(403).json({ error: 'Wrong signature' })

  try {
    const userId = await getUserId(address, embed)
    console.log(userId)
    if (!(userId && Number.isInteger(userId))) {
      trackBE(address, 'issue_user_not_found', { context: 'update-community' })
      return res.status(403).json({ error: 'userId not found' })
    }

    const updateCommunity = await db(TABLES.users)
      .where(TABLE.users.id, userId)
      .update({ community })
    console.log('community updated', updateCommunity)
    if (updateCommunity)
      return res.status(200).json({
        status: 'OK',
      })
    else
      return res.status(403).json({
        error: "Couldn't update community.",
      })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: `error ${error?.code}: ${GENERIC_ERROR_MESSAGE}`,
    })
  }
}
