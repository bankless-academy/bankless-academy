/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { db, TABLES } from 'utils/db'
import { POAP_EVENT_IDS } from 'constants/index'
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
    // [step 2] check if the POAP was already claimed + quest action has actually been completed
    const [codeAlreadyClaimed] = await db(TABLES.poaps)
      .select('code', 'is_quest_completed')
      .where('event_id', poapEventId)
      .where('address', address)
    console.log('codeAlreadyClaimed', codeAlreadyClaimed)
    if (!codeAlreadyClaimed?.is_quest_completed) {
      res.json({ error: "You haven't completed the quest yet" })
    } else if (codeAlreadyClaimed?.code) {
      res.json({ code: codeAlreadyClaimed.code })
    } else {
      // [step 3] get the code + update is_code_claimed to true
      const [newCode] = await db(TABLES.poaps)
        .where('event_id', poapEventId)
        .where(
          'id',
          db(TABLES.poaps)
            .select('id')
            .where('event_id', poapEventId)
            .where('is_code_claimed', false)
            .orderBy('id', 'asc')
            .limit(1)
        )
        .update({ is_code_claimed: true, address: address }, ['code'])
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
  } catch (error) {
    console.error(error)
    res.json({
      error: 'Something went wrong ... please contact poap@banklessacademy.com',
    })
  }
}
