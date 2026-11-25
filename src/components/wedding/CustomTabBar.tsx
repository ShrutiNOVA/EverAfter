import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import {
  Home,
  Images,
  Camera,
  Bell,
  MessageCircleHeart,
} from 'lucide-react-native';
import { colors, radii, spacing, typography } from '@/theme';

const TAB_META: Record<
  string,
  {
    label: string;
    Icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
  }
> = {
  home: { label: 'Home', Icon: Home },
  gallery: { label: 'Gallery', Icon: Images },
  camera: { label: 'Camera', Icon: Camera },
  updates: { label: 'Updates', Icon: Bell },
  chat: { label: 'Chat', Icon: MessageCircleHeart },
};

/**
 * Custom Warm Ivory bottom navigation bar with a central vintage shutter button.
 */
export function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps & { navigation?: BottomTabBarProps['navigation'] }) {
  const insets = useSafeAreaInsets();
  const bottomPadding = Math.max(insets.bottom, spacing.sm + 2);

  return (
    <View style={[styles.wrapper, { paddingBottom: bottomPadding }]}>
      <View style={styles.bar}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const meta = TAB_META[route.name] ?? { label: route.name, Icon: Home };
          const { Icon, label } = meta;

          const onPress = () => {
            Haptics.selectionAsync().catch(() => {});
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const { options } = descriptors[route.key];

          // Central emphasized Vintage Camera Shutter Button
          if (route.name === 'camera') {
            return (
              <View key={route.key} style={styles.centerSlot}>
                <Pressable
                  onPress={onPress}
                  accessibilityRole="button"
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel ?? 'Disposable Camera'}
                  style={({ pressed }) => [
                    styles.shutterOuter,
                    isFocused && styles.shutterOuterActive,
                    pressed && styles.shutterPressed,
                  ]}
                >
                  <View
                    style={[
                      styles.shutterInner,
                      isFocused && styles.shutterInnerActive,
                    ]}
                  >
                    <Camera
                      size={22}
                      color={colors.royalIvory}
                      strokeWidth={1.65}
                    />
                  </View>
                </Pressable>
                <Text
                  style={[
                    styles.centerLabel,
                    { color: isFocused ? colors.mutedMaroon : colors.mutedTaupe },
                  ]}
                >
                  {label}
                </Text>
              </View>
            );
          }

          const iconColor = isFocused ? colors.mutedMaroon : colors.mutedTaupe;

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel ?? label}
              style={({ pressed }) => [styles.tabItem, pressed && { opacity: 0.7 }]}
            >
              <Icon size={20} color={iconColor} strokeWidth={isFocused ? 1.9 : 1.5} />
              <Text
                style={[
                  styles.tabLabel,
                  {
                    color: iconColor,
                    fontFamily: isFocused
                      ? typography.labelMedium.fontFamily
                      : typography.label.fontFamily,
                  },
                ]}
              >
                {label}
              </Text>
              {isFocused ? <View style={styles.activeIndicator} /> : <View style={styles.inactiveSpacer} />}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.royalIvory,
    borderTopWidth: 1,
    borderTopColor: colors.antiqueGoldSoft,
    paddingTop: spacing.xs + 2,
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    paddingHorizontal: spacing.sm,
    minHeight: 56,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: spacing.xs,
    minHeight: 48,
    gap: 3,
  },
  tabLabel: {
    fontSize: 11,
    lineHeight: 14,
  },
  activeIndicator: {
    width: 14,
    height: 1.5,
    borderRadius: radii.pill,
    backgroundColor: colors.mutedMaroon,
    marginTop: 1,
  },
  inactiveSpacer: {
    height: 2.5,
  },
  centerSlot: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: -22,
  },
  shutterOuter: {
    width: 56,
    height: 56,
    borderRadius: radii.pill,
    backgroundColor: colors.royalIvory,
    borderWidth: 1.5,
    borderColor: colors.antiqueGold,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  shutterOuterActive: {
    borderColor: colors.mutedMaroon,
  },
  shutterPressed: {
    transform: [{ scale: 0.94 }],
  },
  shutterInner: {
    width: '100%',
    height: '100%',
    borderRadius: radii.pill,
    backgroundColor: colors.deepEspresso,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shutterInnerActive: {
    backgroundColor: colors.mutedMaroon,
  },
  centerLabel: {
    ...typography.label,
    fontSize: 10.5,
    marginTop: 3,
  },
});
