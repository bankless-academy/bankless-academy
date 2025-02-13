import { NextApiRequest, NextApiResponse } from 'next'
import { db, TABLES } from 'utils/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const communities = await db(TABLES.users)
      .select([
        'community',
        db.raw('COUNT(DISTINCT address) as user_count'),
        db.raw('json_agg(json_build_object(\'address\', address, \'ens_name\', ens_name)) as members')
      ])
      .whereNotNull('community')
      .where('community', '!=', '')
      .groupBy('community')
      .orderBy('user_count', 'desc')
      .limit(50)

    return res.status(200).json({ communities })
  } catch (error) {
    console.error('Error fetching top communities:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
