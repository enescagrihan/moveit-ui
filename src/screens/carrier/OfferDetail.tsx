import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { JobContext } from '../../JobContext'
import { LoginContext } from '../../LoginContext'

const OfferDetail = (props: any) => {

    const [user, setUser] = useState()
    const [jobDetails, setJobDetails] = useState()

    const { selectedJob } = useContext(JobContext)
    const { encodedInfo } = useContext(LoginContext)

    console.log("offerDetail");
    console.log({ selectedJob });



    const navigation = useNavigation()

    const getCustomerInfo = async () => {
        await axios.get('https://8e47-176-232-58-119.ngrok-free.app/api/User/getById', { params: { id: selectedJob.customerId }, headers: { Authorization: 'basic ' + encodedInfo } })
            .then(res => {
                setUser(res.data)
            })
            .catch(error => {
                console.error(error);
            });
    }

    const getAdInfo = async () => {
        await axios.get('https://8e47-176-232-58-119.ngrok-free.app/api/Ad/getById', { params: { id: selectedJob.adId }, headers: { Authorization: 'basic ' + encodedInfo } })
            .then(res => {
                console.log("getAdInfo");

                console.log(res.data);

                setJobDetails(res.data)
            })
            .catch(error => {
                console.error(error);
            });
    }

    const confirmDelivery = async () => {
        console.log({selectedJob});
        
        await axios.put('https://8e47-176-232-58-119.ngrok-free.app/api/Offer/confirmDelivery', null, { params: { id: selectedJob.id }, headers: { Authorization: 'basic ' + encodedInfo } })
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
    }

    React.useEffect(() => {
        console.log({ selectedJob });

        getCustomerInfo()
        getAdInfo()
    }, [])


    return (
        <ScrollView contentContainerStyle={{ backgroundColor: '#FFF', padding: 41, gap: 23, }} >
            <Image source={{ uri: jobDetails?.photoURL }} style={{ minWidth: 300, minHeight: 300, alignSelf: 'center' }} />
            <Text style={{ color: '#6B6ABF', fontSize: 20 }}>{selectedJob.adTitle}</Text>
            <Text style={{ color: '#6B6ABF', fontSize: 20 }}>{`${user?.firstName} ${user?.lastname}`}</Text>
            <Text style={{ color: '#6B6ABF', fontSize: 20 }}>{user?.phoneNumber}</Text>
            <Text style={{ color: '#6B6ABF', fontSize: 20 }}>{jobDetails?.detailedAddress}</Text>
            <Pressable
                // @ts-ignore
                onPress={() => confirmDelivery()} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 50, paddingRight: 15, paddingLeft: 15, backgroundColor: '#F2F2F2', borderRadius: 7 }} >
                <Text style={{ color: '#6B6ABF' }}>Confirm Delivery </Text>
            </Pressable>
        </ScrollView>
    )
}

export default OfferDetail