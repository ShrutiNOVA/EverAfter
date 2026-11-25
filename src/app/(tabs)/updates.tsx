import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell } from 'lucide-react-native';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnnouncementCard } from '@/components/wedding/AnnouncementCard';
import { demoAnnouncements } from '@/data/weddingData';
import { useWeddingStore } from '@/store/useWeddingStore';
import { colors, layout, radii, spacing, typography } from '@/theme';

export default function UpdatesScreen() {
  const { markUpdatesRead } = useWeddingStore();

  useEffect(() => {
    markUpdatesRead();
  }, [markUpdatesRead]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.statusBanner}>
            <Bell size={15} color={colors.mehendiGreen} strokeWidth={1.6} />
            <Text style={styles.statusText}>LIVE FEED PREVIEW · HOST ANNOUNCEMENTS</Text>
          </View>

          <SectionHeading
            eyebrow="WEDDING BUZZ"
            title="Updates & Reminders"
            subtitle="Notes from the hosts, venue cues, and spontaneous celebration alerts."
          />

          <View style={styles.list}>
            {demoAnnouncements.map((item) => (
              <AnnouncementCard key={item.id} announcement={item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.royalIvory },
  scrollContent: { paddingBottom: spacing['2xl'], alignItems: 'center' },
  container: {
    width: '100%',
    maxWidth: layout.maxContentWidth,
    paddingHorizontal: layout.screenPaddingHorizontal,
    paddingTop: spacing.md,
  },
  statusBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.mehendiGreenTint,
    borderWidth: 1,
    borderColor: 'rgba(105, 118, 92, 0.3)',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radii.sm,
    marginBottom: spacing.lg,
  },
  statusText: {
    ...typography.editorialMicro,
    fontSize: 10,
    color: colors.mehendiGreen,
  },
  list: {
    gap: spacing.md,
  },
});
