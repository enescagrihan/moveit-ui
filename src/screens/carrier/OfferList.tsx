import axios from 'axios'
import React, { useCallback, useContext, useState } from 'react'
import { RefreshControl, ScrollView, Text } from 'react-native'
import AdCard from '../../components/AdCard'
import OfferCard from '../../components/OfferCard'
import { LoginContext } from '../../LoginContext'

const OfferList = () => {
    const [data, setData] = useState(null)
    const [refreshing, setRefreshing] = useState(false)

    const { encodedInfo, user } = useContext(LoginContext)

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        getOfferData()

        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, [])

    const getOfferData = async () => {
        await axios.get('https://8e47-176-232-58-119.ngrok-free.app/api/Offer/' + user.id, { params: { isCarrier: true, id: user.id }, headers: { Authorization: 'basic ' + encodedInfo } })
            .then(res => {
                if (res.status == 200) {
                    setData(res.data);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    React.useEffect(() => {
        getOfferData()
    }, [])

    return (
        <ScrollView contentContainerStyle={{ gap: 26 }} style={{ padding: 51, flex: 1, backgroundColor: '#FFF', gap: 15 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} >
            <Text style={{ fontSize: 16, color: '#6B6ABF', fontWeight: 'bold' }}>Your Offers</Text>
            {
                data ?
                    data.map(ad => {
                        if (ad.isCarrierConfirmed && ad.isCustomerConfirmed) return
                        return <OfferCard {...ad} />
                    })
                    : <Text>No data</Text>
            }

        </ScrollView>
    )
}

export default OfferList