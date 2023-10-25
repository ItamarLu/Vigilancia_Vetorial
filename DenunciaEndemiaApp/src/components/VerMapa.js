import React from "react"
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet } from "react-native"
import { GetLatiLongi } from "../hooks/GetLatiLongi"

const VerMapa = () => {
  const { map} = styles
  const [latitude, longitude] = GetLatiLongi()

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
          <Marker draggable coordinate={{
              latitude: latitude,
              longitude: longitude
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
    height:'100%'
  }
})

export default VerMapa