import { NextApiRequest, NextApiResponse } from 'next';

import { TABLES, db } from 'utils/db'
import { fetchGitcoinDonations } from 'utils/server'

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

    if (!achievements.includes('gitcoin-donation')) {

      const gitcoinDonations = await fetchGitcoinDonations(userExist.address.toLowerCase());

      if (gitcoinDonations > 0) {
        await db.raw(
          `update "users" set "achievements" = achievements || ? where "users"."id" = ?`,
          [{ 'gitcoin-donation': gitcoinDonations }, userExist?.id]
        )

        return res.status(200).json({
          success: true,
          message: 'Gitcoin donation achievement updated',
          donations: gitcoinDonations
        });
      } else {
        return res.status(200).json({
          success: false,
          message: 'No Gitcoin donations found for this address'
        });
      }
    }
  } catch (error) {
    console.error('Error updating Gitcoin donation achievement:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
