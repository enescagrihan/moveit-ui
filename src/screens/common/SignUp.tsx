import { useNavigation } from '@react-navigation/native'
import { CheckBox } from '@rneui/base'
import axios from 'axios'
import React, { useState } from 'react'
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import SignUpSVG from '../../../assets/svgs/SignUp.svg'

const SignUp = ({ setIsLoggedIn }: any) => {
  const safeArea = useSafeAreaInsets()
  const navigation = useNavigation()

  const [isChecked, setIsChecked] = useState(false)
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")


  const SignUp = async () => {
    await axios.post("https://8e47-176-232-58-119.ngrok-free.app/api/User", {
      "email": email,
      "phoneNumber": phoneNumber,
      "firstName": firstName,
      "lastName": lastName,
      "password": password,
      "isCarrier": isChecked
    })
      .then(res => {
        console.log(res)
        // @ts-ignore
        navigation.navigate("SignIn")
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  return (
    <ScrollView contentContainerStyle={{ backgroundColor: '#FFF', padding: 51, gap: 53, }}>
      <SignUpSVG style={{ alignSelf: 'center' }} />
      <View >
        <Text style={{ fontSize: 32, color: '#6B6ABF', fontWeight: 'bold', }}>Hello!</Text>
        <Text style={{ fontSize: 16, color: '#C2C1E1' }}>Let's register.</Text>
      </View>

      <View style={{ gap: 23 }}>

        <TextInput style={{ height: 50, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Enter first name' placeholderTextColor='#C2C1E1' onChangeText={(firstName) => setFirstName(firstName)} autoCapitalize='none' />
        <TextInput style={{ height: 50, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Enter last name' placeholderTextColor='#C2C1E1' onChangeText={(lastName) => setLastName(lastName)} autoCapitalize='none' />
        <TextInput style={{ height: 50, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Enter email' placeholderTextColor='#C2C1E1' onChangeText={(email) => setEmail(email)} autoCapitalize='none' />
        <TextInput style={{ height: 50, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Enter phone number' placeholderTextColor='#C2C1E1' onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)} autoCapitalize='none' />
        <TextInput style={{ height: 50, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} secureTextEntry placeholder='Enter password' placeholderTextColor='#C2C1E1' onChangeText={(password) => setPassword(password)} autoCapitalize='none' />

        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: -13 }}>
          <CheckBox onPress={() => setIsChecked(!isChecked)} checked={isChecked} />
          <Text style={{ fontSize: 16, color: '#C2C1E1' }}>Are you a carrier</Text>
        </View>
      </View>
      <Pressable onPress={() => SignUp()} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 50, paddingRight: 15, paddingLeft: 15, backgroundColor: '#6B6ABF', borderRadius: 7 }} >
        <Text style={{ color: '#B3E1FD' }}>Sign Up</Text>
      </Pressable>
    </ScrollView>
  )
}

export default SignUp