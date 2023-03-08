import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Input } from '@rneui/themed';
import { pallets } from '../../constant';

interface InputFieldProps {
  label: string;
  phone : string;
  placeholder: string;
  icon: string;
  handler: string;
  setHandler: (text: string) => void;
}

const InputField = ({label, handler, setHandler, phone, icon, placeholder}: InputFieldProps) => {
  
  return (
    <View>
      {/* <Text style={styles.label}>Full Name</Text> */}
      <Input
      inputStyle={{color: 'white', paddingLeft: 10}}
      inputContainerStyle={{borderWidth: 0, borderBottomWidth:0, paddingLeft:10, 
      padding:5, backgroundColor: pallets.input, borderColor: 'white', borderRadius: 10}}
      containerStyle={{ margin: 0 }}
      placeholder= {placeholder}
      leftIcon={{ type: 'antdesign', name: `${icon}`, color: pallets.darkGrey}}
      value={handler}
      onChangeText={setHandler}  
      label={label}
      labelStyle={{color: pallets.grey, paddingBottom: 10}}
      />
      
    </View>
  )
}

export default InputField;
