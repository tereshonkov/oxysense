import { LinearGradient } from "expo-linear-gradient";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SwitchPeriod from "@/components/SwitchPeriod";
import { useState } from "react";
import PressureStats from "@/components/Pressure";
import PulseStats from "@/components/Pulse";

export default function Statistics() {
  const [period, setPeriod] = useState<"day" | "week" | "month">("day");
  return (
    <LinearGradient
      colors={["#0D1B2A", "#1B263B", "#415A77"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
        <ScrollView
          contentContainerStyle={{ alignItems: "center" }}
          style={{ flexGrow: 1, width: "100%" }}
        >
          <View style={{ marginTop: 16, marginBottom: 8, width: "90%" }}>
            <SwitchPeriod period={period} setPeriod={setPeriod} />
          </View>
          <PressureStats />
          <PulseStats />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
