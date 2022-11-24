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
import MapView from 'react-native-map-clustering'
import {Marker} from 'react-native-maps'

export const Main = ({navigation, route}: any) => {
  const mapRef = useRef()
  return (
    <>
      <MapView
        ref={mapRef}
        spiralEnabled={false}
        initialRegion={{
          latitude: 62.035454,
          longitude: 129.675476,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        preserveClusterPressBehavior={true}
        clusterColor={colors.darkGreen}
        tintColor={colors.darkGreen}
        minPoints={1}
        style={{flex: 1}}
      />
    </>
  )
}
