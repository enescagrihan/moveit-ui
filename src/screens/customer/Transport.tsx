import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { alignSelf } from 'styled-system';
import { LoginContext } from '../../LoginContext';

// @ts-ignore
const Transport = ({ navigation }) => {

    const { user, encodedInfo } = useContext(LoginContext)

    const [data, setData] = useState(null)

    const fetchData = async () => {
        await axios.get('https://8e47-176-232-58-119.ngrok-free.app/api/Ad/' + user.id, { headers: { Authorization: 'basic ' + encodedInfo } })
            .then(res => {
                console.log(res);
                console.log(res.data.isCarrier);

                if (res.status == 200) {
                    setData(res.data);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        fetchData();
    }, [])




    return (
        <View style={{ flex: 1, backgroundColor: '#FFF', alignItems: 'center', paddingTop: 51 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: 295, height: 195, backgroundColor: '#B3E1FD', borderRadius: 13 }}>
                <View style={{ marginLeft: 30 }}>
                    <Text style={{ fontSize: 15, color: "#6B6ABF" }}>Ad Title</Text>
                    <Text style={{ fontSize: 40, fontWeight: 'bold', color: "#6B6ABF" }}>20 kg</Text>
                </View>
                <Ionicons
                    name="cube-outline"
                    size={195}
                    color="#F4C28C"
                    style={{ opacity: .5, top: -30, right: -2 }}
                />
            </View>
            <ScrollView contentContainerStyle={{ marginTop: 51, gap: 45, marginLeft: 51 }} horizontal style={{ flexGrow: 0 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 25 }}>
                    <View style={{
                        width: 51,
                        height: 75,
                        borderColor: '#B3E1FD',
                        borderWidth: 2,
                        borderRadius: 13,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Ionicons
                            name="location-outline"
                            size={21}
                            color="#6B6ABF"
                        />
                    </View>
                    <View style={{ gap: 10 }} >
                        <Text style={{ color: '#6B6ABF', fontSize: 20, fontWeight: 'bold' }}>Adana</Text>
                        <Text style={{ color: '#C2C1E1' }}>shipping from</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 25 }}>
                    <View style={{
                        width: 51,
                        height: 75,
                        backgroundColor: '#B3E1FD',
                        borderRadius: 13,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Ionicons
                            name="cube-outline"
                            size={21}
                            color="#6B6ABF"
                        />
                    </View>
                    <View style={{ gap: 10 }} >
                        <Text style={{ color: '#6B6ABF', fontSize: 20, fontWeight: 'bold' }}>İstanbul</Text>
                        <Text style={{ color: '#C2C1E1' }}>shipping to</Text>
                    </View>

                </View>
            </ScrollView>

            <View style={{ marginTop: 51, marginLeft: 51 }}>
                <Text style={{ color: '#6B6ABF', marginBottom: 13 }} >latest offers</Text>
                <ScrollView contentContainerStyle={{ gap: 13, height: 200 }} horizontal style={{ flexGrow: 0 }}>
                    <View
                        style={{
                            width: 130,
                            height: 177,
                            backgroundColor: '#B3E1FD',
                            borderRadius: 13,
                            justifyContent: 'center',
                            paddingLeft: 22
                        }}
                    >
                        <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                            <Image source={require('../../beard-man.jpeg')} style={{ width: 24, height: 24, borderRadius: 50 }} />
                            <View>
                                <Text style={{ color: '#6B6ABF', fontSize: 10 }}>John Doe</Text>
                                <View style={{ flexDirection: "row", gap: 4, alignItems: 'center' }}>
                                    <Ionicons
                                        name="star-outline"
                                        size={13}
                                        color="#6B6ABF"
                                    />
                                    <Text style={{ fontSize: 10, color: '#6B6ABF' }}>5,0</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{ fontSize: 16, color: '#6B6ABF', fontWeight: 'bold', marginTop: 17 }}>$175</Text>
                        <Text style={{ fontSize: 13, color: '#6B6ABF', fontWeight: 'bold', marginTop: 17 }}>I'm available</Text>
                        <Ionicons name='chevron-forward-outline' size={24} color="#6B6ABF" style={{ marginRight: 21, marginTop: 14, marginLeft: 'auto' }} />

                    </View>
                    <View
                        style={{
                            width: 130,
                            height: 177,
                            backgroundColor: '#F2F2F2',
                            borderRadius: 13,
                            justifyContent: 'center',
                            paddingLeft: 22
                        }}
                    >
                        <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                            <Image source={require('../../beard-man.jpeg')} style={{ width: 24, height: 24, borderRadius: 50 }} />
                            <View>
                                <Text style={{ color: '#6B6ABF', fontSize: 10 }}>John Doe</Text>
                                <View style={{ flexDirection: "row", gap: 4, alignItems: 'center' }}>
                                    <Ionicons
                                        name="star-outline"
                                        size={13}
                                        color="#6B6ABF"
                                    />
                                    <Text style={{ fontSize: 10, color: '#6B6ABF' }}>5,0</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{ fontSize: 16, color: '#6B6ABF', fontWeight: 'bold', marginTop: 17 }}>$175</Text>
                        <Text style={{ fontSize: 13, color: '#6B6ABF', fontWeight: 'bold', marginTop: 17 }}>I'm available</Text>
                        <Ionicons name='chevron-forward-outline' size={24} color="#6B6ABF" style={{ marginRight: 21, marginTop: 14, marginLeft: 'auto' }} />

                    </View>
                    <View
                        style={{
                            width: 130,
                            height: 177,
                            backgroundColor: '#F2F2F2',
                            borderRadius: 13,
                            justifyContent: 'center',
                            paddingLeft: 22
                        }}
                    >
                        <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                            <Image source={require('../../beard-man.jpeg')} style={{ width: 24, height: 24, borderRadius: 50 }} />
                            <View>
                                <Text style={{ color: '#6B6ABF', fontSize: 10 }}>John Doe</Text>
                                <View style={{ flexDirection: "row", gap: 4, alignItems: 'center' }}>
                                    <Ionicons
                                        name="star-outline"
                                        size={13}
                                        color="#6B6ABF"
                                    />
                                    <Text style={{ fontSize: 10, color: '#6B6ABF' }}>5,0</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{ fontSize: 16, color: '#6B6ABF', fontWeight: 'bold', marginTop: 17 }}>$175</Text>
                        <Text style={{ fontSize: 13, color: '#6B6ABF', fontWeight: 'bold', marginTop: 17 }}>I'm available</Text>
                        <Ionicons name='chevron-forward-outline' size={24} color="#6B6ABF" style={{ marginRight: 21, marginTop: 14, marginLeft: 'auto' }} />

                    </View>
                    <View
                        style={{
                            width: 130,
                            height: 177,
                            backgroundColor: '#F2F2F2',
                            borderRadius: 13,
                            justifyContent: 'center',
                            paddingLeft: 22
                        }}
                    >
                        <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                            <Image source={require('../../beard-man.jpeg')} style={{ width: 24, height: 24, borderRadius: 50 }} />
                            <View>
                                <Text style={{ color: '#6B6ABF', fontSize: 10 }}>John Doe</Text>
                                <View style={{ flexDirection: "row", gap: 4, alignItems: 'center' }}>
                                    <Ionicons
                                        name="star-outline"
                                        size={13}
                                        color="#6B6ABF"
                                    />
                                    <Text style={{ fontSize: 10, color: '#6B6ABF' }}>5,0</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{ fontSize: 16, color: '#6B6ABF', fontWeight: 'bold', marginTop: 17 }}>$175</Text>
                        <Text style={{ fontSize: 13, color: '#6B6ABF', fontWeight: 'bold', marginTop: 17 }}>I'm available</Text>
                        <Ionicons name='chevron-forward-outline' size={24} color="#6B6ABF" style={{ marginRight: 21, marginTop: 14, marginLeft: 'auto' }} />

                    </View>
                </ScrollView>
            </View>

            <Pressable onPress={() => navigation.goBack()} style={{ width: 50, height: 50, borderRadius: 50, marginTop: 19, marginLeft: 51, backgroundColor: '#F2F2F2', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start' }}>
                <Ionicons
                    name="chevron-back-outline"
                    size={24}
                    color="#6B6ABF"
                />
            </Pressable>
        </View>
    )
}

export default Transport