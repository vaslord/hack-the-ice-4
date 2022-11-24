import React, {useEffect, useRef, useState} from 'react'
import {
  Dimensions,
  GestureResponderEvent,
  RefreshControl,
  SectionList,
  TouchableOpacity,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native'
import {colors, Style} from '../../Style'

export function Profile({navigation}: {navigation: any}) {
  return (
    <SafeAreaView style={[Style.container]}>
      <View style={{backgroundColor: colors.gray}}></View>
    </SafeAreaView>
  )
}
