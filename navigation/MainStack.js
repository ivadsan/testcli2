import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home';
import Congrats from '../screens/Congrats';
import * as RootNavigation from '../RootNavigation';
import {Text} from 'react-native';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer
      ref={RootNavigation.navigationRef}
      fallback={<Text>Loading...</Text>}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Congrats" component={Congrats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
