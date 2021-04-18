import { all } from 'redux-saga/effects';
import login from './login/saga';


function* rootSaga() {
  yield all([
    login(),
  ]);
}

export default rootSaga;
