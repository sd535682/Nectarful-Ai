import {StyleSheet, Pressable, TextInput, View} from 'react-native';
import {useState} from 'react';
import React from 'react';
import {wp} from '../constants/responsive';
import Feather from 'react-native-vector-icons/Feather';
import {UIColors} from '../constants/uielements';
import {borderRadius} from '../constants/responsive';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Search = ({onSearch, onSort}) => {
  // Logic here to filter the fruits array based on the search input
  const [textUpdate, setTextUpdate] = useState('');
  // Function to handle search input change and update fruits array accordingly
  const handleSearch = text => {
    setTextUpdate(text);
    onSearch(text);
  };

  return (
    // Search Bar UI with Feather Search Icon and TextInput
    <View style={styles.search_box}>
      <Feather name="search" size={20} color={UIColors.elementGrey} />
      <TextInput
        style={styles.search_input}
        value={textUpdate}
        onChangeText={handleSearch}
        placeholder="Search here"
        placeholderTextColor={UIColors.elementGrey}
      />
      <Pressable onPress={onSort}>
        <MaterialCommunityIcons
          name="sort-alphabetical-variant"
          size={20}
          color={UIColors.elementGrey}
        />
      </Pressable>
    </View>
  );
};

export default Search;

// Search Styling
const styles = StyleSheet.create({
  search_box: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: UIColors.semiWhite,
    paddingHorizontal: wp(3),
    paddingVertical: wp(1),
    marginVertical: wp(5),
    borderRadius: borderRadius,
    elevation: 1,
    shadowColor: UIColors.elementDark,
  },
  search_input: {
    flex: 1,
    padding: wp(2.5),
    fontSize: 15,
    fontFamily: 'SpaceMono',
    color: UIColors.semiBlack,
  },
});
