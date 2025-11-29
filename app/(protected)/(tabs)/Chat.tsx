import { View, ScrollView, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { primaryColor, secondaryColor } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";

export default function Chat() {
  return (
    <LinearGradient
      colors={["#0D1B2A", "#1B263B", "#415A77"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ alignItems: "center", marginTop: 20 }}
        style={{ flex: 1 }}
      >
        <View
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 32,
            backgroundColor: primaryColor,
            padding: 8,
            borderRadius: 100,
            flexDirection: "row",
            // width: "60%",
          }}
        >
          <Pressable>
            <View
              style={{
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 50,
                flexDirection: "row",
                padding: 4,
                marginRight: 16,
                width: 140,
                justifyContent: "center",
              }}
            >
              <Ionicons
                name="add-circle-outline"
                size={32}
                color={primaryColor}
              />
              <Text
                style={{
                  color: primaryColor,
                  fontSize: 12,
                  marginLeft: 8,
                  padding: 4,
                  fontWeight: "700",
                }}
              >
                Додати файл
              </Text>
            </View>
          </Pressable>
          <Pressable>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 50,
                flexDirection: "row",
                padding: 4,
                width: 140,
              }}
            >
              <Ionicons name="camera-outline" size={32} color={primaryColor} />
              <Text
                style={{
                  color: primaryColor,
                  fontSize: 12,
                  marginLeft: 8,
                  padding: 4,
                  fontWeight: "700",
                }}
              >
                Камера
              </Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
