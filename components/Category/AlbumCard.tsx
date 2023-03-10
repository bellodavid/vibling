import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card, Image } from '@rneui/themed'
import Logo from './Logo'

type AlbumCardProps = {
  title: string;
  description: string;
  imgUrl: string;
}

const AlbumCard = ({title, description, imgUrl} : AlbumCardProps) => {
  return (
   <TouchableOpacity>
    <View style={{display:"flex", marginLeft: 0, marginHorizontal: 10, flexDirection: "column", justifyContent: "space-between", marginTop: 20}}>
      <Card containerStyle={styles.container}>
        <Image containerStyle={{
          width: 149,
          height: 140,
        }} source={{uri: `${imgUrl}`}}/>
      </Card>
      <Logo/>
     <View style={{marginTop: 5}}>
      <Text style={{color: "white", fontWeight: "bold"}}>{title}</Text>
      <Text style={{color: "white"}}>{description}</Text>
      </View>
    </View>
    </TouchableOpacity>
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