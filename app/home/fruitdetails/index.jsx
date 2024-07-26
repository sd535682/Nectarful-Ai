import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Header from "@/components/header";
import { Image } from "expo-image";
import { hp, wp } from "@/constants/responsive";

const FruitDetails = () => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : top + 30;
  return (
    <View style={[styles.details_container, { paddingTop }]}>
      <Header />
      <View style={styles.image_container}>
        <Image
          source={require("../../../assets/images/blackberry.png")}
          contentFit="cover"
          style={styles.details_image}
        />
      </View>
      <View>
        <Text>Hello</Text>
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
    height: hp(100),
    width: wp(100),
    resizeMode: "contain",
    marginBottom: hp(2),
    alignSelf: "center",
    borderRadius: 10,
  },
});
