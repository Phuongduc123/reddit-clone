/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, Button} from 'react-native';
import {HOME_NAVIGATION} from '../../navigation/routes';

const NewsFeedScreen = props => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Post"
        onPress={() => props.navigation.navigate(HOME_NAVIGATION.POST)}
      />
    </View>
  );
};

export default NewsFeedScreen;
