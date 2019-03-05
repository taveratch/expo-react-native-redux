import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FilledButton from './src/components/FilledButton';
import { Provider } from 'react-redux'
import { store } from './src/util/createStore';
import Calculator from './src/components/Calculator'

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store()}>
        <View style={styles.container}>
          <Calculator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
