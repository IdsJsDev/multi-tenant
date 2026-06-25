import { getBilling } from '@/utils/billing'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const billing = await getBilling()
  return NextResponse.json({ billing }, {
    headers: {
      'Cache-Control': 'no-store',
    },
  })
}
