import React, { useState } from 'react';
import { View } from 'react-native';
import CalendarHeader from './CalendarHeader';
import WeekDaysRow from './WeekDaysRow';
import CalendarGrid from './CalendarGrid';
import dayjs from 'dayjs';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const handlePrevMonth = () => {
    setCurrentDate(prev => prev.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => prev.add(1, 'month'));
  };

  return (
    <View>
      <CalendarHeader
        date={currentDate}
        onPrev={handlePrevMonth}
        onNext={handleNextMonth}
      />
      <WeekDaysRow />
      <CalendarGrid date={currentDate} />
    </View>
  );
}

export default Calendar;
