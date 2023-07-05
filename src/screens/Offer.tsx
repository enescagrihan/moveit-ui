import { Picker } from '@react-native-picker/picker'
import React from 'react'
import { Image, Text, TextInput, View, ScrollView } from 'react-native'

const Offer = () => {
    return (
        <ScrollView style={{padding: 30}}>
            <View>
                <Text>Fotoğraf</Text>
                <Image source={require('../buzdolabı.jpg')} style={{ width: 250, height: 250 }} />
            </View>
            <View>
                <Text>Ürün Kategorisi</Text>
                <TextInput style={{ height: 50, marginRight: 30, marginLeft: 30, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Ürün Kategorisi' placeholderTextColor='black' />
            </View>
            <View>
                <Text>Ürün Adı</Text>
                <TextInput style={{ height: 50, marginRight: 30, marginLeft: 30, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Ürün Adı' placeholderTextColor='black' />
            </View>
            <View>
                <Text>Ürün Özellikleri</Text>
                <TextInput style={{ height: 50, marginRight: 30, marginLeft: 30, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Hacmi' placeholderTextColor='black' />
                <TextInput style={{ height: 50, marginRight: 30, marginLeft: 30, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Uzunluğu' placeholderTextColor='black' />
                <TextInput style={{ height: 50, marginRight: 30, marginLeft: 30, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Genişliği' placeholderTextColor='black' />
                <TextInput style={{ height: 50, marginRight: 30, marginLeft: 30, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Derinliği' placeholderTextColor='black' />
            </View>
            <View>
                <Text>Ürün Detayları</Text>
                <TextInput style={{ height: 100, marginRight: 30, marginLeft: 30, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} multiline  placeholder='Hacmi' placeholderTextColor='black' />
            </View>
        </ScrollView>
    )
}

export default Offer