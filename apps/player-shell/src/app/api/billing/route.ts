import { getBilling } from '@/utils/billing'
import { NextResponse } from 'next/server'

export async function GET() {
  const billing = await getBilling()
  return NextResponse.json({ billing })
}
