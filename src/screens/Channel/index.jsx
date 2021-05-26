import {
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './styles';
import {ROUTES} from '../../navigation/routes';
import React from 'react';
import Post from '../../modules/Post/index';
const backgroundImage = require('../../assetss/Background.png');
const avatarImage = require('../../assetss/Avatar.png');
const iconCollapse = require('../../assetss/mdi_chevron_down.png');
const iconPost = require('../../assetss/iconPost.png');
const iconTypePostLayout = require('../../assetss/typePostLayout.png');
const iconBell = require('../../assetss/bell.png');

const ChannelScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.avatar}>
          <Image style={styles.avataImage} source={avatarImage} />
        </View>
        <View style={styles.introBox}>
          <View style={styles.rowNameAndNotification}>
            <Text style={styles.nameText}>Nguyễn Đức Phương</Text>
            <Image source={iconBell} style={styles.iconNoti} />
            <View style={styles.SubFrame}>
              <Text style={styles.SubText}>Đăng ký</Text>
            </View>
          </View>
          <View style={styles.introContent}>
            <Text style={styles.introText}>
              {' '}
              Ngoài phí giao dịch, các thợ đào còn được trả công cho việc tạo ra
              các khối (block) chứa nhật ký giao dịch. Cứ mỗi 10 phút, một khối
              mới được tạo ra kèm theo một lượng Bitcoin được cấp phát....
            </Text>
          </View>
        </View>
        <View style={styles.utilityBar}>
          <View style={styles.collapPost}>
            <Image source={iconPost} style={styles.iconPost} />
            <Text style={styles.textPost}>Bài đăng</Text>
            <Image source={iconCollapse} style={styles.iconCollapse} />
          </View>

          <Image source={iconTypePostLayout} style={styles.iconLayoutType} />
        </View>
        <View style={styles.PostsContent}>
          <FlatList
            style={{flex: 1, overflow: 'scroll'}}
            contentContainerStyle={styles.PostsList}
            data={[
              {key: 'Devin'},
              {key: 'Alo'},
              {key: 'Okela'},
              {key: 'O'},
              {key: 'Okel'},
              {key: 'Okel1'},
              {key: 'Okel2'},
              {key: 'Okel3'},
            ]}
            renderItem={({item}) => <Post />}></FlatList>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ChannelScreen;
