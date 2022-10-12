import React, {useState, useEffect, ReactElement} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  children: ReactElement
  showHeader?: Boolean
  showBack?: Boolean
}

const Screen: React.FunctionComponent<Props> = (props) => {
  const {children, showBack, showHeader} = props;

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          {children}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    display: "flex"
  }
})

export default Screen