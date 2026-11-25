# EverAfter — Phase 1 Task Checklist

- [x] Inspect environment and initialize Expo TypeScript project
- [x] Install core dependencies (`react-native-svg`, `lucide-react-native`, `expo-haptics`, `@expo-google-fonts/*`, `zustand`, `@tanstack/react-query`, `@supabase/supabase-js`)
- [x] Create `docs/PRODUCT_OVERVIEW.md`, `docs/DESIGN_SYSTEM.md`, `docs/IMPLEMENTATION_PLAN.md`, and `docs/TASKS.md`
- [ ] Generate local Indian wedding editorial photography assets & write `docs/ASSET_REPLACEMENT_GUIDE.md`
- [ ] Build centralized design system (`src/theme/*`)
- [ ] Create TypeScript domain types (`src/types/wedding.ts`), demo data (`src/data/weddingData.ts`), service layer (`src/services/weddingService.ts`), utilities (`src/utils/dateUtils.ts`), and store (`src/store/useWeddingStore.ts`)
- [ ] Build decorative SVG components (`IndianArchFrame`, `BotanicalIllustration`, `OrnamentalDivider`)
- [ ] Build UI primitives (`Avatar`, `PrimaryButton`, `SecondaryButton`, `SectionHeading`, `EmptyState`, `LoadingState`, `FadeInView`)
- [ ] Build wedding components (`WeddingHeader`, `WeddingHero`, `Countdown`, `EventCard`, `DateSelector`, `EventTimeline`, `CameraFeatureCard`, `PolaroidPhotoStack`, `AnnouncementCard`, `GamePreviewCard`, `CustomTabBar`)
- [ ] Configure root layout with Cormorant Garamond & DM Sans fonts, SafeAreaProvider, and TanStack Query provider
- [ ] Implement 5-tab navigation (`home`, `gallery`, `camera`, `updates`, `chat`) + secondary routes (`events/[id]`, `games/index`, `profile/index`)
- [ ] Run `npx tsc --noEmit`, `npm run lint`, and visually inspect the rendered Home screen on Expo Web
