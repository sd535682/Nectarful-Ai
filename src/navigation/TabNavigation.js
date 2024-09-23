import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import SmoothieScreen from '../screens/smoothiescreen';
import {UIColors} from '../constants/uielements';
import Octicons from 'react-native-vector-icons/Octicons';
import {useSmoothieItems} from '../zustand/fruitcart';
import StackNavigator from './StackNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const smoothieItemsLength = useSmoothieItems(
    state => state.smoothieItems.length,
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: UIColors.elementDark,
        tabBarInactiveTintColor: UIColors.elementGrey,
        tabBarStyle: ({route}) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? '';
          if (routeName === 'Details') {
            return {display: 'none'};
          }
          return {
            paddingVertical: 10,
            backgroundColor: UIColors.semiWhite,
          };
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={StackNavigator}
        options={({route}) => ({
          title: 'Fruits',
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <Octicons name="home" size={20} color={color} />
          ),
          tabBarStyle: (() => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (routeName === 'Details') {
              return {display: 'none'};
            }
            return {
              backgroundColor: UIColors.semiWhite,
            };
          })(),
        })}
      />
      <Tab.Screen
        name="Smoothie"
        component={SmoothieScreen}
        options={{
          title: 'Smoothie',
          tabBarBadge: smoothieItemsLength > 0 ? smoothieItemsLength : null,
          tabBarBadgeStyle: {
            backgroundColor: UIColors.elementDark,
            position: 'absolute',
            left: 10,
            fontFamily: 'SpaceMono',
            fontSize: 10,
          },
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <Octicons name="trash" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
