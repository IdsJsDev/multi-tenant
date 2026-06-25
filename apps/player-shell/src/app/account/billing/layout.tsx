'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { useRequireAuth } from '@/hooks/useRequireAuth'
import { useTenant } from '@/context/TenantContext'

export default function BillingLayout({ children }: { children: React.ReactNode }) {
  const { logout, tenant } = useAuth()
  const { isReady, isLoggedIn } = useRequireAuth()
  const { setTenant, reset, brandId } = useTenant()
  const router = useRouter()

  useEffect(() => {
    if (tenant) setTenant(tenant)
  }, [tenant, setTenant])

  const handleLogout = () => {
    logout()
    reset()
    router.push('/')
  }

  if (!isReady || !isLoggedIn) return null

  return (
    <div className={`theme-${brandId} bg-background min-h-screen`}>
      <header className="px-6 py-4 border-b border-border flex justify-between items-center">
        <span className="font-semibold text-text-base">Player Shell</span>
        <button
          onClick={handleLogout}
          className="px-4 py-2 border border-border text-text-muted rounded-base text-sm hover:opacity-80 transition-opacity"
        >
          Logout
        </button>
      </header>
      {children}
    </div>
  )
}
