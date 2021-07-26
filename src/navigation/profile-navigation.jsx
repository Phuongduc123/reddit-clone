import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CHANNEL_LIST_NAVIGATION, HOME_NAVIGATION, PROFILE_NAVIGATION} from './routes';
import HomeHeaderComponent from '../modules/home-header';
import ProfileScreen from '../screens/Profile';
import CreateChannelScreen from '../screens/CreateChannel';
import ChannelScreen from '../screens/Channel';
import MyPostsScreen from '../screens/MyPosts/index';

const Stack = createStackNavigator();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={PROFILE_NAVIGATION.PROFILE}
        component={ProfileScreen}
        options={{
          headerLeft:null,
          headerTitle:"Cá nhân",
          headerStyle:{
            shadowColor:'#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
          }
        }}
      />
      <Stack.Screen
        name={PROFILE_NAVIGATION.CREATE_CHANNEL}
        component={CreateChannelScreen}
        options={{
          headerTitle:"Tạo kênh"
        }}
      />
      <Stack.Screen
        name={CHANNEL_LIST_NAVIGATION.CHANNEL}
        component={ChannelScreen}
      />
      <Stack.Screen
        name={PROFILE_NAVIGATION.MY_POST}
        component={MyPostsScreen}
        options={{
          headerTitle: "Bài đăng của tôi"
        }}
      />

    </Stack.Navigator>
  );
};

export default ProfileNavigation;
