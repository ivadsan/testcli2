import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home';
import {Text, View} from 'react-native';

const Stack = createNativeStackNavigator();

const Congrats = () => (
  <View>
    <Text>Congrats</Text>
  </View>
);
const MainStack = () => {
  const linking = {
    prefixes: ['myapp://checkout/congrats', 'myapp://'],
  };
  return (
    <NavigationContainer linking={linking} uriPrefix="myapp://">
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Congrats" component={Congrats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
