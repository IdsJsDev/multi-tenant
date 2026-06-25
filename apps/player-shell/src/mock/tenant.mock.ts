import { Tenant } from '@/interfaces/tenant.interface'

export const tenantsList: Tenant[] = [
  {
    brandId: 'default',
    name: 'Default Corp',
    locale: 'en-US',
    currency: 'USD',
  },
  { brandId: 'alpha', name: 'Alpha Inc', locale: 'en-US', currency: 'USD' },
  { brandId: 'beta', name: 'Beta Financial', locale: 'de-DE', currency: 'EUR' },
  { brandId: 'gamma', name: 'Gamma Store', locale: 'uk-UA', currency: 'UAH' },
]
