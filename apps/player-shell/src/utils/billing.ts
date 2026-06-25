import { billingList } from '@/mock/billing.mock'
import type { BillingItem } from '@/interfaces/billing.interface'

export async function getBilling(): Promise<BillingItem | null> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  const item = billingList[Math.floor(Math.random() * billingList.length)]
  return item ?? null
}
