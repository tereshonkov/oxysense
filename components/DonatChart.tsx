import { View, Animated, TextInput, StyleSheet } from "react-native";
import { useRef, useEffect, type ComponentRef } from "react";
import Svg, { G, Circle } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

type AnimatedCircleNativeMethods = {
  setNativeProps: (props: Partial<{ strokeDashoffset: number }>) => void;
};

type AnimatedInputNativeMethods = {
  setNativeProps: (props: Partial<{ text: string }>) => void;
};

type AnimatedCircleHandle = ComponentRef<typeof AnimatedCircle> & AnimatedCircleNativeMethods;
type AnimatedInputHandle = ComponentRef<typeof AnimatedInput> & AnimatedInputNativeMethods;

export default function DonatCHart({
  percentage = 75,
  radius = 70,
  strokeWidth = 10,
  duration = 500,
  color = "#4caf50",
  delay = 0,
  textColor = "#4caf50",
  max = 200,
}) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const circleRef = useRef<AnimatedCircleHandle | null>(null); // Ссылка на анимированный круг
  const inputRef = useRef<AnimatedInputHandle | null>(null);
  const halfCircle = radius + strokeWidth; //Радиус + толщина обводки
  const circleCircumference = 2 * Math.PI * radius; //Мат формула окружности (длина окружности)

  useEffect(() => {
    const animation = Animated.timing(animatedValue, {
      toValue: percentage,
      duration,
      delay,
      useNativeDriver: true,
    });

    animation.start();

    const listenerId = animatedValue.addListener(({ value }: { value: number }) => {
      if (circleRef.current) {
        const maxPerc = (100 * value) / max; //Макс процент
        const strokeDashoffset =
          circleCircumference - (circleCircumference * maxPerc) / max; //Вычисляем смещение (чем больше процент, тем больше заполнение)
        circleRef.current.setNativeProps({ strokeDashoffset });
      }

      if (inputRef.current) {
        inputRef.current.setNativeProps({
          text: `${Math.round(value)}`, //Если нужны проценты, то добавить % после значения
        });
      }
    });

    return () => {
      animation.stop();
      animatedValue.removeListener(listenerId);
    };
  }, [animatedValue, circleCircumference, delay, duration, max, percentage]);
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
        defaultValue={`${percentage}`}
        style={[
          StyleSheet.absoluteFillObject,
          { fontSize: radius / 2.5, color: textColor ?? color, fontWeight: "bold" },
          { textAlign: "center", textAlignVertical: "center" },
        ]}
      />
    </View>
  );
}
