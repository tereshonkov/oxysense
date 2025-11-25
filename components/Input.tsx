import { TextInput, TextInputProps, Pressable, View, Text } from "react-native";
import { theme, primaryColor } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import Animated, {FadeInLeft, FadeOutLeft} from "react-native-reanimated";

export default function Input(props: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);
  return (
    <View>
        {isFocused && (
          <Animated.Text entering={FadeInLeft.duration(200)} exiting={FadeOutLeft.duration(200)} style={theme.inputLabel}>
            {props.placeholder}
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
          name="mail"
          size={20}
          color="#999999"
          style={{ color: primaryColor }}
        />
        <TextInput
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          ref={inputRef}
          placeholderTextColor="#999999"
          {...props}
        />
      </Pressable>
    </View>
  );
}
