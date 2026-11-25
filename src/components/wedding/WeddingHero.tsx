import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Image } from 'expo-image';
import { IndianArchFrame } from '@/components/decorative/IndianArchFrame';
import { BotanicalIllustration } from '@/components/decorative/BotanicalIllustration';
import { WeddingInfo } from '@/types/wedding';
import { colors, layout, spacing, typography } from '@/theme';

interface WeddingHeroProps {
  wedding: WeddingInfo;
}

export function WeddingHero({ wedding }: WeddingHeroProps) {
  const { width: screenWidth } = useWindowDimensions();
  const contentWidth = Math.min(screenWidth, layout.maxContentWidth) - layout.screenPaddingHorizontal * 2;
  const archWidth = Math.min(contentWidth - 20, 300);
  const archHeight = Math.round(archWidth * 1.28);

  return (
    <View style={styles.container}>
      {/* Subtle top botanical accent */}
      <View style={styles.topEyebrowRow}>
        <View style={styles.eyebrowLine} />
        <Text style={styles.eyebrow}>THE WEDDING OF</Text>
        <View style={styles.eyebrowLine} />
      </View>

      {/* Couple Names in large italic serif */}
      <Text style={styles.coupleNames}>{wedding.coupleNames}</Text>

      {/* Mughal Arch Portrait */}
      <View style={styles.archWrapper}>
        <BotanicalIllustration
          variant="branch"
          size={52}
          color={colors.antiqueGold}
          secondaryColor={colors.dustyGulab}
          style={styles.leftBranch}
        />
        <IndianArchFrame width={archWidth} height={archHeight}>
          <Image
            source={wedding.heroImage}
            style={styles.heroImage}
            contentFit="cover"
            transition={400}
            accessibilityLabel={`${wedding.coupleNames} wedding portrait`}
          />
        </IndianArchFrame>
        <BotanicalIllustration
          variant="branch"
          size={52}
          color={colors.antiqueGold}
          secondaryColor={colors.dustyGulab}
          style={styles.rightBranch}
        />
      </View>

      {/* Date, Location & Hashtag */}
      <View style={styles.metaBlock}>
        <Text style={styles.dateText}>{wedding.displayDate}</Text>
        <View style={styles.locationRow}>
          <Text style={styles.locationText}>{wedding.location}</Text>
        </View>
        <Text style={styles.hashtag}>{wedding.hashtag}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: spacing.sm,
    paddingBottom: spacing.md,
  },
  topEyebrowRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm + 4,
    marginBottom: spacing.sm,
  },
  eyebrowLine: {
    width: 24,
    height: 1,
    backgroundColor: colors.antiqueGoldHairline,
  },
  eyebrow: {
    ...typography.editorialMicro,
    color: colors.mutedTaupe,
    letterSpacing: 2.4,
  },
  coupleNames: {
    ...typography.coupleNames,
    color: colors.mutedMaroon,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  archWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  leftBranch: {
    position: 'absolute',
    left: -20,
    bottom: 24,
    zIndex: 2,
    transform: [{ rotate: '-18deg' }],
  },
  rightBranch: {
    position: 'absolute',
    right: -20,
    bottom: 24,
    zIndex: 2,
    transform: [{ scaleX: -1 }, { rotate: '-18deg' }],
  },
  metaBlock: {
    alignItems: 'center',
    gap: 4,
  },
  dateText: {
    ...typography.eventTitle,
    fontSize: 20,
    color: colors.deepEspresso,
    letterSpacing: 0.4,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    ...typography.body,
    color: colors.mutedTaupe,
  },
  hashtag: {
    ...typography.editorialMicro,
    color: colors.mehendiGreen,
    letterSpacing: 1.4,
    textTransform: 'none',
    fontSize: 12,
    marginTop: spacing.xs,
  },
});
