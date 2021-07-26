import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Button,
  ScrollView,
} from 'react-native';
import COLORS from '../../consts/styles/color';
import avatarImage from '../../assetss/Avatar.png';
import {s} from '../../consts/styles/scalingUtils';
import {ContainerStyled} from '../../consts/styles/common';
import HomeSvgIcon from '../../assetss/svg/home.svg';
import SearchSvgIcon from '../../assetss/svg/search.svg';
import MessageSvgIcon from '../../assetss/svg/message.svg';
import CreateSvgIcon from '../../assetss/svg/plus.svg';
import {styles} from './styles';
import {
  PROFILE_NAVIGATION,
  ROUTES,
  TAB_NAVIGATION,
} from '../../navigation/routes';
import rf from '../../request/RequestFactory';
import {setStorage} from '../../common/AsynStorage';
import EditProfile from './EditProfile';

const ProfileScreen = props => {
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [gender, setGender] = useState('');
  const [edit, setEdit] = useState(false);

  useEffect(async () => {
    getUserProfile()

  }, []);

  const _navigate = screen => () => {
    props.navigation.navigate(screen);
  };

  const logout = () => {
    setStorage('token', '');
    props.navigation.navigate(ROUTES.LOGIN);
  };

  const editProfile = () => {
    if (edit) {
      updateProfile()
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  const updateProfile = async () => {
    let response = await rf.getRequest('UserRequest').updateProfile({
      age: date.getTime(),
      gender,
      name,
    });
    getUserProfile()
  }

  const getUserProfile = async () => {
    let response = await rf.getRequest('UserRequest').getUserProfile();
    setName(response.name);
    setDate(new Date(response.age));
    setGender(response.gender);
  }

  return (
    <ContainerStyled>
      <View style={styles.viewTop}>
        <Image style={styles.avtImage} source={avatarImage} style={styles.avatar} />
      </View>
      <View style={styles.viewBottom}>
        {!edit ? (
          <View style={styles.infoGroup}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.infoText}>{`Giới tính: ${
              gender === 'M' ? 'Nam' : 'Nữ'
            }, Ngày sinh: ${date.getUTCDate()}/${
              date.getUTCMonth() + 1
            }/${date.getUTCFullYear()}`}</Text>
          </View>
        ) : (
          <EditProfile
            date={date}
            name={name}
            gender={gender}
            setDate={setDate}
            setName={setName}
            setGender={setGender}
          />
        )}
        <View style={styles.EditProfile}>
          <Button
            onPress={editProfile}
            color="#4884ab"
            title={edit ? 'Lưu' : 'Chỉnh sửa'}
          />
        </View>
        <TouchableOpacity
          style={styles.tab}
          onPress={_navigate(PROFILE_NAVIGATION.MY_POST)}>
          <HomeSvgIcon width={s(30)} height={s(30)} fill={COLORS.White} />
          <Text style={styles.tabText}>Bài đăng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={_navigate(TAB_NAVIGATION.MESSAGE)}>
          <MessageSvgIcon width={s(30)} height={s(30)} fill={COLORS.White} />
          <Text style={styles.tabText}>Tin nhắn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={_navigate(PROFILE_NAVIGATION.CREATE_CHANNEL)}>
          <CreateSvgIcon width={s(30)} height={s(30)} fill={COLORS.White} />
          <Text style={styles.tabText}>Tạo kênh</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={logout}>
          <SearchSvgIcon width={s(30)} height={s(30)} fill={COLORS.White} />
          <Text style={styles.tabText}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </ContainerStyled>
  );
};

export default ProfileScreen;
