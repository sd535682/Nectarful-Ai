import { StyleSheet, Text, View, Pressable } from "react-native";
import ListView from "../../components/list";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Search from "../../components/search";
import { wp } from "@/constants/responsive";
import { StatusBar } from "expo-status-bar";
import { FruitData } from "../../api/globalapi";
import { React, useState, useEffect } from "react";
import { Heading, UIColors } from "@/constants/uielements";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  // SafeAreaInsets hook to get the top padding according to the device screen
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : top + 30;
  // State to store the fetched fruits data
  const [fruitsData, setFruitsData] = useState([]);
  // State to store the filtered fruits data
  const [filterSearch, setFilterSearch] = useState([]);

  // Fetching the fruits data on component mount and updating the filterSearch state as well.
  useEffect(() => {
    FruitData()
      .then((data) => {setFruitsData(data),setFilterSearch(data)})
      .catch((error) => console.log("error", error));
  }, []);

  // Function to handle search input changes and filter the fruits accordingly.
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
    // Home Screen
    <LinearGradient colors={[UIColors.gradient2[0],UIColors.gradient2[1]]} style={[styles.home_container, { paddingTop }]}>
      <Heading style={{color: UIColors.elementBlack}} >Discover our {'\n'}healthiest fruits</Heading>
      <Search onSearch = {handleSearch} />
      <ListView fruitsData = {filterSearch}/>
      <StatusBar style="dark"/>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  home_container: {
    flex: 1,
    paddingHorizontal: wp(3)
  },
});