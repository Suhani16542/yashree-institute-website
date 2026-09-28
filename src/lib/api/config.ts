/**
 * Centralized API Configuration for Yashree Institute Frontend
 */

const rawUrl = (
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"
).trim();

// Extract clean backend host URL without trailing slash or /api/v1 (e.g. https://yashree-backend.onrender.com or http://localhost:5000)
export const BACKEND_ORIGIN = rawUrl
  .replace(/\/api\/v1\/?$/, "")
  .replace(/\/+$/, "");

// Centralized API Base URL (guaranteed to include /api/v1 exactly once)
export const API_BASE_URL = `${BACKEND_ORIGIN}/api/v1`;

/**
 * Resolves an asset URL (image, video, thumbnail) to a full URL if it is a relative backend path.
 * Handles local backend uploads (`/uploads/...`) as well as external Cloudinary/HTTP URLs.
 */
export function resolveAssetUrl(url?: string | null, fallback = ""): string {
  if (!url) return fallback;
  const trimmed = url.trim();
  if (!trimmed) return fallback;

  // Already a full external URL or data URI
  if (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("data:")
  ) {
    return trimmed;
  }

  // Relative backend upload path
  if (trimmed.startsWith("/uploads/")) {
    return `${BACKEND_ORIGIN}${trimmed}`;
  }

  // Frontend public static asset (starts with /images/, /videos/, etc.)
  if (trimmed.startsWith("/")) {
    return trimmed;
  }

  return `${BACKEND_ORIGIN}/${trimmed}`;
}
