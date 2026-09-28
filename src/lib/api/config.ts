/**
 * Centralized API Configuration for Yashree Institute Frontend
 */

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

// Extract backend host URL without /api/v1 (e.g. http://localhost:5000)
export const BACKEND_ORIGIN = API_BASE_URL.replace(/\/api\/v1\/?$/, "");

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
