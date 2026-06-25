import { getRandomTenant } from '@/utils/tenant'
import { NextResponse } from 'next/server'

export async function POST() {
  const tenant = await getRandomTenant()
  await new Promise((resolve) => setTimeout(resolve, 300))

  return NextResponse.json({ tenant })
}
