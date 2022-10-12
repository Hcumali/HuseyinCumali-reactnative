import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import Screen from './src/components/Screen'
import {ProductService, CategoryService} from "@services"

const App = () => {
  useEffect(() => {
    ProductService.getProducts()
    .then((res: any) => {
      console.log("res: ", res.message);
    })
    .catch((err: any) => {
      console.log("err: ", err);
    })
  }, [])
  
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