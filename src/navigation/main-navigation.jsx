import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/NewsFeed';
import {ROUTES, HOME_NAVIGATION} from './routes';
import TabNavigation from './tab-navigation.jsx';
import LoadingScreen from '../screens/Loading';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import ChannelScreen from '../screens/Channel';
import CreateNavigation from './create-navigation';
import ProfileNavigation from './profile-navigation';

const StackRoot = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <StackRoot.Navigator
        initialRouteName={ROUTES.LOADING_SCREEN}
        screenOptions={{
          headerShown: false,
        }}>
        <StackRoot.Screen
          name={ROUTES.LOADING_SCREEN}
          component={LoadingScreen}
        />  
        <StackRoot.Screen
          name={"test"}
          component={TabNavigation}
        />
        <StackRoot.Screen name={ROUTES.LOGIN} component={LoginScreen} />
        <StackRoot.Screen name={ROUTES.REGISTER} component={RegisterScreen} />
        <StackRoot.Screen 
          name={ROUTES.TAB_NAVIGATION}
          component={TabNavigation}
        />
      </StackRoot.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
