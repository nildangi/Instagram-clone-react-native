import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const ProfileDetails = () => {
  return (
    <View style={{ paddingHorizontal: 15 }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Image
          style={{ marginLeft: 5, borderRadius: 40, height: 70, width: 70 }}
          source={require('../assets/data/elonstory.png')} />
        <View style={{ width: 75, alignItems: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: '400', color: 'black' }}>304</Text>
          <Text>Post</Text>
        </View>
        <View style={{ width: 75, alignItems: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: '400', color: 'black' }}>454k</Text>
          <Text>Followers</Text>
        </View>
        <View style={{ width: 75, alignItems: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: '400', color: 'black' }}>4</Text>
          <Text>Following</Text>
        </View>
      </View>
      <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: '500',color:'black' }}>
        elon ,
        space-X</Text>
       <View style={styles.twobtn}>
       <TouchableOpacity style={styles.custembtn}>
          <Text style={styles.btnstyle}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.custembtn}>
          <Text style={styles.btnstyle}>share Profile</Text>
        </TouchableOpacity>
       </View>
      

    </View>
  )
}


const styles = StyleSheet.create({

  twobtn:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:'100%'

  },
  custembtn: {
    elevation: 8,
    backgroundColor: "#E9E9E9",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    
  },
  btnstyle: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
  }
})
export default ProfileDetails