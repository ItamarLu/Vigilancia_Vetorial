import React from 'react'
import { View, StyleSheet } from 'react-native'
// import FazerDenuncia from './src/screens/FazerDenuncia'
// import MotivoDenuncia from './src/screens/MotivoDenuncia'
import DadosDenuncia from './src/screens/DadosDenuncia'

const App = () => {
  const { container } = styles
  return (
    <View style={container}>
      <DadosDenuncia />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App
