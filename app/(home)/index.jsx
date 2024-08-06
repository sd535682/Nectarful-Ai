import { StyleSheet, Text, View, Pressable } from "react-native";
import ListView from "../../components/list";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Search from "../../components/search";
import { hp, wp } from "@/constants/responsive";
import { StatusBar } from "expo-status-bar";
import { FruitData } from "../../api/globalapi";
import { React, useState, useEffect } from "react";

const Home = () => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : top + 30;
  const [fruitsData, setFruitsData] = useState([]);
  const [filterSearch, setFilterSearch] = useState([]);

  useEffect(() => {
    FruitData()
      .then((data) => {setFruitsData(data),setFilterSearch(data)})
      .catch((error) => console.log("error", error));
  }, []);

  const handleSearch = (text) => {
    if(text){
      let filter = fruitsData.filter((item) => item.name.toLowerCase().includes(text.toLowerCase().trim()));
      setFilterSearch(filter);
    }
    else{
      setFilterSearch(fruitsData);
    }
  }

  return (
    <View style={[styles.home_container, { paddingTop }]}>
      <Text style={styles.home_title}>Explore Fruits</Text>
      <Search onSearch = {handleSearch} />
      <ListView fruitsData = {filterSearch}/>
      <StatusBar style="dark"/>
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
    paddingHorizontal: wp(2),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(2),
  },
  avatar: {
    width: hp(5.5),
    height: hp(5.5),
    borderRadius: 100,
  },
  cart: {
    borderRadius: 15,
    padding: hp(1),
    borderColor: "lightgrey",
    borderWidth: 2,
  },
});