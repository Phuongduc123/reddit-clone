/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/allSaga.js';
import allReducers from './redux/allReducers.js';
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);
window.$dispatch = store.dispatch;
sagaMiddleware.run(rootSaga);
// import type {Node} from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
  Text
} from 'react-native';
import HomeStack from './routes/HomeStack.js';

const App = () => {
  const islightMode = useColorScheme() === 'light';
  store.dispatch({
    type: 'WELCOME'
  })
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <Provider store={store} style={styles.container}>
      <HomeStack/>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});

export default App;
