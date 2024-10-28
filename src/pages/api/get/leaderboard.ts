/* eslint-disable no-console */
import { ALCHEMY_KEY_BACKEND, COLLECTIBLE_ADDRESSES, LESSONS, MIRROR_ARTICLE_ADDRESSES } from 'constants/index'
import { NextApiRequest, NextApiResponse } from 'next'
// import { createPublicClient, http } from 'viem'
// import { mainnet } from 'viem/chains'

import badges from 'data/badges.json'
import { fetchBE } from 'utils/server'
import { BADGE_ADDRESS, badgePublishedIds } from 'constants/badges'
import { TABLE, TABLES, db } from 'utils/db'
import { ALLOWED_PLATFORMS, STAMP_PLATFORMS } from 'constants/passport'
import { calculateExplorerScore } from 'utils/index'

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
    for (const collectibleAddress of COLLECTIBLE_ADDRESSES) {
      const collectors = await getCollectors(collectibleAddress)
      console.log(collectors)
      const datadiskId = LESSONS.find(
        (lesson) => lesson.lessonCollectibleTokenAddress === collectibleAddress
      )?.collectibleId
      for (const collector of collectors.ownerAddresses) {
        const datadisks = []
        for (let i = 0; i < collector.tokenBalances?.length; i++) {
          datadisks.push(datadiskId)
        }
        leaderboard[collector.ownerAddress] = { datadisks: datadisks, handbooks: [], badges: 0 }
      }
    }

    for (const mirrorArticleAddress of MIRROR_ARTICLE_ADDRESSES) {
      const collectors = await getCollectors(mirrorArticleAddress)
      const handbookId = LESSONS.find(
        (lesson) => lesson.mirrorNFTAddress === mirrorArticleAddress
      )?.collectibleId
      // console.log(collectors)
      for (const collector of collectors.ownerAddresses) {
        const handbooks = []
        for (let i = 0; i < collector.tokenBalances?.length; i++) {
          handbooks.push(handbookId)
        }
        if (collector.ownerAddress in leaderboard) {
          const existingHandbooks = leaderboard[collector.ownerAddress]?.handbooks || []
          leaderboard[collector.ownerAddress].handbooks = [...existingHandbooks, ...handbooks]
        }
        else leaderboard[collector.ownerAddress] = { datadisks: [], handbooks: handbooks, badges: 0 }
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
      // intersect badgeIds
      badges[address] = badges[address].filter(badgeId => badgePublishedIds.includes(badgeId))
    }

    for (const [address, badgeIds] of Object.entries(badges)) {
      if (address in leaderboard) leaderboard[address].badges = badgeIds?.length
      else leaderboard[address] = { datadisks: [], handbooks: [], badges: badgeIds?.length }
    }

    // const ensAddresses: any = []
    // for (const address of Object.keys(leaderboard)) {
    // filter low badges
    // if (leaderboard[address].badges < 2 && leaderboard[address].datadisk?.lengths === 0 && leaderboard[address].handbooks?.length === 0)
    //   delete leaderboard[address]
    // }
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
      // donations (deprecated)
      // const donations = await db(TABLES.users)
      //   .select(TABLE.users.address, TABLE.users.donations)
      //   .whereNot(TABLE.users.donations, '{}')
      // console.log(donations)
      // for (const donation of donations) {
      //   const a = donation.address.toLowerCase()
      //   if (a in leaderboard) {
      //     leaderboard[a].donations = donation.donations
      //     // leaderboard[a].donations_count = Object.keys(donation.donations)?.length || 0
      //   }
      // }
      const achievements = await db(TABLES.users)
        .select(TABLE.users.address, TABLE.users.achievements)
        .whereNot(TABLE.users.achievements, '{}')
      console.log(achievements)
      for (const achievement of achievements) {
        const a = achievement.address.toLowerCase()
        if (a in leaderboard) {
          leaderboard[a].achievements = (achievement && typeof achievement?.achievements === 'object' && achievement?.achievements !== null) ? Object.keys(achievement?.achievements) : []
        }
      }
      // passport
      const passportUsers = await db(TABLES.users)
        .select(TABLE.users.address, TABLE.users.ba_stamps)
        .whereNull(TABLE.users.sybil_user_id)
        .whereNot(TABLE.users.ba_stamps, '{}')
      for (const passport of passportUsers) {
        const address = passport.address?.toLowerCase()
        const stamps = Object.keys(passport.ba_stamps)
        // TODO: clean
        if (address in leaderboard)
          leaderboard[address].valid_stamps = ALLOWED_PLATFORMS.map(value => stamps.includes(STAMP_PLATFORMS[value].provider) ? value : null).filter(v => v) || []
      }
      const referrals = await db(TABLES.users)
        .select(TABLE.users.referrer, 'r.address')
        .count(TABLE.users.referrer)
        .distinct(TABLE.users.referrer)
        .leftJoin('users AS r', 'users.referrer', 'r.id')
        .whereNotNull(TABLE.users.referrer)
        // ignore referrals via smart_nft
        .whereNull('users.smart_nft_start_at')
        .groupBy(TABLE.users.referrer)
        .groupBy('r.address')
      console.log(referrals)
      for (const referral of referrals) {
        const address = referral.address?.toLowerCase()
        if (address in leaderboard)
          leaderboard[address].referrals = parseInt(referral.count)
      }
      const rank = []
      for (const address of Object.keys(leaderboard)) {
        // score
        const score = calculateExplorerScore(leaderboard[address]) + (leaderboard[address]?.referrals || 0)

        leaderboard[address].score = score
        // leaderboard[address].donations_count = leaderboard[address].donations_count || 0
        leaderboard[address].valid_stamps = leaderboard[address].valid_stamps || []
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
        // LIMIT to first 5000
        if (r.rank <= 5000)
          leaderboard[r.address].rank = r.rank
        else
          delete leaderboard[r.address]
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
