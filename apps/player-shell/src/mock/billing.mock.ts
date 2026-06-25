import type { BillingItem } from '@/interfaces/billing.interface'

export const billingList: (BillingItem | null)[] = [
  {
    id: '1',
    description: 'Pro plan — June 2026',
    amount: 49.99,
    currency: 'USD',
    date: '2026-06-01',
    status: 'paid',
  },
  {
    id: '2',
    description: 'Min plan — May 2025',
    amount: 9.99,
    currency: 'USD',
    date: '2025-05-01',
    status: 'paid',
  },
  {
    id: '3',
    description: 'Max plan — April 2026',
    amount: 149.99,
    currency: 'USD',
    date: '2026-04-01',
    status: 'overdue',
  },
  null,
]
