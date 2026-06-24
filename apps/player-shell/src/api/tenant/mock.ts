import type { Tenant } from "./types";

const tenants: Tenant[] = [
  {
    brandId: "default",
    name: "Default Corp",
    locale: "en-US",
    currency: "USD",
  },
  { brandId: "alpha", name: "Alpha Inc", locale: "en-US", currency: "USD" },
  { brandId: "beta", name: "Beta Financial", locale: "en-GB", currency: "GBP" },
  { brandId: "gamma", name: "Gamma Store", locale: "en-US", currency: "EUR" },
];

export async function fetchTenant(): Promise<Tenant> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return tenants[Math.floor(Math.random() * tenants.length)];
}
