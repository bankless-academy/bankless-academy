/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

import db from 'utils/db'
import QUESTS from 'constants/quests'

const POAP_IDS = QUESTS.map((quest) => quest.poapEventId.toString())

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // [step 1] TODO: check if the quest action has actually been completed via wallet signature or onchain data (Moralis?)
  const { address, poapEventId } = req.query
  if (
    !address ||
    !poapEventId ||
    typeof address === 'object' ||
    typeof poapEventId === 'object' ||
    !POAP_IDS.includes(poapEventId)
  )
    return res.json(false)
  console.log('address', address)
  console.log('poapEventId', poapEventId)

  try {
    // [step 2] check if the POAP was already claimed
    const poapAlreadyClaimed = await db('poaps')
      .select('code')
      .where('event_id', poapEventId)
      .where('address', address)
    if (poapAlreadyClaimed.length) {
      res.json({ poapAlreadyClaimed })
    } else {
      // [step 3] get the code + update is_code_used to true
      const [{ code }] = await db('poaps')
        .where(
          'id',
          db('poaps')
            .select('id')
            .where('event_id', poapEventId)
            .where('is_code_used', false)
            .orderBy('id', 'asc')
            .limit(1)
        )
        .update({ is_code_used: true }, ['code'])
      console.log('code', code)
      if (code) {
        // [step 4] get the secret
        // handle timeout (currently 10 sec only)
        await axios
          .get(`https://api.poap.xyz/actions/claim-qr?qr_hash=${code}`)
          .then(async function (response) {
            const secret = response.data.secret
            console.log(secret)
            const data = {
              qr_hash: code,
              address: address.toLowerCase(),
              secret,
            }
            console.log('data', data)
            // [step 5] claim the POAP for the user
            await axios
              .post('https://api.poap.xyz/actions/claim-qr', data)
              .then(async function (response) {
                await db('poaps').where('code', code).update('address', address)
                console.log('data', data)
                res.json(response.data)
              })
          })
      } else {
        res.json('no more codes available')
      }
    }
  } catch (error) {
    res.json({ error })
  }
}
