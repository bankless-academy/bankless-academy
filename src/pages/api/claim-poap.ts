/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

// TODO: move NOTION ID to .env
const NOTION_POAP_ID = {
  4652: '588737bf3969480eaade26ec1a7d9dcd',
  4783: 'ddba080ee81442ab998b5187c42b7d81',
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // TODO: first check onchain if the quest has actually been completed
  const { address, poapEventId } = req.query
  if (
    !address ||
    !poapEventId ||
    typeof address === 'object' ||
    typeof poapEventId === 'object' ||
    !(poapEventId in NOTION_POAP_ID)
  )
    return res.json(false)
  console.log(address)
  console.log(poapEventId)

  await axios
    .get(
      `https://potion-api.vercel.app/table?id=${NOTION_POAP_ID[poapEventId]}`
    )
    .then(async function (response) {
      const poapLinks: { fields: { claim: string; address?: string } }[] =
        response.data
      // TODO: replace with tokensQuantityByEventId https://github.com/poap-xyz/poap-webapp/blob/2def482ffec93e6cbc4e3c5e5a18000805cc6c2b/src/api.ts#L1235
      await axios
        .post('https://api.thegraph.com/subgraphs/name/poap-xyz/poap-xdai', {
          query: `{event(id: ${poapEventId}){ tokenCount }}`,
        })
        .then(async function (response) {
          console.log(response.data.data.event?.tokenCount | 0)
          console.log(poapLinks)
          const qr_hash =
            poapLinks[response.data.data.event?.tokenCount | 0].fields.claim
          console.log(qr_hash)
          await axios
            .get(`https://api.poap.xyz/actions/claim-qr?qr_hash=${qr_hash}`)
            .then(async function (response) {
              const secret = response.data.secret
              console.log(secret)
              const data = {
                qr_hash,
                address: address.toLowerCase(),
                secret,
              }
              console.log(data)
              await axios
                .post('https://api.poap.xyz/actions/claim-qr', data)
                .then(async function (response) {
                  res.json(response.data)
                })
            })
        })
    })
    .catch(function (error) {
      res.json({ error })
    })
}
