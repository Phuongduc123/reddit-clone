import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CREATE_NAVIGATION} from './routes';
import HomeHeaderComponent from '../modules/home-header';
import CreateScreen from '../screens/Create';

const Stack = createStackNavigator();

const CreateNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={CREATE_NAVIGATION.CREATE}
        component={CreateScreen}
        options={{header: HomeHeaderComponent}}
      />
    </Stack.Navigator>
  );
};

export default CreateNavigation;
