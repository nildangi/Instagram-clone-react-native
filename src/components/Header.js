import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (

    <View style={{paddingHorizontal:15,flexDirection:'row',alignItems:'center',justifyContent:'space-between',
    height:50,
    }}>
      <View>
        <Image 
        style={{height:28,width:110}}
        source={require('../assets/Instagram.png')} />
      </View>


      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{marginRight:15}}>
          <Image source={require('../assets/Like.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/Messanger.png')} />
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default Header