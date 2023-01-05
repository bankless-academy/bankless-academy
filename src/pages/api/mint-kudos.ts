/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

import { db, TABLE, TABLES, getUserId } from 'utils/db'
import { LESSONS, GENERIC_ERROR_MESSAGE } from 'constants/index'
import {
  MINTKUDOS_API,
  MINTKUDOS_ENCODED_STRING,
  MINTKUDOS_COMMUNITY_ID,
  MINTKUDOS_COMMUNITY_ADMIN,
  MINTKUDOS_DOMAIN_INFO,
} from 'constants/kudos'
import { KudosType } from 'entities/kudos'
import { api, verifyTypedSignature } from 'utils'
import { trackBE } from 'utils/mixpanel'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // check params + signature
  const { address, kudosId, signature, embed } = req.body
  // console.log(req)
  if (
    !address ||
    !kudosId ||
    typeof signature === 'object' ||
    typeof address === 'object'
  )
    return res.status(400).json({ error: 'Wrong params' })

  console.log('address: ', address)
  console.log('kudosId: ', kudosId)
  // console.log('signature: ', signature)

  const message = { tokenId: kudosId }
  console.log('message: ', message)

  try {
    const receiverTypes = {
      CommunityAdminAirdropReceiverConsent: [
        { name: 'tokenId', type: 'uint256' },
      ],
    }

    if (
      !verifyTypedSignature(
        signature,
        message,
        address,
        receiverTypes,
        MINTKUDOS_DOMAIN_INFO
      )
    )
      return res.status(403).json({ error: 'Wrong signature' })

    const userId = await getUserId(address, embed)
    console.log(userId)
    if (!(userId && Number.isInteger(userId)))
      return res.status(403).json({ error: 'userId not found' })

    const notionId = LESSONS.find(
      (lesson) => lesson.kudosId === kudosId
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

    if (questCompleted?.credential_claimed_at) {
      questStatus = 'badge already claimed'
      console.log(questStatus)
      return res.status(200).json({ status: questStatus })
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

      const userKudos = await axios.get(
        `${MINTKUDOS_API}/v1/wallets/${address}/tokens?limit=100&communityId=${MINTKUDOS_COMMUNITY_ID}&claimStatus=claimed`
      )
      // console.log('userKudos', userKudos?.data?.data)

      const kudosAlreadyClaimed: KudosType = userKudos?.data?.data?.find(
        (kudos: KudosType) =>
          kudos.kudosTokenId === kudosId && kudos.claimStatus === 'claimed'
      )

      if (kudosAlreadyClaimed) {
        // TODO: fix credential_claimed_at (it's not createdAt ... mintedAt?)
        // const updated = await db(TABLES.completions)
        //   .where(TABLE.completions.id, questCompleted.id)
        //   .update({ credential_claimed_at: kudosAlreadyClaimed.createdAt })
        // console.log(`updated missing credential_claimed_at`, updated)
        questStatus = 'badge already claimed'
        console.log(questStatus)
        return res.status(200).json({ status: questStatus })
      } else {
        const [{ adminSignature }] = await db(TABLES.credentials)
          .select('signature as adminSignature')
          .where('notion_id', notionId)
        // console.log('adminSignature', adminSignature)
        if (!adminSignature)
          return res.status(403).json({ error: 'signature not found' })

        try {
          const bodyParameters = {
            receivingAddress: address,
            adminAddress: MINTKUDOS_COMMUNITY_ADMIN,
            adminSignature,
            receiverSignature: signature,
          }
          const config = {
            headers: {
              Authorization: `Basic ${MINTKUDOS_ENCODED_STRING}`,
            },
          }
          // mint Kudos
          console.log('communityAdminAirdrop:', bodyParameters)
          const result = await axios.post(
            `${MINTKUDOS_API}/v1/tokens/${kudosId}/communityAdminAirdrop`,
            bodyParameters,
            config
          )
          if (result.status === 202) {
            // don't update credential_claimed_at for testing kudos (14067)
            if (kudosId !== 14067) {
              await db(TABLES.completions)
                .where(TABLE.completions.id, questCompleted.id)
                .update({ credential_claimed_at: db.raw('now()') })
            }
            questStatus = 'badge claimed'
            console.log(questStatus)
            const lesson = LESSONS.find(
              (lesson) => lesson.kudosId === kudosId
            )?.name
            trackBE(address, 'mint_kudos', { lesson, kudosId, embed })
            console.log(result.headers.location)
            return res.status(200).json({
              location: `${MINTKUDOS_API}${result.headers?.location}`,
              status: questStatus,
            })
          } else {
            console.log(result)
            return res.status(500).json({
              error: 'something went wrong while minting',
              status: questStatus,
            })
          }
        } catch (error) {
          console.error(error?.response?.data)
        }
      }
    }
    return res.status(500).json({ status: questStatus })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: `error ${error?.code}: ${GENERIC_ERROR_MESSAGE}`,
    })
  }
}
