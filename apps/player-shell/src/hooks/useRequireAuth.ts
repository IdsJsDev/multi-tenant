import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

// Redirects to home if the user is not authenticated.
// In production this would be handled by Next.js middleware with cookies.
export function useRequireAuth() {
  const { isLoggedIn, isReady } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isReady && !isLoggedIn) router.replace('/')
  }, [isReady, isLoggedIn, router])

  return { isReady, isLoggedIn }
}
