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

export default function Index() {
  const router = useRouter();
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
        <Pressable
          style={styles.buttonContainer}
          onPress={() => {
            router.push("/(home)"),
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
          }}
        >
          <BodyText
            style={{ color: UIColors.elementWhite, textAlign: "center" }}
          >
            Go to Home
          </BodyText>
        </Pressable>
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
  introImage: { height: hp(70), width: wp(100) },
  buttonContainer: {
    width: wp(90),
    backgroundColor: UIColors.elementDark,
    borderRadius: borderRadius,
    paddingVertical: 15,
  },
});