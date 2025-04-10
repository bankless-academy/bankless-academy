/* eslint-disable no-console */
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

import OGMiniApp from 'components/OGMiniApp'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  // console.log(searchParams)
  const image = searchParams.get('image')
  if (!image) {
    return new Response('Image slug is required', { status: 400 })
  }

  return new ImageResponse(<OGMiniApp image={image} />, {
    width: 1200,
    height: 800,
    headers: {
      'Cache-Control': 'no-store, no-cache',
    },
  })
}
