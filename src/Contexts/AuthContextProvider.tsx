import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import {createContext, useState} from 'react';
import { ActivityIndicator, View } from 'react-native';

export const AuthContext = createContext<any | null>(null);


function AuthContextProvider(props: any) {
  const {children} = props;
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
   (async() => {
     try {
      const token = await AsyncStorage.getItem('token');
      const userString = await AsyncStorage.getItem('user');

      if(token !== null && userString !== null) {
        setLoggedIn(true);
        const _user = JSON.parse(userString);
        setUser(_user);
      }

     } catch (error) {
       
     } finally {
       setLoading(false)
     }
   })();
  },[])

  return (
    <AuthContext.Provider value={{loggedIn, setLoggedIn, user, setUser}}>
      {loading ? <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator/>
      </View> : children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
