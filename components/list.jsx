import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { MasonryFlashList } from "@shopify/flash-list";
import Cards from "../components/cards";
import { hp, wp } from "../constants/responsive";

const ListView = () => {
  const [fruitsData, setFruitsData] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/c/3970-16d1-4192-a1ac`)
      .then((res) => res.json())
      .then((data) => setFruitsData(data))
      .catch((error) => console.log("error", error));
  }, []);

  const renderListItem = ({ item, index }) => (
    <Cards item={item.name} index={index} column={2} />
  );

  return (
    <MasonryFlashList
      data={fruitsData}
      initialNumToRender={100}
      numColumns={2}
      renderItem={renderListItem}
      estimatedItemSize={100}
      contentContainerStyle={styles.list_container}
    />
  );
};

export default ListView;

const styles = StyleSheet.create({
  list_container: {
    paddingHorizontal: wp(2),
    paddingVertical: hp(2),
  },
});
