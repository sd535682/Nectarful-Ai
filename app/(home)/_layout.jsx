import { Tabs } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function HomeLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false , tabBarStyle: {backgroundColor: '#e11d48', position: "absolute", bottom: 10, left: 10, right: 10, borderRadius: 15, height: 60}}}>
      <Tabs.Screen name="index" options={{title: 'Fruits', tabBarShowLabel: false, tabBarIcon: () => <MaterialCommunityIcons name="fruit-watermelon" size={30} color='white'/>}}/>
      <Tabs.Screen name= 'smoothie/index' options={{title: 'Smoothie', tabBarShowLabel: false, tabBarIcon: ()=> <FontAwesome6 name="jar-wheat" size={30} color="white" />}} />
    </Tabs>
  );
}
