import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MESSAGE_NAVIGATION} from './routes';
import HomeHeaderComponent from '../modules/home-header';
import MessageScreen from '../screens/Message/index';
import MessageBoxScreen from '../screens/Message/messageBox';


const Stack = createStackNavigator();

const MessageNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={MESSAGE_NAVIGATION.MESSAGE}
        component={MessageScreen}
      />
      <Stack.Screen
        name={MESSAGE_NAVIGATION.MESSAGE_BOX}
        component={MessageBoxScreen}
      />
    </Stack.Navigator>
  );
};

export default MessageNavigation;
