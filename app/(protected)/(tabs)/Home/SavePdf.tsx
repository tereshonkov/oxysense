import Button from "@/components/ui/Button/Button";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Pressable } from "react-native";
import { useState } from "react";
import ProgressBar from "@/components/ProgressBar";

export default function SavePdf() {
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);
  return (
    <LinearGradient
      colors={["#0D1B2A", "#1B263B", "#415A77"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, alignItems: "center", gap: 20, marginTop: 20 }}>
        <View
          style={{
            width: "80%",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Text>Знайдено 6 записів</Text>
        </View>
        <View
          style={{
            width: "80%",
            height: "60%",
            backgroundColor: "#FFFFFF",
            borderRadius: 20,
            padding: 20,
            justifyContent: "space-between",
          }}
        >
          <View>
            <Pressable onPress={() => setSelectedPeriod("today")}>
              <Text
                style={[
                  { marginTop: 20, fontSize: 22, fontWeight: "500" },
                  selectedPeriod === "today" && { color: "#355196" },
                ]}
              >
                Сьогодні
              </Text>
              <View
                style={[
                  {
                    marginTop: 20,
                    width: "100%",
                    height: 1,
                    backgroundColor: "#C2C2C2",
                  },
                  selectedPeriod === "today" && {
                    backgroundColor: "#355196",
                    height: 2,
                  },
                ]}
              ></View>
            </Pressable>
            <Pressable onPress={() => setSelectedPeriod("week")}>
              <Text
                style={[
                  { marginTop: 20, fontSize: 22, fontWeight: "500" },
                  selectedPeriod === "week" && { color: "#355196" },
                ]}
              >
                Тиждень (7 днів)
              </Text>
              <View
                style={[
                  {
                    marginTop: 20,
                    width: "100%",
                    height: 1,
                    backgroundColor: "#C2C2C2",
                  },
                  selectedPeriod === "week" && {
                    backgroundColor: "#355196",
                    height: 2,
                  },
                ]}
              ></View>
            </Pressable>
            <Pressable
              onPress={() => setSelectedPeriod("month")}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text
                  style={[
                    { marginTop: 20, fontSize: 22, fontWeight: "500" },
                    selectedPeriod === "month" && { color: "#355196" },
                  ]}
                >
                  Місяць (30 днів)
                </Text>
                <View
                  style={[
                    {
                      marginTop: 20,
                      width: "100%",
                      height: 1,
                      backgroundColor: "#C2C2C2",
                    },
                    selectedPeriod === "month" && {
                      backgroundColor: "#355196",
                      height: 2,
                    },
                  ]}
                ></View>
              </View>
              <View
                style={{
                  backgroundColor: "#FFD700",
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: "#000000", fontWeight: "700" }}>PRO</Text>
              </View>
            </Pressable>
          </View>
          <Button style={{ marginTop: 20 }} disabled={!selectedPeriod}>
            Завантажити
          </Button>
        </View>
        <View
          style={{
            width: "80%",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ textAlign: "center", color: "#868181ff" }}>
            Для вибірки по днях і місяцях викориcтовуйте календар
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}
