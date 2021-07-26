//login reducer
import {
    GET_MY_CHANNEL,
    GET_MY_CHANNEL_SUCCESS,
    GET_WORLD_CHANNEL_SUCCESS,
    GET_MY_POSTS_SUCCESS,
} from "./action.js"

export default (
  state = {
      myChannel: [],
      worldChannel: [],
      myPosts: []
  },
  action,
) => {
  switch (action.type) {
    case GET_MY_CHANNEL_SUCCESS:
        console.log("xnxx", action.params)
        return {
            ...state,
            myChannel: action.params.data
        }

    case GET_WORLD_CHANNEL_SUCCESS:
        return {
            ...state,
            worldChannel: action.params.data
        }

    case GET_MY_POSTS_SUCCESS:{
        return {
          ...state,
          myPosts: action.params.data
        }
    }
    
    default:
        console.log("welcome reddit clone")
      return {
        ...state,
      };
  }
};
