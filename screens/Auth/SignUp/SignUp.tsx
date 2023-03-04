import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { pallets } from '../../../constant'
import InputField from '../../../components/Form/InputField'


const SignUp = () => {
  return (
    <View style={styles.container}>
      <InputField/>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
container: {
  height: "100%",
  width: "100%",
  backgroundColor: pallets.backgroundDarker
}
})