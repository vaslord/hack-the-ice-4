import React, {useEffect, useRef, useState} from 'react'
import {Text, Image, TouchableOpacity} from 'react-native'
import {colors, Style} from '../../Style'
import MapView from 'react-native-map-clustering'
import {Marker, Polyline} from 'react-native-maps'
import {Button} from 'react-native-elements'

const items: any = [
  {id: 1, lat: 62.0209, lon: 129.711, orders: 5},
  {id: 2, lat: 62.0327, lon: 129.7502, orders: 1},
  {id: 3, lat: 62.035454, lon: 129.675476, orders: 5},
  {id: 3, lat: 62.0335, lon: 129.7512, orders: 5},
]

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
        clusterColor={colors.blue}
        tintColor={colors.blue}
        minPoints={1}
        style={{flex: 1}}
        onClusterPress={(cluster, markers: any) => {
          console.log(markers[0])
          const ids = markers.map(
            (marker: any) => +marker.properties.identifier,
          )
          const clickedItems = items.filter((item: any) =>
            ids.includes(item.id),
          )
          navigation.navigate('Items', {items: clickedItems})
        }}>
        {items.map((item: any) => (
          <Marker
            identifier={item.id + ''}
            image={require('../../assets/icons/marker2.png')}
            key={item.id + ''}
            onPress={() => {}}
            coordinate={{latitude: item.lat, longitude: item.lon}}>
            <Text
              numberOfLines={1}
              style={{
                color: 'red',
                fontSize: 14,
                fontWeight: '500',
                width: 74,
                textAlign: 'center',
                marginTop: 4,
              }}>
              {item.orders} отзывов
            </Text>
          </Marker>
        ))}
        <Polyline
          coordinates={[
            {latitude: 62.0323, longitude: 129.7512},
            {latitude: 62.03429, longitude: 129.7523},
            {latitude: 62.03569, longitude: 129.7514},
            {latitude: 62.03359, longitude: 129.747},
            {latitude: 62.03059, longitude: 129.7502},
            {latitude: 62.0323, longitude: 129.7512},
          ]}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[
            '#7F0000',
            '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
            '#B24112',
            '#E5845C',
            '#238C23',
            '#7F0000',
          ]}
          strokeWidth={6}
        />
      </MapView>
      <Button
        buttonStyle={{
          width: 56,
          height: 56,
          borderRadius: 25,
          backgroundColor: colors.blue,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        titleStyle={{...Style.buttonTitle}}
        containerStyle={{
          position: 'absolute',
          bottom: 16,
          right: 16,
        }}
        iconPosition="left"
        title={'+'}
      />
    </>
  )
}
