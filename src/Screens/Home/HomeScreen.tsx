import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Fragment, useContext} from 'react';
import {Button, Image, Text, View} from 'react-native';
import {AuthContext} from '../../Contexts/AuthContextProvider';

const IMAGE_BASE_URL = 'https://chaptr-bcket.s3.ap-south-1.amazonaws.com/';

function HomeScreen() {
  const {setLoggedIn, user, setUser} = useContext(AuthContext);

  console.log({user})

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {user?.profile_pic ? (
        <Image
          source={{uri: IMAGE_BASE_URL + user?.profile_pic}}
          style={{height: 100, width: 100}}
        />
      ) : (
        <View style={{height: 100, width: 100, backgroundColor: 'grey'}} />
      )}
      {user ? (
        <Fragment>
          <Text>
            <Text style={{fontWeight: 'bold'}}>Name:</Text> {user?.full_name}
          </Text>
          <Text>
            <Text style={{fontWeight: 'bold'}}>Gender:</Text> {user?.gender}
          </Text>
        </Fragment>
      ) : (
        <Fragment />
      )}

      <Button
        title="Logout"
        onPress={() => {
          AsyncStorage.clear();
          setUser(null);
          setLoggedIn(false);
        }}
      />
    </View>
  );
}

export default HomeScreen;
