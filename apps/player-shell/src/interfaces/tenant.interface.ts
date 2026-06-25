export type BrandId = "default" | "alpha" | "beta" | "gamma";

export interface Tenant {
  brandId: BrandId;
  name: string;
  locale: string;
  currency: string;
}
