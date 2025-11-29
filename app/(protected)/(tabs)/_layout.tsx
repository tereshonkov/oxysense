import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import CustomTabMenu from "@/components/CustomTabMenu";

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <CustomTabMenu {...props}/>}>
      <Tabs.Screen
        name="Home"
        options={{
          title: "Головна",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={28} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Calendar"
        options={{
          title: "Календар",
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar" color={color} size={28} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Statistics"
        options={{
          title: "Статистика",
          tabBarIcon: ({ color }) => (
            <Ionicons name="stats-chart" color={color} size={28} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Scanner"
        options={{
          title: "Сканер",
          tabBarIcon: ({ color }) => (
            <Ionicons name="scan" color={color} size={28} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
