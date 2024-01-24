import { View, Text, Image } from 'react-native'
import React, { Profiler } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from '../screen/dashboard/Dashboard'
import Search from '../screen/dashboard/Search'
import AddPost from '../screen/dashboard/AddPost'
import Reel from '../screen/dashboard/Reel'
import UserProfile from '../screen/dashboard/UserProfile'


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
            <Tab.Screen
                name='Home'
                component={Dashboard}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={{ height: 24, width: 24 }}
                            source={
                                focused
                                    ? require('../assets/footer/sHomeButton.png')
                                    : require('../assets/footer/homeButton.png')
                            } />
                    ),
                }} />
            <Tab.Screen
                name='Search'
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={{ height: 24, width: 24 }}
                            source={
                                focused
                                    ? require('../assets/footer/sSearch.png')
                                    : require('../assets/footer/search.png')
                            } />
                    ),
                }} />
            <Tab.Screen
                name='AddPost'
                component={AddPost}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={{ height: 24, width: 24 }}
                            source={
                                focused
                                    ? require('../assets/footer/addPost1.png')
                                    : require('../assets/footer/addPost2.png')
                            } />
                    ),
                }} />
            <Tab.Screen
                name='Reels'
                component={Reel}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={{ height: 24, width: 24, tintColor: 'black' }}
                            source={
                                focused
                                    ? require('../assets/footer/reel1.png')
                                    : require('../assets/footer/reel2.png')
                            } />
                    ),
                }} />
            <Tab.Screen
                name='UserProfile'
                component={UserProfile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={{ height: 24, width: 24 }}
                            source={
                                focused
                                    ? require('../assets/footer/user.png')
                                    : require('../assets/footer/user2.png')
                            } />
                    ),
                }} />
        </Tab.Navigator>
    );
};

export default BottomNavigation;