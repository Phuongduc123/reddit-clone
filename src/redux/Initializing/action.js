export const WELCOME = 'WELCOME';
export const GET_MY_CHANNEL = 'GET_MY_CHANNEL';
export const GET_MY_CHANNEL_SUCCESS = 'GET_MY_CHANNEL_SUCCESS'
export const GET_WORLD_CHANNEL = 'GET_WORLD_CHANNEL';
export const GET_WORLD_CHANNEL_SUCCESS = 'GET_WORLD_CHANNEL_SUCCESS';
export const GET_MY_POSTS = 'GET_MY_POSTS';
export const GET_MY_POSTS_SUCCESS = 'GET_MY_POSTS_SUCCESS';


export default {
  welcome: () => ({
    type: WELCOME,
  }),
  getMyChannel: () => ({
      type: GET_MY_CHANNEL
  }),
  getMyChannelSuccess: (myChannel) => ({
      type: GET_MY_CHANNEL_SUCCESS,
      params: {
          data: myChannel
      }
  }),
  getWorldChannel: () => ({
      type: GET_WORLD_CHANNEL
  }),
  getWorldChannelSuccess: (worldChannel) => ({
    type: GET_WORLD_CHANNEL_SUCCESS,
    params: {
        data:worldChannel
    }
  }),
  getMyPosts: () => ({
    type: GET_MY_POSTS,
  }),
  getMyPostSuccess: (myPosts) => ({
    type: GET_MY_POSTS_SUCCESS,
    params:{
        data: myPosts
    }
  }) 

};
