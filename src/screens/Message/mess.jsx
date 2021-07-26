import {
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './styles';
import {ROUTES} from '../../navigation/routes';
import React, {useLayoutEffect} from 'react';
import HeaderComponent from './header';
import UserItem from './userItem';
import SendIcon from '../../assetss/svg/send.svg';
const backgroundImage = require('../../assetss/Background.png');
const avatarImage = require('../../assetss/Avatar.png');
const iconCollapse = require('../../assetss/mdi_chevron_down.png');
const iconPost = require('../../assetss/iconPost.png');
const iconTypePostLayout = require('../../assetss/typePostLayout.png');
const iconBell = require('../../assetss/bell.png');

const Mess = props => {
  return (
    <View style={{justifyContent:props.data.type==="send"?"flex-end":"flex-start", flexDirection:"row"}}>
      <View
        style={{...styles.mess, backgroundColor:props.data.type==="send"?'#4884ab':"rgba(0,0,0,0.5)"}}>
        <Text style={{...styles.messText,color:"white"}}>{props.data.content}</Text>
      </View>
    </View>
  );
};

export default Mess;
