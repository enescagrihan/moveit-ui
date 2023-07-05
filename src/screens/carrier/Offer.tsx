import axios from 'axios'
import React, { useCallback, useContext, useState } from 'react'
import { Image, Pressable, RefreshControl, Text, View } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { JobContext } from '../../JobContext'
import { LoginContext } from '../../LoginContext'

// @ts-ignore
const Offer = ({ navigation }) => {

    const [offer, setOffer] = useState("");

    const { selectedJob } = useContext(JobContext)
    const { user, encodedInfo } = useContext(LoginContext)

    const postOffer = async () => {
        console.log("offer");
        
        console.log({selectedJob});
        console.log(user);
        
        await axios.post("https://8e47-176-232-58-119.ngrok-free.app/api/Offer", {
            "carrierId": user.id,
            "customerId": selectedJob.userId,
            "adId": selectedJob.id,
            "transportDay": selectedJob.transportDate,
            "transportHour": selectedJob.transportHour,
            "adTitle": selectedJob.adTitle,
            "from": selectedJob.fromWhere,
            "to": selectedJob.toWhere,
            "offerValue": offer,
            "isAccepted": false
        },
            {
                headers: {
                    Authorization: 'basic ' + encodedInfo
                }
            }
        ).then(res => {
            console.log(res)
            navigation.goBack()
        }).catch(error => {
            console.log(error.response)
        })
    }


    return (
        <ScrollView contentContainerStyle={{ backgroundColor: '#FFF', padding: 41, gap: 23, }} >
            <View style={{ gap: 10 }}>
                <Text style={{ color: '#6B6ABF' }}>Photograph</Text>
                <Image source={{ uri: selectedJob.photoURL }} style={{ width: 250, height: 250, alignSelf: 'center' }} />
            </View>
            <View style={{ gap: 10 }}>
                <Text style={{ color: '#6B6ABF' }}>Ad Title</Text>
                <Text>{selectedJob.adTitle}</Text>
            </View>
            <View style={{ gap: 10 }}>
                <Text style={{ color: '#6B6ABF' }}>From - To</Text>
                <Text>{selectedJob.fromWhere}</Text>
                <Text>{selectedJob.toWhere}</Text>
            </View>
            <View style={{ gap: 10 }}>
                <Text style={{ color: '#6B6ABF' }}>Goods Category</Text>
                <Text>{selectedJob.goodsCategory}</Text>
            </View>
            <View style={{ gap: 10 }}>
                <Text style={{ color: '#6B6ABF' }}>Goods Name</Text>
                <Text>{selectedJob.goodsName}</Text>
            </View>
            <View style={{ gap: 10 }}>
                <Text style={{ color: '#6B6ABF' }}>Goods Specifications</Text>
                <Text>Volume: {selectedJob.goodsVolume}</Text>
                <Text>Length: {selectedJob.goodsLength}</Text>
                <Text>Width: {selectedJob.goodsWidth}</Text>
                <Text>Depth: {selectedJob.goodsDepth}</Text>
                <Text>Weight: {selectedJob.goodsWeight}</Text>
            </View>
            <View style={{ gap: 10 }}>
                <Text style={{ color: '#6B6ABF' }}>Goods Details</Text>
                <Text>{selectedJob.details}</Text>
            </View>

            <View style={{ flexDirection: 'row', gap: 23 }}>
                <TextInput style={{ flex: 1, paddingRight: 15, paddingLeft: 15, backgroundColor: '#f6f6f6', borderRadius: 7 }} placeholder='Amount' onChangeText={(offer) => setOffer(offer)} />
                <Pressable onPress={() => postOffer()} style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', height: 50, paddingRight: 15, paddingLeft: 15, backgroundColor: '#6B6ABF', borderRadius: 7 }} ><Text style={{ color: '#B3E1FD' }}>Offer</Text></Pressable>
            </View>

        </ScrollView>
    )
}

export default Offer