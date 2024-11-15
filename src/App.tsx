import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Navigation, TicTacToe } from './projects';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Navigation /> */}
        <TicTacToe />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;
