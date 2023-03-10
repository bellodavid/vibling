import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import AlbumCard from './AlbumCard'
import { pallets } from '../../constant'

type CategoryProps = {
  title: string;
}
const Category = ({title}: CategoryProps) => {
  return (
    <View  style={{marginTop: 20}}>
      <View style={{display: "flex", flexDirection:"row", width: "100%", justifyContent: "space-between"}}>
        <Text style={{color: pallets.white, fontWeight: "bold", fontSize: 20}}>{title}</Text>
        <Text style={{color: pallets.primary}}>See All</Text>
      </View>
    <ScrollView style={styles.container} showsHorizontalScrollIndicator={false} horizontal={true}>
      <AlbumCard imgUrl='https://fakazahiphop.com/wp-content/uploads/2019/04/Dj-Skhu-Magnetic-Points-%E2%80%93-Africa-1200x1285.jpg'
      title="DJ kycc" description='Joeboy, Fireboy, Burna boy'/>
      <AlbumCard imgUrl='https://static-cse.canva.com/blob/1021238/1600w-1Nr6gsUndKw.jpg'
      title="DJ kycc" description='Joeboy, Fireboy, Burna boy'/>
      <AlbumCard imgUrl='https://freesidemedia.com/wp-content/uploads/2018/12/BattleSongs-AlbumCover-FreesideMedia-featured.jpg'
      title="DJ kycc" description='Joeboy, Fireboy, Burna boy'/>
      </ScrollView>
      </View>
  
  )
}

export default Category
const styles = StyleSheet.create({
container: {
 flex: 1,
}
})