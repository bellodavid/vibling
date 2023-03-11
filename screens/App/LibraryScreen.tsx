import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { pallets } from '../../constant'

let ScreenHeight = Dimensions.get("window").height;
const LibraryScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>LibraryScreen</Text>
    </ScrollView>
  )
}

export default LibraryScreen;

const styles = StyleSheet.create({
container:{
  backgroundColor: pallets.backgroundSecondary,
  height: ScreenHeight
}
})

