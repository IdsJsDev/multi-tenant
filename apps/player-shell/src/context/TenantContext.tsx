"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { getRandomTenant } from "@/utils/tenant";
import { BrandId, Tenant } from "@/interfaces/tenant.interface";

type TenantContextValue = {
  brandId: BrandId;
  name: string;
  locale: string;
  currency: string;
  isLoading: boolean;
  error: string | null;
  setTenant: (tenant: Tenant) => void;
  setError: (error: string) => void;
  refetch: () => void;
  reset: () => void;
};

const TenantContext = createContext<TenantContextValue | null>(null);

const defaultTenant: Tenant = {
  brandId: "default",
  name: "",
  locale: "en-US",
  currency: "USD",
};

function loadTenant(): Tenant {
  if (typeof window === "undefined") return defaultTenant;
  const saved = localStorage.getItem("tenant");
  return saved ? JSON.parse(saved) : defaultTenant;
}

export function TenantProvider({ children }: { children: React.ReactNode }) {
  const [tenant, setTenantState] = useState<Tenant>(loadTenant);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setErrorState] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("tenant", JSON.stringify(tenant));
  }, [tenant]);

  const refetch = () => {
    setIsLoading(true);
    setErrorState(null);
    getRandomTenant()
      .then((t) => {
        setTenantState(t);
        setIsLoading(false);
      })
      .catch(() => {
        setErrorState("Failed to load tenant data");
        setIsLoading(false);
      });
  };

  const setTenant = useCallback((t: Tenant) => {
    setTenantState(t);
    setIsLoading(false);
  }, []);

  const setError = useCallback((message: string) => {
    setErrorState(message);
    setIsLoading(false);
  }, []);

  const reset = useCallback(() => {
    setTenantState(defaultTenant);
    setErrorState(null);
    setIsLoading(false);
  }, []);

  return (
    <TenantContext.Provider
      value={{
        ...tenant,
        isLoading,
        error,
        setTenant,
        setError,
        refetch,
        reset,
      }}
    >
      {children}
    </TenantContext.Provider>
  );
}

export function useTenant(): TenantContextValue {
  const ctx = useContext(TenantContext);
  if (!ctx) throw new Error("useTenant must be used within TenantProvider");
  return ctx;
}
