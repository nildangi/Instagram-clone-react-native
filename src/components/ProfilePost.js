import { View, Text, Image, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const ProfilePost = () => {
    return (
        <ScrollView>
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', paddingTop: 15 }}>
                <Image style={styles.item} source={require('../assets/data/elonpost.png')} />
                <Image style={styles.item} source={require('../assets/data/elondp.png')} />
                <Image style={styles.item} source={require('../assets/data/elonstory.png')} />
                <Image style={styles.item} source={require('../assets/data/elonpost.png')} />
        
            </View>
        </ScrollView >
    )
}
const styles = StyleSheet.create({
    item: {
        fontSize: 25,
        backgroundColor: 'green',
        color: 'black',
        margin: 0,
        padding: 0,
        width: 135,
        height: 135,
        textAlign: 'center',
        textAlignVertical: 'center',
    }
})


export default ProfilePost