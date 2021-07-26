import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import itemImage from '../../assetss/Avatar.png';
import UpArrowSvgIcon from '../../assetss/svg/up-arrow.svg';
import {s} from '../../consts/styles/scalingUtils';
import DownArrowSvgIcon from '../../assetss/svg/down-arrow.svg';
import SendIcon from '../../assetss/svg/send.svg';
import rf from '../../request/RequestFactory';
import COLORS from '../../consts/styles/color';

import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import _ from 'lodash';

const Comment = props => {
  const [reply, setReply] = useState();

  const _like = async () => {
    if (props.data.status === 'none' || props.data.status === 'down') {
      const response = await rf
        .getRequest('PostRequest')
        .upvoteComment(props.data.id);
      if (response.message === 'success') {
        props.getDetailPost();
      }
    } else _deleteLike();
  };

  const _dislike = async () => {
    if (props.data.status === 'none' || props.data.status === 'up') {
      const response = await rf
        .getRequest('PostRequest')
        .downvoteComment(props.data.id);
      if (response.message === 'success') {
        props.getDetailPost();
      }
    } else _deleteLike();
  };

  const _deleteLike = async () => {
    const response = await rf
      .getRequest('PostRequest')
      .deletevoteComment(props.data.id);
    if (response.message === 'success') {
      props.getDetailPost();
    }
  };

  const _comment = async () => {
    const response = await rf
      .getRequest('PostRequest')
      .replyComment(props.data.id, {content: reply});
    if (response.message === 'success') {
      props.getDetailPost();
      setReply();
    }
  };

  return (
    <View key={props.key}>
      <View style={styles.comment}>
        <View style={styles.avatarUser}>
          <Image style={styles.avatarUserImage} source={itemImage} />
        </View>
        <View style={styles.bodyComment}>
          <View style={styles.userName}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              {props.data.comment_author}
            </Text>
          </View>
          <Text>{props.data.content}</Text>
          <View style={styles.operation}>
            <View style={styles.upvoteNode}>
              <Text style={{marginHorizontal: s(1), fontSize: s(16)}}>
                {props.data.upvote_count}
              </Text>
              <TouchableOpacity onPress={_like}>
                <UpArrowSvgIcon
                  width={s(15)}
                  height={s(15)}
                  fill={
                    props.data.status === 'up'
                      ? COLORS.BlueQueen
                      : COLORS.DarkGray
                  }
                />
              </TouchableOpacity>
            </View>
            <View style={styles.downvoteNode}>
              <Text style={{marginHorizontal: s(1), fontSize: s(16)}}>
                {props.data.downvote_count}
              </Text>
              <TouchableOpacity onPress={_dislike}>
                <DownArrowSvgIcon
                  width={s(15)}
                  height={s(15)}
                  fill={
                    props.data?.status === 'down'
                      ? COLORS.BlueQueen
                      : COLORS.DarkGray
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={{marginLeft:30}}>
        {_.map(props.data.children_comment, (value, index) => {
          return <Comment getDetailPost={props.getDetailPost} childComment={true} key={index} data={value} />;
        })}
      </View>
      {!props?.childComment && (
        <View style={styles.replyComment}>
          <TextInput
            focusable={true}
            style={styles.commentInputReply}
            placeholder="Reply comment"
            placeholderTextColor="rgba(0,0,0,0.5)"
            value={reply}
            onChangeText={setReply}
          />
          <TouchableOpacity onPress={_comment} style={styles.sendIconReply}>
            <SendIcon />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Comment;
