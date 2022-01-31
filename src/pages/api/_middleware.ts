/* eslint-disable no-console */
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const ip = req.ip || 'no_found'
  console.log('req: ', req)
  console.log('ip: ', ip)
  // if (!ip) {
  //   // block unknown ip
  //   return NextResponse.error();
  // }
  req.headers.set('_IP', ip)
  return NextResponse.next()
}
