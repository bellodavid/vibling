import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { pallets } from '../../constant'

interface buttonProps {
action: string;
}

const Button = ({action} :buttonProps) => {
  return (
    <View style={{marginLeft: 10, marginRight: 10}}>
      <TouchableOpacity style={styles.container}>
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