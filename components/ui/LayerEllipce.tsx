import { Image } from "react-native";

export default function LayerEllipce() {
  return (
      <Image
        source={require("../../assets/blur.png")}
        style={{ position: "absolute", top: -30, alignSelf: "center", zIndex: -1 }}
      />
  );
}
