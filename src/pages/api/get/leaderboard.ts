/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import { TABLE, TABLES, db } from 'utils/db'
import { ALLOWED_PLATFORMS, STAMP_PLATFORMS } from 'constants/passport'
import { fetchFromUrl, calculateExplorerScore } from 'utils/index'
import { INDEXER_URL } from 'constants/badges'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const leaderboard: any = {}
  try {
    const query = `
      query MyQuery {
        OwnerAssets(order_by: {score: desc}) {
          address
          handbooks
          datadisks
          badges
          score
        }
      }
    `
    const result = await fetchFromUrl(INDEXER_URL, query)
    const ownerAssets = result?.OwnerAssets || []

    // Convert query results to leaderboard format
    for (const asset of ownerAssets) {
      leaderboard[asset.address] = {
        datadisks: asset.datadisks || [],
        handbooks: asset.handbooks || [],
        badges: asset.badges?.length || 0,
        score: asset.score || 0
      }
    }

    try {
      const { rows: users } = await db.raw(`
SELECT id, address, ens_name, ens_avatar
FROM users
WHERE (ens_name IS NOT NULL OR ens_avatar IS NOT NULL)`)
      for (const user of users) {
        const address = user.address.toLowerCase()
        if (user.ens_name !== null && address in leaderboard) {
          leaderboard[address].ens_name = user.ens_name
          // Add ens-name achievement if user has an ENS name
          if (!leaderboard[address].achievements) {
            leaderboard[address].achievements = []
          }
          leaderboard[address].achievements.push('ens-name')
        }
        if (user.ens_avatar !== null && address in leaderboard)
          leaderboard[address].ens_avatar = user.ens_avatar
      }

      const achievements = await db(TABLES.users)
        .select(TABLE.users.address, TABLE.users.achievements)
        .whereNot(TABLE.users.achievements, '{}')
      console.log(achievements)
      for (const achievement of achievements) {
        const a = achievement.address.toLowerCase()
        if (a in leaderboard) {
          const achievementsList = (achievement && typeof achievement?.achievements === 'object' && achievement?.achievements !== null) ? Object.keys(achievement?.achievements) : []
          // Merge with existing achievements (including ens-name if it exists)
          leaderboard[a].achievements = [...new Set([...(leaderboard[a].achievements || []), ...achievementsList])]
        }
      }

      const passportUsers = await db(TABLES.users)
        .select(TABLE.users.address, TABLE.users.ba_stamps)
        .whereNull(TABLE.users.sybil_user_id)
        .whereNot(TABLE.users.ba_stamps, '{}')
      for (const passport of passportUsers) {
        const address = passport.address?.toLowerCase()
        const stamps = Object.keys(passport.ba_stamps)
        if (address in leaderboard)
          leaderboard[address].valid_stamps = ALLOWED_PLATFORMS.map(value => stamps.includes(STAMP_PLATFORMS[value].provider) ? value : null).filter(v => v) || []
      }

      const referrals = await db(TABLES.users)
        .select(TABLE.users.referrer, 'r.address')
        .count(TABLE.users.referrer)
        .distinct(TABLE.users.referrer)
        .leftJoin('users AS r', 'users.referrer', 'r.id')
        .whereNotNull(TABLE.users.referrer)
        .whereNull('users.smart_nft_start_at')
        .groupBy(TABLE.users.referrer)
        .groupBy('r.address')
      console.log(referrals)
      for (const referral of referrals) {
        const address = referral.address?.toLowerCase()
        if (address in leaderboard)
          leaderboard[address].referrals = parseInt(referral.count)
      }

      // Update ranks based on final scores
      const rank = []
      for (const address of Object.keys(leaderboard)) {
        leaderboard[address].valid_stamps = leaderboard[address].valid_stamps || []
        leaderboard[address].achievements = leaderboard[address].achievements || []
        // Calculate final score using all stats
        const score = calculateExplorerScore(leaderboard[address]) + (leaderboard[address]?.referrals || 0)
        leaderboard[address].score = score
        rank.push({ score, address })
      }
      let rankNb = 0
      const sortedRank = rank.sort((a, b) => b.score - a.score)
        .map(l => {
          rankNb++
          return { ...l, rank: rankNb }
        })

      for (const r of sortedRank) {
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
