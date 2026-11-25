import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Bell } from 'lucide-react-native';
import { Avatar } from '@/components/ui/Avatar';
import { GuestProfile } from '@/types/wedding';
import { colors, radii, spacing, typography } from '@/theme';

interface WeddingHeaderProps {
  guest: GuestProfile;
  hasUnreadUpdates: boolean;
  onPressProfile: () => void;
  onPressNotifications: () => void;
}

export function WeddingHeader({
  guest,
  hasUnreadUpdates,
  onPressProfile,
  onPressNotifications,
}: WeddingHeaderProps) {
  return (
    <View style={styles.container}>
      {/* Top editorial wordmark bar */}
      <View style={styles.topRow}>
        <Text style={styles.wordmark}>EVERAFTER</Text>

        <View style={styles.actions}>
          <Pressable
            onPress={onPressNotifications}
            hitSlop={10}
            accessibilityRole="button"
            accessibilityLabel="View wedding updates"
            style={({ pressed }) => [styles.bellButton, pressed && { opacity: 0.7 }]}
          >
            <Bell size={19} color={colors.deepEspresso} strokeWidth={1.5} />
            {hasUnreadUpdates ? <View style={styles.notificationDot} /> : null}
          </Pressable>

          <Pressable
            onPress={onPressProfile}
            hitSlop={6}
            accessibilityRole="button"
            accessibilityLabel={`Open profile for ${guest.fullName}`}
            style={({ pressed }) => [pressed && { opacity: 0.8 }]}
          >
            <Avatar source={guest.avatar} size={40} />
          </Pressable>
        </View>
      </View>

      {/* Personalized greeting */}
      <View style={styles.greetingBlock}>
        <Text style={styles.greeting}>Namaste, {guest.firstName}</Text>
        <Text style={styles.subtitle}>{guest.greetingSubtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing.sm,
    paddingBottom: spacing.md,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
  },
  wordmark: {
    ...typography.editorialMicro,
    fontSize: 12,
    letterSpacing: 3.2,
    color: colors.antiqueGold,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  bellButton: {
    width: 40,
    height: 40,
    borderRadius: radii.pill,
    borderWidth: 1,
    borderColor: colors.antiqueGoldSoft,
    backgroundColor: colors.parchmentTint,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: 9,
    right: 10,
    width: 7,
    height: 7,
    borderRadius: radii.pill,
    backgroundColor: colors.mutedMaroon,
    borderWidth: 1,
    borderColor: colors.royalIvory,
  },
  greetingBlock: {
    gap: 2,
  },
  greeting: {
    ...typography.heroHeading,
    fontSize: 30,
    lineHeight: 36,
    color: colors.deepEspresso,
  },
  subtitle: {
    ...typography.body,
    color: colors.mutedTaupe,
  },
});
