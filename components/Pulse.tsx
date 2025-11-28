import { View, Text, Dimensions } from "react-native";
import { secondaryColor, primaryColor, accentColor } from "@/constants/theme";
import { BarChart } from "react-native-chart-kit";
import DonutChart from "./DonatChart";
import Ionicons from "@expo/vector-icons/build/Ionicons";
const screenWidth = Dimensions.get("window").width;

interface PulseStatsProps {
  labels?: string[];
  datasets?: { data: number[] }[];
  percentage?: number;
  analytics?: string;
}

export default function PulseStats({
  labels,
  datasets,
  percentage,
  analytics,
}: PulseStatsProps) {
  return (
    <View style={{ alignItems: "center", width: "100%", marginTop: 32 }}>
      <Text style={{ color: secondaryColor, fontSize: 24, fontWeight: "bold" }}>
        Пульс
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
          }}
        >
          <BarChart
            data={{
              labels: labels || [],
              datasets: [
                {
                  data: datasets ? datasets[0].data : [75, 80, 62],
                  color: () => "#59CECF", // цвет колонок
                },
              ],
            }}
            width={screenWidth * 0.9 - 32} // ширина графика с учетом отступов
            height={220}
            yAxisLabel=""
            yAxisSuffix=""
            fromZero={true} // чтобы колонки начинались с 0
            showValuesOnTopOfBars={true} // если хочешь значения сверху
            chartConfig={{
              backgroundGradientFrom: "#FFFFFF",
              backgroundGradientTo: "#FFFFFF",
              fillShadowGradient: "#59CECF", // основной цвет колонок
              fillShadowGradientOpacity: 1, // без прозрачности
              decimalPlaces: 0,
              color: () => "#59CECF", // цвет для всех элементов графика
              labelColor: () => "#333", // цвет подписей
              propsForBackgroundLines: {
                stroke: 'transparent', // убираем линии сетки
                strokeWidth: 0
              }
            }}
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
          <View
            style={{
              flexDirection: "row",
              gap: 16,
              alignItems: "center",
              maxWidth: "100%",
            }}
          >
            <DonutChart
              percentage={percentage || 72}
              max={150}
              color={accentColor}
              textColor={accentColor}
            />
            <Text
              style={{
                color: primaryColor,
                fontSize: 16,
                flexShrink: 1,
                flexWrap: "wrap",
              }}
            >
              Ваш середній пульс за обраний період
            </Text>
          </View>
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

          <Ionicons
            style={{ position: "absolute", top: 16, right: 16 }}
            name="bulb"
            size={24}
            color="#FFD700"
          />
        </View>
      </View>
    </View>
  );
}
