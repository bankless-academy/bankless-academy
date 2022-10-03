// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const ipAddress = request.ip || 'local'
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
  matcher: ['/api/:path*'],
}
