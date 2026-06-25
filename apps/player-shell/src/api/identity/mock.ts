import type { IdentityApi } from "./types";

export const mockIdentityApi: IdentityApi = {
  async login(email: string, password: string) {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return res.json();
  },

  async logout() {},
};
