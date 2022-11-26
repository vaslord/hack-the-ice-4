import React, {useEffect, useRef, useState, useCallback} from 'react'
import {
  StyleSheet,
  TextInput,
  View,
  Pressable,
  Text,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Alert,
} from 'react-native'
import {useHeaderHeight} from '@react-navigation/elements'
import {colors, Style} from '../../Style'
import {Button} from 'react-native-elements'
import {useAppSelector, useAppDispatch} from '../../api/hooks'
import {instance} from '../../api/api'
import {login} from '../../features/user-slice'

const customStyles = StyleSheet.create({
  hiddenCodeInput: {
    position: 'absolute',
    height: 0,
    width: 0,
    opacity: 0,
  },
  inputsContainer: {
    width: 345,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    borderColor: colors.secondaryGray,
    borderWidth: 2,
    backgroundColor: colors.secondaryGray,
    borderRadius: 19,
    padding: 12,
    width: 72,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 24,
  },
  inputContainerFocused: {
    borderColor: colors.secondaryBlue,
    borderWidth: 2,
    backgroundColor: colors.secondaryBlue,
    borderRadius: 19,
    padding: 12,
    width: 72,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const CODE_LENGTH = 4

const CodeInput: React.FC<{navigation: any; route: any}> = ({
  route,
  navigation,
}) => {
  const [seconds, setSeconds] = React.useState(0)
  const [lastTrySeconds, setLastTrySeconds] = React.useState(0)
  const diff = seconds - lastTrySeconds
  const canSend = diff > 30
  const {phoneNumber} = route.params
  const [code, setCode] = useState('')
  const dispatch = useAppDispatch()
  const userStatus = useAppSelector(state => state.user.status)
  const user = useAppSelector(state => state.user.user)
  console.log('USER:', user)

  const sendCode = useCallback(async () => {
    const res = await instance.post(
      '/auth/register',
      {
        phone: phoneNumber,
      },
      {validateStatus: () => true},
    )
    const json = res.data as any
    if (json.error) {
      Alert.alert('Ошибка', json.error.message)
    }
  }, [phoneNumber])
  const sendCodeforLogin = useCallback(async () => {
    const res = await instance.post(
      '/auth/send-code',
      {
        phone: phoneNumber,
      },
      {validateStatus: () => true},
    )
    const json = res.data as any
    if (json.error) {
      Alert.alert('Ошибка', json.error.message)
    }
  }, [phoneNumber])

  useEffect(() => {
    sendCode()
  }, [sendCode])

  useEffect(() => {
    if (userStatus === 'succeeded' && user) {
      if (!user.name) {
        navigation.navigate('NameInput')
      } else {
        navigation.navigate('Tabs')
      }
    }
  }, [user, userStatus, navigation])

  useEffect(() => {
    const send = async () => {
      if (code.length === 4) {
        setCode('')
        await dispatch(
          login({
            phone: phoneNumber,
            code: code,
          }),
        )
      }
    }
    send()
  }, [phoneNumber, code, dispatch, seconds])

  const codeDigitsArray = new Array(CODE_LENGTH).fill(0)
  const [containerIsFocused, setContainerIsFocused] = useState(false)
  const handleOnBlur = () => {
    setContainerIsFocused(false)
  }

  const handleOnPress = () => {
    setContainerIsFocused(true)
    ref?.current?.focus()
  }
  const toDigitInput = (_value: number, idx: number) => {
    const emptyInputChar = ' '
    const digit = code[idx] || emptyInputChar

    const isCurrentDigit = idx === code.length
    const isLastDigit = idx <= code.length - 1

    const isFocused = isCurrentDigit || isLastDigit

    const containerStyle =
      containerIsFocused && isFocused
        ? {
            ...customStyles.inputContainer,
            ...customStyles.inputContainerFocused,
          }
        : customStyles.inputContainer

    return (
      <View key={idx} style={containerStyle}>
        <Text style={customStyles.inputText}>{digit}</Text>
      </View>
    )
  }
  const topOffset = useHeaderHeight() + 10
  const ref = useRef<TextInput>(null)

  return (
    <KeyboardAvoidingView
      style={Style.container}
      keyboardVerticalOffset={topOffset}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={Style.container}>
        <View style={{flexGrow: 1}}>
          <Text style={{marginTop: 21, textAlign: 'center', fontSize: 17}}>
            Код отправили на номер
          </Text>
          <Text style={{marginBottom: 30, textAlign: 'center', fontSize: 17}}>
            {phoneNumber}
          </Text>

          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Pressable
              style={customStyles.inputsContainer}
              onPress={handleOnPress}>
              {codeDigitsArray.map(toDigitInput)}
            </Pressable>
            <TextInput
              autoFocus={true}
              value={code}
              ref={ref}
              onChangeText={setCode}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              maxLength={CODE_LENGTH}
              style={customStyles.hiddenCodeInput}
              onSubmitEditing={handleOnBlur}
            />
          </View>
        </View>
        <Button
          buttonStyle={Style.button}
          titleStyle={Style.buttonTitle}
          containerStyle={{marginBottom: 24}}
          title={'Отправить код для входа'}
          onPress={() => sendCodeforLogin}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default CodeInput
