import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Icon, Input } from '@rneui/themed'
import { pallets } from '../../constant'

const HeaderSearch = () => {
  const [value, setValue] = useState('')
  return (
    <View>
      <Input 
      placeholder='Search'
      leftIcon={ <Icon type="antdesign" name="search1" size={24} color="white"/>} 
      inputStyle={{color: 'white', paddingLeft: 10 }}
      inputContainerStyle={styles.search}
      />
      
    </View>
  )
}

export default HeaderSearch

const styles = StyleSheet.create({
search: {
  borderRadius: 10,
  backgroundColor: pallets.backgroundDarker,
  borderBottomWidth: 0, 
  padding: 5,
  paddingLeft: 10
}
})