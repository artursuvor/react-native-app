import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Counter(): React.JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ты нажал {count} раз</Text>
      <Button title="Нажми меня" onPress={() => setCount(count + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default Counter;
