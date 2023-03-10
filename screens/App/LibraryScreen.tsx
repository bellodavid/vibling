import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { pallets } from '../../constant'

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
  backgroundColor: pallets.backgroundSecondary
}
})

