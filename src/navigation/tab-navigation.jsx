import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TAB_NAVIGATION} from './routes';
import HomeNavigation from './home-navigation';
import SearchNavigation from './search-navigation';
import CreateNavigation from './create-navigation';
import MessageNavigation from './message-navigation';
import HomeSvgIcon from '../assetss/svg/home.svg';
import SearchSvgIcon from '../assetss/svg/search.svg';
import PlusSvgIcon from '../assetss/svg/plus.svg';
import MessageSvgIcon from '../assetss/svg/message.svg';
import ProfileSvgIcon from '../assetss/svg/user.svg';
import COLORS from '../consts/styles/color';
import ProfileNavigation from './profile-navigation';
import {StyleSheet, Text} from 'react-native';
import {s} from '../consts/styles/scalingUtils';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName={TAB_NAVIGATION.HOME}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <HomeSvgIcon
              width={20}
              height={20}
              fill={focused ? COLORS.BlueQueen : COLORS.Black}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                styles.textTabLabel,
                {color: focused ? COLORS.BlueQueen : COLORS.Black},
              ]}>
              Home
            </Text>
          ),
        }}
        name={TAB_NAVIGATION.HOME}
        component={HomeNavigation}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <SearchSvgIcon
              width={20}
              height={20}
              fill={focused ? COLORS.BlueQueen : COLORS.Black}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                styles.textTabLabel,
                {color: focused ? COLORS.BlueQueen : COLORS.Black},
              ]}>
              Search
            </Text>
          ),
        }}
        name={TAB_NAVIGATION.SEARCH}
        component={SearchNavigation}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <PlusSvgIcon
              width={20}
              height={20}
              fill={focused ? COLORS.BlueQueen : COLORS.Black}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                styles.textTabLabel,
                {color: focused ? COLORS.BlueQueen : COLORS.Black},
              ]}>
              Create
            </Text>
          ),
        }}
        name={TAB_NAVIGATION.CREATE}
        component={CreateNavigation}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <MessageSvgIcon
              width={20}
              height={20}
              fill={focused ? COLORS.BlueQueen : COLORS.Black}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                styles.textTabLabel,
                {color: focused ? COLORS.BlueQueen : COLORS.Black},
              ]}>
              Message
            </Text>
          ),
        }}
        name={TAB_NAVIGATION.MESSAGE}
        component={MessageNavigation}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <ProfileSvgIcon
              width={20}
              height={20}
              fill={focused ? COLORS.BlueQueen : COLORS.Black}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                styles.textTabLabel,
                {color: focused ? COLORS.BlueQueen : COLORS.Black},
              ]}>
              Profile
            </Text>
          ),
        }}
        name={TAB_NAVIGATION.PROFILE}
        component={ProfileNavigation}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  textTabLabel: {
    fontSize: s(10),
    textTransform: 'uppercase',
  },
});
