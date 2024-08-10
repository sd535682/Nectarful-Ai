import { Stack } from "expo-router";
import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();

// ************ Fonts setup ************
export default function RootLayout() {
 const [loaded, error] = useFonts({
   'Poppins': require('../assets/fonts/Poppins.ttf'),
   'Nunito': require('../assets/fonts/Nunito.ttf'),
   'SpaceMono': require('../assets/fonts/SpaceMono.ttf'),
 });

 // ************ Hides the splash screen when fonts are loaded or Error occurs ************
 useEffect(() => {
   if (loaded || error) {
     SplashScreen.hideAsync();
   }
 }, [loaded, error]);

 if (!loaded && !error) {
   return null;
 }

 return (
  // ************ Stack navigation setup here for home screen ************
  <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(home)" />
      {/* ************ Dynamic Details Page redirected from Card ************ */}
      <Stack.Screen 
        name="details/[id]" 
        options={{ 
          href: null,
        }}/>
    </Stack>
 );
}