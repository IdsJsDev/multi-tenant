'use client'

import { ErrorMessage } from '@/components/ErrorMessage'

export default function BillingError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return <ErrorMessage message={error.message} onRetry={reset} />
}
