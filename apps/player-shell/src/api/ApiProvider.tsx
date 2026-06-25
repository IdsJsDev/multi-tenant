'use client'

import { createContext, useContext, useMemo } from 'react'
import type { IdentityApi } from './identity/types'
import type { BillingApi } from './billing/types'
import { mockIdentityApi } from './identity/mock'
import { mockBillingApi } from './billing/mock'
import { showToast } from '@/lib/toast'

interface ApiContextValue {
  identityApi: IdentityApi
  billingApi: BillingApi
}

const ApiContext = createContext<ApiContextValue | null>(null)

function withToastOnError<T extends object>(api: T): T {
  return new Proxy(api, {
    get(target, prop) {
      const value = (target as any)[prop]
      if (typeof value !== 'function') return value
      return async (...args: any[]) => {
        try {
          return await value(...args)
        } catch (err) {
          const message = err instanceof Error ? err.message : 'Something went wrong'
          showToast(message)
          throw err
        }
      }
    },
  })
}

export function ApiProvider({ children }: { children: React.ReactNode }) {
  const value = useMemo(
    () => ({
      identityApi: withToastOnError(mockIdentityApi),
      billingApi: withToastOnError(mockBillingApi),
    }),
    [],
  )

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>
}

export function useApi(): ApiContextValue {
  const ctx = useContext(ApiContext)
  if (!ctx) throw new Error('useApi must be used within ApiProvider')
  return ctx
}
