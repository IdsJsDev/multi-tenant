import { getBilling } from '@/utils/billing'
import { BillingCard } from './BillingCard'

export const dynamic = 'force-dynamic'

export default async function BillingPage() {
  const billing = await getBilling()

  return <BillingCard initialBilling={billing} />
}
