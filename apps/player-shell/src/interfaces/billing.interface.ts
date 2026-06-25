export interface BillingItem {
  id: string
  description: string
  amount: number
  currency: string
  date: string
  status: 'paid' | 'pending' | 'overdue'
}
