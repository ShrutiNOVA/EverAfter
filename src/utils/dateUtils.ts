import { CountdownState, EventStatus, WeddingEvent } from '@/types/wedding';

/**
 * Computes countdown state relative to wedding start & end ISO timestamps.
 */
export function calculateCountdown(
  startDateIso: string,
  endDateIso: string,
  now: Date = new Date()
): CountdownState {
  const startMs = new Date(startDateIso).getTime();
  const endMs = new Date(endDateIso).getTime();
  const nowMs = now.getTime();

  if (nowMs >= endMs) {
    return { phase: 'after', days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  if (nowMs >= startMs) {
    return { phase: 'during', days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const diffMs = Math.max(0, startMs - nowMs);
  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { phase: 'before', days, hours, minutes, seconds };
}

/**
 * Pads two digits for editorial countdown numerals (e.g., 08).
 */
export function padTwo(value: number): string {
  return String(Math.max(0, value)).padStart(2, '0');
}

/**
 * Resolves the status of a single wedding event relative to `now`.
 */
export function getEventStatus(event: WeddingEvent, now: Date = new Date()): EventStatus {
  const nowMs = now.getTime();
  const startMs = new Date(event.startTimeIso).getTime();
  const endMs = new Date(event.endTimeIso).getTime();

  if (nowMs >= startMs && nowMs <= endMs) {
    return 'live';
  }
  if (nowMs > endMs) {
    return 'completed';
  }
  return 'upcoming';
}

/**
 * Returns the next upcoming or currently live event sorted chronologically.
 */
export function getUpcomingEvent(
  events: WeddingEvent[],
  now: Date = new Date()
): WeddingEvent | null {
  if (!events.length) return null;

  const sorted = [...events].sort(
    (a, b) => new Date(a.startTimeIso).getTime() - new Date(b.startTimeIso).getTime()
  );

  const nowMs = now.getTime();
  const activeOrNext = sorted.find((ev) => new Date(ev.endTimeIso).getTime() > nowMs);
  return activeOrNext ?? sorted[sorted.length - 1];
}

/**
 * Returns a human-readable relative label for an upcoming event.
 */
export function getRelativeEventLabel(event: WeddingEvent, now: Date = new Date()): string {
  const status = getEventStatus(event, now);
  if (status === 'live') return 'Happening now';
  if (status === 'completed') return 'Memories captured';

  const startMs = new Date(event.startTimeIso).getTime();
  const diffHours = Math.round((startMs - now.getTime()) / (1000 * 60 * 60));

  if (diffHours < 1) return 'Starting soon';
  if (diffHours < 24) return `In ${diffHours} hours`;

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays === 1) return 'Tomorrow';
  return `In ${diffDays} days`;
}
