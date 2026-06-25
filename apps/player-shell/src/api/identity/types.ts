import type { Tenant } from "@/interfaces/tenant.interface";

export interface IdentityApi {
  login(email: string, password: string): Promise<{ tenant: Tenant }>;
  logout(): Promise<void>;
}
