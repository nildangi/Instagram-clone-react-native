import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { UserData } from '../utils/UserData';

const Stories = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', marginTop: 10 }}>
      {UserData.map((item) => {
        return (
          <View style={{ marginLeft: 10 }} key={item.id}>
            <TouchableWithoutFeedback>
              <LinearGradient
                colors={['#bc2a8d', '#e95950', '#fccc63']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={{ borderWidth: -1.5, borderRadius: 50, padding: 2, alignItems: 'center', justifyContent: 'center' }}
              >
                <Image
                  style={{ height: 70, width: 70, borderRadius: 50 }}
                  source={item.story.image}
                />
              </LinearGradient>
            </TouchableWithoutFeedback>

            <Text style={{ textAlign: 'center', marginTop: 5 }}>{item.username}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Stories;

