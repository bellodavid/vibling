import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const BackgroundImage = () => {
  return (
    <View>
     <Image source={require('../../assets/images/onboard/onboard1.png')} />
    </View>
  )
}

export default BackgroundImage

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 100,
    },
})