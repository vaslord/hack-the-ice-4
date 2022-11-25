import React, {useEffect, useRef, useState} from 'react'
import {View, SafeAreaView, Text, ScrollView, Image} from 'react-native'
import Alarm from '../../components/SVGcomponents/Alarm'
import InfoIcon from '../../components/SVGcomponents/InfoIcon'
import Settings from '../../components/SVGcomponents/Settings'
import {colors, Style} from '../../Style'

export function Profile({navigation}: {navigation: any}) {
  return (
    <SafeAreaView style={[Style.container]}>
      <ScrollView style={{backgroundColor: colors.white}}>
        <View
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
        </View>
        <View
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
        </View>
        <View
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
        </View>
        <View
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
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
