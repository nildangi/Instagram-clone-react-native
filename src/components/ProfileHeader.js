import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'

const ProfileHeader = () => {
  return (
    <View style={{ paddingHorizontal: 15, paddingTop: 10, height: 55 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{ fontSize: 24, fontWeight: '900', color: 'black' }}>elonmusk</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <TouchableOpacity>
            <Image
              style={{ marginRight: 10, height: 25, width: 25 }}
              source={require('../assets/footer/addPost2.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ tintColor: 'black', marginTop: 5 }}
              source={require('../assets/footer/Menu.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProfileHeader