import { Tenant } from "@/interfaces/tenant.interface";
import { tenantsList } from "@/mock/tenant.mock";

export async function getRandomTenant(): Promise<Tenant> {
  return tenantsList[Math.floor(Math.random() * tenantsList.length)];
}
