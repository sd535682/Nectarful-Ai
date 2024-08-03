import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    // Root layout consists of Index and Home Directory.
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
