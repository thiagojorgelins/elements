import { Stack } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

export default function RootLayout() {
  return (
    <GluestackUIProvider config={config}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerTitle: "Login", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="register"
          options={{ headerTitle: "Cadastro", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="reset"
          options={{
            headerTitle: "Esqueceu a senha",
            headerTitleAlign: "center",
          }}
        />
      </Stack>
    </GluestackUIProvider>
  );
}
