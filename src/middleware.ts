import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const DOMAIN_IDS = {
  'whitelabel.banklessacademy.com': '8198f1db3f1c490cb2aedf361fc3e416',
  'documentation.banklessacademy.com': '73cae3c0d9124d38babe1f1f9ec5c65f',
  'talent.banklessacademy.com': '208c77594ddc47ef9ea628c029d29ab0',
  'sponsors.banklessacademy.com': '56d3b0a011fe443aa2a9682f0ca443bb',
  // localhost: '8198f1db3f1c490cb2aedf361fc3e416',
}

export const ALLOWED_DOMAINS = Object.keys(DOMAIN_IDS)

export function middleware(request: NextRequest): NextResponse {
  if (
    request?.nextUrl?.pathname === '/ooo' &&
    ALLOWED_DOMAINS.includes(request?.nextUrl?.hostname)
  ) {
    // eslint-disable-next-line no-console
    console.log('nextUrl', request?.nextUrl)
    return NextResponse.rewrite(
      new URL(`/notion/${DOMAIN_IDS[request?.nextUrl?.hostname]}`, request.url)
    )
  }
}

export const config = {
  matcher: ['/'],
}
