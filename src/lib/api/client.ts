/**
 * Centralized API HTTP Client for Yashree Institute
 */

import { API_BASE_URL } from "./config";
import { ApiResponse } from "./types";

export class ApiError extends Error {
  public statusCode: number;
  public errors: unknown[];

  constructor(statusCode: number, message: string, errors: unknown[] = []) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
    this.errors = errors;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/**
 * Standard fetch options with credentials: "include" for HTTP-only cookie authentication.
 */
interface RequestOptions extends RequestInit {
  params?: Record<string, string | number | boolean | undefined | null>;
}

async function request<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<ApiResponse<T>> {
  const { params, headers, ...customConfig } = options;

  let url = endpoint.startsWith("http")
    ? endpoint
    : `${API_BASE_URL}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;

  if (params) {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        query.append(key, String(value));
      }
    });
    const queryString = query.toString();
    if (queryString) {
      url += (url.includes("?") ? "&" : "?") + queryString;
    }
  }

  const defaultHeaders: HeadersInit = {
    Accept: "application/json",
  };

  // Don't set Content-Type if sending FormData (browser automatically sets boundary)
  if (!(customConfig.body instanceof FormData)) {
    defaultHeaders["Content-Type"] = "application/json";
  }

  const config: RequestInit = {
    ...customConfig,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    credentials: "include", // Required for HTTP-only session cookies across requests
  };

  try {
    const response = await fetch(url, config);

    let data: any;
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      const text = await response.text();
      try {
        data = JSON.parse(text);
      } catch {
        data = { success: response.ok, message: text };
      }
    }

    if (!response.ok) {
      const errorMessage =
        data?.message ||
        data?.errors?.[0]?.message ||
        data?.errors?.[0] ||
        `Request failed with status ${response.status}`;
      const errors = data?.errors || [];
      throw new ApiError(response.status, String(errorMessage), errors);
    }

    return data as ApiResponse<T>;
  } catch (error: any) {
    if (error instanceof ApiError) {
      throw error;
    }

    // Network error or unexpected failure
    const isNetworkError =
      error?.name === "TypeError" || error?.message?.includes("fetch");
    const message = isNetworkError
      ? "Unable to connect to Yashree server. Please check your internet connection or try again later."
      : error?.message || "An unexpected error occurred.";

    throw new ApiError(500, message);
  }
}

export const apiClient = {
  get: <T>(endpoint: string, params?: RequestOptions["params"], options?: RequestOptions) =>
    request<T>(endpoint, { method: "GET", params, ...options }),

  post: <T>(endpoint: string, body?: unknown, options?: RequestOptions) =>
    request<T>(endpoint, {
      method: "POST",
      body: body instanceof FormData ? body : JSON.stringify(body),
      ...options,
    }),

  put: <T>(endpoint: string, body?: unknown, options?: RequestOptions) =>
    request<T>(endpoint, {
      method: "PUT",
      body: body instanceof FormData ? body : JSON.stringify(body),
      ...options,
    }),

  patch: <T>(endpoint: string, body?: unknown, options?: RequestOptions) =>
    request<T>(endpoint, {
      method: "PATCH",
      body: body instanceof FormData ? body : JSON.stringify(body),
      ...options,
    }),

  delete: <T>(endpoint: string, params?: RequestOptions["params"], options?: RequestOptions) =>
    request<T>(endpoint, { method: "DELETE", params, ...options }),
};
