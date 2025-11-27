import { View, Text, Dimensions } from "react-native";
import { secondaryColor, primaryColor } from "@/constants/theme";
import { LineChart } from "react-native-chart-kit";
import DonutChart from "./DonatChart";
const screenWidth = Dimensions.get("window").width;

// Props = {
//   labels: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
//   datasets: [
//     {
//       data: [120, 125, 118, 130, 110, 90, 100],
//       color: () => "red",
//       strokeWidth: 2,
//     }, // систолическое
//     {
//       data: [80, 85, 78, 90, 88, 70, 75],
//       color: () => "blue",
//       strokeWidth: 2,
//     }, // диастолическое
//   ],
//   percentage: 65,
//   color: "#4caf50"
// };

export default function PressureStats() {
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
              labels: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
              datasets: [
                {
                  data: [120, 125, 118, 130, 110, 90, 100],
                  color: () => "red",
                  strokeWidth: 2,
                }, // систолическое
                {
                  data: [80, 85, 78, 90, 88, 70, 75],
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
          <DonutChart percentage={65} color="#4caf50" />
          <Text style={{ color: primaryColor, fontSize: 16, marginTop: 8 }}>
            Ваш тиск у нормі
          </Text>
        </View>
      </View>
    </View>
  );
}
