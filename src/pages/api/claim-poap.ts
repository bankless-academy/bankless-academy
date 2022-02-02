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
  // check params + signature
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

  const ipAddress = req.headers['x-real-ip'] || 'local'
  const countryCode = req.headers['x-vercel-ip-country'] || 'localhost'
  console.log('ipAddress: ', ipAddress)
  console.log('countryCode: ', countryCode)

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
    if (userId && Number.isInteger(userId)) {
      // check if the POAP was already claimed
      const [codeAlreadyClaimed] = await db(TABLES.poaps)
        .select('code')
        .where('event_id', poapEventId)
        .where('user_id', userId)
      console.log('codeAlreadyClaimed', codeAlreadyClaimed)
      if (codeAlreadyClaimed?.code) {
        return res.json({ code: codeAlreadyClaimed.code })
      } else {
        if (!(poapEventId in POAP_QUESTS)) {
          return res.json({ error: 'poapEventId not found' })
        }
        // verify that quest has been completed
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
        // max 2 POAP claiming / lesson / IP to prevent manual farming
        const [ipClaimed] = await db(TABLES.poaps)
          .count('ip_address')
          .where('ip_address', ipAddress)
          .where('event_id', poapEventId)
        console.log('ipClaimed', ipClaimed?.count)
        if (ipClaimed?.count >= 2) {
          return res.json({
            error: `POAP limit exceeded ... please contact ${POAP_EMAIL_CONTACT}`,
          })
        }
        // get the code + update poap details
        const updatePoap: {
          is_claimed: boolean
          user_id: number
          ip_address?: string
          country_code?: string
        } = { is_claimed: true, user_id: userId }
        if (ipAddress && typeof ipAddress === 'string')
          updatePoap.ip_address = ipAddress
        if (countryCode && typeof countryCode === 'string')
          updatePoap.country_code = countryCode
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
          .update(updatePoap, ['code'])
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
