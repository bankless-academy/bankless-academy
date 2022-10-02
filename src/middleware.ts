/* eslint-disable no-console */
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const ipAddress = request.headers['x-forwarded-for']
    ? request.headers['x-forwarded-for'].split(',')[0]
    : request.headers['x-real-ip'] || 'local'
  // redirect API calls if maintenance in progress
  console.log('NEXT_PUBLIC_MAINTENANCE', process.env.NEXT_PUBLIC_MAINTENANCE)
  console.log('ipAddress', ipAddress)
  if (
    process.env.NEXT_PUBLIC_MAINTENANCE &&
    process.env.NEXT_PUBLIC_MAINTENANCE !== ipAddress &&
    ipAddress !== 'local'
  ) {
    return NextResponse.redirect(new URL('/maintenance', request.url))
  } else return NextResponse.next()
}

export const config = {
  matcher: ['/api/:path*'],
}
