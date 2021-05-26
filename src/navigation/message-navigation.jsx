import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MESSAGE_NAVIGATION} from './routes';
import HomeHeaderComponent from '../modules/home-header';
import MessageScreen from '../screens/Message';

const Stack = createStackNavigator();

const MessageNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={MESSAGE_NAVIGATION.MESSAGE}
        component={MessageScreen}
        options={{header: HomeHeaderComponent}}
      />
    </Stack.Navigator>
  );
};

export default MessageNavigation;
