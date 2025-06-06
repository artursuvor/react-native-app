import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { LanguageProvider } from './context/LanguageContext';
import Calendar from './components/Calendar';

export default function App() {
  return (
    <LanguageProvider>
      <SafeAreaView style={styles.container}>
        <Calendar />
      </SafeAreaView>
    </LanguageProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
