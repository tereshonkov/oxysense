import {
  Pressable,
  Text,
  PressableProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { theme } from "@/constants/theme";

type ButtonProps = PressableProps & {
  children?: React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
};

export default function Button({
  children,
  textStyle,
  disabled,
  style,
  ...rest
}: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      style={({ pressed }) => [
        theme.button,
        pressed && !disabled && { opacity: 0.85 },
        disabled && { opacity: 0.6 },
        style,
      ]}
      {...rest}
    >
      <Text style={[theme.textForButton, textStyle]}>{children}</Text>
    </Pressable>
  );
}
