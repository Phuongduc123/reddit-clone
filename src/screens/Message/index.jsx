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
import React,{useLayoutEffect, useState} from 'react';
import HeaderComponent from './header';
import UserItem from './userItem';
const backgroundImage = require('../../assetss/Background.png');
const avatarImage = require('../../assetss/Avatar.png');
const iconCollapse = require('../../assetss/mdi_chevron_down.png');
const iconPost = require('../../assetss/iconPost.png');
const iconTypePostLayout = require('../../assetss/typePostLayout.png');
const iconBell = require('../../assetss/bell.png');

const MessageScreen = (props) => {
  const [data,setData]= useState([
    {
      key: 1,
      name: "Phuong Nguyen",
      lastMess: "okila",
      image: "https://i.pinimg.com/originals/1d/ab/09/1dab09578b6d8ec04a32066ac93a957b.png"
    },
    {
      key: 1,
      name: "Con Nguyen",
      lastMess: "okila",
      image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
    },
    {
      key: 2,
      name: "Huyen Do",
      lastMess: "nohomo",
      image: "https://static.remove.bg/remove-bg-web/3661dd45c31a4ff23941855a7e4cedbbf6973643/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg"
    },
    {
      key: 3,
      name: "Thanh Nguyen",
      lastMess: "nohomo",
      image: "https://i.pinimg.com/originals/f1/40/da/f140da01ba9b02eabb16ecb4adbcbc84.jpg"
    },
    {
      key: 2,
      name: "Long Kieu",
      lastMess: "nohomo",
      image: "https://thumbs.dreamstime.com/b/cosmos-beauty-deep-space-elements-image-furnished-nasa-science-fiction-art-102581846.jpg"
    },
    {
      key: 2,
      name: "Dung Nguyen",
      lastMess: "nohomo",
      image: "https://image.shutterstock.com/image-illustration/scene-wizard-reaching-hand-out-260nw-1570031575.jpg"
    },
  ])

  useLayoutEffect(() => {
    props.navigation.setOptions({
        headerShown: true,
        header: HeaderComponent
    });
  }, [props.navigation]);

  return (
    <View style={styles.container}>
        <View style={styles.channelList}>
            <FlatList
            style={{flex: 1, overflow: 'scroll'}}
            contentContainerStyle={styles.channelItemList}
            data={data}
            keyExtractor={(item)=> item.key}
            renderItem={({item}) => <UserItem data={item} navigation={props.navigation} />}></FlatList>
        </View>
        
    </View>
    );
};

export default MessageScreen;
