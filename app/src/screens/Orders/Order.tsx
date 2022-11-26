import React, {memo, useEffect, useRef, useState} from 'react'
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import {Button} from 'react-native-elements'
import TextInputMask from 'react-native-text-input-mask'
import {API_URL} from '../../api/constants'
import Camera from '../../components/SVGcomponents/Camera'
import {useAppSelector, useAppDispatch} from '../../api/hooks'
import InfoIcon from '../../components/SVGcomponents/InfoIcon'
import {PostData} from '../../requests/Post'
import GetLocation from 'react-native-get-location'
import {colors, Style} from '../../Style'

export function Orders({navigation}: {navigation: any}) {
  const token = useAppSelector(state => state.user.token)
  const latitude = 62.0323
  const longitude = 129.7512
  const [comment, setComment] = useState('')
  return (
    <SafeAreaView style={[Style.container]}>
      <ScrollView
        style={{
          flex: 1,
        }}>
        <View style={{flex: 1, marginHorizontal: 15, marginTop: 30}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 30,
            }}>
            <InfoIcon />
            <Text style={{marginLeft: 10}}>Опишите с чем вы столкнулись</Text>
          </View>
        </View>
        <TextInputMask
          style={{
            alignSelf: 'stretch',
            height: 128,
            backgroundColor: '#E9E9E9',
            marginHorizontal: 15,
            borderRadius: 5,
            paddingHorizontal: 15,
            paddingTop: 20,
          }}
          onChangeText={text => setComment(text)}
          placeholder={'Напишите что нибудь...'}
          multiline
        />
        <TouchableOpacity style={{marginHorizontal: 15, marginTop: 15}}>
          <Camera />
        </TouchableOpacity>
      </ScrollView>
      <Button
        buttonStyle={Style.button}
        titleStyle={Style.buttonTitle}
        containerStyle={{marginBottom: 50}}
        title={'Отправить'}
        onPress={() =>
          PostData(
            API_URL + `reports`,
            token,
            JSON.stringify({
              id: 1,
              user_id: 1,
              geo_data: {
                latitude: latitude,
                longitude: longitude,
                altitude: 1200,
                accuracy: 5,
              },
              comment: comment,
            }),
            (json: any) => {
              console.log(json)
            },
            (e: any) => {
              console.log(e)
            },
          )
        }
      />
    </SafeAreaView>
  )
}
