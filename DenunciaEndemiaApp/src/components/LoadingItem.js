import React from "react"
import { Image, StyleSheet, ActivityIndicator } from 'react-native'

const LoadingItem = () => {
  const { logo } = styles
  return (
    <> 
      <Image source={require('../../assets/logoJuazeiro.png')} style={logo}/>
      <ActivityIndicator size={'large'} color={'blue'}/> 
    </>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 165,
    height: 200,
    alignSelf: 'center'
  }
})
export default LoadingItem