import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { MasonryFlashList } from "@shopify/flash-list";
import Cards from "../components/cards";
import { SafeAreaView } from "react-native-safe-area-context";

const ListView = () => {
  const [fruitsData, setFruitsData] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/c/3970-16d1-4192-a1ac`)
      .then((res) => res.json())
      .then((data) => setFruitsData(data))
      .catch((error) => console.log("error", error));
  }, []);

  const renderListItem = ({ item }) => <Cards item={item.name} />;

  return (
    <MasonryFlashList
      data={fruitsData}
      initialNumToRender={100}
      numColumns={2}
      renderItem={renderListItem}
      estimatedItemSize={100}
    />
  );
};

export default ListView;

const styles = StyleSheet.create({});
