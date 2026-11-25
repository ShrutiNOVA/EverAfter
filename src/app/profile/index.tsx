import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Avatar } from '@/components/ui/Avatar';
import { OrnamentalDivider } from '@/components/decorative/OrnamentalDivider';
import { demoGuestProfile } from '@/data/weddingData';
import { useWeddingStore } from '@/store/useWeddingStore';
import { colors, layout, radii, spacing, typography } from '@/theme';

export default function ProfileScreen() {
  const router = useRouter();
  const { cameraFilmRemaining } = useWeddingStore();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Pressable
            onPress={() => router.back()}
            hitSlop={10}
            accessibilityRole="button"
            accessibilityLabel="Go back"
            style={({ pressed }) => [styles.backButton, pressed && { opacity: 0.7 }]}
          >
            <ArrowLeft size={18} color={colors.deepEspresso} strokeWidth={1.6} />
            <Text style={styles.backText}>Back to Home</Text>
          </Pressable>

          <View style={styles.profileCard}>
            <Avatar source={demoGuestProfile.avatar} size={84} />
            <Text style={styles.name}>{demoGuestProfile.fullName}</Text>
            <Text style={styles.relationship}>{demoGuestProfile.relationship}</Text>

            <OrnamentalDivider style={styles.divider} />

            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{cameraFilmRemaining}</Text>
                <Text style={styles.statLabel}>Exposures Left</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statValue}>Bride</Text>
                <Text style={styles.statLabel}>Celebration Side</Text>
              </View>
            </View>
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
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.lg,
    minHeight: 40,
  },
  backText: {
    ...typography.labelMedium,
    color: colors.deepEspresso,
  },
  profileCard: {
    backgroundColor: colors.warmPaper,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.antiqueGoldSoft,
    padding: spacing.xl,
    alignItems: 'center',
  },
  name: {
    ...typography.sectionHeading,
    color: colors.deepEspresso,
    marginTop: spacing.md,
  },
  relationship: {
    ...typography.label,
    color: colors.mutedTaupe,
    marginTop: 4,
  },
  divider: {
    width: '100%',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    gap: 2,
  },
  statValue: {
    ...typography.eventTitle,
    color: colors.mutedMaroon,
  },
  statLabel: {
    ...typography.caption,
    color: colors.mutedTaupe,
  },
  statDivider: {
    width: 1,
    height: 32,
    backgroundColor: colors.antiqueGoldSoft,
  },
});
