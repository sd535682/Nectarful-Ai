import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ListView from "../../components/list";

const Home = () => {
  return (
    <View style={styles.home_container}>
      <ListView />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home_container: {
    flex: 1,
  },
});
