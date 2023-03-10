import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { pallets } from '../../constant';
import { Icon } from '@rneui/themed';

interface infoProps {
  step: string;
  title: string;
  description: string;
}
const Information = ({title, step, description}: infoProps) => {
  return (
    <View>
     
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.description}>{description}
      </Text>
      <View style={{}}>
        <Text style={{alignSelf: "flex-end",
      color: "white", marginRight: 20,
      marginBottom: 20, marginTop: 20}}>{step}</Text>
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