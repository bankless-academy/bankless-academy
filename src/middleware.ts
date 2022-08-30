import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const DOMAIN_IDS = {
  'whitelabel.banklessacademy.com': '8198f1db3f1c490cb2aedf361fc3e416',
  'documentation.banklessacademy.com': '73cae3c0d9124d38babe1f1f9ec5c65f',
  'talent.banklessacademy.com': '208c77594ddc47ef9ea628c029d29ab0',
  'sponsors.banklessacademy.com': '56d3b0a011fe443aa2a9682f0ca443bb',
  'vercel.app': '56d3b0a011fe443aa2a9682f0ca443bb',
  // localhost: '8198f1db3f1c490cb2aedf361fc3e416',
}

export const ALLOWED_DOMAINS = Object.keys(DOMAIN_IDS)

export function middleware(request: NextRequest): NextResponse {
  // const host = request?.nextUrl?.host
  const host = 'vercel.app'

  // eslint-disable-next-line no-console
  console.log('nextUrl', request?.nextUrl)
  // eslint-disable-next-line no-console
  console.log('url', request?.url)
  // eslint-disable-next-line no-console
  console.log('headers', request?.headers)
  if (
    host &&
    ALLOWED_DOMAINS.includes(host) &&
    request?.nextUrl?.pathname === '/'
  ) {
    // eslint-disable-next-line no-console
    console.log('nextUrl', request?.nextUrl)
    return NextResponse.rewrite(
      new URL(`/notion/${DOMAIN_IDS[host]}`, request.url)
    )
  }
}

export const config = {
  matcher: ['/', '/:pageId'],
}
