import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { hp, wp } from "@/constants/responsive";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";

const FruitDetails = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : top + 30;

  return (
    <View style={[styles.details_container, { paddingTop }]}>
      <View style={styles.header}>
        <Pressable style={styles.cart} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={hp(3)} color="grey" />
        </Pressable>
        <Pressable style={styles.cart}>
          <Feather name="shopping-bag" size={hp(3)} color="grey" />
        </Pressable>
      </View>
      <View style={styles.image_container}>
        <Image
          source={require("../../../assets/images/blackberry.png")}
          contentFit="cover"
          style={styles.details_image}
        />
      </View>
      <View>
        <Text>{params.name}</Text>
      </View>
      <StatusBar style="dark" />
    </View>
  );
};

export default FruitDetails;

const styles = StyleSheet.create({
  details_container: {
    flex: 1,
    paddingHorizontal: wp(2),
    paddingVertical: hp(2),
  },
  image_container: {
    flex: 0.5,
  },
  details_image: {
    height: hp(40),
    width: wp(100),
    resizeMode: "contain",
    marginBottom: hp(2),
    alignSelf: "center",
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(2),
  },
  cart: {
    borderRadius: 15,
    padding: hp(1),
    borderColor: "lightgrey",
    borderWidth: 2,
  },
});

//   const { top } = useSafeAreaInsets();
//   const paddingTop = top > 0 ? top + 10 : top + 30;
