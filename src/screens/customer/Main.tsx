import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useCallback, useContext, useState } from 'react'
import { View, Image, Button, Pressable, RefreshControl, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Svg, { Text as SvgText } from 'react-native-svg'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LoginContext } from '../../LoginContext';

// @ts-ignore
const Main = ({ navigation }) => {

    const [offers, setOffers] = useState(null)
    const [refreshing, setRefreshing] = useState(false)

    const { encodedInfo, user } = useContext(LoginContext)

    const getOffersData = async () => {
        await axios.get('https://8e47-176-232-58-119.ngrok-free.app/api/Offer/' + user.id, { params: { isCarrier: false, id: user.id }, headers: { Authorization: 'basic ' + encodedInfo } })
            .then(res => {
                console.log(encodedInfo);

                if (res.status == 200) {
                    setOffers(res.data);
                    console.log(res.data);
                    console.log("test2");

                }
            })
            .catch(error => {
                console.log("error");

                console.error(error.response);
            });
    }

    const toggleOfferState = async (id) => {
        await axios.put('https://8e47-176-232-58-119.ngrok-free.app/api/Offer/' + id, { id: id }, { headers: { Authorization: 'basic ' + encodedInfo } })
            .then(res => {
                if (res.status == 200) {
                    getOffersData();
                    console.log(res.data);

                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    const finishJob = async (adId, offerId) => {
        console.log("press");

        await axios.put('https://8e47-176-232-58-119.ngrok-free.app/api/Offer/customerConfirm', null, { params: { id: offerId }, headers: { Authorization: 'basic ' + encodedInfo } })
            .then(res => {
                if (res.status == 200) {
                    console.log(("confirm"));

                    console.log(res.data);
                    navigation.navigate('Main')
                }
            })
            .catch(error => {
                console.error(error.response);
            });

        await axios.put('https://8e47-176-232-58-119.ngrok-free.app/api/Ad/doneJob', null, { params: { id: adId }, headers: { Authorization: 'basic ' + encodedInfo } })
            .then(res => {
                if (res.status == 200) {
                    console.log(("done job"));

                    console.log(res.data);
                    navigation.navigate('Main')
                }
            })
            .catch(error => {
                console.error(error.response);
            });

        getOffersData()
    }

    React.useEffect(() => {
        getOffersData()
    }, [])

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        getOffersData()

        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingLeft: 41, paddingTop: 41, }} >
            <View style={{ display: 'flex', gap: 11 }}>
                <Text style={{ color: '#6B6ABF', fontSize: 48, fontWeight: 'bold' }} >track your</Text>
                <Svg height="35" width="200">
                    <SvgText
                        fill="none"
                        stroke="#6B6ABF"
                        fontSize="48"
                        x="58"
                        y="25"
                        textAnchor="middle"
                    >
                        cargo
                    </SvgText>
                </Svg>
                <View >
                    <Text style={{ color: '#C2C1E1' }}>best way to ship</Text>
                    <Text style={{ color: '#C2C1E1' }}>your goods</Text>
                </View>
            </View>
            <ScrollView contentContainerStyle={{ marginTop: 41, gap: 13, height: 202 }} horizontal style={{ flexGrow: 0 }}>
                <View style={{
                    width: 68,
                    height: 202,
                    borderColor: '#C2C1E1',
                    borderWidth: 2,
                    borderRadius: 13
                }}>
                    <Pressable onPress={() => navigation.navigate('PostAd')} style={{ flex: 1, gap: 43, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 25, paddingLeft: 19 }}>
                        <Text style={{ fontSize: 16, color: '#47AEEF', width: 90, transform: [{ rotate: '270deg' }] }} numberOfLines={1}>post ad</Text>
                        <Ionicons
                            name="add-outline"
                            size={24}
                            color="#47AEEF"
                        />
                    </Pressable>
                </View>
                <Pressable onPress={() => navigation.navigate('History')} style={{
                    width: 131,
                    height: 202,
                    backgroundColor: '#F2F2F2',
                    borderRadius: 13,
                    paddingTop: 36,
                    paddingLeft: 28
                }}>
                    <Ionicons
                        name="reload-outline"
                        size={28}
                        color="#6B6ABF"
                    />
                    <Text style={{ fontSize: 16, color: '#6B6ABF', fontWeight: 'bold', marginTop: 16 }} >history</Text>
                </Pressable>
                <View
                    style={{
                        width: 131,
                        height: 202,
                        backgroundColor: '#6B6ABF',
                        borderRadius: 13,
                        paddingTop: 36,
                        paddingLeft: 28
                    }}
                >
                    <Ionicons
                        name="headset-outline"
                        size={28}
                        color="#B3E1FD"
                    />
                    <Text style={{ fontSize: 16, color: '#B3E1FD', fontWeight: 'bold', marginTop: 16 }} >support</Text>
                </View>
                <View
                    style={{
                        width: 131,
                        height: 202,
                        backgroundColor: '#B3E1FD',
                        borderRadius: 13
                    }}
                >

                </View>
            </ScrollView>

            <View style={{ marginTop: 41 }}>
                <Text style={{ color: '#6B6ABF', marginBottom: 13 }} >latest offers</Text>
                <ScrollView contentContainerStyle={{ gap: 13, height: 200 }} horizontal style={{ flexGrow: 0 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                    {offers ?
                        offers.map((offer: any) => {
                            if (offer.isCustomerConfirmed && offer.isCarrierConfirmed) { return }
                            return (
                                <View
                                    style={{
                                        width: 130,
                                        height: 177,
                                        backgroundColor: (offer.isAccepted && offer.isCarrierConfirmed) ? '#FFCCCB' : offer.isAccepted ? 'lightgreen' : '#B3E1FD',
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
                                    <Text style={{ fontSize: 16, color: '#6B6ABF', fontWeight: 'bold', marginTop: 11 }}>{offer.adTitle}</Text>
                                    <Text style={{ fontSize: 16, color: '#6B6ABF', fontWeight: 'bold', marginTop: 5 }}>${offer.offerValue}</Text>
                                    <Pressable style={{ flexDirection: 'row', alignItems: 'center', marginRight: 21, marginTop: 11, marginLeft: 'auto', gap: 5 }} onPress={() => (offer.isAccepted && offer.isCarrierConfirmed) ? finishJob(offer.adId, offer.id) : toggleOfferState(offer.id)}>
                                        <Text style={{ color: "#6B6ABF", fontWeight: 'bold' }}>{(offer.isAccepted && offer.isCarrierConfirmed) ? 'Done' : offer.isAccepted ? "Reject" : "Accept"}</Text>
                                        <Ionicons name={(offer.isAccepted && offer.isCarrierConfirmed) ? 'checkmark-outline' : offer.isAccepted ? 'close-outline' : 'checkmark-outline'} size={24} color="#6B6ABF" style={{}} />
                                    </Pressable>
                                </View>
                            )

                        })
                        : <Text>No Offer</Text>
                    }
                </ScrollView>
            </View>

        </View>
    )
}

export default Main