import axios from 'axios'
import React, { useContext } from 'react'
import { ScrollView, Text, View } from 'react-native'
import AdCard from '../../components/AdCard'
import { LoginContext } from '../../LoginContext'

const AdList = () => {

    const [data, setData] = React.useState(null)
    const { encodedInfo } = useContext(LoginContext)

    const getAdsData = async () => {
        await axios.get('https://8e47-176-232-58-119.ngrok-free.app/api/Ad/', { headers: { Authorization: 'basic ' + encodedInfo } })
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
        getAdsData()
    }, [])

    return (
        <ScrollView contentContainerStyle={{ gap: 26 }} style={{ padding: 51, flex: 1, backgroundColor: '#FFF', gap: 15 }}>
            <Text style={{ fontSize: 16, color: '#6B6ABF', fontWeight: 'bold' }}>Actual Postings</Text>
            {
                data ?
                    data.map(ad => {
                        if (ad.isDone) return

                        return <AdCard {...ad} />
                    })
                    : <Text>No data</Text>
            }

        </ScrollView>
    )
}

export default AdList