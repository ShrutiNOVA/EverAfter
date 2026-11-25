import React from 'react';
import { ViewStyle } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { colors } from '@/theme';

export type BotanicalVariant = 'lotus' | 'marigold' | 'branch' | 'corner';

interface BotanicalIllustrationProps {
  variant?: BotanicalVariant;
  size?: number;
  color?: string;
  secondaryColor?: string;
  style?: ViewStyle;
}

/**
 * Hand-drawn editorial SVG botanical motifs used sparingly (20% heritage rule).
 */
export function BotanicalIllustration({
  variant = 'lotus',
  size = 44,
  color = colors.antiqueGold,
  secondaryColor = colors.dustyGulab,
  style,
}: BotanicalIllustrationProps) {
  if (variant === 'lotus') {
    return (
      <Svg width={size} height={size * 0.72} viewBox="0 0 64 46" style={style}>
        {/* Center petal */}
        <Path
          d="M32 6 C27 16, 26 26, 32 34 C38 26, 37 16, 32 6 Z"
          fill="none"
          stroke={color}
          strokeWidth={1.25}
        />
        {/* Inner left & right petals */}
        <Path
          d="M32 34 C23 30, 18 21, 21 12 C26 17, 29 25, 32 34 Z"
          fill="none"
          stroke={color}
          strokeWidth={1.15}
        />
        <Path
          d="M32 34 C41 30, 46 21, 43 12 C38 17, 35 25, 32 34 Z"
          fill="none"
          stroke={color}
          strokeWidth={1.15}
        />
        {/* Outer petals */}
        <Path
          d="M32 34 C20 34, 11 28, 10 19 C17 21, 25 27, 32 34 Z"
          fill="none"
          stroke={secondaryColor}
          strokeWidth={1}
        />
        <Path
          d="M32 34 C44 34, 53 28, 54 19 C47 21, 39 27, 32 34 Z"
          fill="none"
          stroke={secondaryColor}
          strokeWidth={1}
        />
        {/* Base stem */}
        <Path d="M22 39 Q32 36 42 39" fill="none" stroke={color} strokeWidth={1.1} />
        <Circle cx={32} cy={42} r={1.4} fill={color} />
      </Svg>
    );
  }

  if (variant === 'marigold') {
    return (
      <Svg width={size} height={size} viewBox="0 0 48 48" style={style}>
        <Circle cx={24} cy={24} r={5} fill="none" stroke={color} strokeWidth={1.2} />
        <Path
          d="M24 8 C26 13, 26 17, 24 19 C22 17, 22 13, 24 8 Z M24 40 C26 35, 26 31, 24 29 C22 31, 22 35, 24 40 Z M8 24 C13 22, 17 22, 19 24 C17 26, 13 26, 8 24 Z M40 24 C35 22, 31 22, 29 24 C31 26, 35 26, 40 24 Z"
          fill="none"
          stroke={color}
          strokeWidth={1.15}
        />
        <Path
          d="M12.7 12.7 C17 15, 19.5 17.5, 20.5 20.5 C17.5 19.5, 15 17, 12.7 12.7 Z M35.3 35.3 C31 33, 28.5 30.5, 27.5 27.5 C30.5 28.5, 33 31, 35.3 35.3 Z M35.3 12.7 C33 17, 30.5 19.5, 27.5 20.5 C28.5 17.5, 31 15, 35.3 12.7 Z M12.7 35.3 C15 31, 17.5 28.5, 20.5 27.5 C19.5 30.5, 17 33, 12.7 35.3 Z"
          fill="none"
          stroke={secondaryColor}
          strokeWidth={1}
        />
      </Svg>
    );
  }

  if (variant === 'corner') {
    return (
      <Svg width={size} height={size} viewBox="0 0 48 48" style={style}>
        <Path d="M4 44 L4 14 Q4 4 14 4 L44 4" fill="none" stroke={color} strokeWidth={1} />
        <Path
          d="M10 26 C10 17, 17 10, 26 10"
          fill="none"
          stroke={secondaryColor}
          strokeWidth={0.9}
        />
        <Circle cx={10} cy={10} r={1.8} fill={color} />
      </Svg>
    );
  }

  // 'branch'
  return (
    <Svg width={size} height={size * 0.6} viewBox="0 0 60 36" style={style}>
      <Path d="M6 28 Q26 22 52 10" fill="none" stroke={color} strokeWidth={1.1} />
      <Path d="M18 24 C15 18, 17 13, 22 12 C23 17, 21 21, 18 24 Z" fill="none" stroke={color} strokeWidth={1} />
      <Path d="M31 19 C29 13, 32 8, 37 8 C37 13, 35 17, 31 19 Z" fill="none" stroke={color} strokeWidth={1} />
      <Path d="M26 22 C31 24, 34 27, 33 32 C28 30, 26 26, 26 22 Z" fill="none" stroke={secondaryColor} strokeWidth={1} />
      <Path d="M41 14 C46 15, 49 18, 49 23 C44 21, 41 18, 41 14 Z" fill="none" stroke={secondaryColor} strokeWidth={1} />
    </Svg>
  );
}
