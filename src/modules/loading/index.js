import React from 'react';
import {
  View,
  Image,
} from 'react-native';

const loadingImage = require('../../assetss/loading.gif')

const LoadingComponent = () => {
  return (
    <View>
      <Image source={loadingImage}/>
    </View>
  );
};

export default LoadingComponent;
