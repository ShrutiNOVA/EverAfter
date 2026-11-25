import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { Image } from 'expo-image';
import { ArrowLeft, Clock, MapPin, Sparkles } from 'lucide-react-native';
import { weddingService } from '@/services/weddingService';
import { LoadingState } from '@/components/ui/LoadingState';
import { EmptyState } from '@/components/ui/EmptyState';
import { OrnamentalDivider } from '@/components/decorative/OrnamentalDivider';
import { colors, layout, radii, spacing, typography } from '@/theme';

export default function EventDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const { data: event, isLoading } = useQuery({
    queryKey: ['event-detail', id],
    queryFn: () => weddingService.getEventById(id ?? ''),
    enabled: Boolean(id),
  });

  if (isLoading) {
    return <LoadingState label="Opening invitation…" />;
  }

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
            <Text style={styles.backText}>Back to Celebrations</Text>
          </Pressable>

          {!event ? (
            <EmptyState
              title="Event Not Found"
              message="We couldn't find details for this ceremony."
            />
          ) : (
            <View style={styles.card}>
              <Image
                source={event.coverImage}
                style={styles.heroImage}
                contentFit="cover"
                transition={300}
                accessibilityLabel={event.title}
              />

              <View style={styles.body}>
                <Text style={styles.subtitle}>{event.subtitle}</Text>
                <Text style={styles.title}>{event.title}</Text>

                <View style={styles.metaList}>
                  <View style={styles.metaRow}>
                    <Clock size={16} color={colors.mutedMaroon} strokeWidth={1.6} />
                    <Text style={styles.metaText}>{event.displayTime}</Text>
                  </View>
                  <View style={styles.metaRow}>
                    <MapPin size={16} color={colors.mutedMaroon} strokeWidth={1.6} />
                    <Text style={styles.metaText}>{event.venue}</Text>
                  </View>
                  <View style={styles.metaRow}>
                    <Sparkles size={16} color={colors.mehendiGreen} strokeWidth={1.6} />
                    <Text style={styles.metaText}>Dress code: {event.dressCode}</Text>
                  </View>
                </View>

                <OrnamentalDivider />

                <Text style={styles.description}>{event.description}</Text>

                <Text style={styles.highlightsLabel}>EVENING HIGHLIGHTS</Text>
                <View style={styles.highlightsList}>
                  {event.highlights.map((item) => (
                    <View key={item} style={styles.highlightChip}>
                      <Text style={styles.highlightText}>{item}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          )}
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
  card: {
    backgroundColor: colors.warmPaper,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.antiqueGoldSoft,
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: 240,
    backgroundColor: colors.parchmentTint,
  },
  body: {
    padding: spacing.lg,
  },
  subtitle: {
    ...typography.caption,
    color: colors.mehendiGreen,
    marginBottom: 4,
  },
  title: {
    ...typography.heroHeading,
    fontSize: 32,
    color: colors.deepEspresso,
    marginBottom: spacing.md,
  },
  metaList: {
    gap: spacing.sm,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  metaText: {
    ...typography.body,
    fontSize: 14,
    color: colors.deepEspresso,
  },
  description: {
    ...typography.body,
    color: colors.deepEspresso,
    marginBottom: spacing.lg,
  },
  highlightsLabel: {
    ...typography.editorialMicro,
    color: colors.mutedTaupe,
    marginBottom: spacing.sm,
  },
  highlightsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  highlightChip: {
    backgroundColor: colors.royalIvory,
    borderWidth: 1,
    borderColor: colors.antiqueGoldSoft,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs + 3,
    borderRadius: radii.pill,
  },
  highlightText: {
    ...typography.label,
    color: colors.deepEspresso,
  },
});
