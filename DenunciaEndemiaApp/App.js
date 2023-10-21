import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import ScreensTabs from './src/components/ScreensTabs'
import { GetLocation } from './src/hooks/GetLocation'
import ErrorItem from './src/components/ErrorItem'
import LoadingItem from './src/components/LoadingItem'
import { LinearGradient } from 'expo-linear-gradient'

const App = () => {
  const [loading, error] = GetLocation()

  if (!loading && !error) {
    return (
      <NavigationContainer>
        <ScreensTabs />
      </NavigationContainer>
    )
  }
  return (
    <LinearGradient colors={['#093F78', '#017DFF']} style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <LoadingItem />
      )}
    </LinearGradient>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 30,
    backgroundColor: '#637EFF'
  }
})
export default App
