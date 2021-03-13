import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../screens/Splash';
import GetStart from '../screens/GetStart';
import NewsScreen from '../screens/NewsScreen';
import DetailNews from '../screens/DetailNews';

import {navOptionHandler} from '../constants/functions';

const Stack = createStackNavigator();

function StackRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="GetStart"
          component={GetStart}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="NewsScreen"
          component={NewsScreen}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="DetailNews"
          component={DetailNews}
          options={navOptionHandler}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackRoute;
