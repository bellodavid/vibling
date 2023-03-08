import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import BackgroundImage from '../../components/welcome/WelcomCard'
import WelcomCard from '../../components/welcome/WelcomCard'
import { useNavigation } from '@react-navigation/native'
import { pallets } from '../../constant'
import { Icon } from '@rneui/themed'


interface slideProps{
  SignUp: { name: undefined};
}
const Onboard = () => {
  const navigation = useNavigation();

  const [currentSlide, setCurrentSlide] = useState(1);

  const handleNext = () => {  
    if(currentSlide === 3){
      navigation.navigate<slideProps>("SignUp")
    }else {
      setCurrentSlide(currentSlide < 3 ? currentSlide + 1 : currentSlide);
    }

  }

  const handlePrev = () => {
    if(currentSlide === 1){
      navigation.navigate("SignUp")
    }else {
      setCurrentSlide(currentSlide > 1 ? currentSlide - 1 : currentSlide);
    }

  
  }

  const handleSlide =() => {
   
  }
  return (
    <View >
      {currentSlide === 1 && <WelcomCard value="1 of 3" title="Welcome to" spantitle="VibingLive"
      description="We are the second to the most popular place to listen to music in the world"/>}
      {currentSlide === 2 && <WelcomCard value="2 of 3" title="Enjoy your music" 
      description="Manage your playlist of dope Dj mixs, Audio books and best of Gosple musics to your liking"/>}
      {currentSlide === 3 && <WelcomCard value="3 of 3" title="Unlimited Downloads" 
      description="Manage your playlist of dope Dj mixs, Audio books and best of Gosple musics to your liking"/>}

      <View style={styles.modal}>
    
      <TouchableOpacity onPress={handlePrev}>
          <Text style={styles.text}>{currentSlide===1? "Skip" : "Previous"}</Text>
        </TouchableOpacity>
       
        <View style={[{width: currentSlide === 1? "70%" : "50%"}]}/>
        <TouchableOpacity onPress={handleNext}>
          <Text style={{fontSize: 20, color: currentSlide === 3? "#FF3D00" : "white"}}>
            {currentSlide === 3? "Get started"  : "Next"}</Text>
        </TouchableOpacity>

        
        
    </View>
    </View>
  )
}

export default Onboard

const styles = StyleSheet.create({
  modal:{
    display: 'flex',
    flexDirection: 'row',
    JustifyContent: 'space-around',
    marginTop: "160%",
    marginLeft: 20,
    marginRight: 30,
    paddingRight: 50,
    position: "absolute",
    height: "60%",
    width: "100%",

  },
  text: {
    fontWeight: "400",
    fontSize: 20,
    color: "white",
    
  }
})