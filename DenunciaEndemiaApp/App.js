import React from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import ScreensTabs from './src/components/ScreensTabs'
import { GetLocation } from './src/hooks/GetLocation'
import ErrorItem from './src/components/ErrorItem'
import LoadingItem from './src/components/LoadingItem'

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
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <LoadingItem />
      )}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 30
  }
})
export default App
