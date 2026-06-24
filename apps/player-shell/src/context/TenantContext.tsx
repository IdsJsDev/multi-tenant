'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { Tenant, BrandId } from '@/api/tenant/types'
import { fetchTenant } from '@/api/tenant/mock'

type TenantContextValue = {
  brandId: BrandId
  name: string
  locale: string
  currency: string
  isLoading: boolean
  error: string | null
  setTenant: (tenant: Tenant) => void
  setError: (error: string) => void
  refetch: () => void
}

const TenantContext = createContext<TenantContextValue | null>(null)

export function TenantProvider({ children }: { children: React.ReactNode }) {
  const [tenant, setTenantState] = useState<Tenant>({
    brandId: 'default',
    name: '',
    locale: 'en-US',
    currency: 'USD',
  })
  const [isLoading, setIsLoading] = useState(true)
  const [error, setErrorState] = useState<string | null>(null)

  const refetch = () => {
    setIsLoading(true)
    setErrorState(null)
    fetchTenant()
      .then(t => {
        setTenantState(t)
        setIsLoading(false)
      })
      .catch(() => {
        setErrorState('Failed to load tenant data')
        setIsLoading(false)
      })
  }

  useEffect(() => { refetch() }, [])

  const setTenant = (t: Tenant) => {
    setTenantState(t)
    setIsLoading(false)
  }

  const setError = (message: string) => {
    setErrorState(message)
    setIsLoading(false)
  }

  return (
    <TenantContext.Provider value={{ ...tenant, isLoading, error, setTenant, setError, refetch }}>
      {children}
    </TenantContext.Provider>
  )
}

export function useTenant(): TenantContextValue {
  const ctx = useContext(TenantContext)
  if (!ctx) throw new Error('useTenant must be used within TenantProvider')
  return ctx
}
