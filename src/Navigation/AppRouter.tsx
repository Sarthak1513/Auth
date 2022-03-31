import React, { useContext, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './StackNavigators/RootStackNavigator';
import AuthStackNavigator from './StackNavigators/AuthStackNavigator';
import { AuthContext } from '../Contexts/AuthContextProvider';

function AppRouter() {
    const {loggedIn} = useContext(AuthContext)

  return (
    <NavigationContainer>
        {loggedIn ? <AuthStackNavigator/> :<RootStackNavigator/>}
    </NavigationContainer>
  )
}

export default AppRouter 
