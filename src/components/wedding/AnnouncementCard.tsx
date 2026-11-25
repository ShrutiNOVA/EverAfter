import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Announcement, AnnouncementCategory } from '@/types/wedding';
import { colors, radii, spacing, typography } from '@/theme';

interface AnnouncementCardProps {
  announcement: Announcement;
  onPress?: () => void;
}

const categoryConfig: Record<AnnouncementCategory, { label: string; dotColor: string }> = {
  surprise: { label: 'Surprise', dotColor: colors.mutedMaroon },
  schedule: { label: 'Schedule', dotColor: colors.mehendiGreen },
  memory: { label: 'Memories', dotColor: colors.antiqueGold },
  logistics: { label: 'Note', dotColor: colors.dustyGulab },
};

export function AnnouncementCard({ announcement, onPress }: AnnouncementCardProps) {
  const meta = categoryConfig[announcement.category];

  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      accessibilityRole={onPress ? 'button' : 'text'}
      style={({ pressed }) => [styles.card, pressed && onPress && { opacity: 0.85 }]}
    >
      <View style={styles.topRow}>
        <View style={styles.categoryRow}>
          <View style={[styles.dot, { backgroundColor: meta.dotColor }]} />
          <Text style={styles.categoryLabel}>{meta.label}</Text>
        </View>
        <Text style={styles.timestamp}>{announcement.timestampLabel}</Text>
      </View>

      <Text style={styles.message}>{announcement.message}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.parchmentTint,
    borderRadius: radii.sm,
    borderLeftWidth: 2,
    borderLeftColor: colors.antiqueGold,
    paddingVertical: spacing.sm + 4,
    paddingHorizontal: spacing.md,
    gap: 4,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: radii.pill,
  },
  categoryLabel: {
    ...typography.editorialMicro,
    fontSize: 9.5,
    color: colors.mutedTaupe,
  },
  timestamp: {
    ...typography.caption,
    fontSize: 11,
    color: colors.mutedTaupe,
  },
  message: {
    ...typography.body,
    fontSize: 14,
    lineHeight: 20,
    color: colors.deepEspresso,
  },
});
