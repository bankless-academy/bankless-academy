/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { db, TABLES, getUserId } from 'utils/db'
import {
  POAP_EVENT_IDS,
  POAP_QUESTS,
  POAP_EMAIL_CONTACT,
  GENERIC_ERROR_MESSAGE,
} from 'constants/index'
import { verifySignature } from 'utils'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // [step 1]: check params + signature
  const { address, poapEventId, signature, message } = req.query
  if (
    !address ||
    !poapEventId ||
    !signature ||
    !message ||
    typeof signature === 'object' ||
    typeof message === 'object' ||
    typeof address === 'object' ||
    typeof poapEventId === 'object' ||
    !POAP_EVENT_IDS.includes(poapEventId)
  )
    return res.json({ error: 'Wrong params' })

  console.log('address: ', address)
  console.log('poapEventId: ', poapEventId)
  console.log('signature: ', signature)
  console.log('message: ', message)
  console.log('diff: ', -message + Date.now())

  console.log('req.headers: ', req.headers)

  if (!verifySignature(address, signature, message))
    return res.json({ error: 'Wrong signature' })
  // require to sign in less than 1 minute
  const SIGNATURE_TIMEOUT = 60 * 1000
  if (-message + Date.now() > SIGNATURE_TIMEOUT)
    return res.json({
      error:
        'You took more than 1 minute to sign the transaction, try again faster!',
    })

  try {
    const userId = await getUserId(address)
    console.log(userId)
    if (userId) {
      // [step 2] check if the POAP was already claimed
      const [codeAlreadyClaimed] = await db(TABLES.poaps)
        .select('code')
        .where('event_id', poapEventId)
        .where('user_id', userId)
      console.log('codeAlreadyClaimed', codeAlreadyClaimed)
      if (codeAlreadyClaimed?.code) {
        return res.json({ code: codeAlreadyClaimed.code })
      } else {
        // [step 3] verify that quest has been completed
        if (!(poapEventId in POAP_QUESTS)) {
          return res.json({ error: 'poapEventId not found' })
        }
        const quest = POAP_QUESTS[poapEventId]
        const [questCompleted] = await db(TABLES.quests)
          .select('id')
          .where('quest', quest)
          .where('user_id', userId)
        console.log('quest', quest)
        if (!questCompleted?.id) {
          return res.json({
            error:
              "You haven't completed the quest yet. Go back to the previous slide.",
          })
        }
        // [step 4] get the code + update is_claimed to true
        const [newCode] = await db(TABLES.poaps)
          .where('event_id', poapEventId)
          .where(
            'id',
            db(TABLES.poaps)
              .select('id')
              .where('event_id', poapEventId)
              .where('is_claimed', false)
              .orderBy('id', 'asc')
              .limit(1)
          )
          .update({ is_claimed: true, user_id: userId }, ['code'])
        console.log('newCode', newCode)
        if (newCode?.code) {
          return res.json({ code: newCode?.code })
        } else {
          return res.json({
            error: `Sorry, no more POAP codes available ... please contact ${POAP_EMAIL_CONTACT}`,
          })
        }
      }
    } else {
      return res.json({
        error: `error 2: ${GENERIC_ERROR_MESSAGE}`,
      })
    }
  } catch (error) {
    console.error(error)
    res.json({
      error: `error ${error?.code}: ${GENERIC_ERROR_MESSAGE}`,
    })
  }
}
