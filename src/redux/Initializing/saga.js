import {all, call, fork, put, select, takeLatest} from 'redux-saga/effects';

import actionInit,{GET_MY_CHANNEL, GET_MY_POSTS, GET_WORLD_CHANNEL} from './action.js';

import rf from '../../request/RequestFactory';

function* getMyChannel(action) {
  try {
    let response = yield rf.getRequest('ChannelRequest').getListChannelByToken({});
    yield put(actionInit.getMyChannelSuccess(response))
  } catch (err) {
    console.log(err, 'err');
  }
}

function* getWorldChannelSaga(action) {
    try {
      let response = yield rf.getRequest('ChannelRequest').getAllWorldChannel();
      yield put(actionInit.getWorldChannelSuccess(response))
    } catch (err) {
      console.log(err, 'err');
    }
  }

  function* getMyPostSaga(action) {
    try {
      let response = yield rf.getRequest('PostRequest').getMyPost();
      yield put(actionInit.getMyPostSuccess(response))
    } catch (err) {
      console.log(err, 'err');
    }
  }

function* watchAdmins() {
  yield takeLatest(GET_MY_CHANNEL, getMyChannel);
  yield takeLatest(GET_WORLD_CHANNEL, getWorldChannelSaga)
  yield takeLatest(GET_MY_POSTS, getMyPostSaga)
}

export default function* rootSaga() {
  yield all([fork(watchAdmins)]);
}
