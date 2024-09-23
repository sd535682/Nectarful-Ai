import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homescreen';
import FruitDetails from '../screens/detailscreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Details"
        component={FruitDetails}
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
        }}
      />
    </Stack.Navigator>
  );
}
