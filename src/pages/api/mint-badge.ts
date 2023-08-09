/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
// TODO: mainnet
import { ThirdwebSDK } from '@thirdweb-dev/sdk'
import { PrivateKeyWallet } from '@thirdweb-dev/auth/evm'

import { db, TABLE, TABLES, getUserId } from 'utils/db'
import {
  LESSONS,
  GENERIC_ERROR_MESSAGE,
  BADGE_ADDRESS,
  ACTIVE_CHAIN,
  WALLET_SIGNATURE_MESSAGE,
} from 'constants/index'
import { BADGES_ALLOWED_SIGNERS } from 'constants/badges'
import { api, verifySignature } from 'utils'
import { trackBE } from 'utils/mixpanel'

const pkeyWallet = new PrivateKeyWallet(process.env.PRIVATE_KEY)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // check params + signature
  const { address, badgeId, embed, signature } = req.body
  // console.log(req)
  if (!address || !badgeId)
    return res.status(400).json({ error: 'Wrong params' })


  console.log('address: ', address)
  console.log('badgeId: ', badgeId)
  console.log('signature: ', signature)

  if (!signature)
    return res.status(400).json({ error: 'Missing wallet signature' })

  if (!verifySignature(address, signature, WALLET_SIGNATURE_MESSAGE))
    return res.status(403).json({ error: 'Wrong signature' })

  const message = { tokenId: badgeId }
  console.log('message: ', message)

  try {
    const userId = await getUserId(address, embed)
    console.log(userId)
    if (!(userId && Number.isInteger(userId)))
      return res.status(403).json({ error: 'userId not found' })

    const notionId = LESSONS.find(
      (lesson) => lesson.badgeId === badgeId
    )?.notionId
    if (!notionId) return res.status(403).json({ error: 'notionId not found' })

    const [credential] = await db(TABLES.credentials)
      .select('id')
      .where(TABLE.credentials.notion_id, notionId)
    if (!credential)
      return res.status(403).json({ error: 'credentialId not found' })

    const [questCompleted] = await db(TABLES.completions)
      .select(TABLE.completions.id, TABLE.completions.credential_claimed_at)
      .where(TABLE.completions.credential_id, credential.id)
      .where(TABLE.completions.user_id, userId)
    console.log('questCompleted', questCompleted)

    let questStatus = ''

    if (
      questCompleted?.credential_claimed_at &&
      !BADGES_ALLOWED_SIGNERS.includes(address.toLowerCase())
    ) {
      questStatus = 'badge already claimed'
      console.log(questStatus)
      return res.status(403).json({ status: questStatus })
    } else {
      // Sybil check with Academy Passport
      const result = await api(`${req.headers.origin}/api/passport`, {
        address: address,
      })
      if (result && result.status === 200) {
        if (result.data?.error) {
          return res.status(200).json({
            status: result.data?.error,
          })
        }
        if (!result.data.verified) {
          return res.status(200).json({
            status: `Passport requirement: ${result.data.requirement}`,
          })
        }
      } else {
        // TODO: handle errors
      }

      const userBadges = await axios.get(
        `${req.headers.origin}/api/badges/${address}`
      )
      // console.log('userBadges', userBadges?.data?.data)

      const badgeAlreadyClaimed: boolean =
        userBadges?.data?.badgeTokenIds.find(
          (badge: number) => badge === badgeId
        ) || false

      if (badgeAlreadyClaimed) {
        // TODO: fix credential_claimed_at (it's not createdAt ... mintedAt?)
        // const updated = await db(TABLES.completions)
        //   .where(TABLE.completions.id, questCompleted.id)
        //   .update({ credential_claimed_at: badgeAlreadyClaimed.createdAt })
        // console.log(`updated missing credential_claimed_at`, updated)
        questStatus = 'badge already claimed'
        console.log(questStatus)
        return res.status(403).json({ status: questStatus })
      } else {
        const [{ adminSignature }] = await db(TABLES.credentials)
          .select('signature as adminSignature')
          .where('notion_id', notionId)
        // console.log('adminSignature', adminSignature)
        if (!adminSignature)
          return res.status(403).json({ error: 'signature not found' })

        try {
          // generate signature
          const sdk = await ThirdwebSDK.fromWallet(pkeyWallet, ACTIVE_CHAIN)
          console.log(sdk.getSigner())
          const contract = await sdk.getContract(BADGE_ADDRESS)
          // Authorized to mint, generate signature
          const mintingSignature =
            await contract.erc1155.signature.generateFromTokenId({
              tokenId: badgeId,
              to: address.toLowerCase(),
              quantity: 1,
            })
          // TODO: save signature in DB + check if already generated
          return res.status(200).json({
            signature: mintingSignature,
            status: questStatus,
          })
        } catch (error) {
          console.error(error?.response?.data)
          trackBE(address, 'mint_kudos_issue', {
            error: error?.response?.data,
            badgeId,
            address,
          })
          return res.status(500).json({
            error: 'something went wrong while minting',
            status: '',
          })
        }
      }
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: `error ${error?.code}: ${GENERIC_ERROR_MESSAGE}`,
    })
  }
}
