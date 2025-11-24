import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Главная',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={28} />
          ),
          headerShown: false, 
        }}
      />
      <Tabs.Screen
        name="Calendar"
        options={{
          title: 'Календарь',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={28} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}