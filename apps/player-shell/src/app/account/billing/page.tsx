'use client'

import { useTenant } from '@/context/TenantContext'
import { LoadingDots } from '@/components/LoadingDots'
import { ErrorMessage } from '@/components/ErrorMessage'
import { BrandButton, BrandCard } from 'theme-tenant-alpha'
import { useTranslation } from '@/i18n/useTranslation'

export default function BillingPage() {
  const { isLoading, error, name, brandId, locale, currency, refetch } = useTenant()
  const t = useTranslation()

  if (isLoading && !name) return <LoadingDots />

  if (error) return <ErrorMessage message={error} onRetry={refetch} />

  return (
    <main className="max-w-2xl mx-auto px-6 py-10 flex flex-col gap-6">
      <h1 className="text-2xl font-semibold text-text-base">{t.billing.title}</h1>

      <BrandCard title={t.billing.tenantInfo}>
        <dl className="flex flex-col gap-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-text-muted">{t.billing.name}</dt>
            <dd className="font-medium text-text-base">{name}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-text-muted">{t.billing.brand}</dt>
            <dd className="font-medium text-text-base">{brandId}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-text-muted">{t.billing.locale}</dt>
            <dd className="font-medium text-text-base">{locale}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-text-muted">{t.billing.currency}</dt>
            <dd className="font-medium text-text-base">{currency}</dd>
          </div>
        </dl>
      </BrandCard>

      <BrandButton onClick={refetch} disabled={isLoading}>
        {isLoading ? `${t.billing.loading}…` : t.billing.switchTenant}
      </BrandButton>
    </main>
  )
}
