import { all } from 'redux-saga/effects';
import login from './login/saga';
import initial from './Initializing/saga'


function* rootSaga() {
  yield all([
    login(),
    initial()
  ]);
}

export default rootSaga;
