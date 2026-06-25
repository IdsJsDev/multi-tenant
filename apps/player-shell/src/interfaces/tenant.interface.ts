export type BrandId = 'default' | 'alpha' | 'beta' | 'gamma'

export interface Tenant {
  brandId: 'default' | 'alpha' | 'beta' | 'gamma'
  name: string
  locale: string
  currency: string
}
