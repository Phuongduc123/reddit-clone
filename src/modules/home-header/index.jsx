import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import logoImage from '../../assetss/Logo.png';
import avatarImage from '../../assetss/Avatar.png'
import {TAB_NAVIGATION} from '../../navigation/routes';

export default function HomeHeaderComponent(props) {
  const _gotoProfile = () => {
    props.navigation.navigate(TAB_NAVIGATION.PROFILE);
  };
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:"center",
          marginHorizontal: 30,
          marginVertical: 30,
        }}>
        <TouchableOpacity>
          <Image source={avatarImage} style={{width: 50, height: 50, borderColor:"#4884ab", borderWidth:1.5, borderRadius:100}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={_gotoProfile}>
          <Image source={logoImage} style={{width: 46, height: 46}} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
