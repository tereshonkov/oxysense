import { Text, Animated } from "react-native";
import { useState, useRef, useEffect } from "react";

export default function AnimatedNumber ({value}: {value: number | string}) {
    const animatedValue = useRef(new Animated.Value(0)).current;
    const [displayValue, setDisplayValue] = useState("0");

    useEffect(() => {
        // Шаг 1: Получаем число для анимации
        const stringValue = String(value); // Преобразуем в строку
        const firstNumber = parseInt(stringValue); // Берем первое число ("120/80" -> 120, "58" -> 58)

        // Шаг 2: Запускаем анимацию от 0 до firstNumber
        Animated.timing(animatedValue, {
            toValue: firstNumber,
            duration: 1000,
            useNativeDriver: false,
        }).start();

        // Шаг 3: Следим за анимацией и обновляем текст
        const listenerId = animatedValue.addListener(({ value: current }) => {
            const rounded = Math.round(current); // Округляем (0.5 -> 1, 1.7 -> 2)
            
            // Если было "120/80", добавляем "/80" к числу
            if (stringValue.includes('/')) {
                const secondPart = stringValue.split('/')[1];
                setDisplayValue(`${rounded}/${secondPart}`);
            } else {
                setDisplayValue(rounded.toString());
            }
        });

        // Шаг 4: Очистка
        return () => {
            animatedValue.removeListener(listenerId);
        };
    }, [value, animatedValue]);

    return <Text>{displayValue}</Text>;
}