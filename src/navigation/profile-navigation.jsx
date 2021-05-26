import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HOME_NAVIGATION, PROFILE_NAVIGATION} from './routes';
import HomeHeaderComponent from '../modules/home-header';
import ProfileScreen from '../screens/Profile';

const Stack = createStackNavigator();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={PROFILE_NAVIGATION.PROFILE}
        component={ProfileScreen}
        options={{header: HomeHeaderComponent}}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
