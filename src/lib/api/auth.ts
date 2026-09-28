import { apiClient } from "./client";
import { AuthUser, LoginResponseData } from "./types";

export const authApi = {
  /**
   * Login admin user. Backend sets HTTP-only session cookie.
   */
  async login(credentials: { email: string; password: string }): Promise<LoginResponseData> {
    const res = await apiClient.post<LoginResponseData>("/auth/login", credentials);
    if (!res.data) {
      throw new Error(res.message || "Failed to log in");
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
    return res.data.user;
  },

  /**
   * Log out admin user and clear HTTP-only session cookie.
   */
  async logout(): Promise<void> {
    await apiClient.post("/auth/logout");
  },
};
