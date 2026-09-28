import { apiClient } from "./client";
import {
  AcademyVideoItem,
  GetAcademyVideosParams,
  PaginationMeta,
} from "./types";

export const academyVideosApi = {
  /**
   * Get public academy videos with filters
   */
  async getPublic(params?: GetAcademyVideosParams): Promise<{
    videos: AcademyVideoItem[];
    pagination?: PaginationMeta;
  }> {
    const res = await apiClient.get<{
      videos: AcademyVideoItem[];
      pagination?: PaginationMeta;
    }>("/academy-videos", params as Record<string, string | number | boolean>);

    const videos =
      res.data?.videos ||
      (Array.isArray(res.data) ? (res.data as AcademyVideoItem[]) : []);
    const pagination = res.data?.pagination || res.meta;

    return { videos, pagination };
  },

  /**
   * Create an academy video item (admin protected)
   */
  async create(
    body: FormData | Record<string, unknown>
  ): Promise<AcademyVideoItem> {
    const res = await apiClient.post<{ video: AcademyVideoItem }>(
      "/academy-videos",
      body
    );
    return res.data?.video || (res.data as unknown as AcademyVideoItem);
  },

  /**
   * Delete an academy video item by ID (admin protected)
   */
  async delete(id: string): Promise<void> {
    await apiClient.delete(`/academy-videos/${id}`);
  },
};
