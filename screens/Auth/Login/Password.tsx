import { View, Text, StyleSheet, ScrollView, TouchableOpacityBase } from 'react-native'
import React, { useState } from 'react'
import { pallets } from '../../../constant'
import InputField from '../../../components/Form/InputField'
import Information from '../../../components/Form/Information'
import Button from '../../../components/Form/Button'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'


const Password = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  
  const handleSubmit = () => {
    navigation.navigate('Verify')
  }

  const handleBackToLogin = () => {
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
    <Information title ="Password" description = "Enter your registered email address below
    to receive password reset link"/>

    
      <InputField 
      placeholder="Enter your email address"
      label ="Email Address"
      icon="mail"
      handler={email}
      setHandler={setEmail}
      />
      
     <View >
      <Button onPress={handleSubmit} action="Submit"/>
      <Text onPress={handleBackToLogin} style={styles.login}>Back to login</Text>
      </View>
      </View>
    </ScrollView>
  )
}

export default Password;

const styles = StyleSheet.create({
container: {
  flex: 1,
  height: "100%",
  width: "100%",
  backgroundColor: pallets.backgroundDarker
},
login: {
    position: "absolute",
    color: pallets.white,
    marginTop: 90,
    alignSelf: "center",

}
})