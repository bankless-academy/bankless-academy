/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

import { db, TABLE, TABLES, getUserId } from 'utils/db'
import { GENERIC_ERROR_MESSAGE } from 'constants/index'
import {
  LESSONS,
  MINTKUDOS_API,
  MINTKUDOS_ENCODED_STRING,
} from 'constants/index'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // check params + signature
  const { address, kudosId, signature, message } = req.body
  if (
    !address ||
    !kudosId ||
    !signature ||
    !message ||
    typeof address === 'object' ||
    typeof signature === 'object'
  )
    return res.json({ error: 'Wrong params' })

  console.log('address: ', address)
  console.log('kudosId: ', kudosId)
  // console.log('signature: ', signature)
  console.log('message: ', message)

  try {
    const userId = await getUserId(address)
    console.log(userId)
    if (userId && Number.isInteger(userId)) {
      const notionId = LESSONS.find(
        (lesson) => lesson.kudosId === kudosId
      )?.notionId
      if (!notionId) return res.json({ error: 'notionId not found' })

      const [questCompleted] = await db(TABLES.completions)
        .select(TABLE.completions.id, TABLE.completions.credential_claimed_at)
        .leftJoin(
          TABLES.credentials,
          TABLE.credentials.id,
          TABLE.completions.credential_id
        )
        .where(TABLE.credentials.notion_id, notionId)
        .where(TABLE.completions.user_id, userId)
      console.log('questCompleted', questCompleted)

      if (questCompleted?.credential_claimed_at) {
        console.log('kudos already claimed')
        return res.json({ status: 'kudos already claimed' })
      }
      {
        try {
          const bodyParameters = {
            claimingAddress: address,
            signature: signature,
          }
          const config = {
            headers: {
              Authorization: `Basic ${MINTKUDOS_ENCODED_STRING}`,
            },
          }
          // claim SBT
          const result = await axios.post(
            `${MINTKUDOS_API}/v1/tokens/${kudosId}/claim`,
            bodyParameters,
            config
          )
          // console.log(result)
          if (result.status === 202) {
            console.log(result.headers.location)
            // TODO: check header/Location to know when the token has been claimed
            return res.json({
              location: `${MINTKUDOS_API}${result.headers?.location}`,
            })
          } else {
            console.log(result)
          }
        } catch (error) {
          if (error?.response?.data?.name) {
            console.error(error?.response?.data)
            if (
              error?.response?.data?.name === 'ClaimingAddressAlreadyHasToken'
            ) {
              const userKudosClaimed = await axios.get(
                `${MINTKUDOS_API}/v1/wallets/${address}/tokens?limit=1000&status=claimed`
              )
              console.log('userKudosClaimed', userKudosClaimed?.data?.data)
              const kudosAlreadyMinted = userKudosClaimed?.data?.data.find(
                (kudos) => kudos.kudosTokenId === kudosId
              )
              console.log('kudosAlreadyMinted', kudosAlreadyMinted)
              if (kudosAlreadyMinted) {
                const updated = await db(TABLES.completions)
                  .where(TABLE.completions.id, questCompleted.id)
                  .update({
                    credential_claimed_at: kudosAlreadyMinted.createdAt,
                  })
                console.log('updated', updated)
                if (updated) {
                  return res.json({ status: 'updated credential_claimed_at' })
                }
              }
            }
            return res.json({ error: error?.response?.data?.name })
          } else {
            console.log('unknown MintKudos error')
            return res.json({ error: 'unknown MintKudos error' })
          }
        }
      }
    }
  } catch (error) {
    console.error(error)
    res.json({
      error: `error ${error?.code}: ${GENERIC_ERROR_MESSAGE}`,
    })
  }
}
