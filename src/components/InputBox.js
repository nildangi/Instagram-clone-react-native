//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// create a component
const InputBox = () => {
    return (
        <View style={styles.maincontainer}>
            <TextInput style={styles.textInput} 
            placeholder='Username'/>
            <TextInput style={styles.textInput} 
            placeholder='Password'/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    maincontainer: {
        // height:68,
        alignItems:'center',
        justifyContent:'space-between',
        margin:10
        
    },
    textInput:{
        borderWidth:1,
        width:350,
        borderColor:'grey',
        borderRadius:5,
        margin:5


    }
});

//make this component available to the app
export default InputBox;
