import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../screens/components/ImageDetails.js'


const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" imageSource={require('/Users/hudson/rn-starter/assets/forest.jpg')} imageScore={69}/>
      <ImageDetail title="Beach" imageSource={require('/Users/hudson/rn-starter/assets/beach.jpg')} imageScore={12}/>
      <ImageDetail title="Mountain" imageSource={require('/Users/hudson/rn-starter/assets/mountain.jpg')} imageScore={8}/>
    </View>
  );

};

const styles = StyleSheet.create({});

export default ImageScreen;
