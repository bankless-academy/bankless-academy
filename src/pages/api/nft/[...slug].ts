/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import { template } from 'pages/api/nft/templates/smart-wallet-template';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const {
    slug: [slug, tokenId],
  } = req.query

  // TODO: save assets on Arweave

  if (['update-timestamp'].includes(slug)) {
    if (!slug) return res.status(400).json({ error: 'Wrong params' })
    const { address, timestamp } = req.body
    console.log('address', address)
    console.log('timestamp', timestamp)
    // TODO: update DB
    return res.status(200).json('OK')
  } else if (['smart-wallet'].includes(slug)) {
    if (!slug || !tokenId) return res.status(400).json({ error: 'Wrong params' })

    // https://beta.banklessacademy.com/api/nft/smart-wallet/{id}
    // https://app.banklessacademy.com/api/nft/smart-wallet/0000000000000000000000000000000000000000000000000000000000000001

    let htmlTemplate = template

    const counter = '00:42:013'

    // Replace the placeholder
    htmlTemplate = htmlTemplate.replace('{{counter}}', counter)

    res.setHeader('Content-Type', 'text/html')
    res.status(200).send(htmlTemplate)
  } 

  return res.status(400).send('Unknown NFT')
}
