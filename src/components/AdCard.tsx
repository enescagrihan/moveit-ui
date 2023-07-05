import React, { useContext } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { LogoSmall } from './UserLogo'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { JobContext } from '../JobContext';


// @ts-ignore
const AdCard = (props) => {

    const navigation = useNavigation();

    const { setSelectedJob } = useContext(JobContext);

    const onPress = () => {
        setSelectedJob(props);
        // @ts-ignore     
        navigation.navigate('Offer')
    }

    return (
        <Pressable
            onPress={() => onPress()}
            style={{ width: 295, height: 179, backgroundColor: '#F2F2F2', flexDirection: 'row', justifyContent: 'space-between', padding: 25, borderRadius: 13 }}>
            <View style={{ justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', gap: 4 }}>
                    <Text style={{ fontSize: 16, color: '#6B6ABF', fontWeight: 'bold' }}>{props?.adTitle}</Text>
                </View>
                <View style={{ gap: 9 }}>
                    <View style={{ flexDirection: 'row', gap: 4 }}>
                        <Text style={{ fontSize: 16, color: '#6B6ABF', fontWeight: 'bold' }}>{props?.fromWhere}</Text>
                        <Text style={{ fontSize: 10, color: '#6B6ABF' }}>from</Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 4 }}>
                        <Text style={{ fontSize: 16, color: '#6B6ABF', fontWeight: 'bold' }}>{props?.toWhere}</Text>
                        <Text style={{ fontSize: 10, color: '#6B6ABF' }}>to</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', gap: 4 }}>
                    <Text style={{ fontSize: 16, color: '#6B6ABF', fontWeight: 'bold' }}>Tomorrow</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={{ color: '#6B6ABF', fontSize: 10 }}>John Doe</Text>
                        <View style={{ flexDirection: "row", gap: 4, alignItems: 'center' }}>
                            <Text style={{ fontSize: 10, color: '#6B6ABF' }}>5,0</Text>
                            <Ionicons
                                name="star-outline"
                                size={13}
                                color="#6B6ABF"
                            />
                        </View>
                    </View>
                    <Image source={require('../beard-man.jpeg')} style={{ width: 35, height: 35, borderRadius: 50 }} />
                </View>
                <Ionicons name='chevron-forward-outline' size={24} color="#6B6ABF" />

            </View>

        </Pressable>
    )
}

export default AdCard