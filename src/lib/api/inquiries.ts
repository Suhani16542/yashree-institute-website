import { apiClient } from "./client";
import {
  InquiryItem,
  CreateInquiryInput,
  GetInquiriesParams,
  InquiryStatus,
  PaginationMeta,
} from "./types";

export const inquiriesApi = {
  /**
   * Submit a new inquiry (public endpoint)
   */
  async submit(data: CreateInquiryInput): Promise<InquiryItem> {
    const res = await apiClient.post<{ inquiry: InquiryItem }>("/inquiries", data);
    return res.data?.inquiry || (res.data as unknown as InquiryItem);
  },

  /**
   * Get all inquiries with filters & pagination (admin protected)
   */
  async getAll(params?: GetInquiriesParams): Promise<{
    inquiries: InquiryItem[];
    pagination?: PaginationMeta;
  }> {
    const res = await apiClient.get<{
      inquiries: InquiryItem[];
      pagination?: PaginationMeta;
    }>("/inquiries", params as Record<string, string | number | boolean>);

    const inquiries = res.data?.inquiries || (Array.isArray(res.data) ? (res.data as InquiryItem[]) : []);
    const pagination = res.data?.pagination || res.meta;

    return { inquiries, pagination };
  },

  /**
   * Update inquiry status (admin protected)
   */
  async updateStatus(id: string, status: InquiryStatus): Promise<InquiryItem> {
    const res = await apiClient.patch<{ inquiry: InquiryItem }>(
      `/inquiries/${id}/status`,
      { status }
    );
    return res.data?.inquiry || (res.data as unknown as InquiryItem);
  },

  /**
   * Delete inquiry by ID (admin protected)
   */
  async delete(id: string): Promise<void> {
    await apiClient.delete(`/inquiries/${id}`);
  },
};
