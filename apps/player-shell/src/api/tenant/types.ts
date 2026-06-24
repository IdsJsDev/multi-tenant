export type BrandId = 'default' | 'alpha' | 'beta' | 'gamma'

export type Tenant = {
  brandId: BrandId
  name: string
  locale: string
  currency: string
}
