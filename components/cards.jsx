import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

const Cards = ({ item }) => {
  return (
    <Pressable onPress={{}} style={styles.card_container}>
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
    backgroundColor: "pink",
    marginBottom: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    padding: 10,
  },
  card_text: {
    fontWeight: "bold",
  },
  card_image: {
    height: 200,
    width: "100%",
    contentFit: "cover",
  },
});
