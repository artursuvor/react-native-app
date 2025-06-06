import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import dayjs from 'dayjs';
import { useLanguage } from '../context/useLanguage';
import { useTranslation } from 'react-i18next';

type Props = {
  date: dayjs.Dayjs;
  onPrev: () => void;
  onNext: () => void;
};

export default function CalendarHeader({ date, onPrev, onNext }: Props) {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <View>
      <View style={styles.container}>
        <Button title="←" onPress={onPrev} />
        <Text style={styles.text}>
          {date.locale(language).format('MMMM YYYY')}
        </Text>
        <Button title="→" onPress={onNext} />
      </View>

      <Picker
        selectedValue={language}
        onValueChange={setLanguage}
        style={styles.picker}
      >
        <Picker.Item label={t('languages.en')} value="en" />
        <Picker.Item label={t('languages.ru')} value="ru" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 16,
  },
  text: {
    fontSize: 20,
    textTransform: 'capitalize',
  },
  picker: {
    marginHorizontal: 16,
  },
});
