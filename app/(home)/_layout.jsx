import { Tabs } from "expo-router";
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { UIColors } from "@/constants/uielements";

export default function HomeLayout() {

  return (
    // Home Layout with TabBar with icons for each screen.
    <Tabs screenOptions={{ tabBarActiveTintColor: UIColors.elementDark, tabBarInactiveTintColor: UIColors.elementGrey, headerShown: false, tabBarHideOnKeyboard: true, tabBarStyle: { paddingVertical: 10 ,borderTopLeftRadius: 15, borderTopRightRadius: 15, backgroundColor: UIColors.semiWhite}}}>
      <Tabs.Screen name="index" options={{title: 'Fruits', tabBarShowLabel: false, tabBarIcon: ({color}) => <Octicons name="home" size={20} color={color} />}}/>
      <Tabs.Screen name= 'smoothie/index' options={{title: 'Smoothie', tabBarShowLabel: false, tabBarIcon: ({color})=> <FontAwesome6 name="wine-glass-empty" size={20} color={color}/>}} />
      <Tabs.Screen name= 'profile/index' options={{title: 'Profile', tabBarShowLabel: false, tabBarIcon: ({color})=> <FontAwesome5 name="user" size={20} color={color}/>}} />
    </Tabs>
  );
}
