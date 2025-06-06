import React, { JSX } from 'react';
import { View, StyleSheet } from 'react-native';
import dayjs from 'dayjs';
import DayCell from './DayCell';

type Props = {
  date: dayjs.Dayjs;
};

function CalendarGrid({ date }: Props) {
  const startOfMonth = date.startOf('month');
  const endOfMonth = date.endOf('month');
  const startDay = startOfMonth.day() === 0 ? 6 : startOfMonth.day() - 1;

  const daysInMonth = endOfMonth.date();
  const totalCells = startDay + daysInMonth;
  const rows = Math.ceil(totalCells / 7);

  const today = dayjs();

  let days: JSX.Element[] = [];

  for (let i = 0; i < rows * 7; i++) {
    const dayNumber = i - startDay + 1;
    const isCurrentMonth = dayNumber >= 1 && dayNumber <= daysInMonth;

    const currentDay = isCurrentMonth
      ? date.date(dayNumber)
      : null;

    days.push(
      <DayCell
        key={i}
        dayNumber={isCurrentMonth ? dayNumber : null}
        isToday={
          isCurrentMonth &&
          today.isSame(currentDay, 'day') &&
          today.isSame(currentDay, 'month')
        }
        onPress={() => {
          if (currentDay) {
            console.log('Нажал на:', currentDay.format('DD.MM.YYYY'));
          }
        }}
      />
    );
  }

  return <View style={styles.grid}>{days}</View>;
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'center',
  },
});

export default CalendarGrid;
