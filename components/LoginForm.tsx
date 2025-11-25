import { View, Keyboard } from "react-native";
import Input from "./Input";
import Button from "./ui/Button/Button";
import { useSession } from "@/providers/session";
import { router } from "expo-router";

export default function LoginForm({
  setInputs,
  inputs,
}: {
  setInputs: React.Dispatch<
    React.SetStateAction<{ email: string; password: string }>
  >;
  inputs: { email: string; password: string };
}) {
  const { logIn } = useSession()!;
  return (
    <View
      style={{ marginVertical: 16, gap: 16 }}
      onTouchStart={() => Keyboard.dismiss()}
      accessible={false}
    >
      <Input
        iconName="mail"
        placeholder="Пошта"
        value={inputs.email}
        onChangeText={(text) => setInputs({ ...inputs, email: text })}
      />
      <Input
        iconName="lock-closed"
        secureTextEntry={true}
        placeholder="Пароль"
        value={inputs.password}
        onChangeText={(text) => setInputs({ ...inputs, password: text })}
      />
      <View style={{ alignItems: "center", marginTop: 16 }}>
        <Button onPress={(() => {
          logIn();
          router.replace('/(protected)/(tabs)/Home');
        })}>Увійти</Button>
      </View>
    </View>
  );
}
