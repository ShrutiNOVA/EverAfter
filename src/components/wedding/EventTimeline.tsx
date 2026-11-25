import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { ChevronRight } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { EventThemeKey, WeddingEvent } from '@/types/wedding';
import { getEventStatus } from '@/utils/dateUtils';
import { colors, radii, spacing, typography } from '@/theme';

interface EventTimelineProps {
  events: WeddingEvent[];
  onPressEvent: (event: WeddingEvent) => void;
}

const themeStyles: Record<
  EventThemeKey,
  { accent: string; tint: string; border: string }
> = {
  haldi: {
    accent: colors.haldiTurmeric,
    tint: colors.haldiBg,
    border: 'rgba(200, 146, 42, 0.35)',
  },
  mehendi: {
    accent: colors.mehendiGreen,
    tint: colors.mehendiGreenTint,
    border: 'rgba(105, 118, 92, 0.35)',
  },
  sangeet: {
    accent: colors.sangeetPlum,
    tint: colors.sangeetBg,
    border: 'rgba(94, 58, 76, 0.3)',
  },
  wedding: {
    accent: colors.mutedMaroon,
    tint: colors.mutedMaroonTint,
    border: 'rgba(120, 61, 67, 0.32)',
  },
  reception: {
    accent: colors.dustyGulab,
    tint: colors.receptionBg,
    border: 'rgba(185, 129, 133, 0.38)',
  },
  welcome: {
    accent: colors.antiqueGold,
    tint: colors.warmPaper,
    border: colors.antiqueGoldSoft,
  },
};

const statusLabelMap = {
  upcoming: 'Upcoming',
  live: 'Happening Now',
  completed: 'Completed',
} as const;

export function EventTimeline({ events, onPressEvent }: EventTimelineProps) {
  const handlePress = (event: WeddingEvent) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    onPressEvent(event);
  };

  return (
    <View style={styles.container}>
      {events.map((event, index) => {
        const isLast = index === events.length - 1;
        const palette = themeStyles[event.theme];
        const status = getEventStatus(event);

        return (
          <View key={event.id} style={styles.row}>
            {/* Left timeline rail */}
            <View style={styles.rail}>
              <View style={[styles.markerOuter, { borderColor: palette.accent }]}>
                <View style={[styles.markerInner, { backgroundColor: palette.accent }]} />
              </View>
              {!isLast ? <View style={styles.connectorLine} /> : null}
            </View>

            {/* Right event entry card */}
            <Pressable
              onPress={() => handlePress(event)}
              accessibilityRole="button"
              accessibilityLabel={`${event.title} at ${event.displayTime}`}
              style={({ pressed }) => [
                styles.entryCard,
                {
                  backgroundColor: palette.tint,
                  borderColor: palette.border,
                },
                pressed && styles.pressed,
              ]}
            >
              <Image
                source={event.coverImage}
                style={styles.thumbnail}
                contentFit="cover"
                transition={250}
                accessibilityLabel={event.title}
              />

              <View style={styles.entryBody}>
                <View style={styles.entryTopRow}>
                  <Text style={[styles.timeText, { color: palette.accent }]}>
                    {event.displayTime}
                  </Text>
                  <Text style={styles.statusText}>{statusLabelMap[status]}</Text>
                </View>

                <Text style={styles.eventName}>{event.title}</Text>
                <Text style={styles.venueText} numberOfLines={1}>
                  {event.venue}
                </Text>
                <Text style={styles.dressCodeText} numberOfLines={1}>
                  Dress code: {event.dressCode}
                </Text>
              </View>

              <ChevronRight size={18} color={colors.mutedTaupe} strokeWidth={1.5} />
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.md,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  rail: {
    width: 24,
    alignItems: 'center',
    paddingTop: 22,
  },
  markerOuter: {
    width: 12,
    height: 12,
    borderRadius: radii.pill,
    borderWidth: 1.5,
    backgroundColor: colors.royalIvory,
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerInner: {
    width: 4,
    height: 4,
    borderRadius: radii.pill,
  },
  connectorLine: {
    flex: 1,
    width: 1,
    backgroundColor: colors.antiqueGoldHairline,
    marginTop: 4,
  },
  entryCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.sm + 4,
    borderRadius: radii.md,
    borderWidth: 1,
    marginBottom: spacing.md,
    marginLeft: spacing.sm,
    gap: spacing.sm + 4,
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },
  thumbnail: {
    width: 68,
    height: 78,
    borderRadius: radii.sm,
    backgroundColor: colors.warmPaper,
  },
  entryBody: {
    flex: 1,
    gap: 2,
  },
  entryTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.xs,
  },
  timeText: {
    ...typography.editorialMicro,
    fontSize: 10,
  },
  statusText: {
    ...typography.caption,
    fontSize: 11,
    color: colors.mutedTaupe,
  },
  eventName: {
    ...typography.eventTitle,
    fontSize: 19,
    lineHeight: 24,
    color: colors.deepEspresso,
  },
  venueText: {
    ...typography.label,
    color: colors.deepEspresso,
  },
  dressCodeText: {
    ...typography.caption,
    color: colors.mutedTaupe,
  },
});
