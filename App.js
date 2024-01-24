//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputBox from './src/components/InputBox';
import CustomButton from './src/components/CustomButton';
import Login from './src/screen/auth/Login';
import StackNavigation from './src/navigtor/StackNavigation';

// create a component
const App = () => {
  return (
    <View style={{flex:1}}>
      <StackNavigation />
    </View>
  );
};



//make this component available to the app
export default App;
