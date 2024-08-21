// Imports //
import { StyleSheet, Text, View, Pressable, Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { hp, wp } from "@/constants/responsive";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { Subheading, BodyText, UIColors } from "../../constants/uielements";
import NutriGraph from "../../components/nutri_graph";

const FruitDetails = () => {
  // ******* useLocalSearchParams for getting data from Prev Page *******
  const params = useLocalSearchParams();
  // ******* useRouter to get back to Prev Page *******
  const router = useRouter();
  // ******* Setting Padding Top according to Device's Notch *******
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : top + 30;
  // ******* END *******
  const item = JSON.parse(params.item);

  const nutrients = [
    { label: "Calories", value: item.calories, frontColor: '#BF2E21' },
    { label: "Carbs", value: item.carbohydrates, frontColor: '#BFB417' },
    { label: "Fat", value: item.fat, frontColor: '#F29E38' },
    { label: "Protein", value: item.protein, frontColor: '#367368' },
    { label: "Sugar", value: item.sugar, frontColor: '#D96A29' },
  ];

  return (
    // ******* Details Screen *******
    <LinearGradient
      colors={[UIColors.gradient1[0], UIColors.gradient1[1]]}
      style={[styles.details_container, { paddingTop }]}
    >
      {/* ******* Header ******* */}
      <View style={styles.header}>
        <Pressable style={styles.cart} onPress={() => router.back()}>
          <Ionicons
            name="chevron-back"
            size={20}
            color={UIColors.elementBlack}
          />
        </Pressable>
        <Pressable
          style={styles.cart}
          onPress={() =>
            Linking.openURL(
              `https://www.google.com/search?q=${item.name}%20fruit`
            )
          }
        >
          <Feather name="info" size={20} color={UIColors.elementBlack} />
        </Pressable>
      </View>
      {/* ******* Fruit Image ******* */}
      <View style={styles.image_container}>
        <Subheading
          adjustsFontSizeToFit={true}
          numberOfLines={1}
          style={styles.backGroundName}
        >
          {item.name}
        </Subheading>
        <Image
          source={item.imageurl}
          contentFit="cover"
          style={styles.details_image}
        />
      </View>
      {/* ******* Fruit Details ******* */}
      <View style={styles.text_view}>
        <Subheading
          style={{ fontSize: 25, color: UIColors.semiBlack, marginBottom: 15 }}
        >
          {item.name}
        </Subheading>
        {/* <View> */}
        <BodyText style={{ color: UIColors.baseGrey, fontSize: 15 }}>
          The {item.name} is classified under the {item.family} family, which is
          a part of the larger {item.genus} genus, and is further categorized
          under the {item.order} order in the biological classification system.
        </BodyText>
        {/* </View> */}
        {/* <View> */}
        <NutriGraph props={nutrients} />
        {/* </View> */}
      </View>
      {/* ******* Set Satus Icons Dark ******* */}
      <StatusBar style="dark" />
    </LinearGradient>
    // ******* End of Details Screen *******
  );
};

export default FruitDetails;

const styles = StyleSheet.create({
  details_container: {
    flex: 1,
  },
  backGroundName: {
    position: "absolute",
    top: 0,
    fontSize: 70,
    color: UIColors.gradient3[1],
    maxWidth: "100%",
    paddingHorizontal: 20,
  },
  image_container: {
    flex: 0.4,
    borderTopStartRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  details_image: {
    height: hp(30),
    width: wp(50),
    resizeMode: "contain",
    marginBottom: hp(2),
    borderBottomLeftRadius: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(2),
  },
  cart: {
    padding: wp(2),
  },
  text_view: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 0.6,
    backgroundColor: UIColors.elementWhite,
    flexDirection: "column",
    paddingHorizontal: wp(5),
    paddingVertical: hp(3),
  },
});