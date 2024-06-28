/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { template } from 'pages/api/nft/templates/smart-wallet-template';
import { TABLE, TABLES, db, getUserId } from 'utils/db';
import { getNFTInfo } from 'utils/index';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const {
    slug: [slug, tokenId],
  } = req.query

  // TODO: save assets on Arweave

  if (['update-timestamp'].includes(slug)) {
    const { address, timestamp } = req.body
    if (!slug || !address || !timestamp) return res.status(400).json({ error: 'Wrong params' })
    console.log('address', address)
    console.log('timestamp', timestamp)
    if (address && timestamp && timestamp - Date.now() < 60000) {
      const userId = await getUserId(address, 'onchain-summer-smart-wallet')
      const NFTInfo = await getNFTInfo(address, '')
      if (NFTInfo.tokenIds.length === 0) {
        await db(TABLES.users)
          .where(TABLE.users.id, userId)
          .update({ smart_nft_start_at: new Date(timestamp) })
      }
      return res.status(200).json('OK')
    }
    return res.status(200).json('KO')
  } else if (['get-info'].includes(slug)) {
    const { address } = req.body
    if (!slug || !address) return res.status(400).json({ error: 'Wrong params' })
    const NFTInfo = await getNFTInfo(address, '')
    return res.status(200).json(NFTInfo)
  } else if (['smart-wallet'].includes(slug)) {
    if (!slug || !tokenId) return res.status(400).json({ error: 'Wrong params' })

    // https://beta.banklessacademy.com/api/nft/smart-wallet/{id}
    // https://app.banklessacademy.com/api/nft/smart-wallet/0000000000000000000000000000000000000000000000000000000000000001

    const counter = (await getNFTInfo('', tokenId)).time

    let htmlTemplate = template

    // Replace the placeholder
    htmlTemplate = htmlTemplate.replace('{{counter}}', counter)

    res.setHeader('Content-Type', 'text/html')
    res.status(200).send(htmlTemplate)
  } 

  return res.status(400).send('Unknown NFT')
}
