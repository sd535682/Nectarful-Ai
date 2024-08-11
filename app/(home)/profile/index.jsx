import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { CaptionText } from '../../../constants/uielements'

const Profile = () => {
  return (
    <View style={styles.profile_page}>
      {/* <View style={styles.profile_area}>
        <Image source={`https://xsgames.co/randomusers/avatar.php?g=female`} style={styles.profile_pic}/>
        <Text style={styles.profile_title}>Chutki</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.profile_title}>Email: 123@example.com</Text>
        <Text style={styles.profile_title}>Phone: 1234567890</Text>
      </View>
      <View style={styles.userInfo}>
        <Pressable>
            <Text style={styles.profile_title}>Logout</Text>
        </Pressable>
        <Pressable>
            <Text style={styles.profile_title}>Delete Account</Text>
        </Pressable>
      </View> */}
      <CaptionText>Updating Soon</CaptionText>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    profile_page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // profile_area: {
    //     flex: 0.4,
    //     justifyContent: 'space-evenly',
    //     alignItems: 'center',
    //     backgroundColor: 'plum',
    // },
    // profile_pic: {
    //     width: 150,
    //     height: 150,
    //     borderRadius: 100
    // },
    // profile_title: {
    //     fontSize: 20,
    //     fontWeight: 'bold'
    // },
    // userInfo: {
    //     flex: 0.2,
    //     flexDirection: 'column',
    //     padding: 20,
    //     borderRadius: 10,
    //     justifyContent: 'space-evenly',
    //     alignItems: 'center',
    // }
})