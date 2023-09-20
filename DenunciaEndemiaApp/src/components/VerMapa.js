import React from "react"
import { GetLocation } from "../hooks/GetLocation"
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet } from "react-native"

const VerMapa = () => {
  const { map } = styles
  const [loading, error, location] = GetLocation()
  return (
    <>
      {
        location && 
        <MapView 
          style={map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
          }}
        >
          <Marker 
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude
            }}
          />
        </MapView>
      }
    </>
  )
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height:'100%'
  }
})
export default VerMapa