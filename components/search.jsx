import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import React from "react";
import { hp, wp } from "@/constants/responsive";
import { Feather } from "@expo/vector-icons";

const Search = ({onSearch}) => {
  const [textUpdate, setTextUpdate] = useState('');
  const handleSearch = (text) => {
    setTextUpdate(text);
    onSearch(text);
  };

  return (
    <View style={styles.search_box}>
      <Feather name="search" size={hp(3)} color="black" />
      <TextInput
        style={styles.search_input}
        value={textUpdate}
        onChangeText={handleSearch}
        placeholder="Search"
        placeholderTextColor={"grey"}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  search_box: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "lightgrey",
    marginHorizontal: wp(2),
    padding: hp(1),
    marginVertical: hp(2),
    borderRadius: 10,
  },
  search_input: {
    flex: 1,
    padding: hp(1),
    fontSize: hp(2),
    fontWeight: "700",
  },
});
