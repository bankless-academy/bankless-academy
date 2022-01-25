/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { db, TABLES, getUserId } from 'utils/db'
import { POAP_EVENT_IDS, POAP_QUESTS } from 'constants/index'
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

  console.log('address', address)
  console.log('poapEventId', poapEventId)
  console.log('signature', signature)
  console.log('message', message)
  console.log('diff', -message + Date.now())

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
    if (userId) {
      // [step 2] check if the POAP was already claimed
      const [codeAlreadyClaimed] = await db(TABLES.poaps)
        .select('code')
        .where('event_id', poapEventId)
        .where('user_id', userId)
      console.log('codeAlreadyClaimed', codeAlreadyClaimed)
      if (codeAlreadyClaimed?.code) {
        res.json({ code: codeAlreadyClaimed.code })
      } else {
        // [step 3] verify that quest has been completed
        if (!(poapEventId in POAP_QUESTS)) {
          res.json({ error: 'poapEventId not found' })
        }
        const quest = POAP_QUESTS[poapEventId]
        const [questCompleted] = await db(TABLES.quests)
          .select('id')
          .where('quest', quest)
          .where('user_id', userId)
        console.log('quest', quest)
        if (!questCompleted?.id) {
          res.json({
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
          res.json({ code: newCode?.code })
        } else {
          res.json({
            error:
              'Sorry, no more POAP codes available ... please contact poap@banklessacademy.com',
          })
        }
      }
    } else {
      res.json({
        error:
          'Something went wrong ... please contact poap@banklessacademy.com',
      })
    }
  } catch (error) {
    console.error(error)
    res.json({
      error: 'Something went wrong ... please contact poap@banklessacademy.com',
    })
  }
}
