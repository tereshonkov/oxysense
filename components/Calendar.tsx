import { primaryColor } from "@/constants/theme";
import { Calendar } from "react-native-calendars";

type MarkedDatesType = {
  [date: string]: {
    startingDay?: boolean;
    endingDay?: boolean;
    color: string;
    textColor: string;
  };
};

export default function CalendarComponent({
  markedDates,
  handleDayPress,
}: {
  markedDates?: MarkedDatesType;
  handleDayPress?: (day: any) => void;
}) {
  return (
    <Calendar
      markingType="period"
      markedDates={markedDates}
      onDayPress={handleDayPress}
      style={{
        borderRadius: 12,
        backgroundColor: "transparent",
        width: "100%",
        alignSelf: "center",
      }}
      theme={{
        dayTextColor: "#000000",
        todayTextColor: primaryColor,
        monthTextColor: primaryColor,
        arrowColor: primaryColor,
        calendarBackground: "transparent"
      }}
    />
  );
}
