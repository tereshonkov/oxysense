import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useFonts } from "expo-font";
import { SessionProvider } from "../providers/session";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Rakkas: require("../assets/fonts/Rakkas-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SessionProvider>
      <Slot />
      <StatusBar style="auto" />
    </SessionProvider>
  );
}
