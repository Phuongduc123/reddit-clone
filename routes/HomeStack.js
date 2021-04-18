import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home.js';
import Login from '../screens/Login.js';

const screens = {
  Login: {
    screen: Login,
    navigationOptions:{
      title:"",
      headerShown:false
    }
  },
  Home: {
    screen: Home,
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
