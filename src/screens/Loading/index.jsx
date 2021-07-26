import React, { useEffect } from 'react';
import {
  View,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import {ROUTES, TAB_NAVIGATION} from '../../navigation/routes';
import {useDispatch, useSelector} from 'react-redux'
import action from '../../redux/Initializing/action'

const backgroundImage = require('../../assetss/screen.png');



const LoadingScreen = props => {
  const dispatch = useDispatch()

  useEffect(()=>{
    setTimeout(()=>{
        props.navigation.navigate( ROUTES.TAB_NAVIGATION, {screen: TAB_NAVIGATION.HOME})
    },3000)
  },[])
  
  useEffect(()=> {
    dispatch(action.getMyChannel())
    dispatch(action.getWorldChannel())
    dispatch(action.getMyPosts())
  },[])



  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        
      </ImageBackground>
    </View>
  );
};



export default LoadingScreen;
