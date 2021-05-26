import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import COLORS from '../../consts/styles/color';
import {s} from '../../consts/styles/scalingUtils';
import UpArrowSvgIcon from '../../assetss/svg/up-arrow.svg';
import DownArrowSvgIcon from '../../assetss/svg/down-arrow.svg';
import CommentSvgIcon from '../../assetss/svg/chat.svg';
const avatarImage = require('../../assetss/Avatar.png');
import {styles} from './styles';
const LIKE_STATUS = {
  LIKE: 1,
  NONE: 0,
  DISLIKE: -1,
};

const PostScreen = () => {
  const ref = React.useRef(null);
  const [state, setState] = React.useState({
    isFocusInput: false,
    likeStatus: LIKE_STATUS.NONE,
    numberOfLike: 0,
  });

  const _setFocusInput = () => {
    setState({...state, isFocusInput: true});
  };

  const _like = () => {
    let numberOfLike, likeStatus;
    if (state.likeStatus === LIKE_STATUS.LIKE) {
      numberOfLike = state.numberOfLike - 1;
      likeStatus = LIKE_STATUS.NONE;
    }
    if (state.likeStatus === LIKE_STATUS.NONE) {
      numberOfLike = state.numberOfLike + 1;
      likeStatus = LIKE_STATUS.LIKE;
    }
    if (state.likeStatus === LIKE_STATUS.DISLIKE) {
      numberOfLike = state.numberOfLike + 2;
      likeStatus = LIKE_STATUS.LIKE;
    }
    setState(state => ({...state, likeStatus, numberOfLike}));
  };

  const _dislike = () => {
    let numberOfLike, likeStatus;
    if (state.likeStatus === LIKE_STATUS.LIKE) {
      numberOfLike = state.numberOfLike - 2;
      likeStatus = LIKE_STATUS.DISLIKE;
    }
    if (state.likeStatus === LIKE_STATUS.NONE) {
      numberOfLike = state.numberOfLike - 1;
      likeStatus = LIKE_STATUS.DISLIKE;
    }
    if (state.likeStatus === LIKE_STATUS.DISLIKE) {
      numberOfLike = state.numberOfLike + 1;
      likeStatus = LIKE_STATUS.NONE;
    }
    setState(state => ({...state, likeStatus, numberOfLike}));
  };

  return (
    <View style={{flex: 1, paddingHorizontal: s(20)}}>
      <View style={styles.titleView}>
        <TouchableOpacity>
          <Text style={styles.titleText}>Bitcoin</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>ducphuong</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.mainView}>
        <View style={styles.descriptionView}>
          <Text>
            Bitcoin là một loại tiền mã hóa, được phát minh bởi Satoshi Nakamoto
            dưới dạng phần mềm mã nguồn mở từ năm 2009. Bitcoin có thể được trao
            đổi trực tiếp bằng thiết bị kết nối Internet mà không cần thông qua
            một tổ chức tài chính trung gian nào. Bitcoin là một loại tiền mã
            hóa, được phát minh bởi Satoshi Nakamoto dưới dạng phần mềm mã nguồn
            mở từ năm 2009. Bitcoin có thể được trao đổi trực tiếp bằng thiết bị
            kết nối Internet mà không cần thông qua một tổ chức tài chính trung
            gian nào. Bitcoin là một loại tiền mã hóa, được phát minh bởi
            Satoshi Nakamoto dưới dạng phần mềm mã nguồn mở từ năm 2009. Bitcoin
            có thể được trao đổi trực tiếp bằng thiết bị kết nối Internet mà
            không cần thông qua một tổ chức tài chính trung gian nào. Bitcoin là
            một loại tiền mã hóa, được phát minh bởi Satoshi Nakamoto dưới dạng
            phần mềm mã nguồn mở từ năm 2009. Bitcoin có thể được trao đổi trực
            tiếp bằng thiết bị kết nối Internet mà không cần thông qua một tổ
            chức tài chính trung gian nào. Bitcoin là một loại tiền mã hóa, được
            phát minh bởi Satoshi Nakamoto dưới dạng phần mềm mã nguồn mở từ năm
            2009. Bitcoin có thể được trao đổi trực tiếp bằng thiết bị kết nối
            Internet mà không cần thông qua một tổ chức tài chính trung gian
            nào. Bitcoin là một loại tiền mã hóa, được phát minh bởi Satoshi
            Nakamoto dưới dạng phần mềm mã nguồn mở từ năm 2009. Bitcoin có thể
            được trao đổi trực tiếp bằng thiết bị kết nối Internet mà không cần
            thông qua một tổ chức tài chính trung gian nào. Bitcoin là một loại
            tiền mã hóa, được phát minh bởi Satoshi Nakamoto dưới dạng phần mềm
            mã nguồn mở từ năm 2009. Bitcoin có thể được trao đổi trực tiếp bằng
            thiết bị kết nối Internet mà không cần thông qua một tổ chức tài
            chính trung gian nào. Bitcoin là một loại tiền mã hóa, được phát
            minh bởi Satoshi Nakamoto dưới dạng phần mềm mã nguồn mở từ năm
            2009. Bitcoin có thể được trao đổi trực tiếp bằng thiết bị kết nối
            Internet mà không cần thông qua một tổ chức tài chính trung gian
            nào.
          </Text>
        </View>
        <View style={styles.actionView}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={_like}>
                <UpArrowSvgIcon
                  width={s(25)}
                  height={s(25)}
                  fill={
                    state.likeStatus === LIKE_STATUS.LIKE
                      ? COLORS.BlueQueen
                      : COLORS.DarkGray
                  }
                />
              </TouchableOpacity>
              <Text style={{marginHorizontal: s(10), fontSize: s(16)}}>
                {state.numberOfLike}
              </Text>
              <TouchableOpacity onPress={_dislike}>
                <DownArrowSvgIcon
                  width={s(25)}
                  height={s(25)}
                  fill={
                    state.likeStatus === LIKE_STATUS.DISLIKE
                      ? COLORS.BlueQueen
                      : COLORS.DarkGray
                  }
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.commentActionView}>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={_setFocusInput}>
              <CommentSvgIcon
                width={s(25)}
                height={s(25)}
                fill={COLORS.DarkGray}
              />
              <Text style={{marginHorizontal: s(10), fontSize: s(16)}}>
                500
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.commentView}>
        <Image source={avatarImage} style={styles.commentAvatarImg} />
        <TextInput
          ref={ref}
          focusable={state.isFocusInput}
          style={styles.commentInput}
          placeholder="Add a comment"
        />
      </View>
    </View>
  );
};

export default PostScreen;
