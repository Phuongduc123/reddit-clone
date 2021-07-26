import React, {useEffect, useState} from 'react';
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
import rf from '../../request/RequestFactory';

const NewsFeedScreen = props => {
  const refText = React.useRef(null);
  const [data, setData] = useState([]);
  const [refreshList, setRefreshList] = useState(false)
  const [searchText, setSearchText] = useState()

  const _onChangeSearchText = (text) => {
    setSearchText(text)
  };

  useEffect(async () => {
    let response = await rf.getRequest('AnomynousRequest').getDetailHome();
    setData(response);
  }, []);

  useEffect(()=> {
    const unsubscribe = props.navigation.addListener('focus', () => {
      _getData()
    });
    return unsubscribe
  }, [props.navigation])

  const _getData = async () => {
    setRefreshList(true)
    let response = await rf.getRequest('AnomynousRequest').getDetailHome();
    setData(response)
    setTimeout(()=> {
      setRefreshList(false)
    },1000)
    
  }

  const _search = async () => {
    let response = await rf.getRequest('PostRequest').searchPost({content:searchText});
    if(response){
      setData(response)
    }
    
  }



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
            value={searchText}
            placeholder="Search places..."
            onChangeText={_onChangeSearchText}
            style={{height: '100%'}}
          />
          <TouchableOpacity onPress={_search}>
            <SearchIconSvg width={20} height={20} fill={COLORS.BlueQueen} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FlatList
          data={data}
          // renderItem={data => <Post data={data} navigation={props.navigation} />}
          refreshing={refreshList}
          onRefresh={_getData}
          keyExtractor={(item)=> item.id}
          renderItem={data =><View>
            { console.log(data)}
            {data?.item?.posts?.map((value, index)=> {
              return (
                <View key={index}><Post item={value} navigation={props.navigation} /></View>
              )
            })}

          </View>}
        />
      </View>
      
    </View>
  );
};

export default NewsFeedScreen;
