import { View, Text, Dimensions, ScrollView } from "react-native";
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
  const safeLabels = labels ?? [];
  const BAR_WIDTH = 60;
  const MIN_WIDTH = screenWidth * 0.9;
  const chartWidth = Math.max(safeLabels.length * BAR_WIDTH || 0, MIN_WIDTH);
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
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
              width={chartWidth - 32}
              height={220}
              chartConfig={{
                backgroundGradientFrom: "#FFFFFF",
                backgroundGradientTo: "#FFFFFF",
                color: (opacity = 1) => `rgba(255,255,255,${opacity})`,
                labelColor: (opacity = 1) => `rgba(30,60,130,${opacity})`,
                propsForBackgroundLines: { strokeWidth: 0 },
              }}
              renderDotContent={({ x, y, index, indexData }) => {
                return (
                  <Text
                    key={`dot-${index}-${indexData}-${x}`}
                    style={{
                      position: "absolute",
                      top: y - 18,
                      left: x - 6,
                      color: "#333",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    {indexData}
                  </Text>
                );
              }}
              bezier
              withVerticalLabels={true} // убирает цифры слева
              withHorizontalLabels={false} // убирает цифры снизу
              withInnerLines={false} // убирает сетку
              withOuterLines={false} // убирает рамку
              fromZero={false}
            />
          </ScrollView>
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
