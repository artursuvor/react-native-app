import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  dayNumber: number | null;
  isToday?: boolean;
  onPress?: () => void;
};

function DayCell({ dayNumber, isToday, onPress }: Props) {
  const isEmpty = dayNumber === null;

  return (
    <TouchableOpacity
      style={[styles.cell, isToday && styles.today]}
      disabled={isEmpty}
      onPress={onPress}
    >
      <Text style={styles.text}>{dayNumber ?? ''}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cell: {
    width: 40,
    height: 40,
    margin: 2,
    borderRadius: 6,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
  today: {
    backgroundColor: '#87ceeb',
  },
});

export default DayCell;
