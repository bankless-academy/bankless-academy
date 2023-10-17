/* eslint-disable no-console */
import { ALCHEMY_KEY_BACKEND, MIRROR_ARTICLE_ADDRESSES } from 'constants/index'
import { NextApiRequest, NextApiResponse } from 'next'
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

import badges from 'data/badges.json'
// import leaderboard from 'data/leaderboard.json'
import { BADGE_ADDRESS, BADGE_IDS } from 'constants/badges'

const CACHE_DATA_IN_HOURS = 1

async function getCollectors(collectibleAddress) {
  // console.log(collectibleAddress)
  const res = await fetch(`https://opt-mainnet.g.alchemy.com/nft/v2/${ALCHEMY_KEY_BACKEND}/getOwnersForCollection?contractAddress=${collectibleAddress}&withTokenBalances=true`, { next: { revalidate: CACHE_DATA_IN_HOURS * 3600 } })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getBadgeHolders(tokenId) {
  const res = await fetch(`https://polygon-mainnet.g.alchemy.com/nft/v2/${ALCHEMY_KEY_BACKEND}/getOwnersForToken?contractAddress=${BADGE_ADDRESS}&tokenId=${tokenId}`, { next: { revalidate: CACHE_DATA_IN_HOURS * 3600 } })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const leaderboard: any = {}
  try {
    const collectors = await getCollectors('0x5ce61b80931Ea67565f0532965DDe5be2d41331d')
    // console.log(collectors)
    for (const collector of collectors.ownerAddresses) {
      leaderboard[collector.ownerAddress] = { collectibles: collector.tokenBalances?.length, badges: 0 }
    }

    for (const mirrorArticleAddress of MIRROR_ARTICLE_ADDRESSES) {
      const collectors = await getCollectors(mirrorArticleAddress)
      // console.log(collectors)
      for (const collector of collectors.ownerAddresses) {
        if (collector.ownerAddress in leaderboard) leaderboard[collector.ownerAddress].collectibles += collector.tokenBalances?.length
        else leaderboard[collector.ownerAddress] = { collectibles: collector.tokenBalances?.length, badges: 0 }
      }
    }

    for (const badgeId of BADGE_IDS) {
      const badgeHolders = await getBadgeHolders(badgeId)
      // console.log(badgeHolders)
      for (const address of badgeHolders.owners) {
        if (address in badges) {
          badges[address] = [...badges[address], badgeId]
        } else {
          badges[address] = [badgeId]
        }
      }
    }

    for (const [address, badgeIds] of Object.entries(badges)) {
      if (address in leaderboard) leaderboard[address].badges += badgeIds?.length
      else leaderboard[address] = { collectibles: 0, badges: badgeIds?.length }
    }

    // console.log(leaderboard)

    // resolve ENS for top addresses
    const ensAddresses: any = []
    const getEnsNames: any = []
    const transport = http(`https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY_BACKEND}`, {
      batch: true
    })
    const client = createPublicClient({
      chain: mainnet,
      transport,
    })
    for (const address of Object.keys(leaderboard)) {
      if (leaderboard[address].collectibles > 1 || leaderboard[address].badges >= 9) {
        ensAddresses.push(address)
        getEnsNames.push(client.getEnsName({ address: `0x${address.slice(2)}` }))
      }
      // filter low badges
      if (leaderboard[address].badges < 2 && leaderboard[address].collectibles === 0)
        delete leaderboard[address]
    }
    console.log(ensAddresses)
    const ensNames = await Promise.all(getEnsNames)
    console.log(ensNames)
    for (let i = 0; i < ensAddresses?.length; i++) {
      const address = ensAddresses[i]
      const ens = ensNames[i]
      if (ens !== null) {
        leaderboard[ens] = leaderboard[address]
        delete leaderboard[address]
      }
    }
    return res.status(200).json(leaderboard)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: `error ${error?.code}: ${error}`,
    })
  }
}
