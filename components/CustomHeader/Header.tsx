import { View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../constants/theme';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function CustomHeader() {
  return (
    <SafeAreaView style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
      backgroundColor: '#0D1B2A',
      paddingHorizontal: 16,
      paddingVertical: 10,
    }}>
        <Text style={theme.headerLogo}>OxySENSE</Text>
      <Link href="/(protected)/(tabs)/Home/Settings" asChild>
        <Pressable style={theme.headerProBtn}>
          <Ionicons name="settings-outline" size={24} color="#355196" />
          <Text style={{fontWeight: "600", color: "#355196"}}>Налаштування</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  )
}
