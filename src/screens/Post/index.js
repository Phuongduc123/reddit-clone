import React from 'react';
import {Image, Text, View} from 'react-native';

const PostScreen = () => {
  return (
    <View>
      <View>
        <View>
          <View>
            <Image
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkTQ8DFOgujidIRil33r2QnSZ2Y_ZHahrUlw&usqp=CAU',
              }}
              style={{width: 30, height: 30}}
            />
          </View>
          <View>
            <Text>r/AskReddit</Text>
            <Text>u/PhysicalPear</Text>
          </View>
        </View>
        <View>
          <Text>What the best subs for porn on reddit?</Text>
        </View>
        <View>
          <Text>1.1k</Text>
          <Text>303</Text>
          <Text>Share</Text>
        </View>
      </View>
      <View></View>
      <View></View>
    </View>
  );
};

export default PostScreen;
