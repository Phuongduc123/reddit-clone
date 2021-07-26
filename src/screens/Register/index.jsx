import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  TextInput,
  ActivityIndicator,
  Alert,
  // Picker,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';
import LoadingComponent from '../../modules/loading';
import {ROUTES} from '../../navigation/routes';
import {DatePicker} from 'native-base';
import rf from '../../request/RequestFactory';
import validate from '../../common/validate'

const backgroundImage = require('../../assetss/Background.png');
const accountImage = require('../../assetss/mdi_account.png');
const lockImage = require('../../assetss/mdi_lock.png');
const sexImage = require('../../assetss/mdi_chevron_down.png');
const calendarImage = require('../../assetss/mdi_calendar_blank.png');

const RegisterScreen = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sex, setSex] = useState('M');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('')
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const setAndroidDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShowDatePicker(false);


  };

  const Signup = async () => {
    if(
      name !== "" &&
      email !== "" &&
      password !== "" && 
      passwordAgain !== "" 
    ){
      if(
        password === passwordAgain
      ){
        if( validate.validateEmail(email) && validate.isPassword(password)){
          let response = await rf.getRequest('UserRequest').Signup({
            username:email,
            password:password,
            profile:{
              name: name,
              gender: sex,
              age: date.getTime(),
            }
          })
          if(response.message === "success"){
            return Alert.alert(
              "Đăng ký thành công",
              "Bạn có muốn đăng nhập ngay?",
              [
                {
                  text: "Cancel",
                  style: "cancel"
                },
                { text: "OK" , onPress:()=>{props.navigation.navigate(ROUTES.LOGIN)}}
              ]
            );
          }else{
            return Alert.alert(
              "Có lỗi xảy ra khi đăng ký",
              "Xin vui lòng thử lại",
              [
                {
                  text: "Cancel",
                  style: "cancel"
                },
                { text: "OK" }
              ]
            );
          }
        }else{
          return Alert.alert(
            "Thông tin không hợp lệ",
            "Email hoặc mật khẩu không hợp lệ, mật khẩu cần phải có it nhất 1 chữ in hoa, 1 chữ thường, 1 số",
            [
              {
                text: "Cancel",
                style: "cancel"
              },
              { text: "OK" }
            ]
          );
        }
      }else{
        return Alert.alert(
          "Thông tin không hợp lệ",
          "Nhập lại mật khẩu không trùng khớp",
          [
            {
              text: "Cancel",
              style: "cancel"
            },
            { text: "OK" }
          ]
        );
      }
      

    }else{
      return Alert.alert(
        "Thông tin không hợp lệ",
        "Kiểm tra lại thông tin của bạn",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "OK" }
        ]
      );
    }
    
    
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.rowIntroText}>
          <Text style={styles.createAccountText}>Tạo Tài Khoản</Text>
          <Text style={styles.introText}>Tạo một tài khoản mới</Text>
        </View>
        <View style={styles.nameInput}>
          <TextInput
            value={name}
            onChangeText={value => setName(value)}
            placeholderTextColor="rgba(40, 37, 37, 0.7)"
            placeholder="Tên*"
          />
          <Image source={accountImage} style={styles.accountImage} />
        </View>
        <View style={styles.usernameInput}>
          <TextInput
            value={email}
            onChangeText={value => setEmail(value)}
            placeholderTextColor="rgba(40, 37, 37, 0.7)"
            placeholder="Địa chỉ email*"
          />
          <Image source={accountImage} style={styles.accountImage} />
        </View>
        <View style={styles.sexInput}>
          <Picker
            selectedValue={sex}
            style={{height: 50, width: '97%'}}
            onValueChange={(itemValue, itemIndex) => setSex(itemValue)}
            itemStyle={{
              
            }}
            
            >
            <Picker.Item label="Nam" value="M" key="1" />
            <Picker.Item label="Nữ" value="F" key="2" />
          </Picker>
        </View>
        <View style={styles.ageInput}>
          <TouchableOpacity onPress={()=>setShowDatePicker(true)}>
            <Text style={styles.ageText}>
              {`${date.getUTCDate()}/${
                date.getUTCMonth() + 1
              }/${date.getUTCFullYear()}`}
            </Text>
            <Image source={calendarImage} style={styles.accountImage} />
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={setAndroidDate}
            />
          )}
        </View>
        <View style={styles.passwordInput}>
          <TextInput
            value={password}
            onChangeText={(value)=>setPassword(value)}
            placeholderTextColor="rgba(40, 37, 37, 0.7)"
            secureTextEntry={true}
            placeholder="Mật khẩu"
          />
          <Image source={lockImage} style={styles.lockImage} />
        </View>
        <View style={styles.passwordAgainInput}>
          <TextInput
            value={passwordAgain}
            onChangeText={(value)=>setPasswordAgain(value)}
            placeholderTextColor="rgba(40, 37, 37, 0.7)"
            secureTextEntry={true}
            placeholder="Nhập lại mật khẩu"
          />
          <Image source={lockImage} style={styles.lockImage} />
        </View>
        <View style={styles.registerButton}>
          <Button color="#32393E" title="Đăng ký" onPress={Signup}/>
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
