import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function WeekDaysRow() {
  const { t } = useTranslation();

  const days = [
    t('days.sun'),
    t('days.mon'),
    t('days.tue'),
    t('days.wed'),
    t('days.thu'),
    t('days.fri'),
    t('days.sat'),
  ];

  return (
    <View style={styles.row}>
      {days.map((day) => (
        <Text key={day} style={styles.day}>
          {day}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  day: {
    width: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
