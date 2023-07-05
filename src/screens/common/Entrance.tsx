import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import EntranceSVG from '../../../assets/svgs/Entrance.svg';


const Entrance = () => {

    const safeArea = useSafeAreaInsets()
    const navigation = useNavigation()

    return (
        <View style={{ paddingTop: safeArea.top, flex: 1, backgroundColor: '#FFF', justifyContent: 'space-between' }}>
            <EntranceSVG />
            <View style={{ paddingRight: 51, paddingLeft: 51 }}>
                <Text style={{ fontSize: 32, color: '#6B6ABF', fontWeight: 'bold', }}>Ease of transport</Text>
                <Text style={{ fontSize: 16, color: '#C2C1E1' }}>Easily reach people with whom you can get your shipping jobs done.</Text>
                <Text style={{ fontSize: 16, color: '#C2C1E1' }}>Post an ad</Text>
                <Text style={{ fontSize: 16, color: '#C2C1E1' }}>Wait for offer</Text>
                <Text style={{ fontSize: 16, color: '#C2C1E1' }}>And make a deal</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingRight: 51, paddingLeft: 51, paddingBottom: 51, justifyContent: 'space-between' }}>
                <Pressable
                    // @ts-ignore
                    onPress={() => navigation.navigate('SignUp')}
                    style={{ width: 140, height: 50, borderRadius: 13, backgroundColor: '#6B6ABF', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#B3E1FD' }}>Sign Up</Text>
                </Pressable>
                <Pressable
                    // @ts-ignore
                    onPress={() => navigation.navigate('SignIn')}
                    style={{ width: 140, height: 50, borderRadius: 13, backgroundColor: '#F2F2F2', justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ color: '#6B6ABF' }}>Sign In</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Entrance