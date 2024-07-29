// Imports //
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { hp, wp } from "@/constants/responsive";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";

const FruitDetails = () => {
  // ******* useLocalSearchParams for getting data from Prev Page *******
  const params = useLocalSearchParams();
  // ******* useRouter to get back to Prev Page *******
  const router = useRouter();
  // ******* Setting Padding Top according to Device's Notch *******
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : top + 30;
  // ******* END *******

  //
  const item = JSON.parse(params.item);
  console.log(item);

  const nutrients = [
    { label: "Calories", key: "calories" },
    { label: "Carbohydrates", key: "carbohydrates" },
    { label: "Fat", key: "fat" },
    { label: "Protein", key: "protein" },
    { label: "Sugar", key: "sugar" },
  ];
  //

  return (
    // ******* Details Screen *******
    <View style={[styles.details_container, { paddingTop }]}>
      {/* ******* Header ******* */}
      <View style={styles.header}>
        <Pressable style={styles.cart} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={hp(3)} color="grey" />
        </Pressable>
        <Pressable style={styles.cart}>
          <Feather name="shopping-bag" size={hp(3)} color="grey" />
        </Pressable>
      </View>
      {/* ******* End of Header ******* */}
      {/* ******* Fruit Image ******* */}
      <View style={styles.image_container}>
        <Image
          source={require("../../../assets/images/blackberry.png")}
          contentFit="cover"
          style={styles.details_image}
        />
      </View>
      {/* ******* End of Fruit Image ******* */}
      {/* ******* Fruit Details ******* */}
      <View style={{ flex: 0.5 }}>
        <Text>{item.name}</Text>
        <View>
          <Text>
            The {item.name} is classified under the {item.family} family,{" "}
            {item.genus} genus, and {item.order} order.
          </Text>
          <View>
            <Text>Nutritional Values</Text>
            {nutrients.map((nutrient) => (
              <Text key={nutrient.key}>{item[nutrient.key]}</Text>
            ))}
          </View>
        </View>
      </View>
      {/* ******* End of Fruit Details ******* */}
      {/* ******* Set Satus Icons Dark ******* */}
      <StatusBar style="dark" />
    </View>
    // ******* End of Details Screen *******
  );
};

export default FruitDetails;

const styles = StyleSheet.create({
  details_container: {
    flex: 1,
    paddingHorizontal: wp(2),
    paddingVertical: hp(2),
  },
  image_container: {
    flex: 0.5,
  },
  details_image: {
    height: hp(40),
    width: wp(100),
    resizeMode: "contain",
    marginBottom: hp(2),
    alignSelf: "center",
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(2),
  },
  cart: {
    borderRadius: 15,
    padding: hp(1),
    borderColor: "lightgrey",
    borderWidth: 2,
  },
});
