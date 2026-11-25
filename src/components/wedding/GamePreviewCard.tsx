import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Sparkles, ArrowRight } from 'lucide-react-native';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { BotanicalIllustration } from '@/components/decorative/BotanicalIllustration';
import { GamePreview } from '@/types/wedding';
import { colors, radii, spacing, typography } from '@/theme';

interface GamePreviewCardProps {
  game: GamePreview;
  onPlay: () => void;
}

export function GamePreviewCard({ game, onPlay }: GamePreviewCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.badge}>
          <Sparkles size={12} color={colors.mutedMaroon} strokeWidth={1.6} />
          <Text style={styles.badgeText}>{game.subtitle}</Text>
        </View>
        <BotanicalIllustration
          variant="marigold"
          size={30}
          color={colors.antiqueGold}
          secondaryColor={colors.dustyGulab}
        />
      </View>

      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.prompt}>{game.prompt}</Text>

      <View style={styles.footerRow}>
        <Text style={styles.participants}>
          {game.participantCount} guests have played
        </Text>
        <PrimaryButton
          label={game.ctaLabel}
          onPress={onPlay}
          icon={<ArrowRight size={15} color={colors.royalIvory} strokeWidth={1.7} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.mutedMaroonTint,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: 'rgba(120, 61, 67, 0.24)',
    padding: spacing.lg,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.royalIvory,
    paddingHorizontal: spacing.sm + 2,
    paddingVertical: 4,
    borderRadius: radii.pill,
    borderWidth: 1,
    borderColor: colors.antiqueGoldSoft,
  },
  badgeText: {
    ...typography.editorialMicro,
    fontSize: 9.5,
    color: colors.mutedMaroon,
  },
  title: {
    ...typography.sectionHeading,
    fontSize: 24,
    color: colors.deepEspresso,
    marginBottom: spacing.xs,
  },
  prompt: {
    ...typography.body,
    fontSize: 14,
    color: colors.mutedTaupe,
    marginBottom: spacing.lg,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  participants: {
    ...typography.caption,
    color: colors.mutedMaroon,
  },
});
