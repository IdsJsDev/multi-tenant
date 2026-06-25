import { Suspense } from 'react'
import { getBilling } from '@/utils/billing'
import { TenantCard } from './TenantCard'
import { BillingCard } from './BillingCard'
import { LoadingDots } from '@/components/LoadingDots'

export const dynamic = 'force-dynamic'

async function BillingData() {
  const billing = await getBilling()
  return <BillingCard initialBilling={billing} />
}

export default function BillingPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold text-text-base mb-6">Billing</h1>

      <div className="grid grid-cols-2 gap-6 items-stretch">
        <TenantCard />
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-[200px]">
              <LoadingDots />
            </div>
          }
        >
          <BillingData />
        </Suspense>
      </div>
    </main>
  )
}
