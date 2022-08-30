import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // eslint-disable-next-line no-console
  console.log('middle', request.nextUrl)
  if (
    request.nextUrl.pathname === '/' &&
    request.nextUrl.hostname === 'whitelabel.banklessacademy.com'
  ) {
    return NextResponse.rewrite(
      new URL(
        '/notion/208c77594ddc47ef9ea628c029d29ab0',
        request.url
      ).toString()
    )
  }
}
