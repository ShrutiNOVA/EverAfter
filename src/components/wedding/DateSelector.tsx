import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import { WeddingDay } from '@/types/wedding';
import { colors, radii, spacing, typography } from '@/theme';

interface DateSelectorProps {
  days: WeddingDay[];
  selectedDayId: string;
  onSelectDay: (dayId: string) => void;
}

export function DateSelector({ days, selectedDayId, onSelectDay }: DateSelectorProps) {
  const handleSelect = (dayId: string) => {
    Haptics.selectionAsync().catch(() => {});
    onSelectDay(dayId);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      {days.map((day) => {
        const isSelected = day.id === selectedDayId;
        return (
          <Pressable
            key={day.id}
            onPress={() => handleSelect(day.id)}
            accessibilityRole="tab"
            accessibilityState={{ selected: isSelected }}
            accessibilityLabel={`${day.shortDate}, ${day.weekday}`}
            style={({ pressed }) => [
              styles.pill,
              isSelected ? styles.pillSelected : styles.pillDefault,
              pressed && { opacity: 0.85 },
            ]}
          >
            <Text style={[styles.dateText, isSelected && styles.dateTextSelected]}>
              {day.shortDate}
            </Text>
            <View
              style={[
                styles.dot,
                { backgroundColor: isSelected ? colors.royalIvory : colors.antiqueGold },
              ]}
            />
            <Text style={[styles.weekdayText, isSelected && styles.weekdayTextSelected]}>
              {day.weekday}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    gap: spacing.sm + 2,
    paddingVertical: spacing.xs,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 3,
    borderRadius: radii.sm,
    borderWidth: 1,
    gap: spacing.sm,
    minHeight: 44,
  },
  pillDefault: {
    backgroundColor: colors.warmPaper,
    borderColor: colors.antiqueGoldSoft,
  },
  pillSelected: {
    backgroundColor: colors.mehendiGreen,
    borderColor: colors.mehendiGreen,
  },
  dateText: {
    ...typography.editorialMicro,
    fontSize: 11,
    color: colors.deepEspresso,
  },
  dateTextSelected: {
    color: colors.royalIvory,
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: radii.pill,
  },
  weekdayText: {
    ...typography.label,
    color: colors.mutedTaupe,
  },
  weekdayTextSelected: {
    color: colors.royalIvory,
  },
});
