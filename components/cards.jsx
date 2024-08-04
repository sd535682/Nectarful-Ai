import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { hp, wp } from "../constants/responsive";
import { useRouter } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useSmoothieItems } from "../zustand/fruitcart";

const Cards = ({ item, index, column }) => {
  const router = useRouter();
  const isLast = () => {
    return (index + 1) % column === 0;
  };

  const addFruit = useSmoothieItems(state => state.addFruit);

  const data = {
    name: item.name,
    genus: item.genus,
    family: item.family,
    order: item.order,
    calories: item.nutritions_calories,
    carbohydrates: item.nutritions_carbohydrates,
    protein: item.nutritions_protein,
    fat: item.nutritions_fat,
    sugar: item.nutritions_sugar,
    imageurl: item.imageurl
  };

  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: `/details/${item}`,
          params: {
            item: JSON.stringify(data),
          },
        })
      }
      style={[styles.card_container, !isLast() && styles.card_spacing]}
    >
      <Text style={styles.card_text}>{item.name}</Text>
      <Image
        source={`${item.imageurl}`}
        style={styles.card_image}
      />
      <Pressable style={styles.addIngredients} onPress={()=> addFruit(item) }><MaterialIcons name="add" size={20} color="#78630f" /></Pressable>
    </Pressable>
  );
};

export default Cards;

const styles = StyleSheet.create({
  card_container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fde68a",
    marginBottom: wp(2),
    borderRadius: wp(4),
    padding: 10,
    borderColor: '#111827',
    borderWidth: 3,
  },
  card_text: {
    fontWeight: "bold",
    fontSize: hp(2),
    color: "#111827",
  },
  card_image: {
    height: hp(20),
    width: "100%",
    contentFit: "cover",
  },
  card_spacing: {
    marginRight: wp(2),
  },
  addIngredients: {
    backgroundColor: '#d9af06',
    borderColor: '#78630f',
    borderWidth: 2,
    padding: 5,
    borderRadius: wp(3),
    position: 'absolute',
    bottom: 2,
    right: 2,
  }
});