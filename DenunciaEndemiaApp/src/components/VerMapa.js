import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet } from 'react-native'
import { GetLatiLongi } from '../hooks/GetLatiLongi'
import AsyncStorage from '@react-native-async-storage/async-storage'

const VerMapa = () => {
  const { map } = styles
  const [latitude, longitude] = GetLatiLongi()

  let coord = {
    coords: {
      latitude,
      longitude
    }
  }

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('location-data', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  if (latitude && longitude) {
    return (
      <>
        <MapView
          style={map}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
          }}
        >
          <Marker
            draggable
            coordinate={{
              latitude: latitude,
              longitude: longitude
            }}
            onDragEnd={(e) => {
              coord.coords = e.nativeEvent.coordinate
              storeData(coord)
            }}
          />
        </MapView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%'
  }
})

export default VerMapa
