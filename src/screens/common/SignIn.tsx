import { useNavigation } from '@react-navigation/native';
import { CheckBox } from '@rneui/base';
import axios from 'axios';
import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SignInSVG from '../../../assets/svgs/SignIn.svg'

import { encode, decode } from 'js-base64';
import { useContext } from 'react';
import { LoginContext } from '../../LoginContext';


const SignIn = () => {
  const safeArea = useSafeAreaInsets()
  const navigation = useNavigation()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("12345");

  const { setIsLoggedIn, setIsCarrier, setEncodedInfo, setUser } = useContext(LoginContext);

  const encoding = () => {
    return encode(`${email}:${password}`)
  }

  const login = async () => {

    await axios.get('https://8e47-176-232-58-119.ngrok-free.app/api/User/login', { params: {email: email, password: password} ,headers: { Authorization: 'basic ' + encode(`${email}:${password}`) } })
      .then(res => {

        if (res.status == 200) {
          console.log('test');
          
          setEncodedInfo(encode(`${email}:${password}`))
          setIsCarrier(res.data.isCarrier)
          setUser(res.data)
          setIsLoggedIn(true)
        }
      }
      )
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF', padding: 51, gap: 63, }}>
      <SignInSVG style={{ alignSelf: 'center' }} />
      <View style={{ gap: 15 }} >
        <Text style={{ fontSize: 32, color: '#6B6ABF', fontWeight: 'bold', }}>Hello Again!</Text>
        <Text style={{ fontSize: 24, color: '#C2C1E1' }}>Welcome back you’ve been missed!</Text>
      </View>

      <View style={{ gap: 23 }}>

        <TextInput style={{ height: 50, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Enter email' placeholderTextColor='#C2C1E1' onChangeText={(email) => setEmail(email)} autoCapitalize='none' />
        <TextInput secureTextEntry style={{ height: 50, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Enter password' placeholderTextColor='#C2C1E1' onChangeText={(password) => setPassword(password)} autoCapitalize='none' />

      </View>
      <Pressable
        // @ts-ignore
        onPress={() => login()} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 50, paddingRight: 15, paddingLeft: 15, backgroundColor: '#F2F2F2', borderRadius: 7 }} >
        <Text style={{ color: '#6B6ABF' }}>Sign In</Text>
      </Pressable>
    </View>
  )
}

export default SignIn