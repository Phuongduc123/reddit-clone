import React from 'react';
import {
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {ROUTES} from '../../navigation/routes';
const backgroundImage = require('../../assetss/Background.png');
const logoImage = require('../../assetss/Logo.png');
const accountImage = require('../../assetss/mdi_account.png');
const lockImage = require('../../assetss/mdi_lock.png');
const faceLogo = require('../../assetss/facebook1.png');
const googleLogo = require('../../assetss/google1.png');

const LoginScreen = props => {
  const login = () => {
    props.navigation.push(ROUTES.TAB_NAVIGATION);
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
        <View style={styles.usernameInput}>
          <TextInput
            placeholderTextColor="rgba(40, 37, 37, 0.7)"
            placeholder="Địa chỉ email"
          />
          <Image source={accountImage} style={styles.accountImage} />
        </View>
        <View style={styles.passwordInput}>
          <TextInput
            placeholderTextColor="rgba(40, 37, 37, 0.7)"
            placeholder="Mật khẩu"
          />
          <Image source={lockImage} style={styles.lockImage} />
        </View>
        <View style={styles.notYouNnotRemPass}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate(ROUTES.REGISTER)}>
            <View>
              <Text style={{color: 'white'}}>Bạn muốn đăng ký?</Text>
            </View>
          </TouchableOpacity>
          <View>
            <Text>Quên mật khẩu</Text>
          </View>
        </View>
        <View style={styles.loginButton}>
          <Button color="#32393E" title="Đăng nhập" onPress={() => login()} />
        </View>
        <View style={styles.signInWidth}>
          <View>
            <Text style={{color: 'white'}}>Đăng nhập cùng</Text>
          </View>
        </View>
        <View style={styles.googleNfacebook}>
          <View>
            <Image style={styles.faceImage} source={faceLogo} />
          </View>
          <View>
            <Image style={styles.googleImage} source={googleLogo} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
