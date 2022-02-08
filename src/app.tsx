import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import styles from 'src/styles/main.styles'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.greetings}>Hello There!</Text>
    </SafeAreaView>
  )
}

export default App
