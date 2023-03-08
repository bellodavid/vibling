import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboard from '../../screens/Onboard/Onboard';
import SignUp from '../../screens/Auth/SignUp/SignUp';


export type RootStackParamList = {
    onboard: undefined;
    MyModal: { userId: string; name: string}
    SignUp: { name: string};
   
  }

const AuthNavigator = () => {
const Auth = createNativeStackNavigator<RootStackParamList>();

  return (
   <Auth.Navigator>
    <Auth.Group screenOptions={{
      headerShown: false
    }}>
    <Auth.Screen name="onboard" component={Onboard} />
    <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Group>
   </Auth.Navigator>
  )
}

export default AuthNavigator