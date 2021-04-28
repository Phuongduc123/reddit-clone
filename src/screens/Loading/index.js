import React, { useEffect } from 'react';
import {
  View,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import {ROUTES} from '../../navigation/routes';

const backgroundImage = require('../../assetss/screen.png');



const LoadingScreen = props => {

  useEffect(()=>{
    setTimeout(()=>{
        props.navigation.navigate( ROUTES.LOGIN)
    },3000)
  },[])  

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        
      </ImageBackground>
    </View>
  );
};

export default LoadingScreen;
