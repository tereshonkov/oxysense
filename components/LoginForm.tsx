import { View } from "react-native";
import { Keyboard } from "react-native";
import Input from "./Input";
import Button from "./ui/Button/Button";

export default function LoginForm({
  setInputs,
  inputs,
}: {
  setInputs: React.Dispatch<
    React.SetStateAction<{ email: string; password: string }>
  >;
  inputs: { email: string; password: string };
}) {
  return (
    <View
      style={{ marginVertical: 16, gap: 16 }}
      onTouchStart={() => Keyboard.dismiss()}
      accessible={false}
    >
      <Input
        placeholder="Пошта"
        value={inputs.email}
        onChangeText={(text) => setInputs({ ...inputs, email: text })}
      />
      <Input
        placeholder="Пароль"
        value={inputs.password}
        onChangeText={(text) => setInputs({ ...inputs, password: text })}
      />
      <View style={{ alignItems: "center", marginTop: 16 }}>
        <Button>Увійти</Button>
      </View>
    </View>
  );
}
