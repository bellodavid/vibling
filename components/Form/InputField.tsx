import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

interface InputFieldProps {
  fullName: string;
  email: string;
  phone : string;
  placeholder: string;
}

const InputField = ({fullName, email, phone, placeholder}: InputFieldProps) => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{fullName}</Text>
      <TextInput 
        style={styles.input}
        placeholder={placeholder}
        value={name}
        onChangeText={setName}
      />
    </View>
  )
}

export default InputField;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    color: 'white',
  },
  label: {
    color: 'white',
    fontWeight:"bold",
    fontSize: 15,
    marginLeft: 10
  }
});