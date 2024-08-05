import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSmoothieItems } from "../../../zustand/fruitcart";
import { hp, wp } from "../../../constants/responsive";
import { ScrollView } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useEffect } from "react";
import { getSmoothieRecipe } from "../../../api/globalapi";
import { useState } from "react";
import Markdown from "react-native-markdown-display";

const Smoothie = () => {
  const { top } = useSafeAreaInsets();
  const [recipe, setRecipe] = useState("");
  const paddingTop = top > 0 ? top + 10 : top + 30;
  const { smoothieItems, removeFruit, clearSmoothieItems } = useSmoothieItems(
    (state) => ({
      smoothieItems: state.smoothieItems,
      addFruit: state.addFruit,
      removeFruit: state.removeFruit,
      clearSmoothieItems: state.clearSmoothieItems,
    })
  );

  // Smoothie Call
  return (
    <View style={[styles.smoothie_page, { paddingTop }]}>
        <View style={styles.smoothie_header}>
          <Text style={styles.smoothie_title}>Smoothie Recipe</Text>
          <Pressable
            onPress={() => {
              clearSmoothieItems(), setRecipe("");
            }}
            style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
          >
            <Text style={{ fontWeight: "bold" }}>Clear All</Text>
            <FontAwesome name="remove" size={30} color="red" />
          </Pressable>
        </View>
        <View style={{ flex: 0.1, flexDirection: "row", alignItems: "center" }}>
          <ScrollView
            horizontal
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {smoothieItems.length ? (
              smoothieItems.map((fruit) => (
                <View key={fruit.id} style={styles.recipe_item}>
                  <Text style={styles.smoothieItemText}>{fruit.name}</Text>
                  <Pressable onPress={() => removeFruit(fruit.id)}>
                    <MaterialIcons
                      name="delete-outline"
                      size={20}
                      color="red"
                    />
                  </Pressable>
                </View>
              ))
            ) : (
              <View
                style={{ flexDirection: "row", textAlign: "center", flex: 1 }}
              >
                <Text style={styles.smoothieItemText}>
                  Jar looks empty 🥤 Add Items
                </Text>
              </View>
            )}
          </ScrollView>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Pressable
            style={{
              backgroundColor: "black",
              borderRadius: 15,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
            onPress={() =>
              getSmoothieRecipe(smoothieItems)
                .then((recipe) => setRecipe(recipe))
                .catch((error) => console.error("Error:", error))
            }
          >
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "white", }}>
              Generate Smoothie
            </Text>
          </Pressable>
        </View>
        <View style={{flex: 1, marginBottom: hp(10)}}>
          <ScrollView>
          <Markdown style={{body:{fontSize: 15, color: '#411020'}}} mergeStyle='false'>{recipe}</Markdown>
          </ScrollView>
        </View>
    </View>
  );
};

export default Smoothie;

const styles = StyleSheet.create({
  smoothie_page: { flex: 1, paddingHorizontal: wp(2) },
  smoothie_title: {
    textAlign: "left",
    fontSize: hp(3),
    fontWeight: "900",
  },
  smoothie_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  recipe_item: {
    backgroundColor: "lightgrey",
    flexDirection: "row",
    borderWidth: 3,
    borderColor: "black",
    marginBottom: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: hp(5),
    marginRight: 10,
  },
  smoothieItemText: {
    fontSize: hp(2),
    fontWeight: "bold",
  },
});