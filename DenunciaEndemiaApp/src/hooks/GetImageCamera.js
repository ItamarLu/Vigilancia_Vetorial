import React from "react"
import * as ImagePicker from 'expo-image-picker'

export const GetImageCamera = async () => {
  const result = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    base64: true,
    quality: 1
  })

  if (!result.canceled) {
    return(result.assets[0].uri)
  }
}
