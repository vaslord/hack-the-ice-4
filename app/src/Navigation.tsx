import React, {useEffect, useCallback} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import ContactsIcon from './components/SVGcomponents/ContactsIcon'
import ProfileIcon from './components/SVGcomponents/ProfileIcon'
import {colors} from './Style'
import {useAppSelector, useAppDispatch} from './api/hooks'
import {Alert, StatusBar, TouchableOpacity, View, Platform} from 'react-native'

import SplashScreen from 'react-native-splash-screen'
import CloseButtonIcon from './components/SVGcomponents/CloseButtonIcon'
import {Main} from './screens/Main/Main'
import {Profile} from './screens/Profile/Profile'
import {PhoneInput} from './screens/Auth/PhoneInput'
import CodeInput from './screens/Auth/CodeInput'
import {NameInput} from './screens/Auth/NameInput'
import {Orders} from './screens/Orders/Order'
import {Contacts} from './screens/Contacts/Contacts'
import EmptyIcon from './components/SVGcomponents/EmptyIcon'
import {API_URL} from './api/constants'
import {checkLogin} from './features/user-slice'
import Plus from './components/SVGcomponents/Plus'

const createStack =
  Platform.OS === 'ios' ? createStackNavigator : createNativeStackNavigator
const Tabs = createBottomTabNavigator()
const MenuStack = createStack()
const ProfileStack = createStack()
const RootStack = createStack()
const OrderStack = createStack()
const MenuStackScreen = () => (
  <MenuStack.Navigator screenOptions={{headerShown: false}}>
    <MenuStack.Screen name="Home" component={Main} />
  </MenuStack.Navigator>
)

function CloseButton({onPress}: {onPress?: () => void}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingRight: 16,
        paddingLeft: 16,
        justifyContent: 'center',
      }}>
      <CloseButtonIcon
        backgroundColor={colors.bluishGray}
        color={colors.black}
      />
    </TouchableOpacity>
  )
}
const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    screenOptions={{
      headerShown: true,
      headerTitleStyle: {
        fontSize: 32,
        fontWeight: '700',
      },
      headerShadowVisible: false,
      headerTintColor: 'black',
    }}>
    <ProfileStack.Screen
      options={{
        title: 'Профиль',
        headerTitleAlign: 'left',
        headerShown: true,
        headerTitleStyle: {
          fontSize: 32,
          fontWeight: '700',
        },
        headerShadowVisible: false,
      }}
      name="Profile"
      component={Profile}
    />
  </ProfileStack.Navigator>
)

const TabsScreen = () => {
  const token = useAppSelector(state => state.user.token)
  const dispatch = useAppDispatch()
  return (
    <Tabs.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarAllowFontScaling: false,
        tabBarBadgeStyle: {
          position: 'absolute',
        },
        tabBarLabelPosition: 'below-icon',
        headerShown: false,
        tabBarStyle: {backgroundColor: colors.gray},
        tabBarActiveTintColor: '#185AC5',
        tabBarIcon: ({focused}) => {
          let iconColor = '#185AC5'
          if (route.name === 'Карта') {
            iconColor = focused ? colors.blue : colors.secondaryGray
            return <ContactsIcon color={iconColor} />
          } else if (route.name === 'Профиль') {
            iconColor = focused ? colors.blue : colors.secondaryGray
            return <ProfileIcon color={iconColor} />
          }
        },
      })}>
      <Tabs.Screen name={'Карта'} component={MenuStackScreen} />
      <Tabs.Screen
        name={'+'}
        component={OrdersStackScreen}
        options={({navigation}) => ({
          tabBarButton: props => (
            <TouchableOpacity
              {...props}
              style={{
                width: 57,
                height: 57,
                backgroundColor: colors.blue,
                borderRadius: 57,
                bottom: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Plus />
            </TouchableOpacity>
          ),
        })}
      />
      <Tabs.Screen
        name={'Профиль'}
        component={ProfileStackScreen}
        listeners={({navigation}) => ({
          tabPress: e => {
            if (!token) {
              e.preventDefault()
              navigation.navigate('PhoneInput')
            }
          },
        })}
      />
    </Tabs.Navigator>
  )
}
const OrdersStackScreen = () => {
  return (
    <OrderStack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleStyle: {
          fontSize: 32,
          fontWeight: '700',
        },
        headerShadowVisible: false,
        headerTintColor: 'black',
      }}>
      <OrderStack.Screen
        options={{
          title: 'Отзывы',
          headerTitleAlign: 'left',
          headerShown: true,
          headerTitleStyle: {
            fontSize: 32,
            fontWeight: '700',
          },
          headerShadowVisible: false,
        }}
        name="Orders"
        component={Orders}
      />
    </OrderStack.Navigator>
  )
}

const RootStackScreen = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Tabs" component={TabsScreen} />
      <RootStack.Screen
        name="PhoneInput"
        component={PhoneInput}
        options={({navigation}) => ({
          presentation: 'modal',
          headerShown: true,
          headerLeft: () => <View />,
          headerStyle: {
            backgroundColor: '#F7F7F7',
          },
          title: 'Авторизация',
          headerRight: () => (
            <CloseButton
              onPress={() => {
                navigation.goBack()
              }}
            />
          ),
        })}
      />
      <RootStack.Screen
        name="CodeInput"
        component={CodeInput}
        options={({navigation}) => ({
          presentation: 'modal',
          headerShown: true,
          headerLeft: () => <View />,
          headerStyle: {
            backgroundColor: '#F7F7F7',
          },
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: '700',
            lineHeight: 22,
          },
          title: 'Код авторизации',
          headerRight: () => (
            <CloseButton
              onPress={() => {
                navigation.goBack()
              }}
            />
          ),
        })}
      />
      <RootStack.Screen
        name="NameInput"
        component={NameInput}
        options={({navigation}) => ({
          presentation: 'modal',
          headerShown: true,
          headerLeft: () => <View />,
          headerStyle: {
            backgroundColor: '#F7F7F7',
          },
          title: 'Имя',
          headerRight: () => (
            <CloseButton
              onPress={() => {
                navigation.goBack()
              }}
            />
          ),
        })}
      />
    </RootStack.Navigator>
  )
}

export function Navigation() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  const token = useAppSelector(state => state.user.token)
  useEffect(() => {
    dispatch(checkLogin())
  }, [dispatch])

  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
      <RootStackScreen />
    </NavigationContainer>
  )
}
