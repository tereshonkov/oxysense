import { Pressable, Text } from "react-native";
import { theme } from "@/constants/theme";

export default function Button({
  children,
  onPress,
}: {
  children?: React.ReactNode;
  onPress?: () => void;
}) {
  return (
    <Pressable
      style={theme.button}
      onPress={onPress}
    >
      <Text style={theme.textForButton}>{children}</Text>
    </Pressable>
  );
}
