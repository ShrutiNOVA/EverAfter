import React, { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { weddingService } from '@/services/weddingService';
import { useWeddingStore } from '@/store/useWeddingStore';
import { getUpcomingEvent } from '@/utils/dateUtils';
import { WeddingHeader } from '@/components/wedding/WeddingHeader';
import { WeddingHero } from '@/components/wedding/WeddingHero';
import { Countdown } from '@/components/wedding/Countdown';
import { EventCard } from '@/components/wedding/EventCard';
import { DateSelector } from '@/components/wedding/DateSelector';
import { EventTimeline } from '@/components/wedding/EventTimeline';
import { CameraFeatureCard } from '@/components/wedding/CameraFeatureCard';
import { PolaroidPhotoStack } from '@/components/wedding/PolaroidPhotoStack';
import { AnnouncementCard } from '@/components/wedding/AnnouncementCard';
import { GamePreviewCard } from '@/components/wedding/GamePreviewCard';
import { OrnamentalDivider } from '@/components/decorative/OrnamentalDivider';
import { BotanicalIllustration } from '@/components/decorative/BotanicalIllustration';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LoadingState } from '@/components/ui/LoadingState';
import { EmptyState } from '@/components/ui/EmptyState';
import { FadeInView } from '@/components/ui/FadeInView';
import { WeddingEvent } from '@/types/wedding';
import { colors, layout, spacing, typography } from '@/theme';

export default function HomeScreen() {
  const router = useRouter();
  const {
    selectedDayId,
    setSelectedDayId,
    hasUnreadUpdates,
    cameraFilmRemaining,
  } = useWeddingStore();

  const { data, isLoading } = useQuery({
    queryKey: ['home-dashboard'],
    queryFn: () => weddingService.getHomeDashboard(),
  });

  const upcomingEvent = useMemo(() => {
    if (!data?.events.length) return null;
    // Highlight Mehendi & Music if before Day 1 or dynamically calculate next event
    const next = getUpcomingEvent(data.events);
    if (!next) return null;
    // If the wedding hasn't started yet and the first event is Welcome Lunch,
    // keep dynamic calculation accurate while still showcasing the next event.
    return next;
  }, [data?.events]);

  const filteredEvents = useMemo(() => {
    if (!data?.events) return [];
    return data.events.filter((ev) => ev.dayId === selectedDayId);
  }, [data?.events, selectedDayId]);

  if (isLoading || !data) {
    return <LoadingState />;
  }

  const handleOpenEvent = (event: WeddingEvent) => {
    router.push({ pathname: '/events/[id]', params: { id: event.id } });
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          {/* SECTION A — Top Header */}
          <FadeInView delay={0}>
            <WeddingHeader
              guest={data.guest}
              hasUnreadUpdates={hasUnreadUpdates}
              onPressProfile={() => router.push('/profile')}
              onPressNotifications={() => router.push('/(tabs)/updates')}
            />
          </FadeInView>

          {/* SECTION B — Wedding Invitation Hero */}
          <FadeInView delay={60}>
            <WeddingHero wedding={data.wedding} />
          </FadeInView>

          <OrnamentalDivider />

          {/* SECTION C — Wedding Countdown */}
          <FadeInView delay={110}>
            <Countdown
              startDateIso={data.wedding.startDateIso}
              endDateIso={data.wedding.endDateIso}
            />
          </FadeInView>

          {/* SECTION D — Happening Next */}
          {upcomingEvent ? (
            <FadeInView delay={160} style={styles.section}>
              <SectionHeading eyebrow="HAPPENING NEXT" title="Up Next" />
              <EventCard event={upcomingEvent} onPress={handleOpenEvent} />
            </FadeInView>
          ) : null}

          <OrnamentalDivider />

          {/* SECTION E — Wedding Itinerary */}
          <FadeInView delay={200}>
            <SectionHeading
              eyebrow="ITINERARY"
              title="The Celebrations"
              subtitle="Three days. Countless memories."
            />
            <DateSelector
              days={data.days}
              selectedDayId={selectedDayId}
              onSelectDay={setSelectedDayId}
            />
            {filteredEvents.length > 0 ? (
              <EventTimeline events={filteredEvents} onPressEvent={handleOpenEvent} />
            ) : (
              <EmptyState
                title="Quiet Morning"
                message="No scheduled ceremonies for this day."
              />
            )}
          </FadeInView>

          <OrnamentalDivider />

          {/* SECTION F — Capture the Little Things */}
          <FadeInView delay={240}>
            <SectionHeading
              eyebrow="MEMORIES"
              title="Capture the little things."
              subtitle="The best memories are often the unplanned ones."
            />
            <View style={styles.memoriesStack}>
              <CameraFeatureCard
                filmRemaining={cameraFilmRemaining}
                onPress={() => router.push('/(tabs)/camera')}
              />
              <PolaroidPhotoStack
                previews={data.galleryPreviews}
                onExploreGallery={() => router.push('/(tabs)/gallery')}
                onUploadPhotos={() => router.push('/(tabs)/gallery')}
              />
            </View>
          </FadeInView>

          <OrnamentalDivider />

          {/* SECTION G — Wedding Buzz */}
          <FadeInView delay={280}>
            <SectionHeading
              eyebrow="ANNOUNCEMENTS"
              title="A little wedding buzz"
              actionLabel="View all updates"
              onActionPress={() => router.push('/(tabs)/updates')}
            />
            <View style={styles.announcementsStack}>
              {data.announcements.map((item) => (
                <AnnouncementCard
                  key={item.id}
                  announcement={item}
                  onPress={() => router.push('/(tabs)/updates')}
                />
              ))}
            </View>
          </FadeInView>

          {/* SECTION H — Let's Celebrate */}
          <FadeInView delay={320} style={styles.section}>
            <SectionHeading eyebrow="LET'S CELEBRATE" title="Wedding Games" />
            <GamePreviewCard
              game={data.gamePreview}
              onPlay={() => router.push('/games')}
            />
          </FadeInView>

          <OrnamentalDivider />

          {/* SECTION I — Closing Message */}
          <FadeInView delay={360} style={styles.closingSection}>
            <BotanicalIllustration
              variant="lotus"
              size={52}
              color={colors.antiqueGold}
              secondaryColor={colors.dustyGulab}
            />
            <Text style={styles.closingQuote}>{data.wedding.closingQuote}</Text>
            <Text style={styles.closingLabel}>With love,</Text>
            <Text style={styles.closingNames}>{data.wedding.closingSignOff}</Text>
          </FadeInView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.royalIvory,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing['2xl'],
    alignItems: 'center',
  },
  container: {
    width: '100%',
    maxWidth: layout.maxContentWidth,
    paddingHorizontal: layout.screenPaddingHorizontal,
  },
  section: {
    marginTop: spacing.xl,
  },
  memoriesStack: {
    gap: spacing.md,
  },
  announcementsStack: {
    gap: spacing.sm + 2,
  },
  closingSection: {
    alignItems: 'center',
    paddingVertical: spacing.lg,
    gap: spacing.sm,
  },
  closingQuote: {
    ...typography.quoteItalic,
    color: colors.deepEspresso,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
  closingLabel: {
    ...typography.caption,
    color: colors.mutedTaupe,
    marginTop: spacing.sm,
  },
  closingNames: {
    ...typography.coupleNames,
    fontSize: 30,
    lineHeight: 36,
    color: colors.mutedMaroon,
  },
});
