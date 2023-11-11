/* eslint-disable no-console */
import { NextRequest, NextResponse } from 'next/server'
import { kv } from '@vercel/kv'

export const config = {
  runtime: 'edge',
}

export const AUTHORIZED_KV = ['bankless-dao-news']

export default async function handler(req: NextRequest) {
  const cache = req.nextUrl.pathname.split('/')[3]
  // console.log(cache)
  if (cache && AUTHORIZED_KV.includes(cache)) {
    const data = await kv.get(cache)
    return new NextResponse(JSON.stringify(data), {
      status: 200,
    })
  }
  return new Response('Wrong params', { status: 400 })
}
