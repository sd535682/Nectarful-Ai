import { Text, View } from "react-native";
import Home from "../components/home";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Home />
    </View>
  );
}
