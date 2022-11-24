import React from 'react'
import {
  Linking,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
} from 'react-native'
import WhatsappIcon from '../../components/SVGcomponents/WhatsappIcon'
import YoutubeIcon from '../../components/SVGcomponents/YoutubeIcon'
import {colors, Style} from '../../Style'

interface ButtonProps {
  title?: string
  margin?: number
  marginLeft?: number
  marginRight?: number
  minWidth?: string
  color?: string
  style?: any
  disabled?: boolean
  callback?: Function
}

const CustomButton: React.FC<ButtonProps> = props => {
  const styles = StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignSelf: 'stretch',
      height: 56,
      backgroundColor: props.color || colors.darkGreen,
      borderColor: colors.darkGreen,
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 6,
      margin: props.margin || 0,
      flexBasis: 'auto',
    },
    buttonText: {
      color: props.color || colors.white,
      textAlign: 'center',
    },
  })
  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={[styles.button, props.style]}
      onPress={() => {
        if (props.callback) {
          props.callback()
        }
      }}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const customStyles = StyleSheet.create({
  logo: {
    marginHorizontal: 7,
    marginTop: 14,
    marginBottom: 24,
  },
})

export const Contacts: React.FC<{navigation: any}> = ({navigation}) => {
  let phone = '+79142636137'
  let stacionPhone = '+79142636137'
  return (
    <SafeAreaView style={Style.container}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={{marginHorizontal: 16}}>
          <View style={{alignItems: 'center'}}>
            <View style={{marginTop: 37}}>
              <Image
                style={{
                  width: 240,
                  height: 240,
                  backgroundColor: '#1BD741',
                  borderRadius: 19,
                  marginBottom: 20,
                }}
              />
            </View>
            <Text>Hack APP - team A</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity style={customStyles.logo}>
                <WhatsappIcon />
              </TouchableOpacity>
              <TouchableOpacity style={customStyles.logo}>
                <YoutubeIcon />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: colors.secondaryGray,
                marginBottom: 24,
                fontSize: 13,
              }}>
              Версия приложения 1.0
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <CustomButton
              style={{
                flex: 1,
                marginRight: 8,
                backgroundColor: colors.white,
              }}
              color={colors.darkGreen}
              title="Позвонить"
              callback={() => Linking.openURL(`tel:${stacionPhone}`)}
            />
            <CustomButton
              style={{
                flex: 1,
                marginLeft: 8,
                backgroundColor: colors.white,
              }}
              color={colors.darkGreen}
              title="Техподдержка"
            />
          </View>
          <View style={{marginTop: 26}}>
            <TouchableOpacity style={Style.linkBlock} onPress={() => {}}>
              <Text>Политика конфиденциальности</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.linkBlock} onPress={() => {}}>
              <Text>Публичная оферта</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
