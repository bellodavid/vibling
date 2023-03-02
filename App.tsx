

import { Image } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BackgroundImage from 'screens/Onboard/BackgroundImage';
import Onboard from 'screens/Onboard/Onboard';

export default function App() {
  const myImage = require('./assets/images/onboard/onboard1.png');

  return (
    <View>
      <Image style={styles.image} source={myImage}/>
    </View>
  );
}

const styles = StyleSheet.create({
 image:{
  
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  
 }
});
