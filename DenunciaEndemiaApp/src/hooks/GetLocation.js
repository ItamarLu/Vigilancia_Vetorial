import React, { useState, useEffect } from "react"
import * as Location from 'expo-location'

export const GetLocation = () => {
  useEffect(() => {
    (async() => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('Permissão para acessar localização foi negada')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
      setLoading(false)
    })()
  }, [])
  
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(null)
  const [error, setError] = useState()
  
  return [loading, error, location]
}