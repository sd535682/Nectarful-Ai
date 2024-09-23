import {StyleSheet, View, ToastAndroid, StatusBar} from 'react-native';
import ListView from '../components/list';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Search from '../components/search';
import {wp} from '../constants/responsive';
import {FruitData} from '../api/globalapi';
import {React, useState, useEffect} from 'react';
import {Heading, UIColors} from '../constants/uielements';
import LinearGradient from 'react-native-linear-gradient';
import {useSmoothieItems} from '../zustand/fruitcart';
import ListShimmer from '../components/listshimmer';
import HomeCarousel from '../components/carousel';

export default function HomeScreen() {
  // SafeAreaInsets hook to get the top padding according to the device screen
  // const {top} = useSafeAreaInsets();
  // const paddingTop = top > 0 ? top + 10 : top + 30;
  // State to store the fetched fruits data
  const [fruitsData, setFruitsData] = useState([]);
  // State to store the filtered fruits data
  const [filterSearch, setFilterSearch] = useState([]);
  // Shimmer effect to show loading state
  const [isFetched, setIsFetched] = useState(false);

  // Supabase Database call
  useEffect(() => {
    const functionWithDelay = () => {
      setTimeout(() => {
        FruitData()
          .then(data => {
            const sortedDefId = data.sort((a, b) => a.id - b.id);
            setFruitsData(sortedDefId),
              setFilterSearch(sortedDefId),
              setIsFetched(true);
          })
          .catch(error => console.error(error));
      }, 3000);
    };
    functionWithDelay();
  }, []);

  // Function to handle search input changes and filter the fruits accordingly.
  const handleSearch = text => {
    if (text) {
      let filter = fruitsData.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase().trim()),
      );
      setFilterSearch(filter);
    } else {
      setFilterSearch(fruitsData);
    }
  };

  const smoothieItems = useSmoothieItems(state => state.smoothieItems);
  if (smoothieItems.length >= 5) {
    ToastAndroid.show('Jar is full, Tap on Jar', ToastAndroid.SHORT);
  }

  const sortbyName = () => {
    const sortedFruits = [...fruitsData].sort((a, b) =>
      a.name.localeCompare(b.name),
    );
    setFilterSearch(sortedFruits);
    setFruitsData(sortedFruits);
  };

  return (
    // Home Screen
    <>
      <LinearGradient
        colors={[UIColors.gradient2[0], UIColors.gradient2[1]]}
        style={[styles.home_container]}>
        <View style={styles.header}>
          <Heading style={{color: UIColors.elementBlack}}>
            Discover our {'\n'}healthiest fruits
          </Heading>
        </View>
        <Search onSearch={handleSearch} onSort={sortbyName} />
        <View style={{marginBottom: 15}}>
          <HomeCarousel />
        </View>
        {/* Conditional rendering based on whether the data is fetched or not */}
        {!isFetched ? <ListShimmer /> : <ListView fruitsData={filterSearch} />}
      </LinearGradient>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={UIColors.gradient2[0]}
      />
    </>
  );
}

const styles = StyleSheet.create({
  home_container: {
    flex: 1,
    paddingHorizontal: wp(3),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
