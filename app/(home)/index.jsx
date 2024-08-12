import { StyleSheet, View, Pressable, ToastAndroid, Text } from "react-native";
import ListView from "../../components/list";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Search from "../../components/search";
import { wp } from "@/constants/responsive";
import { FruitData } from "../../api/globalapi";
import { React, useState, useEffect } from "react";
import { Heading, UIColors } from "@/constants/uielements";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useSmoothieItems } from "../../zustand/fruitcart";
import ListShimmer from "../../components/listshimmer";

const Home = () => {
  // SafeAreaInsets hook to get the top padding according to the device screen
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : top + 30;
  // State to store the fetched fruits data
  const [fruitsData, setFruitsData] = useState([]);
  // State to store the filtered fruits data
  const [filterSearch, setFilterSearch] = useState([]);
  // Shimmer effect to show loading state
  const [isFetched, setIsFetched] = useState(false);

  // Fetching the fruits data on component mount and updating the filterSearch state as well.
  useEffect(() => {
    FruitData()
      .then((data) => {
        return new Promise((resolve) =>
          setTimeout(() => {
            resolve(data);
          }, 3000)
        );
      })
      .then((data) => {
        setFruitsData(data), setFilterSearch(data), setIsFetched(true);
      })
      .catch((error) => {
        console.log("error", error);
        setIsFetched(true);
      });
  }, []);

  // Function to handle search input changes and filter the fruits accordingly.
  const handleSearch = (text) => {
    if (text) {
      let filter = fruitsData.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase().trim())
      );
      setFilterSearch(filter);
    } else {
      setFilterSearch(fruitsData);
    }
  };

  const smoothieItems = useSmoothieItems((state) => state.smoothieItems);
  if (smoothieItems.length >= 5) {
    ToastAndroid.show("Jar is full, Tap on Jar", ToastAndroid.SHORT);
  }

  return (
    // Home Screen
    <LinearGradient
      colors={[UIColors.gradient2[0], UIColors.gradient2[1]]}
      style={[styles.home_container, { paddingTop }]}
    >
      <View style={styles.header}>
        <Heading style={{ color: UIColors.elementBlack }}>
          Discover our {"\n"}healthiest fruits
        </Heading>
        <Pressable>
          <MaterialIcons
            name="notifications-none"
            size={35}
            color={UIColors.elementDark}
          />
        </Pressable>
      </View>
      <Search onSearch={handleSearch} />
      {!isFetched? <ListShimmer /> : <ListView fruitsData={filterSearch} />}
      {/* <ListView fruitsData={filterSearch} /> */}
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  home_container: {
    flex: 1,
    paddingHorizontal: wp(3),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
