import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors, spacing, typography } from '@/theme';

interface LoadingStateProps {
  label?: string;
  style?: ViewStyle;
}

export function LoadingState({ label = 'Preparing your invitation…', style }: LoadingStateProps) {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size="small" color={colors.mutedMaroon} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.royalIvory,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
    gap: spacing.md,
  },
  label: {
    ...typography.quoteItalic,
    color: colors.mutedTaupe,
    textAlign: 'center',
  },
});
