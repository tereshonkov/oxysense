import { View, Text, Dimensions } from "react-native";
import { secondaryColor, primaryColor, accentColor } from "@/constants/theme";
import { LineChart } from "react-native-chart-kit";
import DonutChart from "./DonatChart";
import Ionicons from "@expo/vector-icons/build/Ionicons";
const screenWidth = Dimensions.get("window").width;

interface PressureStatsProps {
  labels?: string[];
  datasets?: {
    data1: number[];
    data2: number[];
  }[];
  percentage1?: number;
  percentage2?: number;
  analytics?: string;
}

export default function PressureStats({
  labels,
  datasets,
  percentage1,
  percentage2,
  analytics,
}: PressureStatsProps) {
  return (
    <View style={{ alignItems: "center", width: "100%" }}>
      <Text style={{ color: secondaryColor, fontSize: 24, fontWeight: "bold" }}>
        Тиск
      </Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          marginTop: 12,
        }}
      >
        <View
          style={{
            width: "90%",
            backgroundColor: "#FFFFFF",
            borderRadius: 16,
            padding: 16,
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <LineChart
            data={{
              labels: labels || ["Ранок", "День", "Вечір"],
              datasets: [
                {
                  data: datasets ? datasets[0].data1 : [120, 130, 125],
                  color: () => accentColor,
                  strokeWidth: 2,
                }, // систолическое
                {
                  data: datasets ? datasets[0].data2 : [80, 95, 104],
                  color: () => "blue",
                  strokeWidth: 2,
                }, // диастолическое
              ],
            }}
            width={screenWidth * 0.9 - 32}
            height={220}
            chartConfig={{
              backgroundGradientFrom: "#FFFFFF",
              backgroundGradientTo: "#FFFFFF",
              color: (opacity = 1) => `rgba(0,0,0,${opacity})`,
              labelColor: (opacity = 1) => `rgba(30,60,130,${opacity})`,
            }}
            bezier
            withInnerLines={true}
            withOuterLines={true}
          />
        </View>
        <View
          style={{
            width: "90%",
            backgroundColor: "#FFFFFF",
            borderRadius: 16,
            padding: 16,
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
            <DonutChart
              percentage={percentage1 || 65}
              max={200}
              color={accentColor}
              textColor={accentColor}
            />
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>/</Text>
            <DonutChart
              percentage={percentage2 || 80}
              max={120}
              color="blue"
              textColor="blue"
            />
          </View>
          <Text
            style={{
              color: primaryColor,
              fontSize: 16,
              marginTop: 8,
              textAlign: "center",
            }}
          >
            Ваш середній тиск за обраний період
          </Text>
        </View>
        <View
          style={{
            width: "90%",
            backgroundColor: "#FFFFFF",
            borderRadius: 16,
            padding: 16,
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <Ionicons
            style={{ position: "absolute", top: 16, right: 16 }}
            name="bulb"
            size={24}
            color="#FFD700"
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#333",
              marginBottom: 8,
              padding: 16,
            }}
          >
            Аналитика от AI
          </Text>
          <Text style={{ fontSize: 16, color: "#555", lineHeight: 20 }}>
            {analytics}
          </Text>
        </View>
      </View>
    </View>
  );
}
