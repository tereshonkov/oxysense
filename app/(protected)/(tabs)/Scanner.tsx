import { View, ScrollView, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { primaryColor, secondaryColor } from "@/constants/theme";
import ChatTopMenu from "@/components/ChatTopMenu";

export default function Scanner() {
  return (
    <LinearGradient
      colors={["#0D1B2A", "#1B263B", "#415A77"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          marginTop: 20,
          paddingHorizontal: 16,
          flexGrow: 1,
        }}
        style={{ flex: 1 }}
      >
        <View
          style={{
            width: "100%",
            maxWidth: 600,
            flex: 1,
            justifyContent: "space-between",
            paddingBottom: 100,
          }}
        >
          <ChatTopMenu />
          <View style={{ marginTop: 32, gap: 16 }}>
            <View
              style={{
                backgroundColor: secondaryColor,
                padding: 10,
                borderRadius: 16,
                maxWidth: "90%",
                position: "relative",
              }}
            >
              {/* Треугольник-хвостик */}
              <View
                style={{
                  position: "absolute",
                  left: -7,
                  top: 12,
                  width: 0,
                  height: 0,
                  borderTopWidth: 8,
                  borderTopColor: "transparent",
                  borderBottomWidth: 8,
                  borderBottomColor: "transparent",
                  borderRightWidth: 8,
                  borderRightColor: secondaryColor,
                }}
              />
              <Text
                style={{
                  color: primaryColor,
                  fontWeight: "500",
                  lineHeight: 20,
                }}
              >
                Привіт!{"\n"}Я можу розшифрувати ваші аналізи або діагнози
                зрозумілою мовою. Просто натисніть кнопку &ldquo;Додати&rdquo;
                та завантажте свої результати, або натисніть
                &ldquo;Камера&rdquo;, щоб зробити фото прямо зараз.
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: "#ccc",
              fontWeight: "500",
              lineHeight: 20,
              textAlign: "center",
              marginTop: "auto",
              marginBottom: 20,
              fontSize: 12,
            }}
          >
            ⚠️ Увага! Відповідь генерується штучним інтелектом і має виключно
            інформаційний характер. Вона не замінює професійної консультації
            лікаря.
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
