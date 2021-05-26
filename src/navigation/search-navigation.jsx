import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SEARCH_NAVIGATION} from './routes';
import HomeHeaderComponent from '../modules/home-header';
import SearchScreen from '../screens/Search';

const Stack = createStackNavigator();

const SearchNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SEARCH_NAVIGATION.SEARCH}
        component={SearchScreen}
        options={{header: HomeHeaderComponent}}
      />
    </Stack.Navigator>
  );
};

export default SearchNavigation;
