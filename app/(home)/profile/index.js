import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { CaptionText } from '../../../constants/uielements'

const Profile = () => {
  return (
    <View style={styles.profile_page}>
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
})