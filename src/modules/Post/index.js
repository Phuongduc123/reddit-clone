import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {HOME_NAVIGATION, TAB_NAVIGATION, CHANNEL_LIST_NAVIGATION} from '../../navigation/routes';
import styles from './styles';
import {NavigationActions,StackActions } from 'react-navigation'
import { CommonActions } from '@react-navigation/native';
const loadingImage = require('../../assetss/loading.gif');
const DefaultPostAvatar = require('../../assetss/Background.png');
const DefaultIconTheme = require('../../assetss/bell.png');
const DefaultIconLike = require('../../assetss/Like.png');
const DefaultIconComment = require('../../assetss/CommentIcon.png');
const DetailPost = require('../../assetss/DetailPost.png');

const Post = (props) => {
  const [arrMedia, setArrMedia] = useState([])
  const _gotoPost = () => {
    const resetAction = CommonActions.navigate(
        {name: CHANNEL_LIST_NAVIGATION.POST, params:{
            data:props?.item
        }},
     );
    props.navigation.dispatch(resetAction);
  };



  useEffect(()=> {
    if(!!props?.item && props?.item.media!=""){
      setArrMedia(_.split(props?.item,"-"))
    }
  }, [props?.item])

  return (
    <TouchableOpacity style={styles.container} onPress={_gotoPost}>
      <View style={styles.AvataFrame}>
        {/* <Image source={props?.item?.media!==""?arrMedia[0]:DefaultPostAvatar} style={ styles.postAvatar} /> */}
        <Image source={props?.item?.media===""?DefaultPostAvatar: {uri:`data:image/jpeg;base64,${props?.item?.media.split("-")[0]}` }} style={ styles.postAvatar} />
      </View>
      <View style={styles.content}>
        <View style={styles.themeNName}>
          <Image source={DefaultIconTheme} style={styles.iconTheme} />
          <Text style={styles.nameText}>{props?.item?.title}</Text>
        </View>
        <View style={styles.description}>
          <Text numberOfLines={3} style={styles.desText}>
            {props?.item?.content}
          </Text>
        </View>
        <View style={styles.likeComment}>
          <View style={styles.viewCom}>
            <View style={styles.LikeView}>
              <Image source={DefaultIconLike} style={styles.iconLike} />
              <Text>{props?.item?.upvote_count}</Text>
            </View>
            <View style={styles.commentView}>
              <Image source={DefaultIconComment} style={styles.iconComment} />
              <Text>{props?.item?.total_comment}</Text>
            </View>
          </View>
          <Image source={DetailPost} style={styles.seenIcon} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Post;
