import { Text, View, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "@/constants/theme";
import Slider from "@/components/Slider/SliderHero";
import Menu from "@/components/StackMenu/Menu";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#0D1B2A", "#1B263B", "#415A77"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
        <Text style={theme.heroTitle}>ТВОЇ ОСТАННІ ПОКАЗНИКИ </Text>
        <View style={{ height: 280, marginTop: 10 }}>
          <Slider />
        </View>
        <Menu />
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            marginTop: 20,
            width: "100%",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 20,
              height: 4,
              backgroundColor: "#355196",
              borderRadius: 2,
              marginTop: 10,
            }}
          ></View>
          <View
            style={{
              width: 40,
              height: 4,
              backgroundColor: "#355196",
              borderRadius: 2,
              marginTop: 10,
              marginBottom: 10,
            }}
          ></View>
          <Text style={theme.saveTextTitle}>Збережи свої дані</Text>
        </View>
      </View>
    </LinearGradient>
  );
}
