'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import type { Tenant } from '@/interfaces/tenant.interface'

type AuthContextValue = {
  isLoggedIn: boolean
  isReady: boolean
  tenant: Tenant | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [tenant, setTenant] = useState<Tenant | null>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsReady(true)
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const data = await res.json()
    setTenant(data.tenant)
  }, [])

  const logout = useCallback(() => {
    setTenant(null)
  }, [])

  return (
    <AuthContext.Provider value={{ isLoggedIn: tenant !== null, isReady, tenant, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
