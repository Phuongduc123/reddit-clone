import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TAB_NAVIGATION} from './routes';
import HomeNavigation from './home-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName={TAB_NAVIGATION.HOME}>
      <Tab.Screen
        options={{
          // tabBarLabel: TAB_NAVIGATION.HOME,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
        name={TAB_NAVIGATION.HOME}
        component={HomeNavigation}
      />
      <Tab.Screen name={TAB_NAVIGATION.MESSAGE} component={HomeNavigation} />
      <Tab.Screen name={TAB_NAVIGATION.CREATE} component={HomeNavigation} />
      <Tab.Screen name={TAB_NAVIGATION.SEARCH} component={HomeNavigation} />
      <Tab.Screen name={TAB_NAVIGATION.PROFILE} component={HomeNavigation} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
