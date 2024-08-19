/* eslint-disable no-console */
import { NextRequest, NextResponse } from 'next/server'
import { kv } from '@vercel/kv'

export const config = {
  runtime: 'edge',
}

export const AUTHORIZED_KV = [
  'bankless-dao-news',
  'announcement',
  'leaderboard'
]

export default async function handler(req: NextRequest) {
  const cache = req.nextUrl.pathname.split('/')[3]
  // console.log(cache)
  if (cache && (AUTHORIZED_KV.includes(cache) || cache === 'top1000_leaderboard')) {
    const data: any = await kv.get(cache)
    // console.log(Object.keys(data.data))
    return new NextResponse(JSON.stringify(data), {
      status: 200,
    })
  }
  return new Response('Wrong params', { status: 400 })
}
