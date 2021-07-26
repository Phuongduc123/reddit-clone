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
import React, {useLayoutEffect, useState} from 'react';
import HeaderComponent from './header';
import UserItem from './userItem';
import SendIcon from '../../assetss/svg/send.svg';
import Mess from './mess';
const backgroundImage = require('../../assetss/Background.png');
const avatarImage = require('../../assetss/Avatar.png');
const iconCollapse = require('../../assetss/mdi_chevron_down.png');
const iconPost = require('../../assetss/iconPost.png');
const iconTypePostLayout = require('../../assetss/typePostLayout.png');
const iconBell = require('../../assetss/bell.png');

const MessageBoxScreen = props => {
  const [textInput, setTextInput] = useState();
  const [dataPhuong, setDataPhuong] = useState([
    {
      key: 1,
      content: 'okila',
      type: 'send',
    },
    {
      key: 2,
      content: 'okila',
      type: 'receive',
    },
    {
      key: 3,
      content: 'okila',
      type: 'send',
    },
    {
      key: 4,
      content: 'okila',
      type: 'receive',
    },
    {
      key: 5,
      content: 'okila',
      type: 'send',
    },
    {
      key: 6,
      content: 'nohomo',
      type: 'send',
    },
  ]);

  const [dataHuyen, setDataHuyen] = useState([
    {
      key: 1,
      content: 'okila',
      type: 'receive',
    },
    {
      key: 2,
      content: 'okila',
      type: 'send',
    },
    {
      key: 3,
      content: 'okila',
      type: 'receive',
    },
    {
      key: 4,
      content: 'okila',
      type: 'send',
    },
    {
      key: 5,
      content: 'okila',
      type: 'receive',
    },
    {
      key: 6,
      content: 'nohomo',
      type: 'receive',
    },
    {
      key: 7,
      content: 'Hello',
      type: 'receive',
    },
  ]);

  const [data, setData] = useState([
    {
      key: 1,
      content: 'Lâu',
      type: 'send',
    },
    {
      key: 2,
      content: 'La',
      type: 'receive',
    },
    {
      key: 3,
      content: 'Ổn định rồi đó',
      type: 'send',
    },
    {
      key: 4,
      content: 'okila',
      type: 'receive',
    },
    {
      key: 5,
      content: 'okila',
      type: 'send',
    },
    {
      key: 6,
      content: 'nohomo',
      type: 'send',
    },
  ]);

  useLayoutEffect(() => {
    console.log('xnxx131', props.route?.params?.name);
    props.navigation.setOptions({
      headerShown: true,
      header: HeaderComponent,
    });
  }, [props.navigation]);

  const _sendMessage = () => {
    if (props.route?.params?.name === 'Phuong Nguyen') {
      setDataPhuong([
        ...dataPhuong,
        {
          key: textInput,
          content: textInput,
          type: 'send',
        },
      ]);
    } else if(props.route?.params?.name === 'Huyen Do'){
      setDataHuyen([
        ...dataHuyen,
        {
          key: textInput,
          content: textInput,
          type: 'send',
        },
      ])
    }else{
      setData([
        ...dataHuyen,
        {
          key: textInput,
          content: textInput,
          type: 'send',
        },
      ])
    }
    setTextInput()
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <FlatList
          style={{flex: 1, overflow: 'scroll'}}
          contentContainerStyle={styles.channelItemList}
          data={
            props.route.params?.name === 'Phuong Nguyen'
              ? dataPhuong
              : props.route.params?.name === 'Huyen Do'
              ? dataHuyen
              : data
          }
          renderItem={({item}) => <Mess data={item} />}></FlatList>
      </View>
      <View style={styles.inputMessage}>
        <View style={styles.inputMes}>
          <TextInput
            value={textInput}
            onChangeText={setTextInput}
            placeholder="Nhập tin nhắn"
          />
        </View>
        <TouchableOpacity onPress={_sendMessage} style={styles.send}>
          <SendIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessageBoxScreen;
