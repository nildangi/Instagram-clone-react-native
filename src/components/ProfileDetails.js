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
        <View style={styles.viewStyle}>
          <Text style={styles.followersstyle}>304</Text>
          <Text style={styles.follonum}>Post</Text>
        </View>
        <View style={styles.viewStyle}>
          <Text style={styles.followersstyle}>454k</Text>
          <Text style={styles.follonum}>Followers</Text>
        </View>
        <View style={styles.viewStyle}>
          <Text style={styles.followersstyle}>4</Text>
          <Text style={styles.follonum}>Following</Text>
        </View>
      </View>
      <Text style={styles.textStyle}>elon musk</Text>
      <Text style={styles.bioStyle}>Space-X CEO & CT</Text>
      <Text style={styles.bioStyle}>Tesla CEO</Text>
      <Text style={styles.textStyle}>See Translation</Text>
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

  twobtn: {
    flexDirection:'row',
    marginTop:15,
    justifyContent:'space-between',
    marginHorizontal:10,

  },
  custembtn: {
    backgroundColor:'E1E1E1',
    width:150,
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:5,
    textAlign:'center',
    color:'black'

  },
  btnstyle: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
  },
  viewStyle: {
    width: 75,
    alignItems: 'center'

  },
  followersstyle: {
    fontSize: 24,
    fontWeight: '400',
    color: 'black'
  },
  follonum: {
    fontWeight: '400',
    color: 'black'
  },
  textStyle: {
    marginLeft: 5,
    fontSize: 18,
    fontWeight: '500',
    color: 'black'
  },
  bioStyle: {
    marginLeft: 5,
    fontSize: 12,
    fontWeight: '400',
    color: 'black'
  },
})
export default ProfileDetails