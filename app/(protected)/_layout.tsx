import { Redirect, Slot } from "expo-router";
import { useSession } from "../../providers/session";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function ProtectedLayout() {
  const session = useSession();

  if (!session?.session) {
    return <Redirect href="/SignIn" />;
  }
  return <Slot />;
}
