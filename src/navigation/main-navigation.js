import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/NewsFeed';
import {ROUTES, HOME_NAVIGATION} from './routes';
import TabNavigation from './tab-navigation';
import LoadingScreen from '../screens/Loading';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import ChannelScreen from '../screens/Channel';

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
        
        <StackRoot.Screen
          name={ROUTES.LOADING_SCREEN}
          component={LoadingScreen}
        />
        <StackRoot.Screen name={ROUTES.LOGIN} component={LoginScreen} />
        <StackRoot.Screen name={ROUTES.REGISTER} component={RegisterScreen} />  
        <StackRoot.Screen name={HOME_NAVIGATION.CHANNEL} component={ChannelScreen} />
        
      </StackRoot.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
