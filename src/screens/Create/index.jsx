import React,{useEffect, useLayoutEffect, useState} from 'react';
import {Text, View, Image,Button, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { launchImageLibrary } from 'react-native-image-picker';
import rf from '../../request/RequestFactory';
import { useNavigation } from '@react-navigation/native';
import _ from 'lodash'
import {Picker} from '@react-native-picker/picker';

import styles from './styles';
import { CHANNEL_LIST_NAVIGATION, HOME_NAVIGATION } from '../../navigation/routes';
const avatarDefault = require('../../assetss/Avatar.png');
const plus = require('../../assetss/plus.png');

const CreateScreenComponent = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [arrayMedia, setArrayMedia] = useState([])
  const [channel, setChannel] = useState("");
  const [listChannel, setListChannel] = useState([])


  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <View style={styles.buttonPost}>
          <Button title="Đăng" onPress={createPost}/>
        </View>
      ),
      headerStyle:styles.headerStyle
    });
  }, [props.navigation, title, content, arrayMedia,channel])

  useEffect(()=> {
    const unsubscribe = props.navigation.addListener('blur', () => {
      setTitle("")
      setContent("")
      setArrayMedia([])
      setChannel("")
      setListChannel([])
    });
    return unsubscribe
  }, [props.navigation])

  // useEffect(async ()=> {
  //   let response = await rf.getRequest('ChannelRequest').getListChannelByToken({
  //   })
  //   setListChannel(response)
  // },[])

  useEffect(()=> {
    return props.navigation.addListener('focus', async ()=> {
      let response = await rf.getRequest('ChannelRequest').getListChannelByToken({
      })
      setListChannel(response)
    })
  },[])



  const handleChoosePhoto = () => {
    launchImageLibrary({ includeBase64:true }, (response) => {
      if (!!response && !!response.assets) {
        setArrayMedia([...arrayMedia,response.assets[0].base64]);
      }
    });
  };

  const createPost = async () => {
    let response = await rf.getRequest('PostRequest').createPost(channel, {
      title,
      content,
      media:_.join(arrayMedia,'-'),
    })
    if(response.message==="success"){
      props.navigation.navigate(CHANNEL_LIST_NAVIGATION.CHANNEL,{
        subName: channel
      } )
    }
  }
 


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
        <View style={styles.owner}>
          <Image source={avatarDefault} style={styles.avatar}/>
          <View style={styles.name} >
            <Picker
              selectedValue={channel}
              style={{height: 50, width: '97%'}}
              onValueChange={(itemValue, itemIndex) => setChannel(itemValue)}
              >
              <Picker.Item enabled={false} color="#87d8f2" label="Kênh" value="" key={0}/> 
              {
                _.map(listChannel, (data, index)=>{
                  return <Picker.Item label={data?.sub_name} value={data?.sub_name} key={index} />
                })
              }
          </Picker>
          </View> 
        </View> 
       
      <View style={styles.title}>
        <TextInput
          placeholderTextColor="rgba(0,0,0,0.2)"
          placeholder="Tên bài đăng"
          value={title}
          onChangeText={(value)=> setTitle(value)}
          style={styles.titleInput}
        />
      </View>
      <View style={styles.media}>
      {
          _.map(arrayMedia,(value, index)=>{
            console.log("xnxx", value.slice(0,20), index)
            return (
              <View key={index} style={styles.Base64}>
                <Image style={styles.ImageBase64} source={{uri:`data:image/jpeg;base64,${value}`}}/> 
              </View>  
            )
          })
        }
        {UploadImageComponent()}

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

export default CreateScreenComponent;
