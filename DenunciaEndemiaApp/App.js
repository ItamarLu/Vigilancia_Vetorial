import React from 'react'
import { View, StyleSheet } from 'react-native'
import FazerDenuncia from './src/screens/FazerDenuncia'

const App = () => {
  const { container } = styles
  return (
    <View style={container}>
      <FazerDenuncia />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App
