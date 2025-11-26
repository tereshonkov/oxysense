import CalendarComponent from "@/components/Calendar";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import useDayPress from "@/hooks/useDayPress";

const data = {
  "2024-06-10": { startingDay: true, color: "#50cebb", textColor: "#ffffff" },
  "2024-06-11": { color: "#70d7c7", textColor: "#ffffff" },
};

export default function Calendar() {
  const { selectedDates, markedDates, handleDayPress } = useDayPress();
  return (
    <LinearGradient
      colors={["#0D1B2A", "#1B263B", "#415A77"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 32,
        }}
      >
        <View style={{ width: "90%" }}>
          <CalendarComponent markedDates={markedDates} handleDayPress={handleDayPress} />
        </View>
      </View>
    </LinearGradient>
  );
}
