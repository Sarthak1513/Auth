import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from '../../Screens/Home/HomeScreen';

const AuthStack = createNativeStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name='Home' component={HomeScreen} />
    </AuthStack.Navigator>
  )
}

export default AuthStackNavigator
