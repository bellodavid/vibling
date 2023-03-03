

import { Image } from '@rneui/themed';
import WelcomCard from './components/welcome/WelcomCard';


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboard from './screens/Onboard/Onboard';

export default function App() {
  

  return (
    <View>
      <Onboard/>
      {/* <WelcomCard number="1 of 3"/> */}
    </View>
  );
}


