/* eslint-disable no-console */
// import * as Sentry from '@sentry/nextjs';
import { NextResponse } from 'next/server'
import { userAgent } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const ipAddress = request.ip || 'local'
  const ua = userAgent(request)

  // NOTE: the missing-image fallback used to live here. It fetched the image
  // URL *itself* (with ?middleware_check=true) on every request just to learn
  // whether it 404s, so every OG/social image cost an extra round trip plus a
  // middleware invocation on the hottest static assets on the site.
  //
  // It is now a `fallback` rewrite in next.config.mjs. Fallback rewrites are
  // evaluated only after the filesystem and dynamic routes have both missed —
  // i.e. exactly when the image is absent — so the common case (image exists)
  // costs nothing at all.

  // Detect and redirect bots
  if (ua.ua.includes('python') || ua.ua.includes('curl')) {
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
  }

  return NextResponse.next()
}

// Wrap the middleware function with Sentry error tracking
// export default Sentry.wrapMiddlewareWithSentry(middleware);

export default middleware;

// Sentry.init({
//   // ... other configurations ...
//   attachStacktrace: true,
// });

// Apply middleware only to specific routes
export const config = {
  // Image paths deliberately removed: the fallback rewrite in next.config.mjs
  // handles missing images, and matching them here also meant the curl/python
  // bot rule below 307'd real link-preview and RSS crawlers away from OG images.
  matcher: ['/api/passport', '/api/mint-badge', '/api/validate-quest'],
}
