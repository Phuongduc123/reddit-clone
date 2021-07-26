import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import COLORS from '../../consts/styles/color';
import {s} from '../../consts/styles/scalingUtils';
import UpArrowSvgIcon from '../../assetss/svg/up-arrow.svg';
import DownArrowSvgIcon from '../../assetss/svg/down-arrow.svg';
import CommentSvgIcon from '../../assetss/svg/chat.svg';
import rf from '../../request/RequestFactory';
import SendIcon from '../../assetss/svg/send.svg';
import DeleteSvgIcon from '../../assetss/svg/delete.svg';
import action from '../../redux/Initializing/action';
import Toast from 'react-native-toast-message'


const avatarImage = require('../../assetss/Avatar.png');
import {styles} from './styles';
import Comment from './Comment.';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { useDispatch } from 'react-redux';
const LIKE_STATUS = {
  LIKE: 1,
  NONE: 0,
  DISLIKE: -1,
};

const PostScreen = props => {
  const ref = React.useRef(null);
  const [data, setData] = useState({});
  const [commentInput, setCommentInput] = useState();
  const [state, setState] = React.useState({
    isFocusInput: false,
  });
  const [activeSlide, setActiveSlide] = useState(0);
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('xnxx38', AsyncStorage.getItem('token'));
  }, []);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', async () => {
      let response = await rf
        .getRequest('PostRequest')
        .getDetailPost(props.route.params.data.id);
      setData(response);
    });

    return unsubscribe;
  }, [props.navigation]);

  const _setFocusInput = () => {
    setState({...state, isFocusInput: true});
  };

  const getDetailPost = async () => {
    let response = await rf
      .getRequest('PostRequest')
      .getDetailPost(props.route.params.data.id);
    setData(response);
  };

  const _like = async () => {
    if (data?.vote_status === 'down' || data?.vote_status === 'none') {
      let response = await rf.getRequest('PostRequest').postUpvote(data.id);
      if (response.message === 'success') {
        getDetailPost();
      }
    } else {
      let response = await rf.getRequest('PostRequest').deleteVote(data.id);
      if (response.message === 'success') {
        getDetailPost();
      }
    }
  };

  const _dislike = async () => {
    if (data?.vote_status === 'up' || data?.vote_status === 'none') {
      let response = await rf.getRequest('PostRequest').postDownvote(data.id);
      if (response.message === 'success') {
        getDetailPost();
      }
    } else {
      let response = await rf.getRequest('PostRequest').deleteVote(data.id);
      if (response.message === 'success') {
        getDetailPost();
      }
    }
  };

  const _comment = async () => {
    let response = await rf
      .getRequest('PostRequest')
      .postComment(data.id, {content: commentInput});
    setCommentInput('');
    if (response.message === 'success') {
      getDetailPost();
    }
  };

  const _renderImage = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Image
          style={styles.imageSlide}
          source={{uri: `data:image/jpeg;base64,${item}`}}
        />
      </View>
    );
  };


  const _deletePost= async ()=> {
    const response = await rf
      .getRequest('PostRequest')
      .deletePost(data?.id);
    if (response.message) {
      props.navigation.goBack();
      Toast.show({
        type:"success",
        position:"bottom",
        text1: "Xóa thành công"
      })
      dispatch(action.getMyPosts())
      
    }
  }

  const _alertDelete = ()=> {
    return Alert.alert(
      'Bạn có chắc chắn muốn xóa bài đăng này?',
      '',
      [
        {
          text: "Hủy",
          style: 'cancel',
        },
        {
          text: 'Xác nhận',
          onPress: () => {
            _deletePost();
          },
        }
      ],
    );
  }

  return (
    <View style={{flex: 1, paddingHorizontal: s(20)}}>
      <View style={styles.titleView}>
        <View style={styles.titleNName}>
          <TouchableOpacity>
            <Text style={styles.titleText}>{data?.title}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>{data?.post_author}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={_alertDelete}>
            <DeleteSvgIcon fill={'rgba(0,0,0,0.7)'} width={20} height={20} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.mainView}>
        <View style={styles.imageBox}>
          <Carousel
            data={data?.media?.split('-')}
            renderItem={_renderImage}
            sliderWidth={300}
            itemWidth={300}
            layout={'default'}
            onSnapToItem={index => setActiveSlide(index)}>
            {<View style={{backgroundColor: 'red', height: 20}}></View>}
          </Carousel>
          <Pagination
            dotsLength={data?.media?.split('-').length}
            activeDotIndex={activeSlide}
            containerStyle={{backgroundColor: 'transparent'}}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 8,
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}
            inactiveDotStyle={
              {
                // Define styles for inactive dots here
              }
            }
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </View>
        <View style={styles.descriptionView}>
          <Text>{data?.content}</Text>
        </View>
        <View style={styles.actionView}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{marginHorizontal: s(10), fontSize: s(16)}}>
                {data.upvote_count}
              </Text>
              <TouchableOpacity onPress={_like}>
                <UpArrowSvgIcon
                  width={s(25)}
                  height={s(25)}
                  fill={
                    data?.vote_status === 'up'
                      ? COLORS.BlueQueen
                      : COLORS.DarkGray
                  }
                />
              </TouchableOpacity>
              <Text style={{marginHorizontal: s(10), fontSize: s(16)}}>
                {data.downvote_count}
              </Text>
              <TouchableOpacity onPress={_dislike}>
                <DownArrowSvgIcon
                  width={s(25)}
                  height={s(25)}
                  fill={
                    data?.vote_status === 'down'
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
                {data.total_comment}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.commentBox}>
          <Text style={styles.titleCommentBox}>Comment</Text>
          {data.comments?.map((value, index) => {
            return (
              <Comment getDetailPost={getDetailPost} key={index} data={value} />
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.commentView}>
        <Image source={avatarImage} style={styles.commentAvatarImg} />
        <TextInput
          ref={ref}
          focusable={state.isFocusInput}
          style={styles.commentInput}
          placeholder="Add a comment"
          placeholderTextColor="rgba(0,0,0,0.5)"
          value={commentInput}
          onChangeText={value => setCommentInput(value)}
        />
        <TouchableOpacity onPress={_comment} style={styles.sendIcon}>
          <SendIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostScreen;
