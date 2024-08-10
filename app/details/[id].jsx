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
import {
  Subheading,
  CaptionText,
  BodyText,
  UIColors,
} from "../../constants/uielements";

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
    { key: "Calories", value: item.calories },
    { key: "Carbohydrates", value: item.carbohydrates },
    { key: "Fat", value: item.fat },
    { key: "Protein", value: item.protein },
    { key: "Sugar", value: item.sugar },
    { key: "ImageURL", value: item.imageurl },
  ];
  //

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
        <Pressable style={styles.cart} onPress={()=>Linking.openURL(`https://www.google.com/search?q=${item.name}%20fruit`)}>
          <Feather name="info" size={20} color={UIColors.elementBlack} />
        </Pressable>
      </View>
      {/* ******* Fruit Image ******* */}
      <View style={styles.image_container}>
        <Image
          source={item.imageurl}
          contentFit="cover"
          style={styles.details_image}
        />
      </View>
      {/* ******* Fruit Details ******* */}
      <View style={styles.text_view}>
        <Subheading style={{fontSize: 25, color: UIColors.semiBlack}}>{item.name}</Subheading>
        <View>
          <BodyText style={{color: UIColors.baseGrey}}>
          The {item.name} is classified under the {item.family} family, which is a part of the larger {item.genus} genus, and is further categorized under the {item.order} order in the biological classification system.
          </BodyText>
        </View>
        <View>
          {nutrients.slice(0, -1).map((nutrient) => (
            <CaptionText key={nutrient.key} style={{fontSize: 12, color: UIColors.baseGrey}}>
              {nutrient.key} : {nutrient.value} gm / serve
            </CaptionText>
          ))}
        </View>
        <View>
          {nutrients.slice(0, -1).map((nutrient) => (
            <CaptionText key={nutrient.key} style={{fontSize: 12, color: UIColors.baseGrey}}>
              {nutrient.key} : {nutrient.value} gm / serve
            </CaptionText>
          ))}
        </View>
      </View>
      {/* ******* Set Satus Icons Dark ******* */}
      <StatusBar style='dark' />
    </LinearGradient>
    // ******* End of Details Screen *******
  );
};

export default FruitDetails;

const styles = StyleSheet.create({
  details_container: {
    flex: 1,
  },
  image_container: {
    flex: 0.5,
    borderTopStartRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  details_image: {
    height: hp(40),
    width: wp(90),
    resizeMode: "cover",
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
    justifyContent: "space-between",
  },
});



// ********* Graph *********

// import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
// import { BarChart } from "react-native-gifted-charts";

// export default function App() {
//   const barData = [
//     {value: 81, label: 'M'},
//     {value: 18, label: 'T'},
//     {value: 0.4, label: 'W'},
//     {value: 1.3, label: 'T'},
//     {value: 18, label: 'F'},
//   ].map(item => ({
//     ...item,
//     value: item.value,
//     label: item.label,
//     topLabelComponent: () => (
//       <Text style={styles.barLabel}>{item.value}</Text>
//     )
//   }));

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.chartContainer}>
//         <BarChart
//         horizontal
//           data={barData}
//           barWidth={10}
//           barBorderRadius={4}
//           yAxisThickness={0}
//           xAxisThickness={0}
//           hideRules
//           hideYAxisText
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'grey',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   chartContainer: {
//     marginTop: 50,
//   },
//   barLabel: {
//     color: 'black',
//     fontSize: 10,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginLeft: 20,
//   },
// });