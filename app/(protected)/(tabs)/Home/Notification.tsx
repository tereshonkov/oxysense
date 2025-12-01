import {
  View,
  Text,
  Pressable,
  Modal,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { primaryColor, secondaryColor } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/ui/Button/Button";

export default function Notification() {
  const [visible, setVisible] = useState(false);
  return (
    <LinearGradient
      colors={["#0D1B2A", "#1B263B", "#415A77"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, padding: 20 }}>
        <Text
          style={{
            color: secondaryColor,
            fontSize: 26,
            margin: 20,
            textAlign: "center",
          }}
        >
          Мої нагадування
        </Text>
        <Pressable
          onPress={() => setVisible(true)}
          style={({ pressed }) => ({
            position: "absolute",
            bottom: "20%",
            right: 20,
            padding: 1,
            backgroundColor: primaryColor,
            borderRadius: 100,
            transform: [{ scale: pressed ? 0.95 : 1 }],
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
            elevation: 5,
          })}
        >
          <Ionicons name="add" size={50} color={secondaryColor} />
        </Pressable>
        <Modal
          visible={visible}
          animationType="fade"
          transparent={true}
          onRequestClose={() => setVisible(false)}
        >
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <Pressable
              onPress={() => setVisible(false)}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <TouchableOpacity
                activeOpacity={1}
                onPress={(e) => e.stopPropagation()}
                style={{
                  width: "80%",
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  padding: 20,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    marginBottom: 30,
                    textAlign: "center",
                  }}
                >
                  Додати нагадування
                </Text>
                <TextInput
                  multiline={true}
                  numberOfLines={3}
                  placeholder="Введіть текст нагадування тут..."
                  placeholderTextColor="#999"
                  style={{
                    width: "100%",
                    height: 120,
                    borderWidth: 1,
                    borderColor: "#ccc",
                    borderRadius: 5,
                    padding: 10,
                    textAlignVertical: "top",
                    color: primaryColor,
                    fontSize: 16,
                    marginBottom: 30,
                  }}
                />
                <Button>Додати</Button>
              </TouchableOpacity>
            </Pressable>
          </KeyboardAvoidingView>
        </Modal>
      </View>
    </LinearGradient>
  );
}
