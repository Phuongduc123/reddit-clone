import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import logoImage from '../../assetss/Logo.png';
import itemImage from '../../assetss/Avatar.png';
import {CHANNEL_LIST_NAVIGATION, TAB_NAVIGATION} from '../../navigation/routes';
import styles from './styles';

export default function ChannelItem(props) {
  return (
    <TouchableOpacity onPress={()=>props.navigation.navigate(CHANNEL_LIST_NAVIGATION.CHANNEL,{subName:props.data.sub_name})}> 
      <View style={{...styles.channelItem, width:props.type==="world-channel"?"auto":200}} >
      <View style={{...styles.themeChannel, backgroundColor: props.type==="world-channel"?"#4884ab":"#ff726f"}}></View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: -20,
        }}>
        <View style={styles.avatarChannel}>
          <Image style={styles.imageChannel} source={props.data.media===""?itemImage:{uri:`data:image/jpeg;base64,${props.data.media}`}} />
        </View>
      </View>
      <View style={styles.channelName}>
        <Text style={styles.channelNameText}>{`r/ ${props.data.sub_name}`} </Text>
      </View>
      <View style={styles.channelDescription}>
        <Text style={styles.channelDescriptionText} numberOfLines={3}>
          {props.data.description}
        </Text>
      </View>
    </View>

    </TouchableOpacity>
  );
}
