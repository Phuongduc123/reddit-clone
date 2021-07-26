/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import Toast from 'react-native-toast-message';
import React from 'react';
import {StyleSheet, useColorScheme, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import MainNavigation from './src/navigation/main-navigation';
import store from './src/redux/store.js';

// import type {Node} from 'react';

const App = () => {
  // const islightMode = useColorScheme() === 'light';
  // store.dispatch({
  //   type: 'WELCOME',
  // });
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <Provider store={store} style={styles.container}>
      <MainNavigation />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default App;
