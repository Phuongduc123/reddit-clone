import React,{useEffect, useLayoutEffect,useCallback, useState} from 'react';
import {Text, View, Image,Button, TextInput, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { launchImageLibrary } from 'react-native-image-picker';
import rf from '../../request/RequestFactory';
import { useNavigation } from '@react-navigation/native';
import _ from 'lodash'

import styles from './styles';
const avatarDefault = require('../../assetss/Avatar.png');
const plus = require('../../assetss/plus.png');
import {Picker} from '@react-native-picker/picker';
import { CHANNEL_LIST_NAVIGATION } from '../../navigation/routes';

const CreateChannelScreen = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [theme, setTheme] = useState("")
  const [arrayMedia, setArrayMedia] = useState([])

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <View style={styles.buttonPost}>
          <Button title="Tạo" onPress={createChannel}/>
        </View>
      ),
      headerStyle:styles.headerStyle
    });
  }, [props.navigation, title,content, theme, arrayMedia])



  const handleChoosePhoto = () => {
    launchImageLibrary({ includeBase64:true }, (response) => {
      if (!!response && !!response.assets) {
        setArrayMedia([...arrayMedia,response.assets[0].base64]);
      }
    });
  };

  const createChannel = useCallback(async () => {
    if(title!==""){
      let response = await rf.getRequest('ChannelRequest').createChannel({
        name: title,
        description: content,
        media:arrayMedia[0],
        theme: theme,
      })
      console.log({
        name: title,
        description: content,
        media:arrayMedia[0],
        theme: theme,
      })
      if(response.message === "success"){
        props.navigation.navigate(CHANNEL_LIST_NAVIGATION.CHANNEL, {subName:title})
      }

    }else {
      return Alert.alert(
        "Có lỗi xảy ra",
        "Bạn cần nhập tên kênh",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "OK" }
        ]
      );
    }
    
  }, [title,content, theme, arrayMedia])


 


  const UploadImageComponent = () => {

    return (
      <TouchableOpacity onPress={handleChoosePhoto} style={styles.uploadImage} >
        <View >
          <Image source={plus} style={styles.plusIconImage}/>
        </View>
      </TouchableOpacity>
    )
  }


  return (
    <View style={styles.createPostScreen}>
      <TouchableOpacity>
        <View style={styles.owner}>
          <Image source={avatarDefault} style={styles.avatar}/>
          <View style={styles.name} >
            <Text style={[styles.nameText]}>
            Phuong Nguyen
            </Text>
          </View> 
        </View> 
      </TouchableOpacity>
       
      <View style={styles.title}>
        <TextInput
          placeholderTextColor="rgba(0,0,0,0.2)"
          placeholder="Tên kênh"
          value={title}
          onChangeText={(value)=> setTitle(value)}
          style={styles.titleInput}
        />
      </View>
      <View style={styles.theme}>
      <Picker
            selectedValue={theme}
            style={{height: 50, width: '97%'}}
            onValueChange={(itemValue, itemIndex) => setTheme(itemValue)}
            >
            <Picker.Item enabled={false} color="#87d8f2" label="Chủ đề" value="" key="0"/> 
            <Picker.Item label="Thời trang" value="fashion" key="1" />
            <Picker.Item label="Thể thao" value="sport" key="2" />
            <Picker.Item label="Tiền ảo" value="crypto" key="3"/>
            <Picker.Item label="Giáo dục" value="education" key="4"/>
        </Picker>
      </View>    
      <View style={styles.media}>
      {
          _.map(arrayMedia,(value, index)=>{
            return (
              <View key={index} style={styles.Base64}>
                <Image style={styles.ImageBase64} source={{uri:`data:image/jpeg;base64,${value}`}}/> 
              </View>  
            )
          })
        }
        {arrayMedia.length===0?UploadImageComponent():<></>}

      </View>
      <View style={styles.content}>
        <TextInput
          value={content}
          onChangeText={(value)=> setContent(value)}
          style={styles.contentInput}
          placeholderTextColor="rgba(0,0,0,0.2)"
          placeholder="Nội dung"
          multiline={true}
          underlineColorAndroid="transparent"
          numberOfLines={4}

        />
      </View>

    </View>
  );
};

export default CreateChannelScreen;
