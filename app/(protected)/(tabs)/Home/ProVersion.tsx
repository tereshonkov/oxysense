import { View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { secondaryColor, primaryColor } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import Button from "@/components/ui/Button/Button";
import { useState } from "react";

export default function ProVersion() {
  const [selectedPlan, setSelectedPlan] = useState<"month" | "year">("month");
  return (
    <LinearGradient
      colors={["#0D1B2A", "#1B263B", "#415A77"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{color:secondaryColor, fontSize: 18, marginBottom: 20, textAlign: "center", marginTop: 20}}>Активуйте Pro-версію для розширених можливостей</Text>
        <View
          style={{
            padding: 20,
            backgroundColor: secondaryColor,
            borderRadius: 20,
            width: "90%",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: primaryColor,
              fontSize: 22,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Активація Pro
          </Text>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
                gap: 10,
              }}
            >
              <Ionicons
                name="checkmark-circle"
                size={22}
                color={primaryColor}
              />
              <Text
                style={{ color: primaryColor, fontSize: 14}}
              >
                Розширена АІ - аналітика та підказки
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
                gap: 10,
              }}
            >
              <Ionicons
                name="checkmark-circle"
                size={22}
                color={primaryColor}
              />
              <Text
                style={{ color: primaryColor, fontSize: 14 }}
              >
                Розшифрування аналізів за допомогою АІ
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
                gap: 10,
              }}
            >
              <Ionicons
                name="checkmark-circle"
                size={22}
                color={primaryColor}
              />
              <Text
                style={{ color: primaryColor, fontSize: 14 }}
              >
                Безлімітний доступ до історії вимірювань
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
                gap: 10,
              }}
            >
              <Ionicons
                name="checkmark-circle"
                size={22}
                color={primaryColor}
              />
              <Text
                style={{ color: primaryColor, fontSize: 14 }}
              >
                Експорт у PDF (всі вимірювання)
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
                gap: 10,
              }}
            >
              <Ionicons
                name="checkmark-circle"
                size={22}
                color={primaryColor}
              />
              <Text
                style={{ color: primaryColor, fontSize: 14 }}
              >
                Пріоритетна підтримка користувачів
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 30, width: "100%", flexDirection: "row", justifyContent: "space-around", marginBottom: 30 }}>
            <Pressable onPress={() => setSelectedPlan('month')} style={{ alignItems: "center", padding: 10, borderWidth: selectedPlan === 'month' ? 3 : 1, borderColor: primaryColor, borderRadius: 10 }}>
              <Text style={{ color: primaryColor, fontSize: 18 }}>Місяць</Text>
              <Text style={{ color: primaryColor, fontSize: 22, marginTop: 5 }}>9.99 USD</Text>
            </Pressable>
            <Pressable onPress={() => setSelectedPlan('year')} style={{ alignItems: "center", padding: 10, borderWidth: selectedPlan === 'year' ? 3 : 1, borderColor: primaryColor, borderRadius: 10 }}>
              <Text style={{ color: primaryColor, fontSize: 18 }}>Рік</Text>
              <Text style={{ color: primaryColor, fontSize: 22, marginTop: 5 }}>59.99 USD</Text>
            </Pressable>
          </View>

          <Button>Активувати Pro</Button>
        </View>
      </View>
    </LinearGradient>
  );
}
