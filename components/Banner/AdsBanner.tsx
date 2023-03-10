import { View, Text } from 'react-native'
import React from 'react'
import { Card, Image } from '@rneui/themed'

const AdsBanner = () => {
  return (
    <View>
      <Image containerStyle={{
        width: "100%",
        height: 132,
        borderRadius: 10,
        marginTop: 20
      }}
      source = {{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJuOeZkFNA4Ehz17o1ZjJnGRDmggvRp0D2fw&usqp=CAU'}}/>
     
    </View>
  )
}

export default AdsBanner
