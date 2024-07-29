import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { hp, wp } from "../constants/responsive";
import { useRouter } from "expo-router";

const Cards = ({ item, index, column }) => {
  const router = useRouter();
  const isLast = () => {
    return (index + 1) % column === 0;
  };

  const data = {
    name: item.name,
    genus: item.genus,
    family: item.family,
    order: item.order,
    calories: item.nutritions.calories,
    carbohydrates: item.nutritions.carbohydrates,
    protein: item.nutritions.protein,
    fat: item.nutritions.fat,
    sugar: item.nutritions.sugar,
  };

  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: `/home/details/${item}`,
          params: {
            item: JSON.stringify(data),
          },
        })
      }
      style={[styles.card_container, !isLast() && styles.card_spacing]}
    >
      <Text style={styles.card_text}>{item.name}</Text>
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

//

//   name: item.name,
//   genus: item.genus,
//   family: item.family,
//   order: item.order,
//   calories: item.nutritions.calories,
//   carbohydrates: item.nutritions.carbohydrates,
//   protein: item.nutritions.protein,
//   fat: item.nutritions.fat,
//   sugar: item.nutritions.sugar,
// },
