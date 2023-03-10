import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { pallets } from '../../constant'
import Header from '../../components/Header/Header'
import AdsBanner from '../../components/Banner/AdsBanner'

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
      <Header/>
      <AdsBanner/>
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
    marginRight: 20,
    height: "100%",
  }
  })
  