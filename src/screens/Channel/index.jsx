import {
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import styles from './styles';
import {ROUTES} from '../../navigation/routes';
import React, {useEffect, useState} from 'react';
import Post from '../../modules/Post/index';
import rf from '../../request/RequestFactory';
import {useSelector, useDispatch} from 'react-redux';
import _ from 'lodash';
import DeleteSvgIcon from '../../assetss/svg/delete.svg';
import {color} from 'react-native-reanimated';
import Toast from 'react-native-toast-message';

const backgroundImage = require('../../assetss/Background.png');
const avatarImage = require('../../assetss/Avatar.png');
const iconCollapse = require('../../assetss/mdi_chevron_down.png');
const iconPost = require('../../assetss/iconPost.png');
const iconTypePostLayout = require('../../assetss/typePostLayout.png');
const iconBell = require('../../assetss/bell.png');

const ChannelScreen = props => {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const subscribedChannel = useSelector(state => state.initial.myChannel);

  useEffect(async () => {
    getDetailChannel();
  }, []);

  const getDetailChannel = async () => {
    let response = await rf
      .getRequest('ChannelRequest')
      .getDetailChannel(props.route.params.subName);
    setData(response);
  };

  const checkSubscribed = () => {
    return !!_.find(subscribedChannel, function (o) {
      return o.id === data?.id;
    });
  };

  const attendChannel = async () => {
    const response = await rf
      .getRequest('ChannelRequest')
      .attendChannel(data?.sub_name);
    if (response.message) {
      getDetailChannel();
    }
  };

  const leaveChannel = async () => {
    const response = await rf
      .getRequest('ChannelRequest')
      .leaveChannel(data?.sub_name);
    if (response.message) {
      getDetailChannel();
    }
  };

  const pressSub = () => {
    if (data?.join_status === 'joined') {
      leaveChannel();
    } else {
      attendChannel();
    }
  };

  const _deleteChannel = async () => {
    const response = await rf
      .getRequest('ChannelRequest')
      .deleteChannel(data?.sub_name);
    if (response.message) {
      props.navigation.goBack();
      Toast.show({
        type:"success",
        position:"bottom",
        text1: "Xóa thành công"
      })
    }
  };

  const _alertChannel = () => {
    return Alert.alert(
      'Bạn có chắc chắn muốn xóa kênh này?',
      '',
      [
        {
          text: "Hủy",
          style: 'cancel',
        },
        {
          text: 'Xác nhận',
          onPress: () => {
            _deleteChannel();
          },
        }
      ],
    );
  };

  useEffect(() => {
    console.log('xnxx37', data);
  }, [data]);

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.avatar}>
          <Image
            style={styles.avataImage}
            source={
              !!data?.media != ''
                ? {uri: `data:image/jpeg;base64,${data?.media}`}
                : avatarImage
            }
          />
        </View>
        <View style={styles.introBox}>
          <View style={styles.rowNameAndNotification}>
            <View style={styles.nameText}>
              <Text style={styles.textName}>{data?.sub_name}</Text>
            </View>
            <Image source={iconBell} style={styles.iconNoti} />
            <TouchableOpacity
              onPress={() => pressSub()}
              style={styles.SubFrame}>
              <Text style={styles.SubText}>
                {data?.join_status === 'joined' ? `Bỏ Đăng ký` : `đăng ký ngay`}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.introContent}>
            <Text style={styles.introText}> {data?.description}</Text>
            <TouchableOpacity onPress={_alertChannel}>
              <DeleteSvgIcon fill={'rgba(0,0,0,0.7)'} width={20} height={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.utilityBar}>
          <View style={styles.collapPost}>
            <Image source={iconPost} style={styles.iconPost} />
            <Text style={styles.textPost}>Bài đăng</Text>
            <Image source={iconCollapse} style={styles.iconCollapse} />
          </View>

          <Image source={iconTypePostLayout} style={styles.iconLayoutType} />
        </View>
        <View style={{...styles.PostsContent}}>
          <FlatList
            style={{flexGrow: 0}}
            contentContainerStyle={styles.PostsList}
            data={data?.posts}
            renderItem={({item}) => (
              <Post navigation={props.navigation} item={item} />
            )}></FlatList>
        </View>
        <View></View>
      </ImageBackground>
    </View>
  );
};

export default ChannelScreen;
