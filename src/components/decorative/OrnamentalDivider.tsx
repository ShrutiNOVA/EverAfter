import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { colors, spacing } from '@/theme';

interface OrnamentalDividerProps {
  style?: ViewStyle;
  color?: string;
}

/**
 * Minimal antique gold hairline divider with a centered diamond motif.
 */
export function OrnamentalDivider({
  style,
  color = colors.antiqueGold,
}: OrnamentalDividerProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.line, { backgroundColor: colors.antiqueGoldHairline }]} />
      <View style={styles.motif}>
        <Svg width={28} height={14} viewBox="0 0 28 14">
          <Path
            d="M14 2 L19 7 L14 12 L9 7 Z"
            fill="none"
            stroke={color}
            strokeWidth={1.1}
          />
          <Circle cx={4} cy={7} r={1.2} fill={color} />
          <Circle cx={24} cy={7} r={1.2} fill={color} />
        </Svg>
      </View>
      <View style={[styles.line, { backgroundColor: colors.antiqueGoldHairline }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.lg,
  },
  line: {
    flex: 1,
    height: 1,
  },
  motif: {
    paddingHorizontal: spacing.sm,
  },
});
