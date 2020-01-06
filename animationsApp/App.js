import React, {useState} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import Toggle from './src/components/toggle';
import CardList from './src/components/cardsList';
import {cards} from './src/mocks/cards';

const App = () => {
  const [alertsIsOn, setAlertIsOn] = useState(false);
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.container}>
        <Text>My Content</Text>
        <View style={{height: 600}}>
          <CardList data={cards} showContent={alertsIsOn} />
        </View>
        {alertsIsOn ? <Text>Hiden</Text> : <Text>Show</Text>}
        <Toggle isOn={alertsIsOn} onToggle={state => setAlertIsOn(state)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F6F6F6'
  },
});

export default App;
