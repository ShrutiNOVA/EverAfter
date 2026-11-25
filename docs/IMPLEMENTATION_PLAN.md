# EverAfter — Implementation Plan (Phase 1)

## Architecture Overview
The project uses Expo SDK 58 with Expo Router (`src/app/`) and a modular `src/` architecture:
- `src/theme/`: Centralized color, typography, spacing, and animation tokens.
- `src/types/`: Strict TypeScript interfaces for Wedding, Guest, Event, Announcement, GamePreview, and GalleryPreview.
- `src/data/`: Rich, typed demonstration data for Sparsh & Alangita's 3-day celebration in Guwahati, Assam.
- `src/services/`: Clean async repository layer (`weddingService.ts`) structured so Supabase queries can replace mock data without touching UI components.
- `src/store/`: Zustand store (`useWeddingStore.ts`) for selected itinerary date, active guest state, and notification read state.
- `src/utils/`: Timezone-aware countdown calculation, upcoming event resolution, and date formatting helpers.
- `src/components/decorative/`: Custom SVG Mughal arch (`IndianArchFrame`), botanical/lotus/marigold illustrations (`BotanicalIllustration`), and hairline dividers (`OrnamentalDivider`).
- `src/components/ui/`: `Avatar`, `PrimaryButton`, `SecondaryButton`, `SectionHeading`, `EmptyState`, `LoadingState`, and `FadeInView`.
- `src/components/wedding/`: `WeddingHeader`, `WeddingHero`, `Countdown`, `EventCard`, `DateSelector`, `EventTimeline`, `CameraFeatureCard`, `PolaroidPhotoStack`, `AnnouncementCard`, `GamePreviewCard`, and `CustomTabBar`.

## Verification Plan
1. `npx tsc --noEmit` — zero TypeScript errors.
2. `npm run lint` — zero ESLint warnings/errors.
3. Visual inspection via `expo start --web` in a headless/live browser preview to verify layout, typography, Indian heritage balance, responsive mobile proportions, and zero broken images or horizontal overflow.
