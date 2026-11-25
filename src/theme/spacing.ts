/**
 * 8-Point Spacing & Layout System
 */
export const spacing = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
} as const;

export const layout = {
  screenPaddingHorizontal: spacing.lg, // 24px
  sectionGap: spacing.xl, // 32px
  cardPadding: spacing.lg, // 24px
  maxContentWidth: 520, // Keeps editorial proportions clean on tablets & web
} as const;

export const radii = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  pill: 999,
} as const;

export const borders = {
  hairline: 1,
  accent: 1.5,
} as const;
