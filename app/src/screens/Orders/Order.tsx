import React, {useEffect, useRef, useState} from 'react'
import {View, SafeAreaView, Text} from 'react-native'
import {Button} from 'react-native-elements'
import {colors, Style} from '../../Style'

export function Orders({navigation}: {navigation: any}) {
  return (
    <SafeAreaView style={[Style.container]}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 17}}>
          После регистрации вы можете{'\n'}отправлять отзывы
        </Text>
        <Button
          buttonStyle={[Style.button, {alignSelf: 'stretch'}]}
          titleStyle={Style.buttonTitle}
          containerStyle={{marginTop: 20}}
          title="Зарегестрироваться"
          onPress={() => {
            navigation.navigate('PhoneInput')
          }}
        />
      </View>
    </SafeAreaView>
  )
}
