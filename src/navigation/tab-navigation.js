import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TAB_NAVIGATION} from './routes';
import HomeNavigation from './home-navigation';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName={TAB_NAVIGATION.HOME}>
      <Tab.Screen name={TAB_NAVIGATION.HOME} component={HomeNavigation} />
      <Tab.Screen name={TAB_NAVIGATION.MESSAGE} component={HomeNavigation} />
      <Tab.Screen name={TAB_NAVIGATION.CREATE} component={HomeNavigation} />
      <Tab.Screen name={TAB_NAVIGATION.SEARCH} component={HomeNavigation} />
      <Tab.Screen name={TAB_NAVIGATION.PROFILE} component={HomeNavigation} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
