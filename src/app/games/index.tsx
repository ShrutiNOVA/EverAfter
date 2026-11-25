import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ArrowLeft, Sparkles } from 'lucide-react-native';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { demoGamePreview } from '@/data/weddingData';
import { colors, layout, radii, spacing, typography } from '@/theme';

export default function GamesScreen() {
  const router = useRouter();

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

          <View style={styles.statusBanner}>
            <Sparkles size={15} color={colors.mutedMaroon} strokeWidth={1.6} />
            <Text style={styles.statusText}>PHASE 2 PREVIEW · INTERACTIVE GAMES</Text>
          </View>

          <SectionHeading
            eyebrow={demoGamePreview.subtitle}
            title={demoGamePreview.title}
            subtitle={demoGamePreview.prompt}
          />

          <View style={styles.card}>
            <Text style={styles.sampleEyebrow}>SAMPLE QUESTION 01 / 10</Text>
            <Text style={styles.sampleQuestion}>
              Where did Sparsh & Alangita share their very first cup of Assam chai together?
            </Text>
            <Text style={styles.note}>
              The full interactive trivia engine and live guest leaderboard will launch in Phase 2.
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
  card: {
    backgroundColor: colors.warmPaper,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.antiqueGoldSoft,
    padding: spacing.lg,
    gap: spacing.md,
  },
  sampleEyebrow: {
    ...typography.editorialMicro,
    color: colors.mutedTaupe,
  },
  sampleQuestion: {
    ...typography.eventTitle,
    color: colors.deepEspresso,
  },
  note: {
    ...typography.label,
    color: colors.mutedTaupe,
  },
});
