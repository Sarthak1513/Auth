import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {fetcher} from '../../Utils/Helpers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../../Contexts/AuthContextProvider';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setLoggedIn, setUser} = useContext(AuthContext);

  const navigation = useNavigation<any>();

  const login = async () => {
    try {
      const responseData = await fetcher({
        url: '/app/auth/email-login',
        data: {
          email,
          password,
        },
        method: 'POST',
      });
      console.log('responseData', responseData);
      const {status, data} = responseData;
      if (status === 200) {
        const {jwt_token, user} = data.data;
        setUser(user);
        await AsyncStorage.setItem('token', jwt_token);
        await AsyncStorage.setItem('user', JSON.stringify(user));
        setLoggedIn(true);
      }
    } catch (error: any) {
      if (error?.response) {
        Alert.alert('LOGIN ERROR', error?.response?.data?.message);
        console.log({error: error?.response?.data?.message});
      } else {
        Alert.alert('NETWORK ERROR', 'Failed to connect with server')
      }
    }
  };


  return (
    
    <View>
      <TextInput
        placeholder="Email"
        style={styles.textInput}
        value={email}
        onChangeText={val => setEmail(val)}
        keyboardType={'email-address'}
        autoCapitalize={
          'none'
        }
      />

      <TextInput
        placeholder="Passwords"
        style={styles.textInput}
        value={password}
        onChangeText={val => setPassword(val)}
        secureTextEntry
      />
      <Button title="Login" onPress={() => login()} />

      <Button
        title="Go to Register"
        onPress={() => {
          navigation.navigate('Register');
        }}
      />
    </View>
  );
}
const styles=StyleSheet.create({
  textInput:{
    margin:20,
    fontSize:30,
    backgroundColor:'skyblue',
    borderRadius:30,
    borderBottomColor:'black',
    shadowOpacity:1,
    marginVertical:15,
    padding:10,
    height:50,
    marginBottom:10,
    letterSpacing:2,
    borderLeftWidth:1,
    paddingTop:5,
    paddingBottom:5,
    paddingStart:10

  },

  
})

export default LoginScreen;
