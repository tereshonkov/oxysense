import { Text, View, Pressable, TextInput, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "@/constants/theme";
import Slider from "@/components/Slider/SliderHero";
import Menu from "@/components/StackMenu/Menu";
import Bottom from "@/components/BottomPressure/Bottom";
import { MaskedTextInput } from "react-native-mask-text";
import { useState, useRef, useCallback } from "react";
import Button from "@/components/ui/Button/Button";
import { useFocusEffect } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const scrollRef = useRef<ScrollView>(null);
  useFocusEffect(
    useCallback(() => {
      scrollRef.current?.scrollTo({ y: 0, animated: true });
    }, [])
  );
  const [pressure, setPressure] = useState("");
  return (
    <LinearGradient
      colors={["#0D1B2A", "#1B263B", "#415A77"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ alignItems: "center", marginTop: 20 }}
        style={{ flex: 1 }}
      >
        <Text style={theme.heroTitle}>ТВОЇ ОСТАННІ ПОКАЗНИКИ </Text>
        <View style={{ height: 280, marginTop: 10 }}>
          <Slider />
        </View>
        <Menu />
        <Bottom>
          <Pressable style={[theme.pressableCard, { gap: 32 }]}>
            <View style={{alignItems: "center"}}>
              <Text style={theme.labelTextHome}>Тиск</Text>
              <MaskedTextInput
                mask="999/99"
                keyboardType="number-pad"
                placeholder="120/80"
                style={theme.inputHome}
                maxLength={6}
                value={pressure}
                onChangeText={(text) => {
                  setPressure(text);
                }}
              />
            </View>
            <View style={{alignItems: "center"}}>
              <Text style={theme.labelTextHome}>Пульс</Text>
              <TextInput
                keyboardType="number-pad"
                placeholder="80"
                style={theme.inputHome}
                maxLength={6}
                value={pressure}
                onChangeText={(text) => {
                  setPressure(text);
                }}
              />
            </View>
            <Button>Зберегти</Button>
          </Pressable>
          <View style={[theme.card, {alignItems: "center", flexDirection: "row", padding: 12, gap: 10, marginTop: 20}]}>
            <Ionicons name="bulb" size={24} color="#FFD700" />
            <Text>Підказка від ШІ</Text>
          </View>
          <Text style={{marginTop: 10, textAlign: "center", color: "#CCCCCC", fontSize: 12, marginBottom: 140}}>Це повідомлення не є дігнозом, а лише рекомендацією, для ознайомлення.</Text>
        </Bottom>
      </ScrollView>
    </LinearGradient>
  );
}
