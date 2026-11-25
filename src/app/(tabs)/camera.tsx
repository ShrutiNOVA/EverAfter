import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera, Film } from 'lucide-react-native';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { OrnamentalDivider } from '@/components/decorative/OrnamentalDivider';
import { useWeddingStore } from '@/store/useWeddingStore';
import { colors, layout, radii, spacing, typography } from '@/theme';

export default function CameraScreen() {
  const { cameraFilmRemaining } = useWeddingStore();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.statusBanner}>
            <Film size={15} color={colors.mutedMaroon} strokeWidth={1.6} />
            <Text style={styles.statusText}>PHASE 2 PREVIEW · VINTAGE FILM CAMERA</Text>
          </View>

          <SectionHeading
            eyebrow="35MM FILM ROLL"
            title="Disposable Camera"
            subtitle="24 candid exposures per wedding day. Developed in our digital darkroom at midnight."
          />

          <View style={styles.viewfinderCard}>
            <View style={styles.viewfinderFrame}>
              <Camera size={36} color={colors.antiqueGold} strokeWidth={1.3} />
              <Text style={styles.viewfinderTitle}>Kodak Portra 400 · Ready</Text>
              <Text style={styles.viewfinderSub}>
                {cameraFilmRemaining} of 24 exposures remaining on your roll
              </Text>
            </View>
          </View>

          <OrnamentalDivider />

          <View style={styles.noteCard}>
            <Text style={styles.noteTitle}>Coming in Phase 2</Text>
            <Text style={styles.noteBody}>
              Live camera viewfinder with warm 35mm film grain, flash toggle, exposure counter, and delayed darkroom reveal shared with Sparsh & Alangita.
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
    backgroundColor: colors.mutedMaroonTint,
    borderWidth: 1,
    borderColor: 'rgba(120, 61, 67, 0.25)',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radii.sm,
    marginBottom: spacing.lg,
  },
  statusText: {
    ...typography.editorialMicro,
    fontSize: 10,
    color: colors.mutedMaroon,
  },
  viewfinderCard: {
    backgroundColor: colors.deepEspresso,
    borderRadius: radii.md,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.antiqueGold,
  },
  viewfinderFrame: {
    height: 240,
    borderRadius: radii.sm,
    borderWidth: 1,
    borderColor: 'rgba(180, 154, 101, 0.45)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
    gap: spacing.sm,
  },
  viewfinderTitle: {
    ...typography.eventTitle,
    color: colors.royalIvory,
    marginTop: spacing.xs,
  },
  viewfinderSub: {
    ...typography.label,
    color: colors.antiqueGold,
    textAlign: 'center',
  },
  noteCard: {
    backgroundColor: colors.warmPaper,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.antiqueGoldSoft,
    padding: spacing.lg,
    gap: spacing.xs,
  },
  noteTitle: {
    ...typography.eventTitle,
    fontSize: 20,
    color: colors.deepEspresso,
  },
  noteBody: {
    ...typography.body,
    fontSize: 14,
    color: colors.mutedTaupe,
  },
});
