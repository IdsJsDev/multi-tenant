import type { BillingApi } from './types'

export const mockBillingApi: BillingApi = {
  async getBilling(signal) {
    const res = await fetch('/api/billing', { signal })
    const data = await res.json()
    return data.billing
  },
}
