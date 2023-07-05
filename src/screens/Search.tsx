import React, { useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import DatePicker from 'react-native-date-picker';

// @ts-ignore
const Search = ({ navigation }) => {

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%', display: 'flex', justifyContent: 'center' }}>
      <Ionicons
        name="cube-outline"
        size={50}
        color="black"
        style={{ position: 'absolute', top: insets.top, left: 30 }}
      />
      <View style={{ display: 'flex', gap: 50, marginTop: 50 }}>
        <Text style={{ fontFamily: "Source Serif Pro", fontSize: 35, textAlign: 'center', marginTop: 10 }}>Düşük ücretlerle nakliye seçenekleri</Text>
        <View style={{ display: 'flex', gap: 25 }}>
          {/* <TextInput style={{ height: 50, marginRight: 30, marginLeft: 30, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Teslimat Seçeneği' placeholderTextColor='black' /> */}
          <TextInput style={{ height: 50, marginRight: 30, marginLeft: 30, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Teslim Alma Noktası' placeholderTextColor='black' />
          <TextInput style={{ height: 50, marginRight: 30, marginLeft: 30, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Teslim Etme Noktası' placeholderTextColor='black' />
          <>
            <Pressable onPress={() => setOpen(true)} style={{ display: 'flex', justifyContent: 'center', height: 50, marginRight: 30, marginLeft: 30, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} ><Text>Tarih Seçiniz</Text></Pressable>
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={(date) => {
                setOpen(false)
                setDate(date)
              }}
              onCancel={() => {
                setOpen(false)
              }}
            />
          </>
        </View>
        <Pressable onPress={() => navigation.navigate('SearchResults')} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 50, marginRight: 30, marginLeft: 30, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f3ee77', borderRadius: 7 }} ><Text>Ara</Text></Pressable>
      </View>

    </SafeAreaView>
  )
}

export default Search