import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { borderRadius, hp, wp } from "../constants/responsive";
import { useRouter } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useSmoothieItems } from "../zustand/fruitcart";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  UIColors,
  Subheading,
  BodyText,
  CaptionText,
} from "@/constants/uielements";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";

const Cards = ({ item, index, column }) => {
  const router = useRouter();
  // Check if the card is at the end of a row to add spacing.
  const isLast = () => {
    return (index + 1) % column === 0;
  };

  // Zustand hook to add the selected fruit to the cart.
  const addFruit = useSmoothieItems((state) => state.addFruit);

  // Card Elements
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
    imageurl: item.imageurl,
  };

  return (
    // Path to DynamicRoute to Details page when the card is pressed.
    <LinearGradient
      // index == 1 to give top padding to the second card to the list for proper Pinterest styled Masonry effect.
      colors={UIColors.gradient3}
      style={[
        styles.gradientContainer,
        !isLast() && styles.card_spacing,
        index == 1 && styles.card_top,
      ]}
    >
      <Pressable
        style={[styles.card_container]}
        onPress={() =>
          router.push({
            pathname: `/details/${item}`,
            params: {
              item: JSON.stringify(data),
            },
          })
        }
      >
        <MaterialCommunityIcons
          name="arrow-expand-all"
          size={20}
          style={styles.expandICon}
        />
        <Image source={`${data.imageurl}`} style={styles.card_image} />
        <Subheading style={{ color: UIColors.elementDark }}>
          {data.name}
        </Subheading>
        <BodyText style={{ color: UIColors.semiBlack, fontSize: 12 }}>
          Sugar : {data.sugar} g/s
        </BodyText>
        <Pressable
          style={styles.addIngredients}
          onPress={() => {
            addFruit(item),
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          }}
        >
          <CaptionText style={{ color: UIColors.semiWhite, fontSize: 14 }}>
            Add Item
          </CaptionText>
          <FontAwesome6 name="wine-glass-empty" size={14} color="white" />
        </Pressable>
      </Pressable>
    </LinearGradient>
  );
};

export default Cards;

const styles = StyleSheet.create({
  gradientContainer: {
    borderRadius: borderRadius,
    marginBottom: 10,
  },
  card_container: {
    justifyContent: "center",
    alignItems: "center",
    padding: wp(5),
  },
  expandICon: {
    position: "absolute",
    top: 10,
    right: 10,
    color: "#f19ca2",
  },
  card_image: {
    height: hp(20),
    width: "100%",
    contentFit: "cover",
  },
  card_spacing: {
    marginRight: wp(2),
  },
  card_top: {
    marginTop: wp(10),
  },
  addIngredients: {
    flex: 1,
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: UIColors.elementDark,
    marginTop: 10,
    paddingVertical: wp(2),
    paddingHorizontal: wp(5),
    borderRadius: borderRadius,
  },
});
