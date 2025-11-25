import { Header } from "@react-navigation/elements";
import {
  View,
  Text,
  Pressable,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { primaryColor, theme, secondaryColor } from "@/constants/theme";
import Input from "@/components/Input";
import { useState } from "react";
import Button from "@/components/ui/Button/Button";
import LoginForm from "@/components/LoginForm";

export default function CalendarScreen() {

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  const handleSwitch = (tab: "login" | "register") => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setActiveTab(tab);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <Header title="Calendar" />
        <View
          style={{
            alignItems: "center",
            marginBottom: 32,
            marginTop: 16,
            gap: 16,
          }}
        >
          <Text style={theme.textLogoSignIn}>OxySENSE</Text>
          <Text
            style={{
              color: "#CCCCCC",
              fontSize: 18,
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Ми завжди поруч
          </Text>
        </View>
        <View
          style={[
            {
              flexDirection: "row",
              gap: 2,
              alignSelf: "center",
              marginBottom: 16,
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 100,
            },
            { backgroundColor: primaryColor },
          ]}
        >
          <Pressable onPress={() => handleSwitch("login")}>
            <Text
              style={
                activeTab === "login"
                  ? {
                      color: primaryColor,
                      padding: 18,
                      backgroundColor: secondaryColor,
                      fontWeight: "600",
                      borderRadius: 100,
                      width: 130,
                      justifyContent: "center",
                      textAlign: "center",
                    }
                  : {
                      color: "#FFFFFF",
                      padding: 18,
                      fontWeight: "600",
                      borderRadius: 100,
                      width: 130,
                      justifyContent: "center",
                      textAlign: "center",
                    }
              }
            >
              Вхід
            </Text>
          </Pressable>
          <Pressable onPress={() => handleSwitch("register")}>
            <Text
              style={
                activeTab === "register"
                  ? {
                      color: primaryColor,
                      padding: 18,
                      backgroundColor: secondaryColor,
                      fontWeight: "600",
                      borderRadius: 100,
                      width: 130,
                      justifyContent: "center",
                      textAlign: "center",
                    }
                  : {
                      color: "#FFFFFF",
                      padding: 18,
                      fontWeight: "600",
                      borderRadius: 100,
                      width: 130,
                      justifyContent: "center",
                      textAlign: "center",
                    }
              }
            >
              Реєстрація
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            width: 333,
            height: 1,
            backgroundColor: "#CCCCCC",
            alignSelf: "center",
          }}
        ></View>
        {activeTab === "login" ? (
          <LoginForm inputs={inputs} setInputs={setInputs} />
        ) : (
          null
        )}
        <View
          style={{
            width: 333,
            height: 1,
            backgroundColor: "#CCCCCC",
            alignSelf: "center",
          }}
        ></View>
        <Pressable
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 16,
            borderWidth: 1,
            borderColor: "#8CBFFF",
            borderRadius: 12,
            padding: 12,
            width: 333,
            alignSelf: "center",
          }}
        >
          <Image source={require("../../assets/google.png")} />
          <Text
            style={{
              color: "#C2C2C2",
              fontSize: 18,
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Продовжити з Google
          </Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
}
