import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { hp, wp } from "../constants/responsive";
import { Link } from "expo-router";

const Cards = ({ item, index, column }) => {
  const isLast = () => {
    return (index + 1) % column === 0;
  };
  return (
    <Pressable
      style={[styles.card_container, !isLast() && styles.card_spacing]}
    >
      <Text style={styles.card_text}>{item}</Text>
      <Image
        source={require("../assets/images/blackberry.png")}
        style={styles.card_image}
      />
    </Pressable>
  );
};

export default Cards;

const styles = StyleSheet.create({
  card_container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a78bfa",
    marginBottom: wp(2),
    borderRadius: wp(4),
    padding: 10,
  },
  card_text: {
    fontWeight: "bold",
    fontSize: hp(2),
  },
  card_image: {
    height: hp(25),
    width: "100%",
    contentFit: "cover",
  },
  card_spacing: {
    marginRight: wp(2),
  },
});
