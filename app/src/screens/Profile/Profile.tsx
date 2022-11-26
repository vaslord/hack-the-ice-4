import React, {useEffect, useRef, useState} from 'react'
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native'
import Alarm from '../../components/SVGcomponents/Alarm'
import {useAppDispatch, useAppSelector} from '../../api/hooks'
import InfoIcon from '../../components/SVGcomponents/InfoIcon'
import Settings from '../../components/SVGcomponents/Settings'
import {colors, Style} from '../../Style'
import {logout, updateMe} from '../../features/user-slice'

export function Profile({navigation}: {navigation: any}) {
  const user = useAppSelector(state => state.user.user)
  const userStatus = useAppSelector(state => state.user.status)
  const dispatch = useAppDispatch()
  const [nameModalVisible, setNameModalVisible] = useState(false)

  const logOut = () => {
    navigation.goBack()
    navigation.navigate('Home')
    dispatch(logout())
  }
  return (
    <SafeAreaView style={[Style.container]}>
      <ScrollView style={{backgroundColor: colors.white}}>
        <TouchableOpacity
          style={{
            marginTop: 20,
            marginHorizontal: 8,
            height: 88,
            alignSelf: 'stretch',
            backgroundColor: 'white',
            shadowOpacity: 0.32,
            borderRadius: 12,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 40,
              marginRight: 10,
              backgroundColor: colors.gray,
            }}
          />
          <View>
            <Text
              style={{fontWeight: '100', fontSize: 18, fontStyle: 'italic'}}>
              Космодемьянский
            </Text>
            <Text
              style={{fontWeight: '100', fontSize: 18, fontStyle: 'italic'}}>
              Иван Иванович
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 20,
            marginHorizontal: 8,
            height: 64,
            alignSelf: 'stretch',
            backgroundColor: 'white',
            shadowOpacity: 0.32,
            borderRadius: 12,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <Alarm />
          <Text
            style={{
              fontWeight: '100',
              fontSize: 18,
              fontStyle: 'italic',
              marginLeft: 20,
            }}>
            Уведомления
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 20,
            marginHorizontal: 8,
            height: 64,
            alignSelf: 'stretch',
            backgroundColor: 'white',
            shadowOpacity: 0.32,
            borderRadius: 12,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <Settings />
          <Text
            style={{
              fontWeight: '100',
              fontSize: 18,
              fontStyle: 'italic',
              marginLeft: 20,
            }}>
            Настройка аккаунта
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 20,
            marginHorizontal: 8,
            height: 64,
            alignSelf: 'stretch',
            backgroundColor: 'white',
            shadowOpacity: 0.32,
            borderRadius: 12,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <InfoIcon />
          <Text
            style={{
              fontWeight: '100',
              fontSize: 18,
              fontStyle: 'italic',
              marginLeft: 20,
            }}>
            Помощь и поддержка
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity
        style={{
          marginBottom: 20,
          marginHorizontal: 8,
          height: 64,
          alignSelf: 'stretch',
          backgroundColor: 'white',
          shadowOpacity: 0.32,
          borderRadius: 12,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}
        onPress={logOut}>
        <Text
          style={{
            fontWeight: '100',
            fontSize: 18,
            fontStyle: 'italic',
            marginLeft: 20,
          }}>
          Выйти с профиля
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
