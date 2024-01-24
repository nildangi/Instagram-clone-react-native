//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import InputBox from '../../components/InputBox';
import { useNavigation } from '@react-navigation/native';

// create a component
const Login = () => {
    const navigation = useNavigation();

    const handleLogin = (values) => {
        //console.log(values);
        navigation.navigate('Dashboard');
    };

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../assets/Instagram.png')} />
            </View>
            <InputBox />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <View>
                <TouchableOpacity>
                    <Text>
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
    button: {
        backgroundColor: '#405DE6',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        width:310,
        textAlign: 'center',
    },
});

// make this component available to the app
export default Login;
