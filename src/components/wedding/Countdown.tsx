import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { calculateCountdown, padTwo } from '@/utils/dateUtils';
import { colors, radii, spacing, typography } from '@/theme';

interface CountdownProps {
  startDateIso: string;
  endDateIso: string;
}

export function Countdown({ startDateIso, endDateIso }: CountdownProps) {
  const [countdown, setCountdown] = useState(() =>
    calculateCountdown(startDateIso, endDateIso)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateCountdown(startDateIso, endDateIso));
    }, 30000); // Update every 30s for minute precision without unnecessary re-renders

    return () => clearInterval(interval);
  }, [startDateIso, endDateIso]);

  if (countdown.phase === 'during') {
    return (
      <View style={styles.card}>
        <Text style={styles.caption}>CELEBRATION STATUS</Text>
        <Text style={styles.liveTitle}>The celebrations are underway</Text>
        <Text style={styles.liveSubtitle}>
          Cherish every ritual, dance, and quiet moment together.
        </Text>
      </View>
    );
  }

  if (countdown.phase === 'after') {
    return (
      <View style={styles.card}>
        <Text style={styles.caption}>FOREVER BEGINS</Text>
        <Text style={styles.liveTitle}>Happily Ever After</Text>
        <Text style={styles.liveSubtitle}>
          Thank you for filling these three days with warmth and blessings.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <Text style={styles.caption}>THE CELEBRATIONS BEGIN IN</Text>
      <View style={styles.unitsRow}>
        <View style={styles.unit}>
          <Text style={styles.numeral}>{padTwo(countdown.days)}</Text>
          <Text style={styles.unitLabel}>Days</Text>
        </View>

        <Text style={styles.separator}>·</Text>

        <View style={styles.unit}>
          <Text style={styles.numeral}>{padTwo(countdown.hours)}</Text>
          <Text style={styles.unitLabel}>Hours</Text>
        </View>

        <Text style={styles.separator}>·</Text>

        <View style={styles.unit}>
          <Text style={styles.numeral}>{padTwo(countdown.minutes)}</Text>
          <Text style={styles.unitLabel}>Minutes</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.warmPaper,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.antiqueGoldSoft,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
  },
  caption: {
    ...typography.editorialMicro,
    color: colors.mutedTaupe,
    marginBottom: spacing.sm + 2,
  },
  unitsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
  },
  unit: {
    alignItems: 'center',
    minWidth: 58,
  },
  numeral: {
    ...typography.countdownNumeral,
    color: colors.deepEspresso,
  },
  unitLabel: {
    ...typography.caption,
    color: colors.mutedTaupe,
    marginTop: 2,
  },
  separator: {
    ...typography.countdownNumeral,
    color: colors.antiqueGold,
    marginBottom: 14,
  },
  liveTitle: {
    ...typography.eventTitle,
    color: colors.mutedMaroon,
    textAlign: 'center',
  },
  liveSubtitle: {
    ...typography.label,
    color: colors.mutedTaupe,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
});
