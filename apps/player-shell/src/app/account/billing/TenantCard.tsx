'use client'

import { useTenant } from '@/context/TenantContext'
import { BrandButton, BrandCard } from 'theme-tenant-alpha'
import { useTranslation } from '@/i18n/useTranslation'

export function TenantCard() {
  const {
    name,
    brandId,
    locale,
    currency,
    refetch: refetchTenant,
    isLoading: isTenantLoading,
  } = useTenant()
  const t = useTranslation()

  return (
    <div className="flex flex-col gap-4">
      <BrandCard title={t.billing.tenantInfo}>
        <dl className="flex flex-col gap-3 text-sm flex-1">
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

      <BrandButton onClick={refetchTenant} disabled={isTenantLoading} variant="outline">
        {isTenantLoading ? `${t.billing.loading}…` : t.billing.switchTenant}
      </BrandButton>
    </div>
  )
}
