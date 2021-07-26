import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import logoImage from '../../assetss/Logo.png';
import avatarImage from '../../assetss/Avatar.png';
import {TAB_NAVIGATION} from '../../navigation/routes';
import styles from './styles';

export default function HeaderComponent(props) {


  return (
    <View>
      <View
        style={styles.header}>
        <TouchableOpacity>
            <View style={styles.avatar}>
             <Image style={styles.avatarImage} source={avatarImage} />

            </View>
        </TouchableOpacity>
        <View style={styles.input}>
            <TextInput
                placeholder="Tìm kiếm"
            />
        </View>
      </View>
    </View>
  );
}
