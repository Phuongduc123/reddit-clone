import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import HomeHeaderComponent from '../../modules/home-header';
import Post from '../../modules/Post/index';
import {HOME_NAVIGATION} from '../../navigation/routes';
import SearchIconSvg from '../../assetss/svg/search.svg';
import COLORS from '../../consts/styles/color';
import {s} from '../../consts/styles/scalingUtils';

const NewsFeedScreen = props => {
  const refText = React.useRef(null);

  const _onChangeSearchText = () => {};
  return (
    <View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: COLORS.AshGrey,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: s(15),
            marginHorizontal: s(20),
            borderRadius: s(20),
          }}>
          <TextInput
            ref={refText}
            placeholder="Search places..."
            onChangeText={_onChangeSearchText}
            style={{height: '100%'}}
          />
          <TouchableOpacity>
            <SearchIconSvg width={20} height={20} fill={COLORS.BlueQueen} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
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
        renderItem={item => <Post navigation={props.navigation} />}
      />
    </View>
  );
};

export default NewsFeedScreen;
