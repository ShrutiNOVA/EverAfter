import React from 'react';
import { Pressable, StyleSheet, Text, View, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Camera, Home, Image as ImageIcon, MessageCircle, Bell } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { colors, spacing, typography, radii } from '@/theme';

const TAB_ROUTES = [
  { key: 'home', label: 'Home' },
  { key: 'gallery', label: 'Gallery' },
  { key: 'camera', label: 'Camera', isCenterAction: true },
  { key: 'updates', label: 'Updates' },
  { key: 'chat', label: 'Chat' },
];

interface CustomTabBarProps {
  activeTab: string;
  onTabPress: (key: string) => void;
}

function TabIcon({ routeKey, active }: { routeKey: string; active: boolean }) {
  const col = active ? colors.mutedMaroon : colors.mutedTaupe;
  const size = 22;
  const sw = 1.6;
  if (routeKey === 'home') return <Home size={size} color={col} strokeWidth={sw} />;
  if (routeKey === 'gallery') return <ImageIcon size={size} color={col} strokeWidth={sw} />;
  if (routeKey === 'camera') return <Camera size={24} color={colors.pureWhite} strokeWidth={1.8} />;
  if (routeKey === 'updates') return <Bell size={size} color={col} strokeWidth={sw} />;
  if (routeKey === 'chat') return <MessageCircle size={size} color={col} strokeWidth={sw} />;
  return null;
}

export function CustomTabBar({ activeTab, onTabPress }: CustomTabBarProps) {
  const insets = useSafeAreaInsets();
  const paddingBottom = Math.max(insets.bottom, Platform.OS === 'android' ? 8 : 4);

  const handlePress = (key: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    onTabPress(key);
  };

  return (
    <View style={[styles.container, { paddingBottom }]}>
      <View style={styles.topBorder} />
      <View style={styles.row}>
        {TAB_ROUTES.map((route) => {
          const isActive = activeTab === route.key;

          if (route.isCenterAction) {
            return (
              <Pressable
                key={route.key}
                onPress={() => handlePress(route.key)}
                accessibilityRole="button"
                accessibilityLabel="Open camera"
                style={({ pressed }) => [styles.centerBtn, pressed && { opacity: 0.88 }]}
              >
                <View style={styles.cameraShutter}>
                  <View style={styles.shutterRing} />
                  <TabIcon routeKey="camera" active={false} />
                </View>
                <Text style={styles.centerLabel}>{route.label}</Text>
              </Pressable>
            );
          }

          return (
            <Pressable
              key={route.key}
              onPress={() => handlePress(route.key)}
              accessibilityRole="tab"
              accessibilityLabel={route.label}
              accessibilityState={{ selected: isActive }}
              style={({ pressed }) => [styles.tab, pressed && { opacity: 0.7 }]}
            >
              <TabIcon routeKey={route.key} active={isActive} />
              <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
                {route.label}
              </Text>
              {isActive && <View style={styles.activeDot} />}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.royalIvory,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  topBorder: {
    height: 1,
    backgroundColor: colors.antiqueGoldHairline,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingTop: 8,
    paddingHorizontal: 4,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    gap: 3,
    paddingBottom: 4,
    minHeight: 52,
    justifyContent: 'center',
  },
  tabLabel: {
    ...typography.caption,
    color: colors.mutedTaupe,
    textAlign: 'center',
  },
  tabLabelActive: {
    color: colors.mutedMaroon,
    fontFamily: 'DMSans_500Medium',
  },
  activeDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.mutedMaroon,
    marginTop: 1,
  },
  centerBtn: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
    paddingBottom: 4,
    marginBottom: 2,
  },
  cameraShutter: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: colors.deepEspresso,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -18,
    shadowColor: colors.deepEspresso,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    position: 'relative',
  },
  shutterRing: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: colors.antiqueGold,
    opacity: 0.6,
  },
  centerLabel: {
    ...typography.caption,
    color: colors.mutedTaupe,
    textAlign: 'center',
  },
});

