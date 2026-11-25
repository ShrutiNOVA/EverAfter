# EverAfter — Product Overview

## Vision
**EverAfter** is a private, luxury mobile-first digital wedding guest experience designed around the aesthetic of **Modern Indian Heritage** — understated luxury, romantic editorial design, and nostalgic wedding memories. Rather than functioning as a utilitarian event planner or SaaS dashboard, EverAfter feels like opening a bespoke, hand-crafted Indian wedding invitation that unfolds into a three-day celebration hub.

## Target Audience
- Invited wedding guests (family, close friends, out-of-town attendees)
- Couple & wedding hosts (future organizer dashboard phase)

## Phased Product Scope

### Phase 1 (Current Implementation)
- **Project Foundation & Architecture**: Feature-based Expo Router + TypeScript codebase, clean separation of theme, data, services, store, and UI components.
- **Design System**: Royal Ivory (`#FAF6ED`), Warm Paper (`#F1E9DA`), Deep Espresso (`#382C28`), Muted Maroon (`#783D43`), Mehendi Green (`#69765C`), Dusty Gulab (`#B98185`), and Antique Gold (`#B49A65`) paired with *Cormorant Garamond* & *DM Sans*.
- **Custom 5-Tab Navigation**: Home, Gallery, Central Vintage Camera Shutter, Updates, and Chat.
- **Personalized Home Experience**:
  - Top editorial header with personalized guest greeting (*"Namaste, Ananya"*) and notification indicator
  - Mughal-inspired arched Wedding Invitation Hero (*Sparsh & Alangita*, *Guwahati, Assam*)
  - Dynamic live countdown with celebration-state transition
  - "Up Next" miniature invitation card with Mehendi Green identity
  - "The Celebrations" 3-day interactive date selector and themed vertical timeline (9 curated events)
  - "Capture the little things" signature Disposable Camera & Polaroid Album experiences
  - "A little wedding buzz" announcement feed preview
  - "Let's celebrate" interactive couple trivia preview
  - Closing editorial blessing with lotus illustration
- **Preview & Secondary Routes**: Polished, visually consistent preview screens for Gallery, Disposable Camera, Updates, Chat, Event Details (`/events/[id]`), Games (`/games`), and Guest Profile (`/profile`).

### Future Phases (Documented for Roadmap)
- **Authentication & Guest Verification**: Private invite-code / magic-link authentication via Supabase Auth.
- **Vintage Disposable Camera & Film Rolls**: Real camera capture (`expo-camera`), 24-exposure film roll simulation, film grain LUTs, and scheduled "darkroom reveal" timers.
- **Collaborative Wedding Album**: Supabase Storage uploads, guest photo dumping, privacy controls, and curated event albums.
- **Real-Time Announcements & Reminders**: Push notifications and live host broadcasts via Supabase Realtime.
- **Interactive Wedding Games**: Live couple trivia, scavenger hunts, and leaderboard.
- **Real-Time Group Chat & Digital Guestbook**: Threaded celebration chat and handwritten/audio blessing cards.
- **Organizer Dashboard**: Host controls for schedule updates, broadcast alerts, and guest moderation.
