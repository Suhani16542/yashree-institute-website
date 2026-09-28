"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { authApi } from "@/lib/api/auth";
import { AuthUser } from "@/lib/api/types";

export function useAdminAuth(redirectTo = "/admin/login") {
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const checkAuth = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const currentUser = await authApi.getMe();
      setUser(currentUser);
      setLoading(false);
      return currentUser;
    } catch (err: any) {
      setUser(null);
      setError(err?.message || "Unauthorized");
      setLoading(false);
      if (redirectTo) {
        router.push(redirectTo);
      }
      return null;
    }
  }, [redirectTo, router]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const logout = async () => {
    try {
      await authApi.logout();
    } catch (err) {
      console.warn("Logout error:", err);
    } finally {
      setUser(null);
      router.push("/admin/login");
    }
  };

  return {
    user,
    loading,
    error,
    isAuthenticated: Boolean(user),
    refetch: checkAuth,
    logout,
  };
}
