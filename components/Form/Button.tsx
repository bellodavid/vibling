import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { pallets } from '../../constant'
import { useNavigation } from '@react-navigation/native';

interface buttonProps {
action: string;
CreateAccount: undefined;
onPress: () => void;
}

const Button = ({action, onPress} :buttonProps) => {

  const navigation = useNavigation();
  return (
    <View style={{marginLeft: 10, marginRight: 10}}>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{action}</Text>
      </TouchableOpacity>
      <>
      <Text style={{color: pallets.white, 
      alignSelf: "center", paddingTop: 15}}>You already have account? 
        <Text style={{color: pallets.primary}}> Sign in </Text>
      </Text>
      </>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
container: {
    marginTop: 10,
    width: "100%",
    backgroundColor: pallets.primary,
    padding: 20,
    borderRadius: 10,
    alignContent: "center",
   
   
},
text:{
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center"
}
})