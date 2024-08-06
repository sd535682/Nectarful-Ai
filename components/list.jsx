import { StyleSheet } from "react-native";
import React from "react";
import { MasonryFlashList } from "@shopify/flash-list";
import Cards from "../components/cards";
import { getColumn, hp, wp } from "../constants/responsive";

const ListView = ({fruitsData}) => {
  const columnsCount = getColumn();

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
    paddingBottom: hp(10)
  },
});
