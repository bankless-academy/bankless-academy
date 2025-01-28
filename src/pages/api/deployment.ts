import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ deploymentId: process.env.VERCEL_DEPLOYMENT_ID || '' })
}
