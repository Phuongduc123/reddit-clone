import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Text, View, Image, Button, TextInput, ScrollView} from 'react-native';
import _ from 'lodash';

import styles from './styles';
import {useSelector} from 'react-redux';
import Post from '../../modules/Post';

const MyPostsScreen = props => {
  const posts = useSelector(state => state.initial.myPosts);

  useEffect(() => {
    console.log('xnxx13', posts);
  }, [posts]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {_.map(posts, (value, index) => {
          return <Post navigation={props.navigation} item={value} />
        })}
      </ScrollView>
    </View>
  );
};

export default MyPostsScreen;
