import { apiClient } from "./client";
import { AuthUser, LoginResponseData } from "./types";

export const AUTH_TOKEN_KEY = "yashree_admin_token";
export const AUTH_USER_KEY = "yashree_admin_user";

export const authApi = {
  /**
   * Login admin user. Persists returned JWT token and user profile in browser localStorage.
   */
  async login(credentials: { email: string; password: string }): Promise<LoginResponseData> {
    const res = await apiClient.post<LoginResponseData>("/auth/login", credentials);
    if (!res.data) {
      throw new Error(res.message || "Failed to log in");
    }

    if (typeof window !== "undefined") {
      try {
        if (res.data.token) {
          localStorage.setItem(AUTH_TOKEN_KEY, res.data.token);
        }
        if (res.data.user) {
          localStorage.setItem(AUTH_USER_KEY, JSON.stringify(res.data.user));
        }
      } catch {
        // Safe fallback if localStorage is disabled or restricted
      }
    }

    return res.data;
  },

  /**
   * Get currently authenticated admin user profile.
   */
  async getMe(): Promise<AuthUser> {
    const res = await apiClient.get<{ user: AuthUser }>("/auth/me");
    if (!res.data?.user) {
      throw new Error(res.message || "Failed to retrieve user profile");
    }

    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(AUTH_USER_KEY, JSON.stringify(res.data.user));
      } catch {
        // Safe fallback
      }
    }

    return res.data.user;
  },

  /**
   * Log out admin user, notify backend, and clear stored authentication tokens.
   */
  async logout(): Promise<void> {
    try {
      await apiClient.post("/auth/logout");
    } catch {
      // Backend logout failure should not prevent local session cleanup
    } finally {
      if (typeof window !== "undefined") {
        try {
          localStorage.removeItem(AUTH_TOKEN_KEY);
          localStorage.removeItem(AUTH_USER_KEY);
        } catch {
          // Safe fallback
        }
      }
    }
  },

  /**
   * Read stored token from localStorage (SSR-safe)
   */
  getToken(): string | null {
    if (typeof window === "undefined") return null;
    try {
      return localStorage.getItem(AUTH_TOKEN_KEY);
    } catch {
      return null;
    }
  },

  /**
   * Clear all locally stored authentication data
   */
  clearAuth(): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.removeItem(AUTH_TOKEN_KEY);
      localStorage.removeItem(AUTH_USER_KEY);
    } catch {
      // Safe fallback
    }
  },
};
