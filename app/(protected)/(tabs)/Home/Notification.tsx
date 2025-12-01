import { View, Text, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { primaryColor, secondaryColor } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

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
          })}
        >
          <Ionicons
            name="add-circle-outline"
            size={60}
            color={secondaryColor}
          />
        </Pressable>
        <Modal
          visible={visible}
          animationType="fade"
          transparent={true}
          onRequestClose={() => setVisible(false)}
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
            <View
              style={{
                width: "80%",
                backgroundColor: "#fff",
                borderRadius: 10,
                padding: 20,
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}
              >
                Додати нове нагадування
              </Text>
              {/* Форма для додавання нагадування може бути тут */}
            </View>
          </Pressable>
        </Modal>
      </View>
    </LinearGradient>
  );
}
