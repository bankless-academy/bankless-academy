/* eslint-disable no-console */
import * as Sentry from '@sentry/nextjs';

// middleware.ts
// TODO: migrate to https://github.com/neet/next-composition
import { NextResponse } from 'next/server'
import { userAgent } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest): NextResponse {
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

// Wrap the middleware function with Sentry error tracking
export default Sentry.wrapMiddlewareWithSentry(middleware);

Sentry.init({
  // ... other configurations ...
  attachStacktrace: true,
});

// Apply middleware only to specific routes
export const config = {
  matcher: ['/api/passport', '/api/mint-badge', '/api/validate-quest'],
}
