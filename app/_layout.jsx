import { Stack } from "expo-router";
import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
 const [loaded, error] = useFonts({
   'Poppins': require('../assets/fonts/Poppins.ttf'),
   'Nunito': require('../assets/fonts/Nunito.ttf'),
   'SpaceMono': require('../assets/fonts/SpaceMono.ttf'),
 });

 useEffect(() => {
   if (loaded || error) {
     SplashScreen.hideAsync();
   }
 }, [loaded, error]);

 if (!loaded && !error) {
   return null;
 }

 return (
  <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(home)" />
      <Stack.Screen 
        name="details/[id]" 
        options={{ 
          href: null,
        }}/>
    </Stack>
 );
}

// export default function RootLayout() {
//   return (
//     // Root layout consists of Index and Home Directory.
//     <Stack screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="index" />
//       <Stack.Screen name="(home)" />
//       <Stack.Screen 
//         name="details/[id]" 
//         options={{ 
//           href: null,
//         }}/>
//     </Stack>
//   );
// }