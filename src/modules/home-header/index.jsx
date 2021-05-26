import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import logoImage from '../../assetss/Logo.png';
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
          marginHorizontal: 30,
          marginVertical: 30,
        }}>
        <TouchableOpacity>
          <Image source={logoImage} style={{width: 30, height: 30}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={_gotoProfile}>
          <Image source={logoImage} style={{width: 30, height: 30}} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
