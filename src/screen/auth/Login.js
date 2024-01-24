//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Button } from 'react-native';
import InputBox from '../../components/InputBox';
import { useNavigation } from '@react-navigation/native';


// create a component
const Login = () => {
    const navigation = useNavigation();
    const handleLogin = (values) => {
        //console.log(values);
        navigation.navigate('Dashboard')

    };

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../assets/Instagram.png')} />
            </View>
            <InputBox />
            <View>
                <Button style={styles.btnstyle} onPress={() => navigation.navigate('Dashboard')} title='Login' />
            </View>
            <View>
                <TouchableOpacity>
                    <Text >
                        Signup
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff',

    },

});

//make this component available to the app
export default Login;
