import { View, Text, StyleSheet, ScrollView, TouchableOpacityBase } from 'react-native'
import React, { useState } from 'react'
import { pallets } from '../../../constant'
import InputField from '../../../components/Form/InputField'
import Information from '../../../components/Form/Information'
import Button from '../../../components/Form/Button'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'


const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  
  const handlePassword = () => {
    navigation.navigate('Password')
  }
  
  const handleSignUp = () => {
    navigation.navigate('SignUp')
  }

  const welcome =() => {
    navigation.navigate('tab')
  }


  return (
    <ScrollView style={styles.container}>
    <TouchableOpacity>
     
    <Icon 
      type="antdesign" 
      name="left" size={30} 
      color="white"
      containerStyle={{alignItems:"baseline", marginTop: 30, marginLeft: 10}}
      onPress={navigation.goBack}/>
    
      </TouchableOpacity>
    <View style={{marginTop: 30, marginLeft: 10,
    marginRight: 10}}>
    <Information title ="Log in" description = "Welcome back to VibingLIVE, time to listen to the music you want and 
    enjoy the music"/>

    
      <InputField 
      placeholder="Enter your email address"
      label ="Email Address"
      icon="mail"
      handler={email}
      setHandler={setEmail}
      />
      
 
      <InputField
      label="Password"
      placeholder="Enter password"
      icon="lock"
      iconRight="eye"
      handler={password}
      setHandler={setPassword}
      />
      <Text onPress={handlePassword} style={styles.password}>Forgot password?</Text>
      
     <View >
      <Button onPress={welcome} pressIn={handleSignUp} call ="Sign up" description='You have account?' action="Login"/>
      </View>
      </View>
    </ScrollView>
  )
}

export default Login;

const styles = StyleSheet.create({
container: {
  flex: 1,
  height: "100%",
  width: "100%",
  backgroundColor: pallets.backgroundDarker
},
password: {
    position: "absolute",
    color: pallets.primary,
    marginTop: 385,
    alignSelf: "flex-end",
    paddingRight: 15
}
})