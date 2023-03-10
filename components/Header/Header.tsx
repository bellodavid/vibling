import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { pallets } from '../../constant'
import { Icon } from '@rneui/themed'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome back Bistom!</Text>
      <View style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: 65, 
      }}>
        <Icon type="antdesign" name="bells" size={25} color="white"/>
        <EvilIcons name="user" size={30} color="white"/>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
 
   
},
headerText: {
    color: pallets.white,
    fontSize: 20,
    fontWeight: "bold",
}
})