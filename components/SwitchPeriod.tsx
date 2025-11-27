import { Pressable, Text, View } from "react-native";
import { primaryColor, secondaryColor } from "../constants/theme";

export default function SwitchPeriod({
  period,
  setPeriod,
}: {
  period: "day" | "week" | "month";
  setPeriod: (period: "day" | "week" | "month") => void;
}) {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          gap: 2,
          alignSelf: "center",
          marginBottom: 16,
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 100,
          width: "100%",
          justifyContent: "space-between",
        },
        { backgroundColor: primaryColor },
      ]}
    >
      <Pressable onPress={() => setPeriod("day")}>
        <Text
          style={
            period === "day"
              ? {
                  color: primaryColor,
                  paddingHorizontal: 18,
                  paddingVertical: 8,
                  backgroundColor: secondaryColor,
                  fontWeight: "600",
                  borderRadius: 100,
                  textAlign: "center",
                }
              : {
                  color: "#FFFFFF",
                  paddingHorizontal: 18,
                  paddingVertical: 8,
                  fontWeight: "600",
                  borderRadius: 100,
                  justifyContent: "center",
                  textAlign: "center",
                }
          }
        >
          День
        </Text>
      </Pressable>
      <Pressable onPress={() => setPeriod("week")}>
        <Text
          style={
            period === "week"
              ? {
                  color: primaryColor,
                  paddingHorizontal: 18,
                  paddingVertical: 8,
                  backgroundColor: secondaryColor,
                  fontWeight: "600",
                  borderRadius: 100,
                  justifyContent: "center",
                  textAlign: "center",
                }
              : {
                  color: "#FFFFFF",
                  paddingHorizontal: 18,
                  paddingVertical: 8,
                  fontWeight: "600",
                  borderRadius: 100,
                  justifyContent: "center",
                  textAlign: "center",
                }
          }
        >
          Тиждень
        </Text>
      </Pressable>
      <Pressable onPress={() => setPeriod("month")}>
        <Text
          style={
            period === "month"
              ? {
                  color: primaryColor,
                  paddingHorizontal: 18,
                  paddingVertical: 8,
                  backgroundColor: secondaryColor,
                  fontWeight: "600",
                  borderRadius: 100,
                  justifyContent: "center",
                  textAlign: "center",
                }
              : {
                  color: "#FFFFFF",
                  paddingHorizontal: 18,
                  paddingVertical: 8,
                  fontWeight: "600",
                  borderRadius: 100,
                  justifyContent: "center",
                  textAlign: "center",
                }
          }
        >
          Місяць
        </Text>
      </Pressable>
    </View>
  );
}
