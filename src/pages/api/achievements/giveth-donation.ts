import { NextApiRequest, NextApiResponse } from 'next';

import { TABLES, db } from 'utils/db'
import { fetchGivethDonations } from 'utils/index'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { address } = req.body;

  if (!address) {
    return res.status(400).json({ error: 'Address is required' });
  }

  try {
    const [userExist] = await db(TABLES.users)
      .select('id', 'address', 'achievements')
      .whereILike('address', address.toLowerCase());

    if (!userExist) {
      return res.status(404).json({ error: 'User not found' });
    }

    const achievements = (userExist && typeof userExist?.achievements === 'object' && userExist?.achievements !== null) ? Object.keys(userExist?.achievements) : []

    if (!achievements.includes('giveth-donation')) {

      const givethDonations = await fetchGivethDonations(userExist.address.toLowerCase());

      if (givethDonations > 0) {
        await db.raw(
          `update "users" set "achievements" = achievements || ? where "users"."id" = ?`,
          [{ 'giveth-donation': givethDonations }, userExist?.id]
        )

        return res.status(200).json({
          success: true,
          message: 'Giveth donation achievement updated',
          donations: givethDonations
        });
      } else {
        return res.status(200).json({
          success: false,
          message: 'No Giveth donations found for this address'
        });
      }
    }
  } catch (error) {
    console.error('Error updating Giveth donation achievement:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
