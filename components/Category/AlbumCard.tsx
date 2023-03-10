import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Card } from '@rneui/themed'

const AlbumCard = () => {
  return (
    <View>
      <Card containerStyle={styles.container}>
      

      </Card>
    </View>
  )
}

export default AlbumCard;
const styles = StyleSheet.create({
container: {
  width: 149,
  height: 140
}
})