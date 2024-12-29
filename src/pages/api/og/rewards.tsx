/* eslint-disable no-console */
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

import OGRewards from 'components/OGRewards'
import { DOMAIN_URL_ } from 'constants/index'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  // console.log(searchParams)
  const total = searchParams.get('total')

  const maxRewards = 250

  let rewardsData = { rewards: `${maxRewards} USDGLO in rewards` }

  if (!total || typeof total !== 'string') {
    const rewards = await fetch(`${DOMAIN_URL_}/api/rewards?badge=14`, {
      cache: 'no-store',
    })
    rewardsData = await rewards.json()
  }

  // console.log(rewardsData)

  const fontData = await fetch(
    new URL(
      `${DOMAIN_URL_}/fonts/clear-sans/TTF/ClearSans-Bold.ttf`,
      import.meta.url
    )
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(<OGRewards rewards={rewardsData.rewards} />, {
    width: 1200,
    height: 628,
    fonts: [
      {
        name: 'ClearSans',
        data: fontData,
        style: 'normal',
      },
    ],
    headers: {
      'Cache-Control': 'no-store, no-cache',
    },
  })
}
