import { ImageSource } from 'expo-image';

export type EventThemeKey = 'mehendi' | 'haldi' | 'sangeet' | 'wedding' | 'reception' | 'welcome';

export type EventStatus = 'upcoming' | 'live' | 'completed';

export interface WeddingInfo {
  id: string;
  coupleNames: string;
  brideName: string;
  groomName: string;
  displayDate: string;
  location: string;
  hashtag: string;
  timezone: string;
  startDateIso: string;
  endDateIso: string;
  closingQuote: string;
  closingSignOff: string;
  heroImage: ImageSource;
}

export interface GuestProfile {
  id: string;
  firstName: string;
  fullName: string;
  greetingSubtitle: string;
  relationship: string;
  side: 'bride' | 'groom' | 'both';
  avatar: ImageSource;
  unreadNotifications: number;
}

export interface WeddingDay {
  id: string;
  dateIso: string; // YYYY-MM-DD
  dayNumber: number;
  shortDate: string; // e.g., "13 FEB"
  weekday: string; // e.g., "Saturday"
  title: string;
}

export interface WeddingEvent {
  id: string;
  dayId: string;
  dateIso: string;
  title: string;
  subtitle: string;
  startTimeIso: string;
  endTimeIso: string;
  displayTime: string;
  venue: string;
  dressCode: string;
  description: string;
  theme: EventThemeKey;
  coverImage: ImageSource;
  highlights: string[];
}

export type AnnouncementCategory = 'schedule' | 'surprise' | 'memory' | 'logistics';

export interface Announcement {
  id: string;
  title: string;
  message: string;
  timestampLabel: string;
  createdAtIso: string;
  category: AnnouncementCategory;
  isPinned?: boolean;
}

export interface GamePreview {
  id: string;
  title: string;
  subtitle: string;
  prompt: string;
  participantCount: number;
  questionCount: number;
  ctaLabel: string;
}

export interface GalleryPreviewItem {
  id: string;
  caption: string;
  takenBy: string;
  image: ImageSource;
  rotationDeg: number;
}

export interface CountdownState {
  phase: 'before' | 'during' | 'after';
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
