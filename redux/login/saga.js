import {
    all, call, fork, put, select, takeLatest,
  } from 'redux-saga/effects';

  import {
    WELCOME
  } from "./action.js"
  
  function* sagaWelcome(action) {
    try {
        console.log(action)
    } catch (err) {
      console.log(err, 'err');
    }
  }
  
  function* watchAdmins() {
    yield takeLatest(WELCOME, sagaWelcome);
    
  }
  
  export default function* rootSaga() {
    yield all([fork(watchAdmins)]);
  }
  