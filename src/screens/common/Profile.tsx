import { Avatar } from '@rneui/base'
import React, { useContext } from 'react'
import { Pressable, Text, View } from 'react-native'
import { LoginContext } from '../../LoginContext'
import CarrierSVG from '../../../assets/svgs/Carrier.svg'
import CustomerSVG from '../../../assets/svgs/Customer.svg'
import { useNavigation } from '@react-navigation/native'


const Profile = () => {

  // @ts-ignore
  const { user, setUser, setIsLoggedIn, isCarrier } = useContext(LoginContext)

  const navigation = useNavigation()

  const logOut = () => {
    setIsLoggedIn(false)
    setUser({})
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF', padding: 41, gap: 23, }}>
      {isCarrier ?
        <CarrierSVG style={{ alignSelf: 'center' }} />
        :
        <CustomerSVG style={{ alignSelf: 'center' }} />
      }
      <Text style={{ fontSize: 16, color: '#6B6ABF', fontWeight: 'bold' }}>{user.firstName}</Text>
      <Text style={{ fontSize: 16, color: '#6B6ABF', fontWeight: 'bold' }}>{user.lastname}</Text>
      <Text style={{ fontSize: 16, color: '#6B6ABF', fontWeight: 'bold' }}>{user.eMail}</Text>
      <Pressable
        // @ts-ignore
        onPress={() => logOut()} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 50, paddingRight: 15, paddingLeft: 15, backgroundColor: '#F2F2F2', borderRadius: 7 }} >
        <Text style={{ color: '#6B6ABF' }}>Log Out</Text>
      </Pressable>
    </View>
  )
}

export default Profile