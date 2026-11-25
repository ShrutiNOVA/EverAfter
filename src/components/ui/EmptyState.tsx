import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { BotanicalIllustration } from '@/components/decorative/BotanicalIllustration';
import { colors, radii, spacing, typography } from '@/theme';

interface EmptyStateProps {
  title: string;
  message: string;
  style?: ViewStyle;
}

export function EmptyState({ title, message, style }: EmptyStateProps) {
  return (
    <View style={[styles.container, style]}>
      <BotanicalIllustration variant="lotus" size={42} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.warmPaper,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.antiqueGoldSoft,
    padding: spacing.xl,
    alignItems: 'center',
  },
  title: {
    ...typography.eventTitle,
    color: colors.deepEspresso,
    marginTop: spacing.md,
    textAlign: 'center',
  },
  message: {
    ...typography.body,
    color: colors.mutedTaupe,
    marginTop: spacing.xs,
    textAlign: 'center',
  },
});
