import { View, Text, ScrollView } from "react-native";
import { theme } from "@/constants/theme";


export default function Bottom({children}: {children?: React.ReactNode}) {
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 20,
        width: "100%",
        alignItems: "center",
        flex: 1,
        paddingHorizontal: 16,
      }}
    >
      <View
        style={{
          width: 20,
          height: 2,
          backgroundColor: "#355196",
          borderRadius: 2,
          marginTop: 10,
        }}
      ></View>
      <View
        style={{
          width: 40,
          height: 2,
          backgroundColor: "#355196",
          borderRadius: 2,
          marginTop: 5,
          marginBottom: 10,
        }}
      ></View>
      <Text style={theme.saveTextTitle}>Збережи свої дані</Text>
      {children}
    </View>
  );
}
