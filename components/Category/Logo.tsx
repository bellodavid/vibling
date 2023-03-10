import { View, Text, Image } from 'react-native'
import React from 'react'

const Logo = () => {
    const myImage = require('../../assets/icons/logo.png')
  return (
    <View>
      <Image style={{width: 80, height: 80}}source={myImage}/>
    </View>
  )
}

export default Logo