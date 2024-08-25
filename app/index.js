import { useRouter } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { borderRadius, hp, wp } from "@/constants/responsive";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import {
  Heading,
  CaptionText,
  UIColors,
  BodyText,
} from "@/constants/uielements";
import * as Haptics from "expo-haptics";
import { useEffect } from "react";
import Auth from "../components/auth";

export default function Index() {
  const router = useRouter();
  const handleToken = () => {
    router.push("/(home)");
  };

  return (
    // ************ Linear Gradient background for Login Screen ************
    <LinearGradient
      colors={[UIColors.gradient1[0], UIColors.gradient1[1]]}
      style={styles.background}
    >
      {/* ************ Image & Title-Subtitle view ************ */}
      <View style={styles.boxContainer}>
        <Image
          source={require("../assets/images/splash.png")}
          contentFit="contain"
          style={styles.introImage}
        />
        <Heading style={{ color: UIColors.elementWhite }}>Nectarful AI</Heading>
        <CaptionText
          style={{ color: UIColors.elementWhite, textAlign: "center" }}
        >
          Nourish with Every Sip: Healthy Smoothies for a Vibrant You
        </CaptionText>
      </View>
      {/* ************ Button component container ************ */}
      <View style={styles.boxContainer}>
        <Auth />
      </View>
      {/* ************ Set Statusbar icon color ************ */}
      <StatusBar translucent />
    </LinearGradient>
  );
}

// Stylesheet for the Login Screen
const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: "space-around" },
  boxContainer: { alignItems: "center" },
  introImage: { height: hp(50), width: wp(100) },
  buttonContainer: {
    width: wp(90),
    backgroundColor: UIColors.elementDark,
    borderRadius: borderRadius,
    paddingVertical: 15,
  },
});
