import { combineReducers } from 'redux';
import login from './login/reducer.js';


const allReducers = combineReducers({
  login
});

export default allReducers;
