import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { LogoSmall } from './UserLogo'

// @ts-ignore
const SearchResultCard = (props) => {
    const navigation = useNavigation();

    return (
        <View style={{ backgroundColor: '#79dcff', borderRadius: 15, marginBottom: 15 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                <View style={{ gap: 25 }}>

                    <Text>Bugün 11:00 - Antalya</Text>
                    <Text>Yarın 01:00 - İstanbul</Text>
                    <Text>Müsait Alan: 50 m3</Text>
                    <Text>Araç: Transit</Text>
                    
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                        <LogoSmall />
                        <Text>Enes Öztürk</Text>
                    </View>

                </View>
                <Text style={{ alignSelf: 'flex-end', marginBottom: 16 }}>km/m3 ücreti: 15kr</Text>
            </View>
            <Pressable onPress={() => {
                // @ts-ignore
                navigation.navigate('Offer')
            }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 50, borderRadius: 15, borderTopColor: 'gray', borderTopWidth: .2, backgroundColor: '#79dcff' }}>
                <Text>Teklif Yap</Text>
            </Pressable>
        </View>
    )
}

export default SearchResultCard