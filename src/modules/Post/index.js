import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
const loadingImage = require('../../assetss/loading.gif');
const DefaultPostAvatar = require('../../assetss/Background.png');
const DefaultIconTheme = require('../../assetss/bell.png');
const DefaultIconLike = require('../../assetss/Like.png');
const DefaultIconComment = require('../../assetss/CommentIcon.png');
const DetailPost = require('../../assetss/DetailPost.png');

const Post = () => {
  return (
    <View style={styles.container}>
      <View style={styles.AvataFrame}>
        <Image source={DefaultPostAvatar} style={styles.postAvatar} />
      </View>
      <View style={styles.content}>
        <View style={styles.themeNName}>
          <Image source={DefaultIconTheme} style={styles.iconTheme} />
          <Text style={styles.nameText}>Bitcoin</Text>
        </View>
        <View style={styles.description}>
          <Text numberOfLines={3} style={styles.desText}>
            Bitcoin là một loại tiền mã hóa, được phát minh bởi Satoshi Nakamoto
            dưới dạng phần mềm mã nguồn mở từ năm 2009. Bitcoin có thể được trao
            đổi trực tiếp bằng thiết bị kết nối Internet mà không cần thông qua
            một tổ chức tài chính trung gian nào.
          </Text>
        </View>
        <View style={styles.likeComment}>
          <View style={styles.viewCom}>
            <View style={styles.LikeView}>
              <Image source={DefaultIconLike} style={styles.iconLike} />
              <Text>120</Text>
            </View>
            <View style={styles.commentView}>
              <Image source={DefaultIconComment} style={styles.iconComment} />
              <Text>120</Text>
            </View>
          </View>

          <Image source={DetailPost} style={styles.seenIcon} />
        </View>
      </View>
    </View>
  );
};

export default Post;
