'use client'

import { createContext, useCallback, useContext, useState } from 'react'
import { getRandomTenant } from '@/utils/tenant'
import { BrandId, Tenant } from '@/interfaces/tenant.interface'

type TenantContextValue = {
  brandId: BrandId
  name: string
  locale: string
  currency: string
  isLoggedIn: boolean
  isLoading: boolean
  setTenant: (tenant: Tenant) => void
  refetch: () => void
  reset: () => void
}

const TenantContext = createContext<TenantContextValue | null>(null)

const defaultTenant: Tenant = {
  brandId: 'default',
  name: '',
  locale: 'en-US',
  currency: 'USD',
}

function loadTenant(): Tenant {
  if (typeof window === 'undefined') return defaultTenant
  try {
    const saved = localStorage.getItem('tenant')
    return saved ? JSON.parse(saved) : defaultTenant
  } catch {
    localStorage.removeItem('tenant')
    return defaultTenant
  }
}

export function TenantProvider({ children }: { children: React.ReactNode }) {
  const [tenant, setTenantState] = useState<Tenant>(loadTenant)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => typeof window !== 'undefined' && localStorage.getItem('tenant') !== null,
  )

  const refetch = () => {
    setIsLoading(true)
    getRandomTenant()
      .then((t) => {
        setTenantState(t)
        localStorage.setItem('tenant', JSON.stringify(t))
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }

  const setTenant = useCallback((t: Tenant) => {
    setTenantState(t)
    localStorage.setItem('tenant', JSON.stringify(t))
    setIsLoggedIn(true)
  }, [])

  const reset = useCallback(() => {
    setTenantState(defaultTenant)
    setIsLoggedIn(false)
    localStorage.removeItem('tenant')
  }, [])

  return (
    <TenantContext.Provider
      value={{
        ...tenant,
        isLoggedIn,
        isLoading,
        setTenant,
        refetch,
        reset,
      }}
    >
      {children}
    </TenantContext.Provider>
  )
}

export function useTenant(): TenantContextValue {
  const ctx = useContext(TenantContext)
  if (!ctx) throw new Error('useTenant must be used within TenantProvider')
  return ctx
}
