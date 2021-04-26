import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HOME_NAVIGATION} from './routes';
import NewsFeedScreen from '../screens/NewsFeed';
import PostScreen from '../screens/Post';
import ChannelScreen from '../screens/Channel';

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={HOME_NAVIGATION.NEWS_FEED}
        component={NewsFeedScreen}
      />
      <Stack.Screen name={HOME_NAVIGATION.POST} component={PostScreen} />
      <Stack.Screen name={HOME_NAVIGATION.CHANNEL} component={ChannelScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
