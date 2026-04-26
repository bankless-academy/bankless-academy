import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // The deployment ID is constant for the life of a deployment, so cache
  // aggressively at the edge. The TTL only bounds how fast users see the
  // "new version available" nudge — ~5 min is fine for that.
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600')
  res.status(200).json({ deploymentId: process.env.VERCEL_DEPLOYMENT_ID || '' })
}
