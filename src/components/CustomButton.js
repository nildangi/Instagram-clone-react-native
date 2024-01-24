//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppColor from '../utils/AppColor';
import StackNavigation from '../navigtor/StackNavigation';

// create a component
const CustomButton = ({buttonTitle,onPress,navigation}) => {
    return (
        <View>
            <TouchableOpacity  >
                <View style={styles.container}>
                    <Text style={styles.btnStyle}
                    >Login</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width:350,
        backgroundColor:AppColor.BUTTON,
        borderRadius:5,
    },
    btnStyle:{
        color:'white',
        paddingVertical:12,
        fontSize:18,
        textAlign:'center'
    }
});

export default CustomButton;
