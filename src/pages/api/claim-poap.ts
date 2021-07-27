/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // TODO: first check onchain if the quest has actually been completed
  await axios
    .get(
      'https://potion-api.vercel.app/table?id=588737bf3969480eaade26ec1a7d9dcd'
    )
    .then(async function (response) {
      const poapLinks: { fields: { claim: string; address?: string } }[] =
        response.data
      const qr_hash = poapLinks.filter((p) => !p.fields.address)[0].fields.claim
      const { address } = req.query
      console.log(address)
      console.log(qr_hash)
      await axios
        .get(`https://api.poap.xyz/actions/claim-qr?qr_hash=${qr_hash}`)
        .then(async function (response) {
          const secret = response.data.secret
          console.log(secret)
          await axios
            .post('https://api.poap.xyz/actions/claim-qr', {
              qr_hash,
              address,
              secret,
            })
            .then(function (response) {
              res.json(response.data)
              // TODO: update https://www.notion.so/588737bf3969480eaade26ec1a7d9dcd
            })
        })
    })
    .catch(function (error) {
      res.json({ error })
    })
}
