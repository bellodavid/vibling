import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { pallets } from '../../constant'

const Button = () => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
container: {
    marginTop: 20,
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