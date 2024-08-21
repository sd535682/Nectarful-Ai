import { StyleSheet, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { hp, wp } from "../constants/responsive";
import { BodyText, Heading, UIColors } from "../constants/uielements";
import { Image } from "expo-image";

export default function Carousel_Card({ props }) {
  const carousel_data = {
    fact: props.fact,
    desc: props.text,
    url: props.url,
  };
  
  return (
    <LinearGradient
      colors={["#fb7182", "#f43f55", '#be1233']}
      pos
      style={styles.carousel_card}
    >
      <View style={styles.factContainer}>
        <Heading style={{ fontSize: 15, color: 'white' }}>
          #Fact {carousel_data.fact}
        </Heading>
        <BodyText
          numberOfLines={2}
          style={{ fontSize: 12, color: UIColors.semiWhite }}
        >
          {carousel_data.desc}
        </BodyText>
      </View>
      <View style={styles.carousel_image_container}>
        <Image
          source={`${carousel_data.url}`}
          contentFit="contain"
          style={styles.carousel_image}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  carousel_card: {
    paddingLeft: 10,
    paddingVertical: 10,
    height: hp(15),
    width: wp(80),
    borderRadius: 15,
    marginRight: 10,
    flex: 1,
    flexDirection: "row",
    overflow: "hidden",
  },
  carousel_image: { height: 100, width: 100 },
  carousel_image_container: { flex: 0.25, overflow: "hidden" },
  factContainer: { flex: 0.75 },
});