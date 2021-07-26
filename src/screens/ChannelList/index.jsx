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
import React, {useEffect, useLayoutEffect, useState, useCallback} from 'react';
import Post from '../../modules/Post/index';
import HeaderComponent from './header';
import ChannelItem from './channelItem';
import rf from '../../request/RequestFactory';
import {useDispatch, useSelector} from 'react-redux'
import actionInit from '../../redux/Initializing/action' 


const backgroundImage = require('../../assetss/Background.png');
const avatarImage = require('../../assetss/Avatar.png');
const iconCollapse = require('../../assetss/mdi_chevron_down.png');
const iconPost = require('../../assetss/iconPost.png');
const iconTypePostLayout = require('../../assetss/typePostLayout.png');
const iconBell = require('../../assetss/bell.png');
const useForceUpdate = () => useState()[1];

const ChannelListScreen = props => {
  // const [arraySub, setArraySub] = useState([]);
  // const [arrayWorldSub, setArrayWorldSub] = useState([])
  const dispatch = useDispatch()
  const arraySub = useSelector((state)=> state.initial.myChannel)
  const arrayWorldSub = useSelector((state)=> state.initial.worldChannel)



  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      header: HeaderComponent,
    });
  }, [props.navigation]);

  useEffect(async () => {
    // let response = await rf
    //   .getRequest('ChannelRequest')
    //   .getListChannelByToken({});
    // setArraySub(response);

    // _getWorldChannel()
    dispatch(actionInit.getMyChannel())
    dispatch(actionInit.getWorldChannel())
  }, []);

  useEffect(() => {
    return props.navigation.addListener('focus', async () => {
      // let response = await rf
      //   .getRequest('ChannelRequest')
      //   .getListChannelByToken({});
      // setArraySub(response);

      // _getWorldChannel()
      dispatch(actionInit.getMyChannel())
      dispatch(actionInit.getWorldChannel())
    });
  }, []);

  // const _getWorldChannel = async ()=> {
  //   let response = await rf
  //       .getRequest('ChannelRequest')
  //       .getAllWorldChannel();
  //   setArrayWorldSub(response);
  // }



  return (
    <View style={styles.container}>
      <View style={styles.titleChannel}>
        <Text style={{fontSize:18, fontWeight:"bold"}}>
          Subscribed Channels
        </Text>
      </View>
      
      <View style={styles.channelList}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.channelItemList}
          data={arraySub}
          renderItem={({item}) => (
            <ChannelItem type={"my-channel"} navigation={props.navigation} data={item} />
          )}></FlatList>
      </View>
      <View style={styles.titleChannel}>
        <Text style={{fontSize:18, fontWeight:"bold"}}>
          World
        </Text>
      </View>
      <View style={{...styles.channelList,height:"100%"}}>
        <FlatList
          contentContainerStyle={styles.channelItemList}
          data={arrayWorldSub}
          renderItem={({item}) => (
            <ChannelItem type={"world-channel"} navigation={props.navigation} data={item} />
          )}></FlatList>
      </View>
    </View>
  );
};

export default ChannelListScreen;
