import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { colors } from '@/theme';

interface IndianArchFrameProps {
  width: number;
  height: number;
  children: React.ReactNode;
  style?: ViewStyle;
  accentColor?: string;
}

/**
 * Mughal-inspired architectural arch frame with fine antique gold double-hairline
 * and delicate top finial. Uses an overflow-hidden arch container + crisp SVG overlay
 * for consistent rendering across iOS, Android, and Web.
 */
export function IndianArchFrame({
  width,
  height,
  children,
  style,
  accentColor = colors.antiqueGold,
}: IndianArchFrameProps) {
  const archRadius = width * 0.5;
  const inset = 6;
  const innerWidth = width - inset * 2;
  const innerHeight = height - inset * 2;
  const innerRadius = innerWidth * 0.5;

  return (
    <View style={[styles.wrapper, { width, height }, style]}>
      {/* Outer hairline arch */}
      <View
        style={[
          styles.outerFrame,
          {
            width,
            height,
            borderTopLeftRadius: archRadius,
            borderTopRightRadius: archRadius,
            borderColor: accentColor,
          },
        ]}
      >
        {/* Inner photo mask */}
        <View
          style={[
            styles.innerMask,
            {
              width: innerWidth,
              height: innerHeight,
              borderTopLeftRadius: innerRadius,
              borderTopRightRadius: innerRadius,
            },
          ]}
        >
          {children}
        </View>
      </View>

      {/* Delicate Mughal finial crest at apex */}
      <View style={styles.finialContainer} pointerEvents="none">
        <Svg width={44} height={20} viewBox="0 0 44 20">
          <Path
            d="M22 2 C22 7, 17 11, 12 13 C17 13, 20 15, 22 18 C24 15, 27 13, 32 13 C27 11, 22 7, 22 2 Z"
            fill={colors.royalIvory}
            stroke={accentColor}
            strokeWidth={1.1}
          />
          <Circle cx={22} cy={10} r={1.6} fill={accentColor} />
          <Circle cx={7} cy={14} r={1.1} fill={accentColor} />
          <Circle cx={37} cy={14} r={1.1} fill={accentColor} />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerFrame: {
    borderWidth: 1,
    padding: 5,
    backgroundColor: colors.royalIvory,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerMask: {
    overflow: 'hidden',
    backgroundColor: colors.warmPaper,
  },
  finialContainer: {
    position: 'absolute',
    top: -10,
    alignSelf: 'center',
  },
});
