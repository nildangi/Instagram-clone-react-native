import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../screen/auth/Login'
import Dashboard from '../screen/dashboard/Dashboard'
import InputBox from '../components/InputBox'
import Header from '../components/Header'
import BottomNavigation from './BottomNavigation'

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Header' component={Header} />
        <Stack.Screen name='Home' component={Dashboard} />
        <Stack.Screen name='Dashboard' component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation