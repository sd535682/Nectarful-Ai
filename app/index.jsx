import { useRouter } from "expo-router";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { hp, wp } from "@/constants/responsive";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Heading, Subheading, CaptionText, UIColors } from "@/constants/uielements";

export default function Index() {
  const router = useRouter();
  return (
    <LinearGradient
      colors={[UIColors.gradient1[0], UIColors.gradient1[1]]}
      style={styles.background}
    >
      <View
        style={styles.boxContainer}
      >
        <Image
          source={require("../assets/images/intro3.png")}
          contentFit="contain"
          style={styles.introImage}
        />
        <Heading style={{ color: UIColors.textWhite }}>Nectarful AI</Heading>
        <CaptionText style={{ color: UIColors.textWhite, textAlign: 'center' }}>Nourish with Every Sip: Healthy Smoothies for a Vibrant You</CaptionText>
      </View>
      <View
        style={styles.boxContainer}
      >
        <Pressable
          style={styles.buttonContainer}
          onPress={() => router.push("/(home)")}
        >
          <Subheading style={{ color: "white" }}>Go to Home</Subheading>
        </Pressable>
      </View>
      <StatusBar style="dark" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: 'space-around' },
  boxContainer: { alignItems: "center" },
  introImage: { height: hp(70), width: wp(100) },
  buttonContainer: { width: wp(90), backgroundColor: '#3b0a08', borderRadius: 15, paddingVertical: 15 }
});
