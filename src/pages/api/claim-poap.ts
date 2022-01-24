/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import db from 'utils/db'
import LESSONS from 'constants/lessons'

const POAP_IDS = LESSONS.map((lesson) => lesson.poapEventId.toString())
const POAPS_TABLE = 'poaps'

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
    return res.json({ error: "You haven't completed the quest yet" })
  console.log('address', address)
  console.log('poapEventId', poapEventId)

  try {
    // [step 2] check if the POAP was already claimed
    const [codeAlreadyClaimed] = await db(POAPS_TABLE)
      .select('code')
      .where('event_id', poapEventId)
      .where('address', address)
    console.log('codeAlreadyClaimed', codeAlreadyClaimed)
    if (codeAlreadyClaimed?.code) {
      res.json({ code: codeAlreadyClaimed.code })
    } else {
      // [step 3] get the code + update is_code_claimed to true
      const [newCode] = await db(POAPS_TABLE)
        .where('event_id', poapEventId)
        .where(
          'id',
          db(POAPS_TABLE)
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
        // TODO: find alternative (auto-claim now requires a token authorization)
        // [step 4] get the secret
        // handle timeout (currently 10 sec only)
        // await axios
        //   .get(`https://frontend.poap.tech/actions/claim-qr=${code}`)
        //   .then(async function (response) {
        //     const secret = response.data.secret
        //     console.log(secret)
        //     const data = {
        //       qr_hash: code,
        //       address: address.toLowerCase(),
        //       secret,
        //     }
        //     console.log('data', data)
        //     // [step 5] claim the POAP for the user
        //     await axios
        //       .post('https://frontend.poap.tech/actions/claim-qr', data)
        //       .then(async function (response) {
        //         await db('poaps').where('code', code).update('address', address)
        //         console.log('data', data)
        //         res.json(response.data)
        //       })
        //   })
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
