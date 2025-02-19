import { NextApiRequest, NextApiResponse } from 'next'
import { db, TABLES } from 'utils/db'

interface UserReferral {
  id: string
  address: string
  ens_name: string | null
  community: string
  referral_count: string
}

interface CommunityMember {
  address: string
  ens_name: string | null
  referrals: number
}

interface CommunityReferral {
  community: string
  total_referrals: number
  members: CommunityMember[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    // First, get referral counts for each user
    const userReferrals: UserReferral[] = await db
      .select([
        'users.id',
        'users.address',
        'users.ens_name',
        'users.community',
        db.raw('COUNT(DISTINCT referred.id) as referral_count')
      ])
      .from('users')
      .leftJoin({ referred: TABLES.users }, 'users.id', 'referred.referrer')
      .leftJoin(
        { first_completion: TABLES.completions },
        'referred.id',
        'first_completion.user_id'
      )
      .whereNotNull('users.community')
      .where('users.community', '!=', '')
      .whereNotNull('referred.id')
      .whereNotNull('first_completion.transaction_at')
      .whereRaw(
        'first_completion.transaction_at = (SELECT MIN(transaction_at) FROM completions WHERE user_id = referred.id)'
      )
      .groupBy('users.id', 'users.address', 'users.ens_name', 'users.community')

    // Then aggregate by community
    const communityReferrals: CommunityReferral[] = Object.entries(
      userReferrals.reduce((acc: Record<string, CommunityReferral>, curr) => {
        if (!acc[curr.community]) {
          acc[curr.community] = {
            community: curr.community,
            total_referrals: 0,
            members: []
          }
        }
        acc[curr.community].total_referrals += parseInt(curr.referral_count)
        acc[curr.community].members.push({
          address: curr.address,
          ens_name: curr.ens_name,
          referrals: parseInt(curr.referral_count)
        })
        return acc
      }, {})
    )
      .map(([_, community]) => ({
        ...community,
        members: community.members.sort((a, b) => b.referrals - a.referrals)
      }))
      .sort((a, b) => b.total_referrals - a.total_referrals)
      .slice(0, 50)

    return res.status(200).json({ communityReferrals })
  } catch (error) {
    console.error('Error fetching community referrals:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
} 
