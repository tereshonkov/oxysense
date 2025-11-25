import Button from '@/components/ui/Button/Button';
import { useSession } from '@/providers/session';
import { View } from 'react-native';

export default function Settings() {
  const { logOut } = useSession()!;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={() => logOut()}>Вихід</Button>
    </View>
  )
}
