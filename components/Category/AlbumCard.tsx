import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Card, Image } from '@rneui/themed'
import Logo from './Logo'

const AlbumCard = () => {
  return (
   
    <View style={{display:"flex", flexDirection: "column", marginTop: 20}}>
      <Card containerStyle={styles.container}>
        <Image containerStyle={{
          width: 149,
          height: 140,
        }} source={{uri: 'https://fakazahiphop.com/wp-content/uploads/2019/04/Dj-Skhu-Magnetic-Points-%E2%80%93-Africa-1200x1285.jpg'}}/>
      </Card>
      <Logo/>
     <View style={{marginTop: 5}}>
      <Text style={{color: "white", fontWeight: "bold"}}>DJ kycc</Text>
      <Text style={{color: "white"}}>Burna boy, Joeboy, Fireboy</Text>
      </View>
    </View>
  )
}

export default AlbumCard;
const styles = StyleSheet.create({
container: {
  borderWidth: 0,
  padding: 0,
  margin: 0,
  width: 149,
  height: 140
}
})