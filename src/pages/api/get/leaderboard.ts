/* eslint-disable no-console */
import { ALCHEMY_KEY_BACKEND, MIRROR_ARTICLE_ADDRESSES } from 'constants/index'
import { NextApiRequest, NextApiResponse } from 'next'
// import { createPublicClient, http } from 'viem'
// import { mainnet } from 'viem/chains'

import badges from 'data/badges.json'
import { fetchBE } from 'utils/server'
import { BADGE_ADDRESS, BADGE_IDS } from 'constants/badges'
import { TABLE, TABLES, db } from 'utils/db'

async function getCollectors(collectibleAddress) {
  // console.log(collectibleAddress)
  return await fetchBE(`https://opt-mainnet.g.alchemy.com/nft/v2/${ALCHEMY_KEY_BACKEND}/getOwnersForCollection?contractAddress=${collectibleAddress}&withTokenBalances=true`)
}

async function getBadgeHolders() {
  return await fetchBE(`https://polygon-mainnet.g.alchemy.com/nft/v2/${ALCHEMY_KEY_BACKEND}/getOwnersForCollection?contractAddress=${BADGE_ADDRESS}&withTokenBalances=true`)
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
      leaderboard[collector.ownerAddress] = { collectibles: collector.tokenBalances?.length, handbooks: 0, badges: 0 }
    }

    for (const mirrorArticleAddress of MIRROR_ARTICLE_ADDRESSES) {
      const collectors = await getCollectors(mirrorArticleAddress)
      // console.log(collectors)
      for (const collector of collectors.ownerAddresses) {
        if (collector.ownerAddress in leaderboard) leaderboard[collector.ownerAddress].handbooks += collector.tokenBalances?.length
        else leaderboard[collector.ownerAddress] = { collectibles: 0, handbooks: collector.tokenBalances?.length, badges: 0 }
      }
    }

    const badgeHolders = await getBadgeHolders()
    // console.log(badgeHolders)
    for (const owner of badgeHolders.ownerAddresses) {
      const address = owner.ownerAddress
      const badgeIds = []
      owner.tokenBalances.map(token => {
        badgeIds.push(parseInt(token.tokenId, 16))
      })
      if (address in badges) {
        badges[address] = [...new Set([...badges[address], ...badgeIds])]
      } else {
        badges[address] = badgeIds
      }
    }

    for (const [address, badgeIds] of Object.entries(badges)) {
      if (address in leaderboard) leaderboard[address].badges = badgeIds?.length
      else leaderboard[address] = { collectibles: 0, handbooks: 0, badges: badgeIds?.length }
    }

    // const ensAddresses: any = []
    for (const address of Object.keys(leaderboard)) {
      if (leaderboard[address].collectibles >= 1 || leaderboard[address].handbooks >= 2 || leaderboard[address].badges >= BADGE_IDS.length) {
        // ensAddresses.push(address)
      }
      // filter low badges
      if (leaderboard[address].badges < 2 && leaderboard[address].collectibles === 0 && leaderboard[address].handbooks === 0)
        delete leaderboard[address]
    }
    // console.log(ensAddresses)
    try {
      //       const { rows: users } = await db.raw(`
      //   SELECT id, address, ens_name, ens_avatar
      //   FROM users
      //   WHERE (ens_name IS NOT NULL OR ens_avatar IS NOT NULL) AND LOWER(address) IN (${ensAddresses.map(() => '?').join(', ')})
      // `, ensAddresses)
      const { rows: users } = await db.raw(`
SELECT id, address, ens_name, ens_avatar
FROM users
WHERE (ens_name IS NOT NULL OR ens_avatar IS NOT NULL)`)
      // console.log(users)
      for (const user of users) {
        const address = user.address.toLowerCase()
        if (user.ens_name !== null && address in leaderboard)
          leaderboard[address].ens_name = user.ens_name
        if (user.ens_avatar !== null && address in leaderboard)
          leaderboard[address].ens_avatar = user.ens_avatar
      }
      const donations = await db(TABLES.users)
        .select(TABLE.users.address, TABLE.users.donations)
        .whereNot(TABLE.users.donations, '{}')
      console.log(donations)
      for (const donation of donations) {
        const a = donation.address.toLowerCase()
        if (a in leaderboard) {
          leaderboard[a].donations = donation.donations
          leaderboard[a].donations_count = Object.keys(donation.donations)?.length || 0
        }
      }
      const rank = []
      for (const address of Object.keys(leaderboard)) {
        // score
        const score = 3 * (leaderboard[address]?.collectibles || 0) +
          (leaderboard[address]?.handbooks || 0) +
          (leaderboard[address]?.badges || 0) +
          Object.keys(leaderboard[address]?.donations || {})?.length || 0

        leaderboard[address].score = score
        leaderboard[address].donations_count = leaderboard[address].donations_count || 0
        rank.push({ score, address })
      }
      let rankNb = 0
      const sortedRank = rank.sort((a, b) => b.score - a.score)
        .map(l => {
          rankNb++
          return { ...l, rank: rankNb }
        })
      // console.log(rank)
      // console.log(sortedRank)
      for (const r of sortedRank) {
        leaderboard[r.address].rank = r.rank
      }

      return res.status(200).send(leaderboard)
    } catch (error) {
      console.log('API limit reached.', error)
      return res.status(200).send(leaderboard)
    }
  } catch (error) {
    console.error(error)
  }
}
