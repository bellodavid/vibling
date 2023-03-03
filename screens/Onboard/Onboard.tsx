import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BackgroundImage from '../../components/welcome/WelcomCard'
import WelcomCard from '../../components/welcome/WelcomCard'

const Onboard = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleNext = () => {  
    setCurrentSlide(currentSlide < 3 ? currentSlide + 1 : currentSlide);

  }

  const handlePrev = () => {
  setCurrentSlide(currentSlide > 1 ? currentSlide - 1 : currentSlide);
  }
  return (
    <View >
      {currentSlide === 1 && <WelcomCard number="1 of 3"/>}
      {currentSlide === 1 && <WelcomCard number="2 of 3"/>}
      {currentSlide === 1 && <WelcomCard number="3 of 3"/>}

    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    
    <TouchableOpacity onPress={handlePrev}>
          <Text>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext}>
          <Text>Next</Text>
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default Onboard