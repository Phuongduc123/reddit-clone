import React from 'react';
import {
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import LoadingComponent from '../../modules/loading';
import {ROUTES} from '../../navigation/routes';

const backgroundImage = require('../../assetss/Background.png');
const accountImage = require('../../assetss/mdi_account.png');
const lockImage = require('../../assetss/mdi_lock.png');
const sexImage = require('../../assetss/mdi_chevron_down.png');
const calendarImage = require('../../assetss/mdi_calendar_blank.png');

const RegisterScreen = props => {
  const login = () => {
    props.navigation.push('home');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.rowIntroText}>
          <Text style={styles.createAccountText}>Tạo Tài Khoản</Text>
          <Text style={styles.introText}>Tạo một tài khoản mới</Text>
        </View>
        <View style={styles.nameInput}>
          <TextInput
            placeholderTextColor="rgba(40, 37, 37, 0.7)"
            placeholder="Tên*"
          />
          <Image source={accountImage} style={styles.accountImage} />
        </View>
        <View style={styles.usernameInput}>
          <TextInput
            placeholderTextColor="rgba(40, 37, 37, 0.7)"
            placeholder="Địa chỉ email*"
          />
          <Image source={accountImage} style={styles.accountImage} />
        </View>
        <View style={styles.sexInput}>
          <TextInput
            placeholderTextColor="rgba(40, 37, 37, 0.7)"
            placeholder="Giới tính"
          />
          <Image source={sexImage} style={styles.accountImage} />
        </View>
        <View style={styles.ageInput}>
          <TextInput
            placeholderTextColor="rgba(40, 37, 37, 0.7)"
            placeholder="Tuổi"
          />
          <Image source={calendarImage} style={styles.accountImage} />
        </View>
        <View style={styles.passwordInput}>
          <TextInput
            placeholderTextColor="rgba(40, 37, 37, 0.7)"
            placeholder="Mật khẩu"
          />
          <Image source={lockImage} style={styles.lockImage} />
        </View>
        <View style={styles.passwordAgainInput}>
          <TextInput
            placeholderTextColor="rgba(40, 37, 37, 0.7)"
            placeholder="Nhập lại mật khẩu"
          />
          <Image source={lockImage} style={styles.lockImage} />
        </View>
        <View style={styles.registerButton}>
          <Button color="#32393E" title="Đăng ký" onPress={() => login()} />
        </View>
        <View style={styles.hadAccountText}>
          <Text>
            Đã có tài khoản?{' '}
            <TouchableOpacity
              onPress={() => props.navigation.navigate(ROUTES.LOGIN)}>
              <Text style={styles.singinText}>Đăng nhập</Text>
            </TouchableOpacity>
          </Text>
        </View>

        {/* <ActivityIndicator style={styles.indicator} size={80} color="rgba(40, 37, 37, 0.7)"/> */}
      </ImageBackground>
    </View>
  );
};

export default RegisterScreen;
