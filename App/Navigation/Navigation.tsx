import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screen/Auth/Login';
import SignUp from '../Screen/Auth/SignUp';
import SlashScreen from '../Screen/SlapshScreen/SlashScreen';
import {ScreenProps} from 'react-native-screens';
import Home from '../Screen/Main/Home';

const Stack = createNativeStackNavigator();

const Auth = (): React.JSX.Element => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SlashScreen" component={SlashScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Auth;

export const MainStack = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
