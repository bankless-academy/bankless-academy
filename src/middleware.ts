import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const DOMAIN_IDS = {
  'whitelabel.banklessacademy.com': '8198f1db3f1c490cb2aedf361fc3e416',
  'documentation.banklessacademy.com': '73cae3c0d9124d38babe1f1f9ec5c65f',
  'sponsors.banklessacademy.com': '208c77594ddc47ef9ea628c029d29ab0',
  'talent.banklessacademy.com': '56d3b0a011fe443aa2a9682f0ca443bb',
  // 'localhost': '56d3b0a011fe443aa2a9682f0ca443bb',
  'bankless-academy-git-notion-pages-bankless-academy.vercel.app':
    '8198f1db3f1c490cb2aedf361fc3e416',
}

export const ALLOWED_DOMAINS = Object.keys(DOMAIN_IDS)

export function middleware(request: NextRequest): NextResponse {
  const hostname = request?.nextUrl?.hostname

  if (hostname && ALLOWED_DOMAINS.includes(hostname)) {
    const pathname = request?.nextUrl?.pathname
    if (pathname === '/') {
      // eslint-disable-next-line no-console
      console.log('nextUrl', request?.nextUrl)
      return NextResponse.rewrite(
        new URL(`/notion/${DOMAIN_IDS[hostname]}`, request.url)
      )
    }
  }
}

export const config = {
  matcher: ['/'],
}
