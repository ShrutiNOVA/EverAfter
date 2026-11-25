# EverAfter — Phase 1 Task Checklist

## ✅ Completed

- [x] Inspect environment and confirm Expo TypeScript project structure
- [x] Install all dependencies — `@react-navigation/bottom-tabs`, `@expo-google-fonts/*`, `react-native-svg`, `lucide-react-native`, `expo-haptics`, `zustand`, `@tanstack/react-query`, `@supabase/supabase-js`
- [x] Create `docs/PRODUCT_OVERVIEW.md`, `docs/DESIGN_SYSTEM.md`, `docs/IMPLEMENTATION_PLAN.md`, `docs/TASKS.md`, `docs/ASSET_REPLACEMENT_GUIDE.md`
- [x] Build centralized design system (`src/theme/colors.ts`, `typography.ts`, `spacing.ts`, `index.ts`)
- [x] Create TypeScript domain types (`src/types/wedding.ts`) using `ImageSource` from `expo-image`
- [x] Create demo data (`src/data/weddingData.ts`) — 3 wedding days, 9 events, 3 announcements, game preview, gallery previews
- [x] Create service layer (`src/services/weddingService.ts`) — structured for Supabase migration in Phase 2
- [x] Create utilities (`src/utils/dateUtils.ts`) — `calculateCountdown`, `getEventStatus`, `getUpcomingEvent`, `getRelativeEventLabel`
- [x] Create Zustand store (`src/store/useWeddingStore.ts`)
- [x] Build decorative SVG components:
  - `IndianArchFrame` — Mughal arch with antique gold finial crest
  - `BotanicalIllustration` — lotus, marigold, branch, corner variants
  - `OrnamentalDivider` — antique gold diamond hairline divider
- [x] Build UI primitives:
  - `Avatar`, `PrimaryButton`, `SecondaryButton`, `SectionHeading`
  - `EmptyState`, `LoadingState`, `FadeInView` (reduced-motion aware)
- [x] Build wedding components:
  - `WeddingHeader` — EverAfter wordmark, Namaste greeting, avatar, notifications
  - `WeddingHero` — Mughal arch portrait, couple names, date, location, hashtag
  - `Countdown` — dynamic with serif numerals, timezone-aware
  - `EventCard` — miniature invitation card for "Up Next" section
  - `DateSelector` — horizontal pill selector for 3-day itinerary
  - `EventTimeline` — vertical timeline with per-event heritage color themes
  - `CameraFeatureCard` — vintage 35mm film camera aesthetic
  - `PolaroidPhotoStack` — overlapping polaroid wedding album card
  - `AnnouncementCard` — category-coded wedding buzz entries
  - `GamePreviewCard` — couple trivia with stats and Play CTA
  - `CustomTabBar` — 5-tab bar with vintage camera shutter center button
- [x] Configure root layout with Cormorant Garamond & DM Sans fonts, SafeAreaProvider, TanStack Query
- [x] Implement 5-tab navigation (home, gallery, camera, updates, chat) + events/[id], games, profile routes
- [x] Create placeholder wedding images (9 PNG files in `assets/images/wedding/`)
- [x] TypeScript check: **0 errors**
- [x] Committed and pushed to `https://github.com/ShrutiNOVA/EverAfter.git`

---

## 🚧 Phase 2 — Remaining Features

### Photography
- [ ] Replace placeholder PNG images with real licensed Indian wedding editorial photography
- [ ] See `docs/ASSET_REPLACEMENT_GUIDE.md` for the full checklist

### Backend (Supabase)
- [ ] Set up Supabase project — Auth, Database, Storage, Realtime
- [ ] Replace `weddingService` demo functions with Supabase queries
- [ ] Guest authentication (magic link or invite code)
- [ ] Real-time announcements via Supabase Realtime
- [ ] Photo upload & storage via Supabase Storage

### Features
- [ ] **Disposable Camera** — 24-frame film roll, capture, process reveal animation
- [ ] **Digital Film Rolls** — per-event photo albums
- [ ] **Personal Photo Gallery** — private guest uploads
- [ ] **Collaborative Guest Feed** — shared photos with privacy controls
- [ ] **Real-time Group Chat** — celebration channels (Team Bride, Team Groom, Logistics)
- [ ] **Digital Guestbook** — handwritten blessing cards
- [ ] **Wedding Games** — full couple trivia engine
- [ ] **Event Detail Screen** — full invitation layout with venue map
- [ ] **Guest Profile Screen** — RSVP status, relationship, photo gallery
- [ ] **Wedding Organizer Dashboard** — host-side admin panel
- [ ] **Push Notifications** — event reminders, announcements
- [ ] **Fun Gatherings** — spontaneous group activity coordination
