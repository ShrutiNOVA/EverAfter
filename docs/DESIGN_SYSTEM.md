# EverAfter — Design System

## Creative Direction
**Modern Indian Heritage** — 80% modern, clean editorial minimalism; 20% selective, refined Indian cultural motifs (Mughal arches, lotus & marigold botanicals, antique gold hairlines, warm handmade paper textures).

## Color Palette (`src/theme/colors.ts`)

| Token | Hex | Role |
|---|---|---|
| `royalIvory` | `#FAF6ED` | Dominant application canvas |
| `warmPaper` | `#F1E9DA` | Secondary cards, timeline surfaces, warm containers |
| `antiqueGold` | `#B49A65` | Hairline borders, ornamental dividers, subtle accents |
| `dustyGulab` | `#B98185` | Soft floral accents, secondary romantic highlights |
| `mehendiGreen` | `#69765C` | Selected actions, active filters, natural accents |
| `mutedMaroon` | `#783D43` | Romantic emphasis, active tab state, primary CTAs |
| `deepEspresso` | `#382C28` | Primary typography & high-contrast ink |
| `mutedTaupe` | `#85766D` | Supporting labels, timestamps, metadata |
| `pureWhite` | `#FFFFFF` | Polaroid frames, crisp contrast surfaces |

### Event-Specific Visual Themes
Each ceremony carries a subtle, harmonious palette without breaking the Royal Ivory canvas:
- **Haldi**: Turmeric Gold (`#D4A24C`), Marigold Warmth (`#FBF3DF`), Deep Espresso
- **Mehendi**: Mehendi Green (`#69765C`), Dusty Gulab (`#B98185`), Soft Sage (`#EEF2EA`)
- **Sangeet**: Muted Plum (`#5E3A4C`), Champagne (`#F4EBE1`), Antique Gold
- **Wedding**: Muted Maroon (`#783D43`), Antique Gold (`#B49A65`), Royal Ivory
- **Reception**: Champagne (`#EFE5D5`), Soft Rose (`#B98185`), Deep Espresso

## Typography (`src/theme/typography.ts`)
- **Cormorant Garamond** (`Regular`, `Medium`, `SemiBold`, `Italic`, `SemiBoldItalic`): Editorial headings, couple names, countdown numerals, emotional quotes.
- **DM Sans** (`Regular`, `Medium`, `SemiBold`): Body copy, navigation labels, metadata, buttons.

### Scale
- `coupleNames`: 44px (Italic)
- `heroHeading`: 34px
- `sectionHeading`: 26px
- `eventTitle`: 22px
- `body`: 15px
- `label`: 13px
- `editorialMicro`: 10.5px (uppercase, `letterSpacing: 1.8`)

## Spacing & Layout (`src/theme/spacing.ts`)
- **8-point grid**: `xs: 4`, `sm: 8`, `md: 16`, `lg: 24`, `xl: 32`, `2xl: 48`, `3xl: 64`
- **Screen horizontal margin**: `24px` (`spacing.lg`)
- **Controlled radii**: `none: 0`, `xs: 4`, `sm: 8`, `md: 12`, `lg: 16`, `pill: 999`
- **No heavy drop shadows or glassmorphism**: Depth is created via warm paper layering, 1px antique gold hairlines, and generous whitespace.

## Motion & Haptics
- Respects `useReducedMotion` from `react-native-reanimated`.
- Subtle fade-in + 10px upward drift on section entry.
- Gentle scale feedback (`0.98`) on press with light `expo-haptics` impact.
