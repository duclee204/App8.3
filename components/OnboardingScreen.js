import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import Ionicons from 'react-native-vector-icons/Ionicons';


const slides = [
  {
    key: '1',
    title: 'Welcome!',
    text: 'Scan, Pay & Enjoy!',
    image: require('../assets/wellcome.jpg'), 
  },
  {
    key: '2',
    title: 'Shop Fast',
    text: 'Scan products and shop faster than ever!',
    image: require('../assets/Mask Group.png'), 
  },
  {
    key: '3',
    title: 'Enjoy Your Shopping',
    text: 'Enjoy a seamless shopping experience!',
    image: require('../assets/buy now.jpg'), 
  },
];

const OnboardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleSwipeLeft = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const handleSwipeRight = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const handleCompleteOnboarding = () => {
    navigation.navigate('HomeTabs');
  };

  return (
<GestureRecognizer
  onSwipeLeft={handleSwipeLeft}
  onSwipeRight={handleSwipeRight}
  style={styles.container}
>
  <View style={styles.imageContainer}>
    <Image source={slides[currentSlideIndex].image} style={styles.image} />
  </View>
  <Text style={styles.title}>{slides[currentSlideIndex].title}</Text>
  <Text style={styles.text}>{slides[currentSlideIndex].text}</Text>

  {currentSlideIndex === slides.length - 1 ? (
    <TouchableOpacity style={styles.button} onPress={handleCompleteOnboarding}>
      <Ionicons name="checkmark" size={24} color="#fff" />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.button} onPress={handleSwipeLeft}>
      <Ionicons name="arrow-forward" size={24} color="#fff" />
    </TouchableOpacity>
  )}
</GestureRecognizer>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderWidth: 1, 
    borderColor: 'pink', 
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 150, 
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  button: {
    position: 'absolute',
    bottom: 30, 
    right: 20, 
    backgroundColor: 'pink',
    padding: 15,
    borderRadius: 50,
  },
});

export default OnboardingScreen;
