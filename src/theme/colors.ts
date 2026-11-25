/**
 * EverAfter Design System — Color Palette
 * Theme: Modern Indian Heritage
 */
export const colors = {
  // Core Canvas & Surfaces
  royalIvory: '#FAF6ED',
  warmPaper: '#F1E9DA',
  pureWhite: '#FFFFFF',
  parchmentTint: '#F6F0E4',

  // Heritage & Romantic Accents
  antiqueGold: '#B49A65',
  antiqueGoldSoft: 'rgba(180, 154, 101, 0.35)',
  antiqueGoldHairline: 'rgba(180, 154, 101, 0.45)',
  dustyGulab: '#B98185',
  mehendiGreen: '#69765C',
  mehendiGreenTint: '#EEF1EA',
  mutedMaroon: '#783D43',
  mutedMaroonTint: '#F4EAEB',

  // Typography & Ink
  deepEspresso: '#382C28',
  mutedTaupe: '#85766D',
  softTaupe: 'rgba(133, 118, 109, 0.25)',

  // Event-Specific Editorial Accents
  haldiTurmeric: '#C8922A',
  haldiBg: '#FBF4E2',
  sangeetPlum: '#5E3A4C',
  sangeetBg: '#F3ECEF',
  champagne: '#EFE5D5',
  receptionBg: '#F7EFE9',

  // Semantic
  success: '#69765C',
  warning: '#C8922A',
  error: '#8E3B42',
} as const;

export type ColorToken = keyof typeof colors;
