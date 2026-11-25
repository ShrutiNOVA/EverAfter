import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { Clock, MapPin, Sparkles, ArrowRight } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { BotanicalIllustration } from '@/components/decorative/BotanicalIllustration';
import { WeddingEvent } from '@/types/wedding';
import { getRelativeEventLabel } from '@/utils/dateUtils';
import { colors, radii, spacing, typography } from '@/theme';

interface EventCardProps {
  event: WeddingEvent;
  onPress: (event: WeddingEvent) => void;
}

/**
 * Miniature invitation card for the "Up Next" featured event.
 * Uses a refined Mehendi Green editorial identity.
 */
export function EventCard({ event, onPress }: EventCardProps) {
  const relativeLabel = getRelativeEventLabel(event);

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    onPress(event);
  };

  return (
    <Pressable
      onPress={handlePress}
      accessibilityRole="button"
      accessibilityLabel={`View details for ${event.title}`}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      {/* Cover Photography */}
      <View style={styles.imageWrapper}>
        <Image
          source={event.coverImage}
          style={styles.coverImage}
          contentFit="cover"
          transition={300}
          accessibilityLabel={event.title}
        />
        <View style={styles.statusPill}>
          <Text style={styles.statusPillText}>{relativeLabel}</Text>
        </View>
      </View>

      {/* Invitation Body */}
      <View style={styles.body}>
        <View style={styles.titleRow}>
          <View style={styles.titleBlock}>
            <Text style={styles.eventSubtitle}>{event.subtitle}</Text>
            <Text style={styles.eventTitle}>{event.title}</Text>
          </View>
          <BotanicalIllustration
            variant="branch"
            size={38}
            color={colors.mehendiGreen}
            secondaryColor={colors.dustyGulab}
          />
        </View>

        <View style={styles.divider} />

        <View style={styles.metaList}>
          <View style={styles.metaItem}>
            <Clock size={15} color={colors.mehendiGreen} strokeWidth={1.6} />
            <Text style={styles.metaText}>{event.displayTime}</Text>
          </View>

          <View style={styles.metaItem}>
            <MapPin size={15} color={colors.mehendiGreen} strokeWidth={1.6} />
            <Text style={styles.metaText}>{event.venue}</Text>
          </View>

          <View style={styles.metaItem}>
            <Sparkles size={15} color={colors.dustyGulab} strokeWidth={1.6} />
            <Text style={styles.metaText}>Dress code: {event.dressCode}</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.ctaText}>View invitation & details</Text>
          <ArrowRight size={16} color={colors.mehendiGreen} strokeWidth={1.7} />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.mehendiGreenTint,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: 'rgba(105, 118, 92, 0.35)',
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.94,
    transform: [{ scale: 0.99 }],
  },
  imageWrapper: {
    height: 186,
    width: '100%',
    position: 'relative',
    backgroundColor: colors.warmPaper,
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  statusPill: {
    position: 'absolute',
    top: spacing.md,
    left: spacing.md,
    backgroundColor: 'rgba(250, 246, 237, 0.94)',
    paddingHorizontal: spacing.sm + 4,
    paddingVertical: spacing.xs + 2,
    borderRadius: radii.pill,
    borderWidth: 1,
    borderColor: colors.antiqueGoldSoft,
  },
  statusPillText: {
    ...typography.editorialMicro,
    fontSize: 10,
    color: colors.mehendiGreen,
  },
  body: {
    padding: spacing.lg,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  titleBlock: {
    flex: 1,
  },
  eventSubtitle: {
    ...typography.caption,
    color: colors.mehendiGreen,
    marginBottom: 2,
  },
  eventTitle: {
    ...typography.sectionHeading,
    fontSize: 25,
    color: colors.deepEspresso,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(105, 118, 92, 0.2)',
    marginVertical: spacing.md,
  },
  metaList: {
    gap: spacing.sm,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  metaText: {
    ...typography.label,
    color: colors.deepEspresso,
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing.md + 4,
    paddingTop: spacing.sm + 4,
    borderTopWidth: 1,
    borderTopColor: 'rgba(105, 118, 92, 0.16)',
  },
  ctaText: {
    ...typography.labelMedium,
    color: colors.mehendiGreen,
    letterSpacing: 0.3,
  },
});
