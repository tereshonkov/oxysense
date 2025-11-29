import { Text, Animated } from "react-native";
import { useState, useRef, useEffect } from "react";
import { theme } from "@/constants/theme";

export default function AnimatedNumber({ value }: { value: number | string }) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    // Шаг 1: Получаем число для анимации
    const stringValue = String(value); // Преобразуем в строку
    const targetValue = parseInt(stringValue);

    if(isNaN(targetValue)) return;

    // Шаг 2: Запускаем анимацию от 0 до firstNumber
    Animated.timing(animatedValue, {
      toValue: targetValue,
      duration: 500,
      useNativeDriver: false,
    }).start();

    // Шаг 3: Следим за анимацией и обновляем текст
    const listenerId = animatedValue.addListener(({ value: current }) => {
      const rounded = Math.round(current); // Округляем (0.5 -> 1, 1.7 -> 2)
      setDisplayValue(rounded.toString());
    });

    // Шаг 4: Очистка
    return () => {
      animatedValue.removeListener(listenerId);
    };
  }, [value, animatedValue]);

  return (
    <Text style={[theme.heroPressure, { fontFamily: "Rakkas" }]}>
      {displayValue}
    </Text>
  );
}
