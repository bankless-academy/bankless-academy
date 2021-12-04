/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

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
    return res.json({ error: "You haven't completed the quest yet" })
  console.log('address', address)
  console.log('poapEventId', poapEventId)

  try {
    // [step 2] check if the POAP was already claimed
    const [{ codeAlreadyClaimed }] = await db('poaps3')
      .select('code')
      .where('event_id', poapEventId)
      .where('address', address)
    console.log(codeAlreadyClaimed)
    if (codeAlreadyClaimed) {
      res.json({ code: codeAlreadyClaimed })
    } else {
      // [step 3] get the code + update is_code_used to true
      const [{ code }] = await db('poaps3')
        .where(
          'id',
          db('poaps3')
            .select('id')
            .where('event_id', poapEventId)
            .where('is_code_used', false)
            .orderBy('id', 'asc')
            .limit(1)
        )
        .update({ is_code_used: true, address: address }, ['code'])
      console.log('code', code)
      if (code) {
        res.json({ code: code })
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
    res.json({ error })
  }
}
