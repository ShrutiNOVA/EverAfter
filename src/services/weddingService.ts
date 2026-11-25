import {
  demoAnnouncements,
  demoGalleryPreviews,
  demoGamePreview,
  demoGuestProfile,
  demoWeddingDays,
  demoWeddingEvents,
  demoWeddingInfo,
} from '@/data/weddingData';
import {
  Announcement,
  GalleryPreviewItem,
  GamePreview,
  GuestProfile,
  WeddingDay,
  WeddingEvent,
  WeddingInfo,
} from '@/types/wedding';

export interface HomeDashboardPayload {
  wedding: WeddingInfo;
  guest: GuestProfile;
  days: WeddingDay[];
  events: WeddingEvent[];
  announcements: Announcement[];
  gamePreview: GamePreview;
  galleryPreviews: GalleryPreviewItem[];
}

/**
 * Data access layer structured for seamless migration to Supabase queries.
 * In Phase 2, each method will query Supabase tables with TanStack Query caching.
 */
export const weddingService = {
  async getHomeDashboard(): Promise<HomeDashboardPayload> {
    return {
      wedding: demoWeddingInfo,
      guest: demoGuestProfile,
      days: demoWeddingDays,
      events: demoWeddingEvents,
      announcements: demoAnnouncements,
      gamePreview: demoGamePreview,
      galleryPreviews: demoGalleryPreviews,
    };
  },

  async getEventById(eventId: string): Promise<WeddingEvent | undefined> {
    return demoWeddingEvents.find((ev) => ev.id === eventId);
  },

  async getAnnouncements(): Promise<Announcement[]> {
    return demoAnnouncements;
  },
};
