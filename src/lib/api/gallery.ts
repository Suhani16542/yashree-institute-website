import { apiClient } from "./client";
import { GalleryItemData, GetGalleryParams, PaginationMeta } from "./types";

export const galleryApi = {
  /**
   * Get public gallery items with category & pagination filters
   */
  async getPublic(params?: GetGalleryParams): Promise<{
    items: GalleryItemData[];
    pagination?: PaginationMeta;
  }> {
    const res = await apiClient.get<{
      items: GalleryItemData[];
      pagination?: PaginationMeta;
    }>("/gallery", params as Record<string, string | number | boolean>);

    const items =
      res.data?.items ||
      (Array.isArray(res.data) ? (res.data as GalleryItemData[]) : []);
    const pagination = res.data?.pagination || res.meta;

    return { items, pagination };
  },

  /**
   * Upload and create a new gallery item (admin protected)
   */
  async create(formData: FormData): Promise<GalleryItemData> {
    const res = await apiClient.post<{ item: GalleryItemData }>(
      "/gallery",
      formData
    );
    return res.data?.item || (res.data as unknown as GalleryItemData);
  },

  /**
   * Delete gallery item by ID (admin protected)
   */
  async delete(id: string): Promise<void> {
    await apiClient.delete(`/gallery/${id}`);
  },
};
