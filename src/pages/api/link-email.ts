/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import { db, TABLES } from 'utils/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, address } = req.body

  console.log('email', email)
  console.log('address', address)

  if (!email || !address) {
    return res.status(400).json({ error: 'Email and address are required' })
  }

  try {
    const [user] = await db(TABLES.users)
      .where('address', 'ilike', `%${address}%`)
      .update({
        newsletter_email: email,
      }).returning('*')

    if (!user) {
      return res.status(400).json({ error: 'User not found' })
    } else {
      return res.status(200).json({ message: 'Email linked successfully' })
    }
  } catch (error) {
    console.error('Error linking email:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
