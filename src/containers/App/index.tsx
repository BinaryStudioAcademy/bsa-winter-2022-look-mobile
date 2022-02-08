import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { Provider as ReduxProvider } from 'react-redux'
import store from 'src/redux/store'

import styles from 'src/containers/App/styles'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ReduxProvider store={store}>
        <Text style={styles.greetings}>Hello There!</Text>
      </ReduxProvider>
    </SafeAreaView>
  )
}

export default App
