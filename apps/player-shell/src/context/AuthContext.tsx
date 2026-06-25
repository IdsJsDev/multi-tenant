'use client'

import { createContext, useCallback, useContext } from 'react'
import { useIdentityApi } from '@/api/identity/useIdentityApi'
import { useTenant } from './TenantContext'

type AuthContextValue = {
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { login: identityLogin } = useIdentityApi()
  const { setTenant, reset } = useTenant()

  const login = useCallback(
    async (email: string, password: string) => {
      const { tenant } = await identityLogin(email, password)
      setTenant(tenant)
    },
    [identityLogin, setTenant],
  )

  const logout = useCallback(() => {
    reset()
  }, [reset])

  return <AuthContext.Provider value={{ login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
