import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CHANNEL_LIST_NAVIGATION} from './routes';
import ChannelListScreen from '../screens/ChannelList/index'
import ChannelScreen from '../screens/Channel';
import PostScreen from '../screens/Post';

const Stack = createStackNavigator();

const ChanelListNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={CHANNEL_LIST_NAVIGATION.CHANNEL_LIST}
        component={ChannelListScreen}
      />
      <Stack.Screen
        name={CHANNEL_LIST_NAVIGATION.CHANNEL}
        component={ChannelScreen}
      />
      <Stack.Screen
        name={CHANNEL_LIST_NAVIGATION.POST}
        component={PostScreen}
      />
    </Stack.Navigator>
  );
};

export default ChanelListNavigation;
