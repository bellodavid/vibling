import { View, Text, Image, StyleSheet } from 'react-native'

import React from 'react'
import { pallets } from 'constant';

interface Props {
  backgroundColor: string;
}
const WelcomCard = () => {
  const myImage = require('../../assets/images/onboard/onboard1.png')
  return (
    <View>
       <Image style={styles.image} source={myImage}/>
      <View style={styles.modal}>
        <Text style={{fontSize: 20}}>here</Text>
      </View>
    </View>
  )
}

export default WelcomCard;

const styles = StyleSheet.create({
  modal:{
    marginTop: "90%",
    position: "absolute",
    height: "60%",
    borderRadius: 50,
    width: "100%",
    backgroundColor: pallets.backgroundDarker,
    border: 0,
  },
 image:{
  
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  
 }
});