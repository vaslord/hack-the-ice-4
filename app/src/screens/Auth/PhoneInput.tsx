import React, {useState} from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  TextInput,
  Text,
} from 'react-native'
import {Button} from 'react-native-elements'
import {colors, Style} from '../../Style'
import {useHeaderHeight} from '@react-navigation/elements'
import {getStatusBarHeight} from 'react-native-status-bar-height'
import TextInputMask from 'react-native-text-input-mask'

const customStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.white,
  },
  input: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 24,
    height: 56,
    backgroundColor: colors.gray,
    borderRadius: 16,
    fontSize: 22,
    textAlign: 'center',
  },
})

export const PhoneInput: React.FC<{navigation: any}> = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const placeholder = '+7 (999)-999-99-99'
  const topOffset = useHeaderHeight() + getStatusBarHeight() + 10
  return (
    <KeyboardAvoidingView
      style={Style.container}
      keyboardVerticalOffset={topOffset}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={Style.container}>
        <View style={{flexGrow: 1, justifyContent: 'center'}}>
          <Text style={{textAlign: 'center', fontSize: 17}}>
            Введите ваш номер
          </Text>
          <TextInputMask
            autoFocus={true}
            placeholder={placeholder}
            onChangeText={(formatted, extracted) => {
              setPhoneNumber(formatted)
            }}
            style={customStyles.input}
            selectionColor={colors.blue}
            underlineColorAndroid={'transparent'}
            keyboardType={'phone-pad'}
            mask={'+7 ([999])-[999]-[99]-[99]'}
            autoCorrect={false}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PublicOffer')
          }}>
          <Text
            style={{
              color: colors.blue,
              marginBottom: 24,
              textAlign: 'center',
              fontSize: 15,
            }}>
            Обработка персональных данных
          </Text>
        </TouchableOpacity>
        <Button
          buttonStyle={Style.button}
          titleStyle={Style.buttonTitle}
          containerStyle={{marginBottom: 24}}
          title="Получить код"
          disabled={phoneNumber.length < '+7 (999)-999-99-99'.length}
          onPress={() => {
            navigation.navigate('CodeInput', {phoneNumber})
          }}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}
