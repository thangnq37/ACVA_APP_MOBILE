import {View, Text, StyleSheet, Platform} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Profile, QA, QRCode, Video} from '../screens/index';
import {COLORS, SIZES} from '../constants/index';
import {ScreenContainer} from 'react-native-screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BlurView} from 'expo-blur';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from 'react-i18next';
const Tab = createBottomTabNavigator();
const VideoStack = createNativeStackNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  // tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    display: 'flex',
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 25 : 5,
    padding: 25,
    left: 10,
    right: 10,
    // backgroundColor: '#F3F4F5',
    borderRadius: 30,
    height: Platform.OS === 'ios' ? 75 : 70,
    // Add shadow based on the platform
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 5,
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  // barStyle: {zIndex: 0},
};

const BottomTabNavigation = () => {
  const [t, i18n] = useTranslation();
  return (
    <>
      <Tab.Navigator screenOptions={screenOptions} initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            cardStyle: {backgroundColor: '#fff'},
            tabBarIcon: ({focused}) => {
              return (
                <>
                  <MaterialCommunityIcons
                    size={20}
                    name={focused ? 'home' : 'home-outline'}
                    color={focused ? COLORS.primary : 'black'}
                  />
                  <Text
                    style={{
                      color: `${focused ? COLORS.primary : 'black'}`,
                      fontWeight: `${focused ? 'bold' : '300'}`,
                      fontSize: SIZES.small,
                    }}>
                    {t('home')}
                  </Text>
                </>
              );
            },
          }}
        />

        <Tab.Screen
          name="Video"
          component={Video}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <>
                  <Ionicons
                    name={focused ? 'videocam' : 'videocam-outline'}
                    size={20}
                    color={focused ? COLORS.primary : 'black'}
                  />

                  <Text
                    style={{
                      color: `${focused ? COLORS.primary : 'black'}`,
                      fontWeight: `${focused ? 'bold' : '300'}`,
                      fontSize: SIZES.small,
                    }}>
                    {t('video')}
                  </Text>
                </>
              );
            },
            headerShown: true,
            headerTitle: t('video'),
            title: 'Aligned Center',
            headerTitleAlign: 'center',
            headerStyle: {
              height: Platform.OS === 'ios' ? 70 : 0,
              borderBottomWidth: 1,
              borderBottomColor: '#eee',
            },
          }}
        />

        <Tab.Screen
          name="QRCode"
          component={QRCode}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <>
                  <Ionicons
                    name={focused ? 'qr-code' : 'qr-code-outline'}
                    size={20}
                    color={focused ? COLORS.primary : 'black'}
                  />
                  <Text
                    style={{
                      color: `${focused ? COLORS.primary : 'black'}`,
                      fontWeight: `${focused ? 'bold' : '300'}`,
                      fontSize: SIZES.small,
                    }}>
                    {t('QrCode')}
                  </Text>
                </>
              );
            },
          }}
        />

        <Tab.Screen
          name="QA"
          component={QA}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <>
                  <FontAwesome
                    name={focused ? 'question-circle' : 'question-circle-o'}
                    size={20}
                    color={focused ? COLORS.primary : 'black'}
                  />
                  <Text
                    style={{
                      color: `${focused ? COLORS.primary : 'black'}`,
                      fontWeight: `${focused ? 'bold' : '300'}`,
                      fontSize: SIZES.small,
                    }}>
                    {t('Q&A')}
                  </Text>
                </>
              );
            },

            headerShown: true,
            headerTitle: 'Q&A',
            title: 'Aligned Center',
            headerTitleAlign: 'center',
            headerStyle: {
              height: Platform.OS === 'ios' ? 70 : 0,
              borderBottomWidth: 1,
              borderBottomColor: '#eee',
            },
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <>
                  <FontAwesome
                    name={focused ? 'user' : 'user-o'}
                    size={20}
                    color={focused ? COLORS.primary : 'black'}
                  />

                  <Text
                    style={{
                      color: `${focused ? COLORS.primary : 'black'}`,
                      fontWeight: `${focused ? 'bold' : '300'}`,
                      fontSize: SIZES.small,
                    }}>
                    {t('Profile')}
                  </Text>
                </>
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabNavigation;
