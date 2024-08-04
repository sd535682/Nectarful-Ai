import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSmoothieItems } from "../../../zustand/fruitcart";
import { hp, wp } from "../../../constants/responsive";
import { Image } from "expo-image";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Smoothie = () => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : top + 30;
  const { smoothieItems, removeFruit, clearSmoothieItems } = useSmoothieItems(
    (state) => ({
      smoothieItems: state.smoothieItems,
      addFruit: state.addFruit,
      removeFruit: state.removeFruit,
      clearSmoothieItems: state.clearSmoothieItems,
    })
  );

  // console.log(smoothieItems[fruit.name].imageurl)

  return (
    <View style={[styles.smoothie_page, { paddingTop }]}>
      <View style={styles.smoothie_header}>
        <Text style={styles.smoothie_title}>Smoothie Recipe</Text>
        <Pressable onPress={clearSmoothieItems}>
          <FontAwesome name="remove" size={30} color="red" />
        </Pressable>
      </View>
      {smoothieItems.length ? smoothieItems.map((fruit) => (
        <View key={fruit.id} style={styles.recipe_item}>
          <Image source={fruit.imageurl} style={{ height: 50, width: 50 }} />
          <Text style={styles.smoothieItemText}>{fruit.name}</Text>
          <Pressable onPress={() => removeFruit(fruit.id)}>
            <MaterialIcons name="delete-outline" size={24} color="black" />
          </Pressable>
        </View>
      )): <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text style={styles.smoothieItemText}>Jar looks empty {'\n'} 🥤 Add Items</Text></View>}
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
    flexDirection: 'row',
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
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  smoothieItemText: {
    fontSize: hp(2.5),
    fontWeight: "bold",
  },
});
