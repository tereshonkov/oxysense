import { LinearGradient } from "expo-linear-gradient";
import { View, ScrollView } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import SwitchPeriod from "@/components/SwitchPeriod";
import { useState } from "react";
import Day from "@/components/StatisticsContent/Day";
import Week from "@/components/StatisticsContent/Week";
import Month from "@/components/StatisticsContent/Month";

export default function Statistics() {
  const insets = useSafeAreaInsets();
  const [period, setPeriod] = useState<"day" | "week" | "month">("day");
  return (
    <LinearGradient
      colors={["#0D1B2A", "#1B263B", "#415A77"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1, paddingBottom: insets.bottom + 50 }}
    >
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
        <ScrollView
          contentContainerStyle={{ alignItems: "center" }}
          style={{ flexGrow: 1, width: "100%" }}
        >
          <View style={{ marginTop: 16, marginBottom: 8, width: "90%" }}>
            <SwitchPeriod period={period} setPeriod={setPeriod} />
          </View>
          {period === "day" && (
            <Day />
          )}
          {period === "week" && (
            <Week />
          )}
          {period === "month" && (
            <Month />
          )}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
