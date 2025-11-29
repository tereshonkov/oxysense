import { View, Text, Animated } from "react-native";
import { primaryColor } from "@/constants/theme";
import { useEffect, useRef } from "react";

const MAX_WIDTH = 300;
const MAX_PROGRESS = 7;

export default function ProgressBar({ progress }: { progress: number }) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const clampedProgress = Math.max(0, Math.min(progress, MAX_PROGRESS));
  const progressWidth = (clampedProgress / MAX_PROGRESS) * MAX_WIDTH;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progressWidth,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [progress]);
  return (
    <View style={{ alignItems: "center", marginBottom: 40, gap: 4 }}>
        <View style={{flexDirection: "row", justifyContent: "space-between", width: MAX_WIDTH, marginBottom: 4}}>
            <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>Pro-період:</Text>
            <Text style={{color: "#C2C2C2"}}>залишилося днів {progress}</Text>
        </View>
      <View
        style={{
          width: MAX_WIDTH,
          height: 20,
          backgroundColor: "#e0e0e0",
          borderRadius: 100,
          overflow: "hidden",
        }}
      >
        <Animated.View
          style={{
            width: animatedValue,
            height: 20,
            backgroundColor: primaryColor,
            borderRadius: 100,
          }}
        />
      </View>
    </View>
  );
}
