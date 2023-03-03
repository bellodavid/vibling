import { View, Text, Image, StyleSheet } from 'react-native'

import React from 'react'

interface Props{
  number: string;
}

const WelcomCard = ({number}) => {
  const myImage = require('../../assets/images/onboard/onboard1.png')
  return (
    <View>
       <Image style={styles.image} source={myImage}/>
      <View style={styles.modal}>
      <View style={styles.textContainer}>
      <Text style={styles.text}>{number}</Text>
      </View>

      <View style={styles.textContainer}>
      <Text style={[styles.text, {fontSize: 25, fontWeight: 400}]}>Welcome to 
       <Text style={{color: '#FF3D00' }}> VibingLive</Text></Text>
      </View>

      <View style={[styles.textContainer, { marginTop: 20 }]}>
      <Text style={{fontSize: 18, color: '#FFFDFD', fontWeight: 100, lineHeight: 30}}>
        We are the second to the most popular place to listen to music in the world</Text>
      </View>
        
      </View>
    </View>
  )
}

export default WelcomCard;

const styles = StyleSheet.create({
  textContainer:{
    marginTop: 30,
    marginLeft: 20,
    marginRight: 25,
  },
  modal:{
    marginTop: "90%",
    position: "absolute",
    height: "60%",
    borderRadius: 50,
    width: "100%",
    backgroundColor: "#0B121A",
    border: 0,
  },
 image:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
 },
 text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
 }
});