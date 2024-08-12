import React from "react";
import { MasonryFlashList } from "@shopify/flash-list";
import Cards from "../components/cards";
import { getColumn } from "../constants/responsive";

const ListView = ({fruitsData}) => {
  // Calculate the number of columns based on the screen size
  const columnsCount = getColumn();

  // Function to render fruit card in the list
  const renderListItem = ({ item, index }) => (
    <Cards item={item} index={index} column={columnsCount} />
  );

  return (
    // Pinterest style layout to display the fruits cards
    // Flashlist is alternative to FlatList, which is better for infinite scrolling
    // powered by Shopify
    <MasonryFlashList
      data={fruitsData}
      initialNumToRender={100}
      numColumns={columnsCount}
      renderItem={renderListItem}
      estimatedItemSize={272.3}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ListView;
