import { apiClient } from "./client";
import { API_BASE_URL } from "./config";
import {
  InternshipItem,
  GetInternshipsParams,
  InternshipStatus,
  PaginationMeta,
} from "./types";

export const internshipsApi = {
  /**
   * Submit an internship application with resume file (public endpoint)
   */
  async submit(formData: FormData): Promise<InternshipItem> {
    const res = await apiClient.post<{ internship: InternshipItem }>(
      "/internships",
      formData
    );
    return res.data?.internship || (res.data as unknown as InternshipItem);
  },

  /**
   * Get all internship applications with filters (admin protected)
   */
  async getAll(params?: GetInternshipsParams): Promise<{
    internships: InternshipItem[];
    pagination?: PaginationMeta;
  }> {
    const res = await apiClient.get<{
      internships: InternshipItem[];
      pagination?: PaginationMeta;
    }>("/internships", params as Record<string, string | number | boolean>);

    const internships =
      res.data?.internships || (Array.isArray(res.data) ? (res.data as InternshipItem[]) : []);
    const pagination = res.data?.pagination || res.meta;

    return { internships, pagination };
  },

  /**
   * Get single internship application details (admin protected)
   */
  async getById(id: string): Promise<InternshipItem> {
    const res = await apiClient.get<{ internship: InternshipItem }>(
      `/internships/${id}`
    );
    return res.data?.internship || (res.data as unknown as InternshipItem);
  },

  /**
   * Update internship status (admin protected)
   */
  async updateStatus(
    id: string,
    status: InternshipStatus
  ): Promise<InternshipItem> {
    const res = await apiClient.patch<{ internship: InternshipItem }>(
      `/internships/${id}/status`,
      { status }
    );
    return res.data?.internship || (res.data as unknown as InternshipItem);
  },

  /**
   * Delete internship application (admin protected)
   */
  async delete(id: string): Promise<void> {
    await apiClient.delete(`/internships/${id}`);
  },

  /**
   * Get direct resume URL for download / view
   */
  getResumeUrl(id: string): string {
    return `${API_BASE_URL}/internships/${id}/resume`;
  },
};
