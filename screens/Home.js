import {View, Text} from 'react-native';
import React from 'react';
import ButtonCustomTabs from '../src/components/ButtonCustomTabs';

const Home = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home</Text>
      <ButtonCustomTabs />
    </View>
  );
};

export default Home;
