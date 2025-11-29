import { FlatList, Dimensions, View, Text, Animated } from "react-native";
import LayerEllipce from "@/components/ui/LayerEllipce";
import { theme } from "@/constants/theme";
import { useState, useRef, useEffect } from "react";

const metrics = [
  { id: "1", pressure: "120/80", date: "12.12.2025" },
  { id: "2", pressure: "80", date: "12.12.2025" },
];
const { width } = Dimensions.get("window");

export default function SliderHero() {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [displayValue, setDisplayValue] = useState(metrics[0].pressure);

  useEffect(() => {
    const targetValue = displayValue;

    Animated.timing(animatedValue, {
      toValue: targetValue,
      duration: 500,
      useNativeDriver: false,
    }).start();

    const listenerId = animatedValue.addListener(({ value }) => {
      setDisplayValue(value.toFixed(0));
    });

    return () => {
      animatedValue.removeListener(listenerId);
    };
  }, []);
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
            {displayValue}
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
