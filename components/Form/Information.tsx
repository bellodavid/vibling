import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { pallets } from '../../constant';
import { Icon } from '@rneui/themed';

const Information = () => {
  return (
    <View>
     
      <Text style={styles.text}>Sign Up</Text>
      <Text style={styles.description}>Welcome to VibingLIVE, which will make accompany your 
        mood for mix. Let's create account now
      </Text>
      <View style={{}}>
        <Text style={{alignSelf: "flex-end",
      color: "white", marginRight: 20,
      marginBottom: 20, marginTop: 20}}>Step 1 of 2</Text>
      </View>
    </View>
  )
}

export default Information;

const styles = StyleSheet.create({
text:{
  color: 'white',
  fontWeight: "bold",
  fontSize: 25,
  paddingLeft: 5
},
description: {
  color: pallets.darkGrey,
  fontSize: 15,
  fontWeight: 350,
  marginTop: 20,
  marginLeft: 8,
  marginBottom: 20,
  lineHeight: 20,
}
})