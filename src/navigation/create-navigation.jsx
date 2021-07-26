import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CHANNEL_LIST_NAVIGATION, CREATE_NAVIGATION} from './routes';
import HomeHeaderComponent from '../modules/home-header';
import CreateScreen from '../screens/Create';
import ChannelScreen from '../screens/Channel';

const Stack = createStackNavigator();

const CreateNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen
        name={CREATE_NAVIGATION.CREATE}
        component={CreateScreen}
        options={({navigation, route})=> ({
          headerShown:true,
          headerTitle:"Đăng bài"
        })}
      />  
      <Stack.Screen
        name={CHANNEL_LIST_NAVIGATION.CHANNEL}
        component={ChannelScreen}
      />
    </Stack.Navigator>
  );
};

export default CreateNavigation;
