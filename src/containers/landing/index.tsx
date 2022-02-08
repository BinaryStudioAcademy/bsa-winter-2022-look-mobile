import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

const Landing: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greetings}>Hello There!</Text>
    </View>
  )
}

export default Landing
