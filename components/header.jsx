import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { hp, wp } from "@/constants/responsive";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/images/avatar.png")}
        style={styles.avatar}
        resizeMode="contain"
      />
      <Pressable style={styles.cart}>
        <Feather name="shopping-bag" size={hp(3)} color="grey" />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(2),
  },
  avatar: {
    width: hp(5.5),
    height: hp(5.5),
    borderRadius: 100,
  },
  cart: {
    borderRadius: 15,
    padding: wp(2),
    borderColor: "lightgrey",
    borderWidth: 2,
  },
});
