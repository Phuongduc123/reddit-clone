import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../../consts/styles/color';
import logoImage from '../../assetss/Logo.png';
import {s} from '../../consts/styles/scalingUtils';
import {ContainerStyled} from '../../consts/styles/common';
import HomeSvgIcon from '../../assetss/svg/home.svg';
import SearchSvgIcon from '../../assetss/svg/search.svg';
import MessageSvgIcon from '../../assetss/svg/message.svg';
import CreateSvgIcon from '../../assetss/svg/plus.svg';
import {styles} from './styles';
import {TAB_NAVIGATION} from '../../navigation/routes';

const ProfileScreen = props => {
  const _navigate = screen => () => {
    props.navigation.navigate(screen);
  };
  return (
    <ContainerStyled>
      <View style={styles.viewTop}>
        <Image source={logoImage} style={styles.avatar} />
      </View>
      <View style={styles.viewBottom}>
        <View style={styles.infoGroup}>
          <Text style={styles.nameText}>Nguyen Duc Phuong</Text>
          <Text style={styles.infoText}>ducphuong@gmail.com</Text>
          <Text style={styles.infoText}>Gender: Male Age: 20</Text>
        </View>
        <TouchableOpacity
          style={styles.tab}
          onPress={_navigate(TAB_NAVIGATION.HOME)}>
          <HomeSvgIcon width={s(30)} height={s(30)} fill={COLORS.White} />
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={_navigate(TAB_NAVIGATION.MESSAGE)}>
          <MessageSvgIcon width={s(30)} height={s(30)} fill={COLORS.White} />
          <Text style={styles.tabText}>Mesage</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={_navigate(TAB_NAVIGATION.CREATE)}>
          <CreateSvgIcon width={s(30)} height={s(30)} fill={COLORS.White} />
          <Text style={styles.tabText}>Create</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={_navigate(TAB_NAVIGATION.SEARCH)}>
          <SearchSvgIcon width={s(30)} height={s(30)} fill={COLORS.White} />
          <Text style={styles.tabText}>Search</Text>
        </TouchableOpacity>
      </View>
    </ContainerStyled>
  );
};

export default ProfileScreen;
