import React, {useEffect, useState} from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native'
import {colors, Style} from '../../Style'
import {useHeaderHeight} from '@react-navigation/elements'
import {Button} from 'react-native-elements'
import {getStatusBarHeight} from 'react-native-status-bar-height'

export const NameInput: React.FC<{navigation: any}> = ({navigation}) => {
  const [nameJS, setNameJS] = useState('')
  const topOffset = useHeaderHeight() + getStatusBarHeight() + 10

  return (
    <KeyboardAvoidingView
      style={Style.container}
      keyboardVerticalOffset={topOffset}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={Style.container}>
        <View style={{flexGrow: 1}}>
          <Text style={{marginVertical: 20, textAlign: 'center', fontSize: 17}}>
            Ваше Имя
          </Text>
          <TextInput
            onChangeText={text => {
              setNameJS(text)
            }}
            selectionColor={colors.blue}
            placeholder={'Как вас зовут?'}
            style={{
              backgroundColor: colors.gray,
              height: 56,
              marginRight: 20,
              marginLeft: 20,
              borderRadius: 15,
              alignSelf: 'stretch',
              textAlign: 'center',
              justifyContent: 'center',
              fontSize: 15,
            }}
          />
        </View>
        <Button
          buttonStyle={Style.button}
          titleStyle={Style.buttonTitle}
          containerStyle={{marginBottom: 24}}
          title={'Зарегистрироваться'}
          disabled={nameJS.length === 0}
          onPress={() => {
            navigation.navigate('ProfileScreen')
          }}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}
