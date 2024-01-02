/* eslint-disable no-console */
import { NextRequest, NextResponse } from 'next/server'
import { kv } from '@vercel/kv'
import { DOMAIN_URL } from 'constants/index'
import { AUTHORIZED_KV } from '../cache/[cache]'

export const config = {
  runtime: 'edge',
}

const AUTHORIZED_CRON = AUTHORIZED_KV

export default async function handler(req: NextRequest) {
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
        if (data[address]?.rank > 1000)
          delete data[address]
      }
      await kv.set('top1000_leaderboard', {
        fetchedAt: Date.now(),
        data,
      })
    }
    return { status: response, data }
  } else return { status: 'KO' }
}
