import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, Theme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Onboard from '../screens/Onboard/Onboard';
import SignUp from '../screens/Auth/SignUp/SignUp';
import RootNavigator from '../navigation/RootNavigator';




const LoadApp = () => {
  return (
   <>
   <NavigationContainer>
   <SafeAreaProvider>
    <RootNavigator/>
    </SafeAreaProvider>
   </NavigationContainer>
   </>
  )
}

export default LoadApp