import axios from 'axios'
import React, { useContext, useState } from 'react'
import { ScrollView, View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { LoginContext } from '../../LoginContext'

// @ts-ignore
const PostAd = ({ navigation }) => {

    const [url, setUrl] = useState("")
    const [title, setTitle] = useState("")
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [transportDate, setTransportDate] = useState("")
    const [transportHour, setTransportHour] = useState("")
    const [category, setCategory] = useState("")
    const [name, setName] = useState("")
    const [volume, setVolume] = useState("")
    const [length, setLength] = useState("")
    const [width, setWidth] = useState("")
    const [depth, setDepth] = useState("")
    const [weight, setWeight] = useState("")
    const [detailedAddress, setDetailedAddress] = useState("")
    const [details, setDetails] = useState("")

    const { encodedInfo,user } = useContext(LoginContext);
    
    
    const postAd = async () => {
        console.log(encodedInfo);
        
        await axios.post("https://8e47-176-232-58-119.ngrok-free.app/api/Ad", {
            "userId": user.id,
            "photoURL": url,
            "adTitle": title,
            "fromWhere": from,
            "toWhere": to,
            "transportDate": transportDate,
            "transportHour": transportHour,
            "goodsCategory": category,
            "goodsName": name,
            "goodsVolume": volume,
            "goodsLength": length,
            "goodsWidth": width,
            "goodsDepth": depth,
            "goodsWeight": weight,
            "detailedAddress": detailedAddress,
            "details": details
        },
            { headers: {
                Authorization: 'basic ' + encodedInfo 
            }}

        ).then(res => {
            console.log(res)
            navigation.navigate('Transport')
        }).catch(error => {
            console.log(error.response)
        })
    }

    return (
        <ScrollView contentContainerStyle={{ backgroundColor: '#FFF', padding: 41, gap: 23, }}>
            <View style={{ gap: 10 }}>
                <Text style={{ color: '#6B6ABF' }}>Photograph</Text>
                <TextInput style={{ height: 50, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Photo Address' placeholderTextColor='black' onChangeText={(url) => setUrl(url)} />
            </View>
            <View style={{ gap: 10 }}>
                <Text style={{ color: '#6B6ABF' }}>Ad Title</Text>
                <TextInput style={{ height: 50, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Ad Title' placeholderTextColor='black' onChangeText={(title) => setTitle(title)} />
            </View>
            <View style={{ gap: 10 }}>
                <Text style={{ color: '#6B6ABF' }}>From - To</Text>
                <TextInput style={{ height: 50, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Pick Up' placeholderTextColor='black' onChangeText={(from) => setFrom(from)} />
                <TextInput style={{ height: 50, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Delivery' placeholderTextColor='black' onChangeText={(to) => setTo(to)} />
            </View>
            <View style={{ gap: 10 }}>
                <Text style={{ color: '#6B6ABF' }}>When</Text>
                <TextInput style={{ height: 50, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Enter Day' placeholderTextColor='black' onChangeText={(transportDate) => setTransportDate(transportDate)} />
                <TextInput style={{ height: 50, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Enter Hour' placeholderTextColor='black' onChangeText={(transportHour) => setTransportHour(transportHour)} />
            </View>
            <View style={{ gap: 10 }}>
                <Text style={{ color: '#6B6ABF' }}>Goods Category</Text>
                <TextInput style={{ height: 50, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Good Category' placeholderTextColor='black' onChangeText={(category) => setCategory(category)} />
            </View>
            <View style={{ gap: 10 }}>
                <Text style={{ color: '#6B6ABF' }}>Goods Name</Text>
                <TextInput style={{ height: 50, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Good Name' placeholderTextColor='black' onChangeText={(name) => setName(name)} />
            </View>
            <View style={{ gap: 10 }}>
                <Text style={{ color: '#6B6ABF' }}>Goods Specifications</Text>
                <TextInput style={{ height: 50, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Volume' placeholderTextColor='black' onChangeText={(volume) => setVolume(volume)} />
                <TextInput style={{ height: 50, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Length' placeholderTextColor='black' onChangeText={(length) => setLength(length)} />
                <TextInput style={{ height: 50, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Width' placeholderTextColor='black' onChangeText={(width) => setWidth(width)} />
                <TextInput style={{ height: 50, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Depth' placeholderTextColor='black' onChangeText={(depth) => setDepth(depth)} />
                <TextInput style={{ height: 50, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Weight' placeholderTextColor='black' onChangeText={(weight) => setWeight(weight)} />
            </View>
            <View style={{ gap: 10 }}>
                <Text style={{ color: '#6B6ABF' }}>Goods Details</Text>
                <TextInput style={{ height: 100, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} multiline placeholder='Detailed Address' placeholderTextColor='black' onChangeText={(detailedAddress) => setDetailedAddress(detailedAddress)} />
                <TextInput style={{ height: 100, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} multiline placeholder='Notes' placeholderTextColor='black' onChangeText={(details) => setDetails(details)} />
            </View>

            <Pressable onPress={() => postAd()} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 50, marginRight: 30, marginLeft: 30, paddingRight: 15, paddingLeft: 15, backgroundColor: '#6B6ABF', borderRadius: 7 }} ><Text style={{ color: '#B3E1FD' }}>Post</Text></Pressable>

        </ScrollView>
    )
}

export default PostAd