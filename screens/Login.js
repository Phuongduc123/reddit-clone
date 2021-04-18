import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  TextInput
} from 'react-native';
import {
  widthScreen,
  heightScreen
} from "../consts/consts.js"


const backgroundImage = require('../assetss/Background.png')
const logoImage = require('../assetss/Logo.png')

const Login = props => {
  const login = () => {
    props.navigation.push('Home');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.logoRow}>
            <Image source={logoImage} style={styles.logoImage}/>
        </View>
        <View style={styles.rowIntroText}>
          <Text style={styles.introText}>Hãy đến với chúng tôi để {"\n"}cùng chia sẻ</Text>
        </View>
        <View>
          <TextInput/>
          <Image/>
        </View>
        <View>
          <TextInput/>
          <Image/>
        </View>
        <View>
          <Text>Không phải bạn?</Text>
          <Text>Quên mật khẩu</Text>
        </View>
        <View>
          <Button title="Đăng nhập"/>
        </View>
        <View>
          <Text>Đăng nhập cùng</Text>
        </View>
        <View>
          <Image/>
          <Image/>
        </View>
        
        
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  backgroundImage: {
    flex: 1,
    height:heightScreen* 1.2,
    // resizeMode: 'cover',
    // justifyContent: 'center',
  },
  logoRow: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:"column"
    
  },
  logoImage:{
    // position:"relative",
    // width:10,
    resizeMode: 'contain',
    height:widthScreen * 0.35,
    marginTop: heightScreen * 0.1
    // justifyContent:"center"
    // marginTop:
    // margin:"auto"
  },
  rowIntroText:{
    marginTop:heightScreen*0.02,
    justifyContent: 'center',
  },
  introText:{
    textAlign:'center',
    // fontWeight:'bold',
    fontFamily: 'Roboto-Bold',
    fontSize:18,
    color: 'rgba(40, 37, 37, 0.7)'

  }
});

export default Login;
