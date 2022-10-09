import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from './src/components/Screen'

const App = () => {
  return (
    <Screen showHeader showBack>
      <View style={styles.test}>
        <Text>MERHABA</Text>
      </View>
    </Screen>
  )
}
const styles = StyleSheet.create({
  test: {
  }
})

export default App