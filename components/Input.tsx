import { TextInput, TextInputProps, Pressable, View } from "react-native";
import { theme, primaryColor } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import Animated, { FadeInLeft, FadeOutLeft } from "react-native-reanimated";

type InputProps = TextInputProps & {
  iconName?: React.ComponentProps<typeof Ionicons>["name"];
};

export default function Input({ iconName = "mail", style, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);
  return (
    <View>
        {isFocused && (
          <Animated.Text entering={FadeInLeft.duration(200)} exiting={FadeOutLeft.duration(200)} style={theme.inputLabel}>
            {rest.placeholder}
          </Animated.Text>
        )}
      <Pressable
        style={[
          theme.inputContainer,
          isFocused && { borderColor: primaryColor },
        ]}
        onPress={() => inputRef.current?.focus()}
      >
        <Ionicons
          name={iconName}
          size={20}
          color="#999999"
          style={{ color: primaryColor }}
        />
        <TextInput
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          ref={inputRef}
          placeholderTextColor="#999999"
          style={[{ flex: 1, height: "100%", paddingRight: 16, paddingVertical: 0 }, style]}
          {...rest}
        />
      </Pressable>
    </View>
  );
}
