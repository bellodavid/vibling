import { View, Text, StyleSheet, ScrollView, TouchableOpacityBase } from 'react-native'
import React, { useState } from 'react'
import { pallets } from '../../../constant'
import InputField from '../../../components/Form/InputField'
import Information from '../../../components/Form/Information'
import Button from '../../../components/Form/Button'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from '@rneui/themed'
import LeftArrow from '../../../assets/icons/LeftArrow'
import { useNavigation } from '@react-navigation/native'


const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate("CreateAccount")
  }
  
  const signIn = () => {
    navigation.navigate('Login')
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
    <Information title ="Sign Up" description = "Welcome to VibingLIVE, which will make accompany your 
        mood for mix. Let's create account now" step ="Step 1 of 2"/>
    
      <InputField 
      placeholder="Enter your full name"
      label ="Full Name"
      icon="user"
      handler={name}
      setHandler={setName}
      />
 
      <InputField
      label="Email Address"
      placeholder="Enter your email address"
      icon="mail"
      handler={email}
      setHandler={setEmail}
      />
      
      <InputField
      label="Phone Number"
      placeholder="81356377273"
      icon="phone"
     
      handler={phone}
      setHandler={setPhone}
      />
     <TouchableOpacity>
      <Button pressIn={signIn} call="Sign in" description='You have account?' onPress= {handleNext} action="Next Step"/>
      </TouchableOpacity>
      
      </View>
    </ScrollView>
  )
}

export default SignUp

const styles = StyleSheet.create({
container: {
  flex: 1,
  height: "100%",
  width: "100%",
  backgroundColor: pallets.backgroundDarker
}
})