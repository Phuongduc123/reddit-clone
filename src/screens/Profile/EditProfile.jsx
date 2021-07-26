import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput,
} from 'react-native';
const calendarImage = require('../../assetss/mdi_calendar_blank.png');

import {styles} from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  PROFILE_NAVIGATION,
  ROUTES,
  TAB_NAVIGATION,
} from '../../navigation/routes';
import rf from '../../request/RequestFactory';
import {setStorage} from '../../common/AsynStorage';
import {DatePicker, Picker} from 'native-base';

const EditProfile = props => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const setAndroidDate = (event, selectedDate) => {
    const currentDate = selectedDate || props.date;
    props.setDate(currentDate);
    setShowDatePicker(false);
  };

  return (
    <View style={styles.editPro}>
      <View style={styles.nameEdit}>
        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
          Họ và Tên
        </Text>
        <View style={styles.nameInput}>
          <TextInput value={props.name} onChangeText={props.setName} />
        </View>
      </View>
      <View style={styles.sex}>
        <Text
          style={{
            color: 'white',
            fontSize: 15,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Giới tính
        </Text>
        <View style={styles.sexInput}>
          <Picker
            selectedValue={props.gender}
            style={{height: 50, width: '97%'}}
            onValueChange={(itemValue, itemIndex) =>
              props.setGender(itemValue)
            }>
            <Picker.Item color="white" label="Nam" value="M" key="1" />
            <Picker.Item color="white" label="Nữ" value="F" key="2" />
          </Picker>
        </View>
      </View>

      <Text
        style={{
          color: 'white',
          fontSize: 15,
          fontWeight: 'bold',
          marginTop: 10,
        }}>
        Ngày sinh
      </Text>
      <View style={styles.ageInput}>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <Text style={styles.ageText}>
            {`${props.date.getUTCDate()}/${
              props.date.getUTCMonth() + 1
            }/${props.date.getUTCFullYear()}`}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={props.date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={setAndroidDate}
          />
        )}
      </View>
    </View>
  );
};

export default EditProfile;
