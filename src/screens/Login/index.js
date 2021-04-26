import React from 'react';
import {
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  TextInput,
} from 'react-native';
import styles from './styles';
const backgroundImage = require('../../assetss/Background.png');
const logoImage = require('../../assetss/Logo.png');

const LoginScreen = props => {
  const login = () => {
    props.navigation.push('home');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.logoRow}>
          <Image source={logoImage} style={styles.logoImage} />
        </View>
        <View style={styles.rowIntroText}>
          <Text style={styles.introText}>
            Hãy đến với chúng tôi để {'\n'}cùng chia sẻ
          </Text>
        </View>
        <View>
          <TextInput />
          <Image />
        </View>
        <View>
          <TextInput />
          <Image />
        </View>
        <View>
          <Text>Không phải bạn?</Text>
          <Text>Quên mật khẩu</Text>
        </View>
        <View>
          <Button title="Đăng nhập" onPress={() => login()} />
        </View>
        <View>
          <Text>Đăng nhập cùng</Text>
        </View>
        <View>
          <Image />
          <Image />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
