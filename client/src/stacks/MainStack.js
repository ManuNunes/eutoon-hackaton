import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/SignIn/SignIn';
import SignUp from '../screens/SignUp/SignUp';
import Prelogin from '../screens/Prelogin/Prelogin';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import TypeSelection from '../screens/TypeSelection/TypeSelection';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="TypeSelection" component={TypeSelection} />
      <Stack.Screen name="Prelogin" component={Prelogin} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
