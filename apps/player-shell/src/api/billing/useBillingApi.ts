import { useApi } from "../ApiProvider";
import type { BillingApi } from "./types";

export function useBillingApi(): BillingApi {
  return useApi().billingApi;
}
