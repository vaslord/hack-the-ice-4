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
} from 'react-native'
import {useHeaderHeight} from '@react-navigation/elements'
import {colors, Style} from '../../Style'
import {Button} from 'react-native-elements'

const customStyles = StyleSheet.create({
  hiddenCodeInput: {
    position: 'absolute',
    height: 0,
    width: 0,
    opacity: 0,
  },
  inputsContainer: {
    width: 234,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    borderColor: colors.secondaryGreen,
    borderWidth: 2,
    backgroundColor: colors.secondaryGreen,
    borderRadius: 15,
    padding: 12,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 24,
  },
  inputContainerFocused: {
    borderColor: colors.gray,
    borderWidth: 2,
    backgroundColor: colors.gray,
    borderRadius: 15,
    padding: 12,
    width: 45,
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
          title={'Отправить снова 30 секунд'}
          onPress={() => navigation.navigate('NameInput')}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default CodeInput
