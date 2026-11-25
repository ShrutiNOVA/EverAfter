import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { Images, Upload } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { GalleryPreviewItem } from '@/types/wedding';
import { colors, radii, spacing, typography } from '@/theme';

interface PolaroidPhotoStackProps {
  previews: GalleryPreviewItem[];
  onExploreGallery: () => void;
  onUploadPhotos: () => void;
}

/**
 * Overlapping Polaroid-style wedding album card for Section F.
 */
export function PolaroidPhotoStack({
  previews,
  onExploreGallery,
  onUploadPhotos,
}: PolaroidPhotoStackProps) {
  const first = previews[0];
  const second = previews[1];

  const handleExplore = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    onExploreGallery();
  };

  const handleUpload = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    onUploadPhotos();
  };

  return (
    <View style={styles.card}>
      {/* Overlapping Polaroids */}
      <Pressable
        onPress={handleExplore}
        accessibilityRole="button"
        accessibilityLabel="Explore shared wedding album"
        style={styles.polaroidStage}
      >
        {first ? (
          <View
            style={[
              styles.polaroid,
              styles.polaroidLeft,
              { transform: [{ rotate: `${first.rotationDeg}deg` }] },
            ]}
          >
            <Image
              source={first.image}
              style={styles.polaroidImage}
              contentFit="cover"
              transition={300}
              accessibilityLabel={first.caption}
            />
            <Text style={styles.polaroidCaption} numberOfLines={1}>
              {first.caption}
            </Text>
          </View>
        ) : null}

        {second ? (
          <View
            style={[
              styles.polaroid,
              styles.polaroidRight,
              { transform: [{ rotate: `${second.rotationDeg}deg` }] },
            ]}
          >
            <Image
              source={second.image}
              style={styles.polaroidImage}
              contentFit="cover"
              transition={300}
              accessibilityLabel={second.caption}
            />
            <Text style={styles.polaroidCaption} numberOfLines={1}>
              {second.caption}
            </Text>
          </View>
        ) : null}
      </Pressable>

      {/* Album Copy & Dual Actions */}
      <View style={styles.contentBlock}>
        <Text style={styles.title}>Wedding Album</Text>
        <Text style={styles.subtitle}>
          Every guest’s perspective, gathered in one living keepsake.
        </Text>

        <View style={styles.actionsRow}>
          <Pressable
            onPress={handleExplore}
            accessibilityRole="button"
            accessibilityLabel="Explore guest memories"
            style={({ pressed }) => [styles.actionPill, pressed && { opacity: 0.75 }]}
          >
            <Images size={14} color={colors.mehendiGreen} strokeWidth={1.6} />
            <Text style={styles.actionPrimaryText}>Explore guest memories</Text>
          </Pressable>

          <Pressable
            onPress={handleUpload}
            accessibilityRole="button"
            accessibilityLabel="Upload your photos"
            style={({ pressed }) => [styles.uploadPill, pressed && { opacity: 0.75 }]}
          >
            <Upload size={14} color={colors.deepEspresso} strokeWidth={1.6} />
            <Text style={styles.actionSecondaryText}>Upload your photos</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.parchmentTint,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.antiqueGoldSoft,
    padding: spacing.lg,
  },
  polaroidStage: {
    height: 156,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: spacing.md,
  },
  polaroid: {
    width: 122,
    backgroundColor: colors.pureWhite,
    padding: 7,
    paddingBottom: 14,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'rgba(133, 118, 109, 0.22)',
  },
  polaroidLeft: {
    marginRight: -14,
    zIndex: 1,
  },
  polaroidRight: {
    marginLeft: -14,
    marginTop: 12,
    zIndex: 2,
  },
  polaroidImage: {
    width: '100%',
    height: 98,
    backgroundColor: colors.warmPaper,
  },
  polaroidCaption: {
    ...typography.quoteItalic,
    fontSize: 13,
    lineHeight: 16,
    color: colors.deepEspresso,
    textAlign: 'center',
    marginTop: 6,
  },
  contentBlock: {
    alignItems: 'center',
    gap: 4,
  },
  title: {
    ...typography.eventTitle,
    fontSize: 21,
    color: colors.deepEspresso,
  },
  subtitle: {
    ...typography.label,
    color: colors.mutedTaupe,
    textAlign: 'center',
  },
  actionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  actionPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.mehendiGreenTint,
    borderWidth: 1,
    borderColor: 'rgba(105, 118, 92, 0.35)',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 1,
    borderRadius: radii.sm,
    minHeight: 40,
  },
  uploadPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.royalIvory,
    borderWidth: 1,
    borderColor: colors.antiqueGoldSoft,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 1,
    borderRadius: radii.sm,
    minHeight: 40,
  },
  actionPrimaryText: {
    ...typography.labelMedium,
    fontSize: 12.5,
    color: colors.mehendiGreen,
  },
  actionSecondaryText: {
    ...typography.labelMedium,
    fontSize: 12.5,
    color: colors.deepEspresso,
  },
});
