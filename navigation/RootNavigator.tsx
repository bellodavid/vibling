import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboard from '../screens/Onboard/Onboard';
import AuthNavigator from './Auth/AuthNavigator';
import CreateAccount from '../screens/Auth/SignUp/CreateAccount';
import TabNavigator from './App/TabNavigator';

export type RootStackParamList = {
    auth: undefined;
    onboard: undefined;
    tab: undefined;
    CreateAccount: undefined;
    MyModal: { userId: string; name: string}
   
  }

const RootNavigator = () => {
const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
   <RootStack.Navigator >
    {/* <RootStack.Group screenOptions={{
       headerShown: false
    }}>
    <RootStack.Screen name="auth" component={AuthNavigator} />
    </RootStack.Group> */}
    <RootStack.Group screenOptions={{
      headerShown: false
    }}>
    <RootStack.Screen  options={{
      headerShown: false
    }}name="tab" component={TabNavigator} />
    </RootStack.Group>
   </RootStack.Navigator>
  )
}

export default RootNavigator