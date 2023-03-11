import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { pallets } from '../../constant'
import Header from '../../components/Header/Header'
import AdsBanner from '../../components/Banner/AdsBanner'
import NavBotton from '../../components/Home/NavBotton'
import DetailCard from '../../components/Home/DetailCard'
import Category from '../../components/Category/Category'
import { LinearGradient } from 'expo-linear-gradient';

let ScreenHeight = Dimensions.get("window").height;
const HomeScreen = () => {
  <LinearGradient colors={['rgb(27,153,139)']}
  style={styles.container}/>
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
      <Header/>
      <AdsBanner/>
      <NavBotton/>
      <DetailCard/>
      <Category title="DJ mix (Trending)"/>
      <Category title="Afrosounds"/>
      <Category title="Hip hop"/>
      <Category title="Hip hop"/>
      <Category title="Afrosounds"/>
      {/* <View  style={{height: 80}}></View> */}
      </View>
  </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor: pallets.backgroundSecondary,
    height: ScreenHeight,
  
  },
  innerContainer: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
 
  }
  })
  