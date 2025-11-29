import { FlatList, Dimensions, View, Text, Animated } from "react-native";
import LayerEllipce from "@/components/ui/LayerEllipce";
import { theme } from "@/constants/theme";

const metrics = [
  { id: "1", pressure: "120/80", date: "12.12.2025" },
  { id: "2", pressure: "80", date: "12.12.2025" },
];
const { width } = Dimensions.get("window");

export default function SliderHero() {
  return (
    <FlatList
      data={metrics}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      decelerationRate="fast"
      renderItem={({ item }) => (
        <View
          style={{
            width,
            alignItems: "center",
            position: "relative",
            marginTop: 40,
          }}
        >
          <Text style={[theme.heroPressure, { fontFamily: "Rakkas" }]}>
            {item.pressure}
          </Text>
          <Text style={[theme.heroDate, { fontFamily: "Rakkas" }]}>
            {item.date}
          </Text>
          <LayerEllipce />
        </View>
      )}
    />
  );
}
