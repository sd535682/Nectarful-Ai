import { Tabs } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function HomeLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{title: 'Fruits', tabBarIcon: () => <MaterialCommunityIcons name="fruit-watermelon" size={24} color='black' /> }}/>
      <Tabs.Screen name= 'smoothie/index' options={{title: 'Smoothie', tabBarIcon: ()=> <FontAwesome6 name="jar-wheat" size={24} color="black" />}} />
    </Tabs>
  );
}
