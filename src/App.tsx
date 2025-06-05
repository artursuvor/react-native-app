import * as React from 'react';
import { SafeAreaView } from 'react-native';
import Counter from './components/Counter';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Counter />
    </SafeAreaView>
  );
}

export default App;
