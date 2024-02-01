import { DOMAIN_URL } from 'constants/index'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest): Promise<Response> {
  req.body
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id') ?? undefined
  return new NextResponse(null, {
    status: 302,
    headers: { Location: `${DOMAIN_URL}/lessons/${id}` },
  })
}

export const dynamic = 'force-dynamic'
