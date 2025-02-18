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
    // Get month-year from query params or use current month
    const monthYear = req.query.monthYear as string
    let targetMonth: string

    if (monthYear) {
      // Expected format: YYYY-MM
      const [year, month] = monthYear.split('-')
      if (!year || !month || isNaN(+year) || isNaN(+month)) {
        return res.status(400).json({ message: 'Invalid month-year format. Use YYYY-MM' })
      }
      targetMonth = monthYear
    } else {
      const now = new Date()
      targetMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
    }

    const referrals = await db(TABLES.users)
      .select([
        'users.address',
        'users.ens_name',
        db.raw('COUNT(DISTINCT u2.id) as referrals')
      ])
      .leftJoin({ u2: TABLES.users }, 'users.id', 'u2.referrer')
      .leftJoin({ c: TABLES.completions }, 'u2.id', 'c.user_id')
      .whereNotNull('u2.referrer')
      .whereNotNull('c.transaction_at')
      .whereRaw('TO_CHAR(c.transaction_at, \'YYYY-MM\') = ?', [targetMonth])
      .whereRaw('c.transaction_at = (SELECT MIN(transaction_at) FROM completions WHERE user_id = u2.id)')
      .groupBy('users.address', 'users.ens_name')
      .orderBy('referrals', 'desc')
      .limit(50)

    return res.status(200).json({
      referrals,
      monthYear: targetMonth
    })
  } catch (error) {
    console.error('Error fetching monthly referrals:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
