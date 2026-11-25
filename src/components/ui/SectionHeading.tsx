import React from 'react';
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { colors, spacing, typography } from '@/theme';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onActionPress?: () => void;
  style?: ViewStyle;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  actionLabel,
  onActionPress,
  style,
}: SectionHeadingProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.topRow}>
        <View style={styles.textBlock}>
          {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
          <Text style={styles.title}>{title}</Text>
        </View>
        {actionLabel && onActionPress ? (
          <Pressable
            onPress={onActionPress}
            hitSlop={10}
            accessibilityRole="button"
            accessibilityLabel={actionLabel}
            style={({ pressed }) => [styles.actionBtn, pressed && { opacity: 0.65 }]}
          >
            <Text style={styles.actionText}>{actionLabel}</Text>
            <ChevronRight size={15} color={colors.mutedMaroon} strokeWidth={1.6} />
          </Pressable>
        ) : null}
      </View>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  textBlock: {
    flex: 1,
  },
  eyebrow: {
    ...typography.editorialMicro,
    color: colors.mutedTaupe,
    marginBottom: spacing.xs,
  },
  title: {
    ...typography.sectionHeading,
    color: colors.deepEspresso,
  },
  subtitle: {
    ...typography.body,
    color: colors.mutedTaupe,
    marginTop: spacing.xs,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 4,
    gap: 2,
  },
  actionText: {
    ...typography.labelMedium,
    color: colors.mutedMaroon,
  },
});
