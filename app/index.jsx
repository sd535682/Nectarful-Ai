import { Redirect, useRouter } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";
import { Image } from "expo-image";
import AuthInput from "../components/authinput";
import { hp, wp } from "@/constants/responsive";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  const router = useRouter();
  // As of now, it redirects to Home screen when Index screen is loaded.
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffe4e6",
      }}
    >
      <View
        style={{ flex: 0.7, justifyContent: "center", alignItems: "center" }}
      >
        <Image
          source={require("../assets/images/adaptive-icon.png")}
          contentFit="cover"
          style={{ height: hp(50), width: wp(100) }}
        />
        <Text style={{ fontSize: hp(5), fontWeight: "bold" }}>
          Nectarful AI
        </Text>
      </View>
      <View
        style={{ flex: 0.3, justifyContent: "center", alignItems: "center" }}
      >
        <Pressable
          style={{
            width: wp(90),
            backgroundColor: "black",
            borderRadius: 15,
            paddingVertical: 15,
          }}
          onPress={() => router.push("/home")}
        >
          <Text
            style={{
              fontSize: hp(2.5),
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
            }}
          >
            Login with Google
          </Text>
        </Pressable>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}
