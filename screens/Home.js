/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, useColorScheme, View, Text, Button} from 'react-native';

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Login"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default Home;
