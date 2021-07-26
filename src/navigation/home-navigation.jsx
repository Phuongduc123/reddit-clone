import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HOME_NAVIGATION} from './routes';
import NewsFeedScreen from '../screens/NewsFeed';
import PostScreen from '../screens/Post';
import ChannelScreen from '../screens/Channel';
import HomeHeaderComponent from '../modules/home-header';

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false,
      // }}
    >
      <Stack.Screen
        name={HOME_NAVIGATION.NEW_FEED}
        component={NewsFeedScreen}
        options={{header: HomeHeaderComponent}}
      />
      <Stack.Screen
        name={HOME_NAVIGATION.POST}
        component={PostScreen}
        // options={{header: () => <View></View>}}
      />
      
    </Stack.Navigator>
  );
};

export default HomeNavigation;
