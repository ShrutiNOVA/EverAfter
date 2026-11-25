import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Image, ImageSource } from 'expo-image';
import { colors, radii } from '@/theme';

interface AvatarProps {
  source: ImageSource;
  size?: number;
  showBorder?: boolean;
  style?: ViewStyle;
  accessibilityLabel?: string;
}

export function Avatar({
  source,
  size = 42,
  showBorder = true,
  style,
  accessibilityLabel = 'Guest profile photo',
}: AvatarProps) {
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: radii.pill,
          borderWidth: showBorder ? 1 : 0,
          borderColor: colors.antiqueGold,
        },
        style,
      ]}
    >
      <Image
        source={source}
        style={{
          width: size - (showBorder ? 4 : 0),
          height: size - (showBorder ? 4 : 0),
          borderRadius: radii.pill,
        }}
        contentFit="cover"
        transition={250}
        accessibilityLabel={accessibilityLabel}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.warmPaper,
    overflow: 'hidden',
  },
});
