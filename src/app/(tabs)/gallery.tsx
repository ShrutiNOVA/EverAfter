import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { Images, Lock } from 'lucide-react-native';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { OrnamentalDivider } from '@/components/decorative/OrnamentalDivider';
import { demoGalleryPreviews } from '@/data/weddingData';
import { colors, layout, radii, spacing, typography } from '@/theme';

export default function GalleryScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.statusBanner}>
            <Images size={15} color={colors.mehendiGreen} strokeWidth={1.6} />
            <Text style={styles.statusText}>PHASE 2 PREVIEW · COLLABORATIVE ALBUM</Text>
          </View>

          <SectionHeading
            eyebrow="SHARED KEEPSAKE"
            title="Wedding Album"
            subtitle="Explore candid moments shared by family and friends across all three days."
          />

          <View style={styles.grid}>
            {demoGalleryPreviews.map((item) => (
              <View key={item.id} style={styles.polaroidCard}>
                <Image
                  source={item.image}
                  style={styles.photo}
                  contentFit="cover"
                  transition={300}
                  accessibilityLabel={item.caption}
                />
                <Text style={styles.caption}>{item.caption}</Text>
                <Text style={styles.takenBy}>Captured by {item.takenBy}</Text>
              </View>
            ))}
          </View>

          <OrnamentalDivider />

          <View style={styles.roadmapCard}>
            <Lock size={18} color={colors.antiqueGold} strokeWidth={1.6} />
            <Text style={styles.roadmapTitle}>Coming in Phase 2</Text>
            <Text style={styles.roadmapBody}>
              Full-resolution photo dumping, event-filtered albums, and private guest-only sharing controls powered by Supabase Storage.
            </Text>
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
  grid: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  polaroidCard: {
    flex: 1,
    backgroundColor: colors.pureWhite,
    padding: spacing.sm,
    paddingBottom: spacing.md,
    borderRadius: radii.xs,
    borderWidth: 1,
    borderColor: colors.softTaupe,
  },
  photo: {
    width: '100%',
    height: 150,
    backgroundColor: colors.warmPaper,
  },
  caption: {
    ...typography.quoteItalic,
    fontSize: 16,
    color: colors.deepEspresso,
    marginTop: spacing.sm,
  },
  takenBy: {
    ...typography.caption,
    color: colors.mutedTaupe,
  },
  roadmapCard: {
    backgroundColor: colors.warmPaper,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.antiqueGoldSoft,
    padding: spacing.lg,
    gap: spacing.xs,
  },
  roadmapTitle: {
    ...typography.eventTitle,
    fontSize: 20,
    color: colors.deepEspresso,
    marginTop: spacing.xs,
  },
  roadmapBody: {
    ...typography.body,
    fontSize: 14,
    color: colors.mutedTaupe,
  },
});
