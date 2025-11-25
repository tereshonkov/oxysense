import { View, Text, Pressable, Image } from "react-native";
import { theme } from "@/constants/theme";
import { Link } from "expo-router";

export default function Menu() {
  return (
    <View style={{ flexDirection: "row", gap: 20 }}>
      <Link href="/(protected)/(tabs)/Home/SavePdf" asChild>
        <Pressable style={{ alignItems: "center", gap: 8 }}>
          <Image
            source={require("../../assets/pdf.png")}
            style={{ width: 60, height: 60 }}
          />
          <Text style={theme.textStackTitle}> Зберегти PDF</Text>
        </Pressable>
      </Link>
      <Link href="/(protected)/(tabs)/Home/ProVersion" asChild>
        <Pressable style={{ alignItems: "center", gap: 8 }}>
          <Image
            source={require("../../assets/pro.png")}
            style={{ width: 60, height: 60 }}
          />
          <Text style={theme.textStackTitle}> активація pro</Text>
        </Pressable>
      </Link>
      <Link href="/(protected)/(tabs)/Home/Notification" asChild>
        <Pressable style={{ alignItems: "center", gap: 8 }}>
          <Image
            source={require("../../assets/notification.png")}
            style={{ width: 60, height: 60 }}
          />
          <Text style={theme.textStackTitle}>нагадування</Text>
        </Pressable>
      </Link>
    </View>
  );
}
