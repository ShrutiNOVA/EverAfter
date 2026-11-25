import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MessageCircleHeart } from 'lucide-react-native';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BotanicalIllustration } from '@/components/decorative/BotanicalIllustration';
import { colors, layout, radii, spacing, typography } from '@/theme';

export default function ChatScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.statusBanner}>
            <MessageCircleHeart size={15} color={colors.mutedMaroon} strokeWidth={1.6} />
            <Text style={styles.statusText}>PHASE 2 PREVIEW · GUEST LOUNGE & GUESTBOOK</Text>
          </View>

          <SectionHeading
            eyebrow="CONVERSATIONS"
            title="Celebration Lounge"
            subtitle="Coordinate carpools, share blessings, and sign Sparsh & Alangita’s digital guestbook."
          />

          <View style={styles.previewCard}>
            <BotanicalIllustration variant="lotus" size={44} />
            <Text style={styles.previewTitle}>Real-Time Chat & Guestbook</Text>
            <Text style={styles.previewBody}>
              In Phase 2, this space will host live celebration channels (Team Bride, Team Groom, Travel & Logistics) and handwritten digital blessing cards powered by Supabase Realtime.
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
  previewCard: {
    backgroundColor: colors.warmPaper,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.antiqueGoldSoft,
    padding: spacing.xl,
    alignItems: 'center',
    gap: spacing.md,
  },
  previewTitle: {
    ...typography.eventTitle,
    color: colors.deepEspresso,
    textAlign: 'center',
  },
  previewBody: {
    ...typography.body,
    color: colors.mutedTaupe,
    textAlign: 'center',
  },
});
