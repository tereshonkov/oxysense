import { View } from "react-native";
import { Keyboard } from "react-native";
import Input from "./Input";
import Button from "./ui/Button/Button";

export default function LoginForm({
  setRegisterInputs,
  registerInputs,
}: {
  setRegisterInputs: React.Dispatch<
    React.SetStateAction<{ name: string; email: string; password: string; confirmPassword: string }>
  >;
  registerInputs: { name: string; email: string; password: string; confirmPassword: string };
}) {
  return (
    <View
      style={{ marginVertical: 16, gap: 16 }}
      onTouchStart={() => Keyboard.dismiss()}
      accessible={false}
    >
      <Input
        placeholder="Ім'я"
        value={registerInputs.name}
        onChangeText={(text) => setRegisterInputs({ ...registerInputs, name: text })}
      />
      <Input
        placeholder="Пошта"
        value={registerInputs.email}
        onChangeText={(text) => setRegisterInputs({ ...registerInputs, email: text })}
      />
      <Input
        placeholder="Пароль"
        value={registerInputs.password}
        onChangeText={(text) => setRegisterInputs({ ...registerInputs, password: text })}
      />
      <Input
        placeholder="Підтвердження пароля"
        value={registerInputs.confirmPassword}
        onChangeText={(text) => setRegisterInputs({ ...registerInputs, confirmPassword: text })}
      />
      <View style={{ alignItems: "center", marginTop: 16 }}>
        <Button>Увійти</Button>
      </View>
    </View>
  );
}
