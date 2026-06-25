"use client";

import { createContext, useContext, useMemo } from "react";
import type { IdentityApi } from "./identity/types";
import type { BillingApi } from "./billing/types";
import { mockIdentityApi } from "./identity/mock";
import { mockBillingApi } from "./billing/mock";

interface ApiContextValue {
  identityApi: IdentityApi;
  billingApi: BillingApi;
}

const ApiContext = createContext<ApiContextValue | null>(null);

export function ApiProvider({ children }: { children: React.ReactNode }) {
  const value = useMemo(
    () => ({
      identityApi: mockIdentityApi,
      billingApi: mockBillingApi,
    }),
    [],
  );

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}

export function useApi(): ApiContextValue {
  const ctx = useContext(ApiContext);
  if (!ctx) throw new Error("useApi must be used within ApiProvider");
  return ctx;
}
