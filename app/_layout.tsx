import { Stack } from "expo-router";

export default function RootLayout() {
  return (
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
        options={{ headerTitle: "Esqueceu a senha", headerTitleAlign: "center" }}
      />
    </Stack>
  );
}
