import { Text, View, Pressable, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "@/constants/theme";
import Slider from "@/components/Slider/SliderHero";
import Menu from "@/components/StackMenu/Menu";
import Bottom from "@/components/BottomPressure/Bottom";
import { MaskedTextInput } from "react-native-mask-text";
import { useState } from "react";
import { ScrollView } from "react-native";
import Button from "@/components/ui/Button/Button";

export default function HomeScreen() {
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
          <Pressable style={[theme.pressableCard, { gap: 32, marginBottom: 40 }]}>
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
        </Bottom>
      </ScrollView>
    </LinearGradient>
  );
}
