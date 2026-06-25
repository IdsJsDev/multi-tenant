"use client";

import { Tenant } from "@/interfaces/tenant.interface";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useIdentityApi } from "@/api/identity/useIdentityApi";

type AuthContextValue = {
  isLoggedIn: boolean;
  isReady: boolean;
  tenant: Tenant | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { login: identityLogin } = useIdentityApi();
  const [tenant, setTenant] = useState<Tenant | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("tenant");
    if (saved) {
      setTenant(JSON.parse(saved));
    }
    setIsReady(true);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const { tenant } = await identityLogin(email, password);
    setTenant(tenant);
    localStorage.setItem("tenant", JSON.stringify(tenant));
  }, [identityLogin]);

  const logout = useCallback(() => {
    setTenant(null);
    localStorage.removeItem("tenant");
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: tenant !== null, isReady, tenant, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
