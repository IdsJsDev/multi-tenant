import type { BillingItem } from "@/interfaces/billing.interface";

export interface BillingApi {
  getBilling(signal?: AbortSignal): Promise<BillingItem | null>;
}
