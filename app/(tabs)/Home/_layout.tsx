import CustomHeader from "@/components/CustomHeader/Header";
import { Stack } from "expo-router";
import { Platform } from "react-native";
import { UIManager } from "react-native/Libraries/ReactNative/UIManager";

export default function _layout() {
  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: (props) => <CustomHeader />,
        }}
      />
      <Stack.Screen name="SavePdf" options={{ title: "Save PDF" }} />
      <Stack.Screen name="ProVersion" options={{ title: "Go Pro" }} />
      <Stack.Screen name="Notification" options={{ title: "Notifications" }} />
      <Stack.Screen name="Settings" options={{ title: "Settings" }} />
    </Stack>
  );
}
