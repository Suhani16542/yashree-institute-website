import { apiClient } from "./client";
import { EventItem, GetEventsParams, PaginationMeta } from "./types";

export const eventsApi = {
  /**
   * Get published events for public visitors
   */
  async getPublic(params?: GetEventsParams): Promise<{
    events: EventItem[];
    pagination?: PaginationMeta;
  }> {
    const res = await apiClient.get<{
      events: EventItem[];
      pagination?: PaginationMeta;
    }>("/events", params as Record<string, string | number | boolean>);

    const events =
      res.data?.events || (Array.isArray(res.data) ? (res.data as EventItem[]) : []);
    const pagination = res.data?.pagination || res.meta;

    return { events, pagination };
  },

  /**
   * Get all events (including unpublished) for admin
   */
  async getAllAdmin(params?: GetEventsParams): Promise<{
    events: EventItem[];
    pagination?: PaginationMeta;
  }> {
    const res = await apiClient.get<{
      events: EventItem[];
      pagination?: PaginationMeta;
    }>("/events/admin/all", params as Record<string, string | number | boolean>);

    const events =
      res.data?.events || (Array.isArray(res.data) ? (res.data as EventItem[]) : []);
    const pagination = res.data?.pagination || res.meta;

    return { events, pagination };
  },

  /**
   * Create an event with banner image (admin protected)
   */
  async create(body: FormData | Record<string, unknown>): Promise<EventItem> {
    const res = await apiClient.post<{ event: EventItem }>("/events", body);
    return res.data?.event || (res.data as unknown as EventItem);
  },

  /**
   * Update an existing event (admin protected)
   */
  async update(
    id: string,
    body: FormData | Record<string, unknown>
  ): Promise<EventItem> {
    const res = await apiClient.put<{ event: EventItem }>(`/events/${id}`, body);
    return res.data?.event || (res.data as unknown as EventItem);
  },

  /**
   * Delete an event by ID (admin protected)
   */
  async delete(id: string): Promise<void> {
    await apiClient.delete(`/events/${id}`);
  },
};
