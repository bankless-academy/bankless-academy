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

  // Only ever render OUR images. Without this the endpoint is an open proxy:
  // any caller could have us fetch and re-serve an arbitrary URL on our
  // bandwidth. Hosts are inline (not from constants/index) to keep this edge
  // bundle small. Both real call sites pass ${DOMAIN_URL_}-prefixed URLs.
  const allowedHosts = new Set([
    new URL(req.url).host, // this deployment, incl. previews
    'app.banklessacademy.com',
    'ba.krux.dev', // DOMAIN_URL_ maps localhost here
  ])
  let imageHost: string
  try {
    imageHost = new URL(image).host
  } catch {
    return new Response('Invalid image URL', { status: 400 })
  }
  if (!allowedHosts.has(imageHost)) {
    return new Response('Image host not allowed', { status: 400 })
  }

  return new ImageResponse(<OGMiniApp image={image} />, {
    width: 1200,
    height: 800,
    headers: {
      'Cache-Control': 'no-store, no-cache',
    },
  })
}
