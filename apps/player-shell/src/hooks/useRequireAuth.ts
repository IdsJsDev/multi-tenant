import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useTenant } from '@/context/TenantContext'

export function useRequireAuth() {
  const { isLoggedIn } = useTenant()
  const router = useRouter()

  useEffect(() => {
    if (!isLoggedIn) router.replace('/')
  }, [isLoggedIn, router])

  return isLoggedIn
}
