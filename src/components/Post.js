import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { UserData } from '../utils/UserData'


const Post = () => {
    return (
        <View style={{ marginTop: 8 }}>
            {UserData.map(item => {
                return (
                    <View style={{ marginTop: 10 }}>
                        <View style={styles.poststyle}>
                            <Image style={{ height: 30, width: 30, borderRadius: 15 }}
                                source={item.profile} />
                            <Text style={styles.textstyle}>{item.name}</Text>
                        </View>
                        <View>
                            <Image style={{ height: 400, width: '100%' }} source={item.post.image} />
                        </View>
                        <View style={{ flexDirection: 'row', margin: 5 }}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.bottomicon}
                                    source={require('../assets/Like.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    style={styles.bottomicon}
                                    source={require('../assets/Comment.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    style={styles.bottomicon}
                                    source={require('../assets/Messanger.png')} />
                            </TouchableOpacity>

                            <View style={{ marginLeft: 270 }}>
                                <TouchableOpacity>
                                    <Image
                                        style={{ height: 25, width: 30, tintColor: "#4C4C4C" }}
                                        source={require('../assets/bookmark.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={{ marginLeft: 13, marginTop: 5, fontSize: 16, fontWeight: '600', color: 'black' }}>{item.post.like} likes</Text>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 13, alignItems: 'center' }}>
                            <Text style={{ color: 'black', fontSize: 16, fontWeight: '600' }}>
                                {item.name}{' '}</Text>
                            <Text style={{ color: 'black' }}>{item.post.caption}</Text>
                        </View>
                    </View>
                );
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    bottomicon: {
        justifyContent: 'center',
        margin: 5,
    },
    poststyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 8
    },
    textstyle: {
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: '600',
        color: 'black'
    }

});

export default Post