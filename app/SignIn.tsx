import { View, Text, Pressable, Image } from "react-native";
import { useState } from "react";

export default function SignIn() {
  const [activeTab, setActiveTab] = useState<"signIn" | "register">("signIn");
  return (
    <View>
      <View>
        <Text>OxySENSE</Text>
        <Text>Ми завжди поруч</Text>
      </View>
      <View>
        <Pressable>
            <Text>Вхід</Text>
        </Pressable>
        <Pressable>
            <Text>Реєстрація</Text>
        </Pressable>
      </View>
      <View
        style={{ width: 333, height: 1, backgroundColor: "#CCCCCC" }}
      ></View>
      <View>{/*FORM Container*/}</View>
      <View
        style={{ width: 333, height: 1, backgroundColor: "#CCCCCC" }}
      ></View>
      <Pressable style={{ flexDirection: "row", gap: 10, alignItems: "center", justifyContent: "center", marginTop: 16, borderWidth: 1, borderColor: "8CBFFF", borderRadius: 12, padding: 12 }}>
        <Image source={require('../assets/google.png')} />
        <Text>Продовжити з Google</Text>
      </Pressable>
    </View>
  );
}
