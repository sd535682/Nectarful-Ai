import { Tabs } from "expo-router";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { UIColors } from "@/constants/uielements";
import { useSmoothieItems } from "@/zustand/fruitcart";

export default function HomeLayout() {
  const smoothieItemsLength = useSmoothieItems(
    (state) => state.smoothieItems.length
  );

  return (
    // Home Layout with TabBar with icons for each screen.
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: UIColors.elementDark,
        tabBarInactiveTintColor: UIColors.elementGrey,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          paddingVertical: 10,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: UIColors.semiWhite,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Fruits",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Octicons name="home" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="smoothie/index"
        options={{
          title: "Smoothie",
          tabBarBadge: smoothieItemsLength > 0 ? smoothieItemsLength : null,
          tabBarBadgeStyle: {
            backgroundColor: UIColors.elementDark,
            position: "absolute",
            top: -5,
            left: 5,
            fontFamily: "SpaceMono",
            fontSize: 10,
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="wine-glass-empty" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}