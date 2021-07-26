import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import logoImage from '../../assetss/Logo.png';
import itemImage from '../../assetss/Avatar.png';
import {MESSAGE_NAVIGATION, TAB_NAVIGATION} from '../../navigation/routes';
import styles from './styles';

export default function UserItem(props) {
  return (
    <TouchableOpacity onPress={()=>{
        props.navigation.navigate(MESSAGE_NAVIGATION.MESSAGE_BOX,{
          name:props.data.name
        })
    }}>
      <View style={styles.userItem}>
        <View style={styles.mainUser}>
          <View style={styles.avatarUser}>
            <Image style={styles.avatarUserImage} source={{uri:props.data.image}} />
          </View>
          <View style={styles.contentUser}>
            <Text style={styles.nameUser}>{props.data.name}</Text>
            <Text style={styles.contentUserText}>{props.data.lastMess}</Text>
          </View>
        </View>

        <View style={styles.notificationUser}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>0</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
