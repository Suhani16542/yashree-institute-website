/**
 * Shared API Types for Yashree Institute Frontend
 */

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  meta?: PaginationMeta;
  errors?: unknown[];
}

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// ================= AUTH =================
export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "SUPERADMIN" | string;
  createdAt?: string;
  updatedAt?: string;
}

export interface LoginResponseData {
  user: AuthUser;
  token: string;
}

// ================= INQUIRIES =================
export type InquiryStatus =
  | "NEW"
  | "CONTACTED"
  | "FOLLOW_UP"
  | "CONVERTED"
  | "CLOSED";

export interface InquiryItem {
  id: string;
  _id?: string;
  name: string;
  phone: string;
  course: string;
  mode: string;
  message?: string | null;
  status: InquiryStatus;
  createdAt: string;
  updatedAt?: string;
}

export interface CreateInquiryInput {
  name: string;
  phone: string;
  course: string;
  mode: string;
  message?: string;
}

export interface GetInquiriesParams {
  search?: string;
  status?: string;
  page?: number;
  limit?: number;
  sortBy?: "createdAt" | "name" | "status";
  sortOrder?: "asc" | "desc";
}

// ================= INTERNSHIPS =================
export type InternshipStatus =
  | "NEW"
  | "REVIEWING"
  | "SHORTLISTED"
  | "INTERVIEW"
  | "SELECTED"
  | "REJECTED"
  | "CLOSED";

export interface InternshipItem {
  id: string;
  _id?: string;
  fullName: string;
  phone: string;
  email: string;
  city: string;
  education: string;
  areaOfInterest: string;
  preferredArea: string;
  message?: string | null;
  resumeUrl?: string | null;
  resumePublicId?: string | null;
  resumeOriginalName?: string | null;
  resumeMimeType?: string | null;
  resumeSize?: number | null;
  status: InternshipStatus;
  createdAt: string;
  updatedAt?: string;
}

export interface GetInternshipsParams {
  search?: string;
  status?: string;
  page?: number;
  limit?: number;
  sortBy?: "createdAt" | "fullName" | "status";
  sortOrder?: "asc" | "desc";
}

// ================= EVENTS =================
export interface EventItem {
  id: string;
  _id?: string;
  title: string;
  slug?: string;
  description: string;
  category: string;
  eventDate: string;
  location: string;
  bannerImage?: string | null;
  bannerImageUrl?: string | null;
  bannerImagePublicId?: string | null;
  published: boolean;
  featured: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface GetEventsParams {
  category?: string;
  featured?: boolean;
  page?: number;
  limit?: number;
}

// ================= GALLERY =================
export interface GalleryItemData {
  id: string;
  _id?: string;
  image?: string;
  imageUrl?: string;
  imagePublicId?: string | null;
  category: string;
  caption?: string | null;
  featured: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface GetGalleryParams {
  category?: string;
  featured?: boolean;
  page?: number;
  limit?: number;
}

// ================= ACADEMY VIDEOS =================
export interface AcademyVideoItem {
  id: string;
  _id?: string;
  title: string;
  videoUrl?: string | null;
  videoPublicId?: string | null;
  thumbnailUrl?: string | null;
  thumbnailPublicId?: string | null;
  category: string;
  duration?: string | null;
  published: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface GetAcademyVideosParams {
  category?: string;
  page?: number;
  limit?: number;
}
