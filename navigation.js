import type { PropsWithChildren } from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './src/screens/common/SignIn';
import Search from './src/screens/Search';

import { theme } from './src/infrastructure/theme';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchResults from './src/screens/SearchResults';
import Offer from './src/screens/carrier/Offer';
import Main from './src/screens/customer/Main';
import Transport from './src/screens/customer/Transport';
import Profile from './src/screens/common/Profile';
import { justifyContent, marginTop, maxWidth, width } from 'styled-system';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import History from './src/screens/customer/History';
import PostAd from './src/screens/customer/PostAd';
import AdList from './src/screens/carrier/AdList';
import Entrance from './src/screens/common/Entrance';
import SignUp from './src/screens/common/SignUp';
import SignIn from './src/screens/common/SignIn';
import OfferList from './src/screens/carrier/OfferList';
import OfferDetail from './src/screens/carrier/OfferDetail';

//#region 
// const Tab = createMaterialTopTabNavigator();
// const HomeStack = createStackNavigator();
// const ResultStack = createStackNavigator();

// function SearchStack() {
//   return (
//     <HomeStack.Navigator initialRouteName='Search'>
//       <HomeStack.Screen
//         name="Search"
//         component={Search}
//         options={{ headerShown: false }}
//       />
//       <HomeStack.Screen
//         name="SearchResults"
//         component={SearchResults}
//       />
//       <HomeStack.Screen
//         name="Offer"
//         component={Offer}
//       />
//     </HomeStack.Navigator>
//   )
// }

// function TabNavigator() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator

// screenOptions={({ route }) => ({
//   tabBarIcon: ({ focused, color, size }) => {
//     if (route.name === 'Ara') {
//       return (
//         <Ionicons
//           name="search"
//           size={size}
//           color={color}
//         />
//       );
//     } else if (route.name === 'Yayınla') {
//       return (
//         <Ionicons
//           name="add-circle-outline"
//           size={size}
//           color={color}
//         />
//       );
//     }
//     else if (route.name === 'Teklifler') {
//       return (
//         <Ionicons
//           name="cube-outline"
//           size={size}
//           color={color}
//         />
//       );
//     }
//     else if (route.name === 'Gelen Kutusu') {
//       return (
//         <Ionicons
//           name="chatbubbles-outline"
//           size={size}
//           color={color}
//         />
//       );
//     }
//     else if (route.name === 'Profil') {
//       return (
//         <Ionicons
//           name="person-circle-outline"
//           size={size}
//           color={color}
//         />
//       );
//     }
//   },
//   tabBarActiveTintColor: '#79dcff',
//   tabBarInactiveTintColor: 'gray',
// })}
//       >
//         <Tab.Screen name='Ara' component={SearchStack} options={{ headerShown: false }} />
//         <Tab.Screen name='Yayınla' component={Post} />
//         <Tab.Screen name='Teklifler' component={Post} />
//         <Tab.Screen name='Gelen Kutusu' component={Post} />
//         <Tab.Screen name='Profil' component={Post} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

//#endregion


const Tab = createMaterialTopTabNavigator()
const WelcomeStack = createStackNavigator();
const MainStack = createStackNavigator()

// const SignUpStack = createStackNavigator();
// const SignInStack = createStackNavigator();

// function SignUpStackNavigation() {
//   <SignUpStack.Navigator initialRouteName='SignUp'>
//     <SignUpStack.Screen 
//       name="SignUp"
//       component={SignUp}
//       options={{ headerShown: false }}
//     />
//     {/* <SignUpStack.Screen 
//       name="CustomerApp"
//     />
//     <SignUpStack.Screen 
//       name="CarrierApp"
//     /> */}
//   </SignUpStack.Navigator>
// }

// function SignInStackNavigation() {
//   <SignInStack.Navigator initialRouteName='SignIn'>
//     <SignInStack.Screen 
//       name="SignIn"
//       component={SignIn}
//       options={{ headerShown: false }}
//     />
//     {/* <SignInStack.Screen 
//       name="CustomerApp"
//     />
//     <SignInStack.Screen 
//       name="CarrierApp"
//     /> */}
//   </SignInStack.Navigator>
// }


export function WelcomeStackNavigator() {
  const safeArea = useSafeAreaInsets()

  return (

    <WelcomeStack.Navigator initialRouteName='Entrance'>
      <WelcomeStack.Screen
        name="Entrance"
        component={Entrance}
        options={{ headerShown: false }}

      />
      <WelcomeStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <WelcomeStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
    </WelcomeStack.Navigator>


  )
}

function CustomerMainStackNavigator() {
  return (
    <MainStack.Navigator initialRouteName='Main'>
      <MainStack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="PostAd"
        component={PostAd}
        options={{ headerShown: false }}

      />
      <MainStack.Screen
        name="History"
        component={History}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  )
}

function CarrierMainStackNavigator() {
  return (
    <MainStack.Navigator initialRouteName='Main'>
      <MainStack.Screen
        name="Main"
        component={AdList}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="History"
        component={History}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Offer"
        component={Offer}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="OfferDetail"
        component={OfferDetail}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  )
}

export function CustomerTopTabNavigator() {

  const safeArea = useSafeAreaInsets()

  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: () => { },
        tabBarStyle: {
          elevation: 0,   // for Android
          shadowOffset: {
            width: 0, height: 0 // for iOS
          },
          marginTop: safeArea.top - 13
        },
        tabBarContentContainerStyle: { justifyContent: 'center' },
        tabBarItemStyle: { width: 47, },
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'MainStack') {
            return (
              <Ionicons
                name="home-outline"
                size={25}
                color={color}
              />
            );
          } else if (route.name === 'Transport') {
            return (
              <Ionicons
                name="car-outline"
                size={25}
                color={color}
              />
            );
          }
          else if (route.name === 'Profile') {
            return (
              <Ionicons
                name="person-circle-outline"
                size={25}
                color={color}
              />
            );
          }
        },
        tabBarActiveTintColor: '#6B6ABF',
        tabBarInactiveTintColor: '#C2C1E1',

        tabBarIndicatorStyle: {
          top: 0,
          backgroundColor: '#6B6ABF',
          width: 30,
          height: 3,
          borderBottomRightRadius: 13,
          borderBottomLeftRadius: 13,
          left: (Dimensions.get('window').width / 3 + 4),
        },
      })}
    >
      <Tab.Screen name="MainStack" component={CustomerMainStackNavigator} />
      <Tab.Screen name="Transport" component={Transport} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export function CarrierTopTabNavigator() {

  const safeArea = useSafeAreaInsets()

  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: () => { },
        tabBarStyle: {
          elevation: 0,   // for Android
          shadowOffset: {
            width: 0, height: 0 // for iOS
          },
          marginTop: safeArea.top - 13
        },
        tabBarContentContainerStyle: { justifyContent: 'center' },
        tabBarItemStyle: { width: 47, },
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'AdList') {
            return (
              <Ionicons
                name="home-outline"
                size={25}
                color={color}
              />
            );
          } else if (route.name === 'OfferList') {
            return (
              <Ionicons
                name="cash-outline"
                size={25}
                color={color}
              />
            );
          } else if (route.name === 'Profile') {
            return (
              <Ionicons
                name="person-circle-outline"
                size={25}
                color={color}
              />
            );
          }
        },
        tabBarActiveTintColor: '#6B6ABF',
        tabBarInactiveTintColor: '#C2C1E1',

        tabBarIndicatorStyle: {
          top: 0,
          backgroundColor: '#6B6ABF',
          width: 30,
          height: 3,
          borderBottomRightRadius: 13,
          borderBottomLeftRadius: 13,
          left: (Dimensions.get('window').width / 3 + 4),
        },
      })}
    >
      <Tab.Screen name="AdList" component={CarrierMainStackNavigator} />
      <Tab.Screen name="OfferList" component={OfferList} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
