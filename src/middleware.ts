/* eslint-disable no-console */
// middleware.ts
// TODO: migrate to https://github.com/neet/next-composition
import { NextResponse } from 'next/server'
import { userAgent } from 'next/server'
import type { NextRequest } from 'next/server'

export default function middleware(request: NextRequest): NextResponse {
  const ipAddress = request.ip || 'local'
  // Detect and redirect bots
  const ua = userAgent(request)
  console.log('url', request.url)
  console.log('userAgent', ua)
  if (ua.ua.includes('python') || ua.ua.includes('curl')
    //  || (
    //   ua.ua.includes('Mozilla') && ua.ua.includes('Chrome')
    // )
  ) {
    if (request.url.includes('/api/passport')) return NextResponse.next()
    else return NextResponse.redirect(new URL('/maintenance', request.url))
  }
  // disable API calls if maintenance in progress
  if (
    process.env.NEXT_PUBLIC_MAINTENANCE &&
    process.env.NEXT_PUBLIC_MAINTENANCE !== ipAddress &&
    ipAddress !== 'local'
  ) {
    return NextResponse.redirect(new URL('/maintenance', request.url))
  } else return NextResponse.next()
}

export const config = {
  matcher: ['/api/passport', '/api/auth/mint-badge', '/api/validate-quest'],
}
