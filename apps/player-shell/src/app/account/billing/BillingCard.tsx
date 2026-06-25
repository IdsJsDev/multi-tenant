"use client";

import { useCallback, useState } from "react";
import { useTenant } from "@/context/TenantContext";
import { LoadingDots } from "@/components/LoadingDots";
import { EmptyState } from "@/components/EmptyState";
import { BrandButton, BrandCard } from "theme-tenant-alpha";
import { useTranslation } from "@/i18n/useTranslation";
import type { BillingItem } from "@/interfaces/billing.interface";

interface BillingCardProps {
  initialBilling: BillingItem | null;
}

export function BillingCard({ initialBilling }: BillingCardProps) {
  const { name, brandId, locale, currency, refetch: refetchTenant, isLoading: isTenantLoading } = useTenant();
  const t = useTranslation();

  const [billing, setBilling] = useState<BillingItem | null>(initialBilling);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBilling = useCallback(() => {
    const controller = new AbortController();
    setIsLoading(true);
    fetch("/api/billing", { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        setBilling(data.billing);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setIsLoading(false);
        }
      });
    return () => controller.abort();
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold text-text-base mb-6">
        {t.billing.title}
      </h1>

      <div className="grid grid-cols-2 gap-6 items-stretch">
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

        <div className="flex flex-col gap-4 overflow-y-auto">
          <BrandCard title={t.billing.billingInfo} className="flex-1">
            {isLoading && <LoadingDots />}

            {!isLoading && !billing && <EmptyState>{t.billing.empty}</EmptyState>}

            {!isLoading && billing && (
              <dl className="flex flex-col gap-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-text-muted">{t.billing.description}</dt>
                  <dd className="font-medium text-text-base">{billing.description}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-text-muted">{t.billing.amount}</dt>
                  <dd className="font-medium text-text-base">
                    {billing.amount} {billing.currency}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-text-muted">{t.billing.date}</dt>
                  <dd className="font-medium text-text-base">{billing.date}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-text-muted">{t.billing.status}</dt>
                  <dd className="font-medium text-text-base">{billing.status}</dd>
                </div>
              </dl>
            )}
          </BrandCard>

          <BrandButton onClick={fetchBilling} disabled={isLoading} variant="outline">
            {isLoading ? `${t.billing.loading}…` : t.billing.refresh}
          </BrandButton>
        </div>
      </div>
    </main>
  );
}
