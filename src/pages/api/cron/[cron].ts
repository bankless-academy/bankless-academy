/* eslint-disable no-console */
import { NextRequest, NextResponse } from 'next/server'
import { kv } from '@vercel/kv'
import { DOMAIN_URL, IS_WHITELABEL } from 'constants/index'
import { AUTHORIZED_KV } from '../cache/[cache]'

export const config = {
  runtime: 'edge',
}

const AUTHORIZED_CRON = AUTHORIZED_KV

/** Constant-time compare; edge has no crypto.timingSafeEqual. */
const secretMatches = (a: string, b: string) => {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return diff === 0
}

export default async function handler(req: NextRequest) {
  if (IS_WHITELABEL) {
    return new Response('Cron disabled on whitelabel', { status: 400 })
  }

  // Had NO auth at all: anyone could force KV writes and repeated upstream
  // Potion/indexer calls. Vercel sends this header on scheduled invocations
  // once CRON_SECRET is set on the project; manual refreshes (e.g. `explore`)
  // must pass it too. Fails closed when unset.
  const cronSecret = process.env.CRON_SECRET
  if (!cronSecret) {
    return new Response('CRON_SECRET is not configured', { status: 503 })
  }
  const bearer = (req.headers.get('authorization') || '').replace(/^Bearer /, '')
  if (!secretMatches(bearer, cronSecret)) {
    return new Response('Unauthorized', { status: 401 })
  }

  const cron = req.nextUrl.pathname.split('/')[3]
  console.log('cron:', cron)
  if (cron && AUTHORIZED_CRON.includes(cron)) {
    const response = await update(cron)
    return new NextResponse(JSON.stringify(response), {
      status: 200,
    })
  }
  return new Response('Wrong params', { status: 400 })
}

async function update(cron: string) {

  // get data
  const data = await fetch(
    `${DOMAIN_URL}/api/get/${cron}`
  ).then((res) => {
    // console.log(res)
    if (res.status === 200)
      return res.json()
    else
      return null
  })
  // console.log(data)

  if (data) {
    // update
    const response = await kv.set(cron, {
      fetchedAt: Date.now(),
      data,
    })
    if (cron === 'leaderboard') {
      for (const address in data) {
        if (data[address]?.rank > 200)
          delete data[address]
      }
      await kv.set('top200_leaderboard', {
        fetchedAt: Date.now(),
        data,
      })
    }
    return { status: response, data }
  } else return { status: 'KO' }
}
