import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { MasonryFlashList } from "@shopify/flash-list";
import Cards from "../components/cards";
import { getColumn, hp, wp } from "../constants/responsive";
import { FruitData } from "../api/globalapi";

const ListView = () => {
  const [fruitsData, setFruitsData] = useState([]);
  const columnsCount = getColumn();

  useEffect(() => {
    FruitData()
      .then((data) => setFruitsData(data))
      .catch((error) => console.log("error", error));
  }, []);

  // console.log(fruitsData)

  const renderListItem = ({ item, index }) => (
    <Cards item={item} index={index} column={columnsCount} />
  );

  return (
    <MasonryFlashList
      data={fruitsData}
      initialNumToRender={100}
      numColumns={columnsCount}
      renderItem={renderListItem}
      estimatedItemSize={100}
      contentContainerStyle={styles.list_container}
      showsVerticalScrollIndicator={false}
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
