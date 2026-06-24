'use client'

import { useTenant } from '@/context/TenantContext'
import { LoadingDots } from '@/components/LoadingDots'


export default function BillingPage() {
  const { isLoading, error, name, brandId, refetch } = useTenant()

  if (isLoading) return <LoadingDots />

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-3">
        <p className="text-gray-900 font-medium">Something went wrong</p>
        <p className="text-sm text-gray-500">{error}</p>
      </div>
    )
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Billing</h1>
      <p className="text-gray-500 mb-6">Tenant: {name} — {brandId}</p>
      <button
        onClick={refetch}
        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-50 transition-colors"
      >
        Switch tenant
      </button>
    </main>
  )
}
