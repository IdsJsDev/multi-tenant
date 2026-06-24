'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { useRequireAuth } from '@/hooks/useRequireAuth'

export default function BillingLayout({ children }: { children: React.ReactNode }) {
  const { logout } = useAuth()
  const { isReady, isLoggedIn } = useRequireAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  if (!isReady || !isLoggedIn) return null

  return (
    <>
      <header className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <span className="font-semibold text-gray-900">Player Shell</span>
        <button
          onClick={handleLogout}
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-50 transition-colors"
        >
          Logout
        </button>
      </header>
      {children}
    </>
  )
}
