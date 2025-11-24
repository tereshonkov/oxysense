import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../constants/theme';

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
        <View style={theme.headerProBtn}>
            <Text>Pro Version</Text>
        </View>
    </SafeAreaView>
  )
}
