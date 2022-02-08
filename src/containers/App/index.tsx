import React from 'react'
import { SafeAreaView } from 'react-native'
import { Provider as ReduxProvider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from 'src/navigators/RootNavigator'
import store from 'src/redux/store'

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <ReduxProvider store={store}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ReduxProvider>
    </SafeAreaView>
  )
}

export default App
