import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Rect, Line } from 'react-native-svg';
import * as Haptics from 'expo-haptics';
import { Camera } from 'lucide-react-native';
import { colors, radii, spacing, typography } from '@/theme';

interface CameraFeatureCardProps {
  filmRemaining: number;
  onPress: () => void;
}

/**
 * Vintage 35mm disposable film camera card for Section F.
 */
export function CameraFeatureCard({ filmRemaining, onPress }: CameraFeatureCardProps) {
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    onPress();
  };

  return (
    <Pressable
      onPress={handlePress}
      accessibilityRole="button"
      accessibilityLabel="Open vintage disposable camera"
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      {/* Top film strip metadata */}
      <View style={styles.topBar}>
        <Text style={styles.filmStock}>KODAK PORTRA 400 · WEDDING ROLL</Text>
        <View style={styles.counterBadge}>
          <Text style={styles.counterText}>{filmRemaining} EXP LEFT</Text>
        </View>
      </View>

      <View style={styles.bodyRow}>
        {/* Vintage camera SVG illustration */}
        <View style={styles.cameraIllustration}>
          <Svg width={86} height={60} viewBox="0 0 86 60">
            <Rect
              x={3}
              y={10}
              width={80}
              height={46}
              rx={7}
              fill={colors.royalIvory}
              stroke={colors.antiqueGold}
              strokeWidth={1.3}
            />
            <Rect
              x={3}
              y={22}
              width={80}
              height={22}
              fill={colors.deepEspresso}
              opacity={0.92}
            />
            {/* Shutter button */}
            <Rect
              x={14}
              y={5}
              width={14}
              height={5}
              rx={2}
              fill={colors.mutedMaroon}
            />
            {/* Viewfinder */}
            <Rect
              x={62}
              y={13}
              width={12}
              height={7}
              rx={1.5}
              fill={colors.warmPaper}
              stroke={colors.antiqueGold}
              strokeWidth={1}
            />
            {/* Lens */}
            <Circle
              cx={43}
              cy={33}
              r={13}
              fill={colors.royalIvory}
              stroke={colors.antiqueGold}
              strokeWidth={1.5}
            />
            <Circle
              cx={43}
              cy={33}
              r={8.5}
              fill={colors.deepEspresso}
              stroke={colors.antiqueGold}
              strokeWidth={1}
            />
            <Circle cx={40} cy={30} r={2} fill={colors.royalIvory} opacity={0.45} />
            <Line
              x1={10}
              y1={16}
              x2={24}
              y2={16}
              stroke={colors.mutedMaroon}
              strokeWidth={1.5}
            />
          </Svg>
        </View>

        <View style={styles.copyBlock}>
          <Text style={styles.title}>Disposable Camera</Text>
          <Text style={styles.description}>
            Candid, unretouched 35mm moments developed after midnight.
          </Text>
          <View style={styles.ctaRow}>
            <Camera size={14} color={colors.mutedMaroon} strokeWidth={1.7} />
            <Text style={styles.ctaText}>Capture a moment</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.warmPaper,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.antiqueGoldSoft,
    padding: spacing.lg,
  },
  pressed: {
    opacity: 0.92,
    transform: [{ scale: 0.99 }],
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
    gap: spacing.sm,
  },
  filmStock: {
    ...typography.editorialMicro,
    fontSize: 9.5,
    color: colors.mutedTaupe,
    flexShrink: 1,
  },
  counterBadge: {
    backgroundColor: colors.royalIvory,
    borderWidth: 1,
    borderColor: colors.antiqueGoldSoft,
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    borderRadius: radii.xs,
  },
  counterText: {
    ...typography.editorialMicro,
    fontSize: 9.5,
    color: colors.mutedMaroon,
  },
  bodyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  cameraIllustration: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyBlock: {
    flex: 1,
    gap: 4,
  },
  title: {
    ...typography.eventTitle,
    fontSize: 21,
    color: colors.deepEspresso,
  },
  description: {
    ...typography.label,
    color: colors.mutedTaupe,
  },
  ctaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: spacing.xs,
  },
  ctaText: {
    ...typography.labelMedium,
    color: colors.mutedMaroon,
  },
});
