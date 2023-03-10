import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { pallets } from '../../constant'
import Header from '../../components/Header/Header'

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
      <Header/>
      </View>
   
  </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor: pallets.backgroundSecondary,
  },
  innerContainer: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 10,
    height: "100%",
  }
  })
  