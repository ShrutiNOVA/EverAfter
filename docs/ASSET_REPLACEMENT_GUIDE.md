# Asset Replacement Guide

All photography in EverAfter is stored locally under `assets/images/wedding/` so the app renders offline with zero broken remote URLs.

## Current Photography Assets

| File | Usage | Recommended Aspect Ratio |
|---|---|---|
| `couple-hero.png` | Home Invitation Hero (inside Mughal Arch) | 3:4 Portrait |
| `event-mehendi.png` | Up Next & Mehendi / Welcome Lunch events | 4:3 Landscape |
| `event-haldi.png` | Haldi Ceremony & Family Games | 4:3 Landscape |
| `event-sangeet.png` | Sangeet Night & Cocktail Evening | 4:3 Landscape |
| `event-wedding.png` | Baraat & Wedding Ceremony | 4:3 Landscape |
| `event-reception.png` | Grand Reception | 4:3 Landscape |
| `guest-avatar.png` | Current Guest Profile Avatar | 1:1 Square |
| `polaroid-1.png` | Polaroid Photo Stack (Left) | 1:1 Square |
| `polaroid-2.png` | Polaroid Photo Stack (Right) | 1:1 Square |

## How to Replace with Real Wedding Photos
1. Export your final photographs in `.jpg`, `.png`, or `.webp` format (recommended max width `1200px` for fast mobile loading).
2. Replace the corresponding file in `assets/images/wedding/` keeping the exact filename, or update the `require(...)` map in `src/data/weddingData.ts`.
3. Restart the Metro bundler (`npx expo start -c`).
