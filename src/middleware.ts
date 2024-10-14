/* eslint-disable no-console */
import * as Sentry from '@sentry/nextjs';
import { NextResponse } from 'next/server'
import { userAgent } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const ipAddress = request.ip || 'local'
  const ua = userAgent(request)
  const { pathname } = request.nextUrl;

  // Image handling middleware
  if (pathname.match(/^\/images\/.*\.(png|jpg|jpeg|gif|webp)$/)) {
    try {
      const response = await fetch(request.url, { method: 'HEAD' });
      if (response.status === 404) {
        const slug = pathname.split('/')[2];
        const type = pathname?.split('/')[3]?.split('-')[0];
        const rewriteUrl = new URL(`/api/lesson-image?slug=${slug}&type=${type}`, request.url);
        return NextResponse.rewrite(rewriteUrl);
      }
    } catch (error) {
      console.error('Error checking image:', error);
      // In case of an error, continue with the original request
    }
  }

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
export default Sentry.wrapMiddlewareWithSentry(middleware);

Sentry.init({
  // ... other configurations ...
  attachStacktrace: true,
});

// Apply middleware only to specific routes
export const config = {
  matcher: ['/api/passport', '/api/mint-badge', '/api/validate-quest', '/images/:path*'],
}
