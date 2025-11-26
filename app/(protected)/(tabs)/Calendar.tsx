import CalendarComponent from "@/components/Calendar";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text } from "react-native";
import useDayPress from "@/hooks/useDayPress";
import Button from "@/components/ui/Button/Button";

export default function Calendar() {
  const { selectedDates, markedDates, handleDayPress } = useDayPress();
  const selectedDatesGrouped = () => {
    const dates = Object.values(selectedDates);
    if (dates.length === 0) return "Немає вибраних дат";
    const firstDate = dates[0];
    const lastDate = dates[dates.length - 1];
    if (dates.length === 1) return firstDate;
    return `(${firstDate} - ${lastDate})`;
  }
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
        <View
          style={{
            width: "90%",
            backgroundColor: "#FFFFFF",
            borderRadius: 12,
            padding: 16,
            shadowColor: "#ffffffff",
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
          }}
        >
          <CalendarComponent
            markedDates={markedDates}
            handleDayPress={handleDayPress}
          />
        </View>
        <View style={{ marginTop: 24, alignItems: "center", backgroundColor: "#FFFFFF", padding: 16, borderRadius: 12, shadowColor: "#ffffffff", shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.3, shadowRadius: 5, }}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 8 }}>Вибрані дати:</Text>
          <Text style={{ fontSize: 14, textAlign: "center" }}>{selectedDatesGrouped()}</Text>
        </View>
        <Button style={{ marginTop: 24 }}>Завантажити PDF</Button>
      </View>
    </LinearGradient>
  );
}
