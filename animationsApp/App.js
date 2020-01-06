import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Toggle from './src/components/toggle';
import CardList from './src/components/cardsList';
import {cards} from './src/mocks/cards';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const App = () => {

  const [alertsIsOn, setAlertIsOn] = useState(false);
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor='white'/>
      <SafeAreaView>
       
          <Text>
            Hello World
          </Text>
          <CardList data={cards} />
        
          <Toggle
          isOn={alertsIsOn}
          onToggle={state => setAlertIsOn(state)}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
