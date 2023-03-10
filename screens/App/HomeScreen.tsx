import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { pallets } from '../../constant'
import Header from '../../components/Header/Header'
import AdsBanner from '../../components/Banner/AdsBanner'
import NavBotton from '../../components/Home/NavBotton'
import DetailCard from '../../components/Home/DetailCard'
import Category from '../../components/Category/Category'

let ScreenHeight = Dimensions.get("window").height;
const HomeScreen = () => {
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
      <Header/>
      <AdsBanner/>
      <NavBotton/>
      <DetailCard/>
      <Category/>
      </View>
  </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor: pallets.backgroundSecondary,
    height: ScreenHeight
  },
  innerContainer: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
 
  }
  })
  