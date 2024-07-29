import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ListView from "../../components/list";
import Header from "../../components/header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Search from "../../components/search";
import { hp, wp } from "@/constants/responsive";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : top + 30;
  return (
    <View style={[styles.home_container, { paddingTop }]}>
      <Header />
      <Text style={styles.home_title}>Explore Fruits</Text>
      <Search />
      <ListView />
      <StatusBar style="dark" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home_container: {
    flex: 1,
  },
  home_title: {
    fontSize: hp(3),
    fontWeight: "900",
    paddingVertical: wp(2),
    paddingHorizontal: wp(2),
  },
});

//   const { top } = useSafeAreaInsets();
//   const paddingTop = top > 0 ? top + 10 : top + 30;
