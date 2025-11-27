import { View, Animated, TextInput, StyleSheet } from "react-native";
import { useRef, useEffect } from "react";
import Svg, { G, Circle } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

export default function DonatCHart({
  percentage = 75,
  radius = 50,
  strokeWidth = 10,
  duration = 500,
  color = "#4caf50",
  delay = 0,
  textColor = "#4caf50",
  max = 100,
}) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const circleRef = useRef(null); // Ссылка на анимированный круг
  const inputRef = useRef(null);
  const halfCircle = radius + strokeWidth; //Радиус + толщина обводки
  const circleCircumference = 2 * Math.PI * radius; //Мат формула окружности (длина окружности)
  const animationMethod = (toValue) => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animationMethod(percentage);

    animatedValue.addListener((v) => {
      if (circleRef?.current) {
        const maxPerc = (100 * v.value) / max; //Макс процент
        const strokeDashoffset =
          circleCircumference - (circleCircumference * maxPerc) / 100; //Вычисляем смещение (чем больше процент, тем больше заполнение)
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
        if (inputRef?.current) {
            inputRef.current.setNativeProps({
              text: `${Math.round(v.value)}%`,
            });
        }
    });

    return () => {
      animatedValue.removeAllListeners();
    }
  }, [max, percentage]);
  return (
    <View>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeOpacity={0.2}
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <AnimatedInput
        ref={inputRef}
        editable={false}
        defaultValue={`${percentage}%`}
        style={[
          StyleSheet.absoluteFillObject,
          { fontSize: radius / 2.5, color: textColor ?? color, fontWeight: "bold" },
          { textAlign: "center", textAlignVertical: "center" },
        ]}
      />
    </View>
  );
}
