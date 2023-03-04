import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, Theme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const LoadApp = () => {


  return (
   <>
   <NavigationContainer>
   <SafeAreaProvider>
    
   </SafeAreaProvider>
   </NavigationContainer>
   </>
  )
}

export default LoadApp