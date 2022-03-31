import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import LoginScreen from '../../Screens/Login/LoginScreen';
import RegisterScreen from '../../Screens/Register/RegisterScreen';


const RootStack = createNativeStackNavigator();

function RootStackNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name='Login' component={LoginScreen} />
      <RootStack.Screen name='Register' component={RegisterScreen} />
    </RootStack.Navigator>
  )
}

export default RootStackNavigator
