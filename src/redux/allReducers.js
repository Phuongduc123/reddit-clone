import { combineReducers } from 'redux';
import login from './login/reducer.js';
import initial from './Initializing/reducer'


const allReducers = combineReducers({
  login,
  initial
});

export default allReducers;
