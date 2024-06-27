/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { NFTAddress } from 'constants/nft';
import { template } from 'pages/api/nft/templates/smart-wallet-template';
import { TABLE, TABLES, db, getUserId } from 'utils/db';
import { formatTime, getNFTInfo } from 'utils/index';

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
    if (address && timestamp && timestamp - Date.now() < 60000) {
      const userId = await getUserId(address, 'onchain-summer-smart-wallet')
      // TODO: only update if user doesn't own the NFT
      await db(TABLES.users)
        .where(TABLE.users.id, userId)
        .update({ smart_nft_start_at: new Date(timestamp) })
      return res.status(200).json('OK')
    }
    return res.status(200).json('KO')
  } else if (['smart-wallet'].includes(slug)) {
    if (!slug || !tokenId) return res.status(400).json({ error: 'Wrong params' })

    // https://beta.banklessacademy.com/api/nft/smart-wallet/{id}
    // https://app.banklessacademy.com/api/nft/smart-wallet/0000000000000000000000000000000000000000000000000000000000000001

    const tokenInfo = await getNFTInfo(NFTAddress, tokenId)
    const owner = tokenInfo?.owner
    const smart_nft_mint_at = new Date(tokenInfo.mintTimestamp).getTime()
    let counter = '--:--:---'

    if (owner) {
      console.log('owner', owner)
      console.log('smart_nft_mint_at', smart_nft_mint_at)
      const [user] = await db(TABLES.users)
        .select('smart_nft_start_at')
        .where('address', 'ilike', `%${owner}%`)
      if (user?.smart_nft_start_at) {
        const smart_nft_start_at = user.smart_nft_start_at.getTime();
        console.log('smart_nft_start_at', smart_nft_start_at)
        if (smart_nft_mint_at > smart_nft_start_at)
          counter = formatTime(smart_nft_mint_at - smart_nft_start_at)
      }
    }
    let htmlTemplate = template

    // Replace the placeholder
    htmlTemplate = htmlTemplate.replace('{{counter}}', counter)

    res.setHeader('Content-Type', 'text/html')
    res.status(200).send(htmlTemplate)
  } 

  return res.status(400).send('Unknown NFT')
}
