import { NextApiRequest, NextApiResponse } from 'next'

interface DApp {
  id: string
  category: string
  content: {
    title: string
    short_description: string
    image_url: string
    target_url: string
    cta_text: string
    creator_name: string
    creator_image_url: string
  }
}

interface ExploreResponse {
  trending: {
    [category: string]: DApp[]
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExploreResponse | { error: string }>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Fetch trending dApps
    const trendingRes = await fetch(
      'https://base.org/api/registry/entries?limit=100'
    )
    const trendingData = await trendingRes.json()

    // Ensure data array exists and is valid
    const trendingDApps = Array.isArray(trendingData?.data) ? trendingData.data : []

    // Organize trending dApps by category with max 8 per category
    const trendingByCategory = trendingDApps.reduce((acc: { [key: string]: DApp[] }, dapp: DApp) => {
      const category = dapp.category || 'Other'
      if (!acc[category]) {
        acc[category] = []
      }
      // Only add if category has less than 8 items
      if (acc[category].length < 8) {
        acc[category].push(dapp)
      }
      return acc
    }, {})

    return res.status(200).json({
      trending: trendingByCategory,
    })
  } catch (error) {
    console.error('Error fetching dApps:', error)
    return res.status(500).json({ error: 'Failed to fetch dApps' })
  }
}
