import { TextStyle } from 'react-native';

/**
 * Font family names loaded via @expo-google-fonts
 */
export const fontFamilies = {
  serifRegular: 'CormorantGaramond_400Regular',
  serifMedium: 'CormorantGaramond_500Medium',
  serifSemiBold: 'CormorantGaramond_600SemiBold',
  serifItalic: 'CormorantGaramond_400Regular_Italic',
  serifSemiBoldItalic: 'CormorantGaramond_600SemiBold_Italic',
  sansRegular: 'DMSans_400Regular',
  sansMedium: 'DMSans_500Medium',
  sansSemiBold: 'DMSans_600SemiBold',
} as const;

/**
 * Editorial Typography Scale
 */
export const typography: Record<string, TextStyle> = {
  coupleNames: {
    fontFamily: fontFamilies.serifSemiBoldItalic,
    fontSize: 44,
    lineHeight: 50,
    letterSpacing: -0.4,
  },
  heroHeading: {
    fontFamily: fontFamilies.serifMedium,
    fontSize: 34,
    lineHeight: 40,
    letterSpacing: -0.2,
  },
  sectionHeading: {
    fontFamily: fontFamilies.serifMedium,
    fontSize: 26,
    lineHeight: 32,
    letterSpacing: -0.1,
  },
  eventTitle: {
    fontFamily: fontFamilies.serifSemiBold,
    fontSize: 22,
    lineHeight: 28,
  },
  countdownNumeral: {
    fontFamily: fontFamilies.serifMedium,
    fontSize: 32,
    lineHeight: 36,
    letterSpacing: 0.5,
  },
  quoteItalic: {
    fontFamily: fontFamilies.serifItalic,
    fontSize: 20,
    lineHeight: 28,
  },
  body: {
    fontFamily: fontFamilies.sansRegular,
    fontSize: 15,
    lineHeight: 22,
  },
  bodyMedium: {
    fontFamily: fontFamilies.sansMedium,
    fontSize: 15,
    lineHeight: 22,
  },
  label: {
    fontFamily: fontFamilies.sansRegular,
    fontSize: 13,
    lineHeight: 18,
  },
  labelMedium: {
    fontFamily: fontFamilies.sansMedium,
    fontSize: 13,
    lineHeight: 18,
  },
  caption: {
    fontFamily: fontFamilies.sansRegular,
    fontSize: 12,
    lineHeight: 16,
  },
  editorialMicro: {
    fontFamily: fontFamilies.sansMedium,
    fontSize: 10.5,
    lineHeight: 14,
    letterSpacing: 1.8,
    textTransform: 'uppercase',
  },
};
