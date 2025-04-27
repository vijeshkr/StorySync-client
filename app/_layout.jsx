import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeScreen from "../app/components/SafeScreen";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return <SafeAreaProvider>
    <SafeScreen>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="(auth)" />
      </Stack>
    </SafeScreen>
    <StatusBar style="dark"/>
  </SafeAreaProvider>;
}
