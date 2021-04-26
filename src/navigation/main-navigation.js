import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/NewsFeed';
import {ROUTES} from './routes';
import TabNavigation from './tab-navigation';
import LoadingComponent from '../modules/loading';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';

const StackRoot = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <StackRoot.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <StackRoot.Screen
          name={ROUTES.TAB_NAVIGATION}
          component={TabNavigation}
        />
        <StackRoot.Screen name={ROUTES.LOGIN} component={LoginScreen} />
        <StackRoot.Screen name={ROUTES.REGISTER} component={RegisterScreen} />
        <StackRoot.Screen
          name={ROUTES.LOADING_SCREEN}
          component={LoadingComponent}
        />
      </StackRoot.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
